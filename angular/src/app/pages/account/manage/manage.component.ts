import { Component, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { BrowserService, SessionElement } from "../../../services/browser.service"

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
  ) { }

  tokens = [];
  now: number;
  tokenToDelete: TokenElement;
  do_manage: boolean = false;
  success: boolean = false;
  error: boolean = false;
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
      this._http.get(url, { headers: { "X-CSRFTOKEN": this.session.csrftoken } }).subscribe((data: [TokenElement]) => {
        this.tokens = data;
        this.tokens.sort((a, b) => {
          return a.created_time - b.created_time;
        })
        this.session.requests += 1;
        this._cd.detectChanges();
      })
    }
  }

  private deleteToken(token: TokenElement): void {
    let url = "https://" + this.session.api_host + "/api/v1/self/apitokens/" + token.id
    this._http
      .delete(url, { headers: { "X-CSRFTOKEN": this.session.csrftoken } })
      .subscribe({
        next: data => {
          this.session.requests += 1;
          this.delete_success(token);
        },
        error: err => {
          this.deleteTokenBackup(url);
        }
      })
  }

  private deleteTokenBackup(url: string): void {
    this._browser.setStorage("delete", JSON.stringify({ url: url, ts: Date.now() }));
    setTimeout(() => {
      this._browser.tabOpen(url);
    }, 10);
  }


  private delete_success(token: TokenElement) {
    this.session.requests += 1;
    token.deleted = true;
    this.success = true;
    this._cd.detectChanges()
    setTimeout(() => {
      this.success = false;
      this._cd.detectChanges()
    }, 2000);
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
