import { Component, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { BrowserService, SessionElement } from "../../../services/browser.service"
import { BrowserHttpApiService } from "../../../services/http.browser.api";
import { cleanHeaders } from "../../../services/http.utils";

export interface TokenElement {
  name: string | null,
  id: string,
  last_used: number | null,
  created_time: number,
  key: string
  deleted: boolean
}

@Component({
    selector: 'app-account-manage',
    templateUrl: 'manage.component.html',
    styleUrls: [
        '../../../scss/button.component.scss',
        '../../../scss/message.component.scss',
        '../../../scss/popup.component.scss',
        'manage.component.scss',
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class AccountManageComponent {

  //@Input() domain: string;
  eventWarning: Subject<boolean> = new Subject<boolean>()
  @Input() sessionEvent: Observable<SessionElement>;
  @Input() eventManageTokens: Observable<boolean>;
  @Output() closeManageTokens = new EventEmitter<string>();
  session: SessionElement;
  constructor(
    private _cd: ChangeDetectorRef,
    private _http: HttpClient,
    private _browser: BrowserService,
    private _httpApi: BrowserHttpApiService,
  ) { }

  tokens = [];
  now: number;
  tokenToDelete: TokenElement;
  do_manage: boolean = false;
  view: string = "";

  ngOnInit() {
    this.now = new Date().getTime();
    this.eventManageTokens.subscribe(status => this.do_manage = status)
    this.sessionEvent.subscribe(session => {
      this.tokens = [];
      this.session = session;
      this.getTokens();
    })
  }

  ////////////
  // TOKENS
  ////////////


  getTokens(): void {
    if (this.do_manage) {
      let url = "https://" + this.session.api_host + "/api/v1/self/apitokens"
      this._httpApi.requestWithCredentialFallback<TokenElement[]>(
        () => this._http.get<TokenElement[]>(url, { headers: cleanHeaders({ "X-CSRFTOKEN": this.session.csrftoken }), withCredentials: true }),
        url,
        {
          method: 'GET',
          headers: cleanHeaders({ "X-CSRFTOKEN": this.session.csrftoken })
        }
      ).subscribe({
        next: (data: TokenElement[]) => {
          if (!Array.isArray(data)) {
            console.error('AccountManageComponent: getTokens returned a non-array response');
            this.getTokensBackup(url);
            return;
          }
          this.tokens = data;
          this.tokens.sort((a, b) => {
            return a.created_time - b.created_time;
          })
          this.session.requests += 1;
          this._cd.detectChanges();
        },
        error: (err) => {
          console.error('AccountManageComponent: getTokens failed:', err);
          this.getTokensBackup(url);
        }
      })
    }
  }

  private deleteToken(token: TokenElement): void {
    let url = "https://" + this.session.api_host + "/api/v1/self/apitokens/" + token.id
    this._browser.openApiAction("DELETE", url);
  }

  private getTokensBackup(url: string): void {
    this._browser.tabOpen(url);
  }

  confirmDeleteToken(token: TokenElement): void {
      this.view = "warning";
      this.tokenToDelete = token;
      this.eventWarning.next(true);
      this._cd.detectChanges();
  }


  close(): void {
    this._cd.detectChanges();
    this.closeManageTokens.emit();
  }

  warningConfirm(): void {
    this.view = "";
    this.eventWarning.next(false);
    this.deleteToken(this.tokenToDelete)
    this.tokenToDelete = undefined;
    this._cd.detectChanges();
  }
  warningCancel(): void {
    this.view = "";
    this.eventWarning.next(false);
    this.tokenToDelete = undefined;
    this._cd.detectChanges();
  }

}
