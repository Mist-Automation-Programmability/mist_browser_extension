import { Injectable } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import browser from 'webextension-polyfill';
import { getCloudDomainFromHost, isMistManageUrl } from './mist.hosts';
import { debugLog } from './debug';

/**
 * Bridges Safari read fallbacks through an open Mist manage tab's content
 * script. Unsafe writes are intentionally not supported here; callers should
 * use the API-tab automation flow for POST/PUT/PATCH/DELETE.
 */
@Injectable({
  providedIn: 'root'
})
export class ContentScriptApiService {
  constructor() {}

  /**
   * True on Safari, where the popup can't make credentialed cross-site reads
   * itself and must fall back to a content-script fetch. Chrome/Firefox read
   * directly from the popup (host permissions send cookies, GET is CSRF-exempt).
   */
  isSafari(): boolean {
    try {
      if (!browser || !browser.runtime || !browser.runtime.getURL) {
        return false;
      }
      return browser.runtime.getURL('').startsWith('safari-web-extension://');
    } catch (e) {
      return false;
    }
  }

  /**
   * Run a GET from inside an open Mist manage tab's content script.
   */
  fetchThroughContentScript(url: string, options?: {
    method?: string;
    headers?: { [key: string]: string };
    observe?: 'body' | 'response';
  }): Observable<any> {
    const method = (options?.method || 'GET').toUpperCase();
    const headers = options?.headers || {};

    if (method !== 'GET') {
      return throwError(() => new Error('ContentScriptApiService only supports GET; open the API tab for writes'));
    }

    // Query for manage tabs using proper WebExtension URL patterns
    return from(
      browser.tabs.query({}).then((tabs: any[]) => {
        if (!tabs || tabs.length === 0) {
          throw new Error('No tabs found for API request');
        }

        let requestDomain = '';
        try {
          requestDomain = getCloudDomainFromHost(new URL(url).hostname);
        } catch (e) {
          requestDomain = '';
        }

        // Prefer a manage/integration tab in the same cloud domain as the target API URL.
        const matchingTabs = tabs.filter((tab: any) => {
          if (!isMistManageUrl(tab.url || '')) {
            return false;
          }
          if (!requestDomain) {
            return true;
          }
          try {
            const tabDomain = getCloudDomainFromHost(new URL(tab.url).hostname);
            return tabDomain === requestDomain;
          } catch (e) {
            return false;
          }
        });

        const manageTab = matchingTabs[0];

        if (!manageTab) {
          throw new Error('No same-cloud manage tab found for API request');
        }

        return browser.tabs.sendMessage(manageTab.id, {
          type: 'mist_api_request',
          method: method,
          url: url,
          headers: headers,
        });
      })
    ).pipe(
      map((response: any) => {
        if (!response) {
          throw new Error('No response from content script');
        }
        if (response.error) {
          throw {
            message: response.error,
            status: response.status,
            data: response.data,
          };
        }
        if (response.ok === false || (typeof response.status === 'number' && response.status >= 400)) {
          throw {
            message: `HTTP ${response.status} ${response.statusText || ''}`.trim(),
            status: response.status,
            data: response.data,
          };
        }
        debugLog('ContentScriptApiService: received response status', response.status, 'for', url);
        if (options?.observe === 'response') {
          return {
            status: response.status || 200,
            statusText: response.statusText || 'OK',
            body: response.data,
          };
        }
        return response.data;
      }),
      catchError((err: any) => {
        const message = err && err.message ? err.message : String(err);
        // Thrown when the matched manage tab has no content script (it was open
        // before the extension was installed/updated) — reloading that tab fixes it.
        if (/Receiving end does not exist|Could not establish connection/i.test(message)) {
          console.warn('ContentScriptApiService: the Mist tab has no content script loaded - reload the Mist tab after updating the extension');
        }
        console.error('ContentScriptApiService: error', message);
        throw err;
      })
    );
  }
}
