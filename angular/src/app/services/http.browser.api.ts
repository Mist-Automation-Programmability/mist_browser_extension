import { Injectable } from '@angular/core';
import { Observable, defer, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ContentScriptApiService } from './http.content.api';

export interface BrowserHttpFallbackOptions {
  method?: string;
  headers?: { [key: string]: string };
  observe?: 'body' | 'response';
}

@Injectable({
  providedIn: 'root'
})
export class BrowserHttpApiService {
  constructor(private _content: ContentScriptApiService) { }

  /**
   * Reads (GET): try the popup's direct request first. On Chrome/Firefox this
   * works (GET is CSRF-exempt and host permissions send cookies). On Safari the
   * popup can't send cross-site cookies, so fall back to a manage-tab content
   * script that fetches in the page's first-party context.
   */
  requestWithCredentialFallback<T>(
    directRequest: () => Observable<T>,
    url: string,
    fallbackOptions?: BrowserHttpFallbackOptions,
  ): Observable<T> {
    return defer(() => directRequest()).pipe(
      catchError((directErr: any) => {
        if (!this._content.isSafari()) {
          return throwError(() => directErr);
        }
        return this._content.fetchThroughContentScript(url, fallbackOptions);
      })
    );
  }
}
