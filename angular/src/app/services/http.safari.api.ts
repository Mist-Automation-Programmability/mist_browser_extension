import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

declare const browser: any;
declare const globalThis: any;

const DEBUG = false;
function debugLog(...args: any[]): void {
  if (DEBUG) {
    console.log(...args);
  }
}

@Injectable({
  providedIn: 'root'
})
export class SafariHttpApiService {
  constructor() {}

  private getHostDomain(host: string): string {
    const parts = (host || '').toLowerCase().split('.');
    if (parts.length < 3) {
      return (host || '').toLowerCase();
    }
    return parts.slice(1).join('.');
  }

  private isMistManageUrl(url: string): boolean {
    if (!url || !url.startsWith('https://')) {
      return false;
    }
    try {
      const host = new URL(url).hostname.toLowerCase();
      if (host.endsWith('.ai.juniper.net')) {
        return host.startsWith('dc.') || host.startsWith('jsi.') || host.startsWith('routing.');
      }
      const isMistDomain = host.endsWith('.mist.com') || host.endsWith('.mistsys.com') || host.endsWith('.mist-federal.com');
      if (!isMistDomain) {
        return false;
      }
      return host.startsWith('manage.') || host.startsWith('integration.') || host.startsWith('manage-staging.');
    } catch (e) {
      return false;
    }
  }

  /**
   * Check if running in Safari extension context
   */
  isAvailable(): boolean {
    try {
      if (typeof browser === 'undefined' || !browser || !browser.runtime || !browser.runtime.getURL) {
        return false;
      }
      const extensionUrl = browser.runtime.getURL('');
      return extensionUrl.startsWith('safari-web-extension://');
    } catch (e) {
      return false;
    }
  }

  /**
   * Fetch an API endpoint through a manage tab content script (Safari only)
   * This ensures credentials (cookies) are included in the request
   */
  fetchThroughContentScript(url: string, options?: {
    method?: string;
    headers?: { [key: string]: string };
    body?: any;
  }): Observable<any> {
    if (!this.isAvailable()) {
      throw new Error('SafariHttpApiService only works in Safari context');
    }

    const method = options?.method || 'GET';
    const headers = options?.headers || {};

    // Query for manage tabs using proper WebExtension URL patterns
    return from(
      browser.tabs.query({}).then((tabs: any[]) => {
        if (!tabs || tabs.length === 0) {
          throw new Error('No tabs found for API request');
        }

        let requestDomain = '';
        try {
          requestDomain = this.getHostDomain(new URL(url).hostname);
        } catch (e) {
          requestDomain = '';
        }

        // Prefer a manage/integration tab in the same cloud domain as the target API URL.
        const matchingTabs = tabs.filter((tab: any) => {
          if (!this.isMistManageUrl(tab.url || '')) {
            return false;
          }
          if (!requestDomain) {
            return true;
          }
          try {
            const tabDomain = this.getHostDomain(new URL(tab.url).hostname);
            return tabDomain === requestDomain;
          } catch (e) {
            return false;
          }
        });

        const manageTab = matchingTabs[0] || tabs.find((tab: any) => this.isMistManageUrl(tab.url || ''));

        if (!manageTab) {
          throw new Error('No manage tab found for API request');
        }

        debugLog('SafariHttpApiService: routing through tab', manageTab.id, 'url:', manageTab.url);

        return browser.tabs.sendMessage(manageTab.id, {
          type: 'mist_api_request',
          method: method,
          url: url,
          headers: headers,
          body: options?.body,
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
        debugLog('SafariHttpApiService: received response status', response.status, 'for', url);
        return response.data;
      }),
      catchError((err: any) => {
        console.error('SafariHttpApiService: error', err && err.message ? err.message : String(err));
        throw err;
      })
    );
  }
}
