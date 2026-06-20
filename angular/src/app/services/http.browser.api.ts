import { Injectable } from '@angular/core';
import { Observable, defer, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SafariHttpApiService } from './http.safari.api';

export interface BrowserHttpFallbackOptions {
  method?: string;
  headers?: { [key: string]: string };
  body?: any;
}

@Injectable({
  providedIn: 'root'
})
export class BrowserHttpApiService {
  constructor(private _safariApi: SafariHttpApiService) { }

  requestWithCredentialFallback<T>(
    directRequest: () => Observable<T>,
    url: string,
    fallbackOptions?: BrowserHttpFallbackOptions,
  ): Observable<T> {
    return defer(() => directRequest()).pipe(
      catchError((directErr: any) => {
        if (!this._safariApi.isAvailable()) {
          return throwError(() => directErr);
        }
        return this._safariApi.fetchThroughContentScript(url, fallbackOptions).pipe(
          catchError((fallbackErr: any) => throwError(() => fallbackErr))
        );
      })
    );
  }
}
