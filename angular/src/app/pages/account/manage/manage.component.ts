import { Component, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionElement } from "../../../services/browser.service"

export interface TokenElement {
  name: string | null,
  id: string,
  last_used: number | null,
  created_time: number,
  key: string
}

@Component({
  selector: 'app-account-manage',
  templateUrl: 'manage.component.html',
  styleUrls: [
    'manage.component.scss',
    '../../../scss/popup.component.scss',
    '../../../scss/button.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountManageComponent {

  //@Input() domain: string;
  @Input() sessionEvent: Observable<SessionElement>;
  @Input() eventManageTokens: Observable<boolean>;
  @Output() closeManageTokens = new EventEmitter<string>();
  session: SessionElement;
  constructor(
    private _cd: ChangeDetectorRef,
    private _http: HttpClient
  ) { }

  tokens = [];
  now: number;
  do_manage: boolean = false;

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

  deleteToken(token_id: string): void {
    let url = "https://" + this.session.api_host + "/api/v1/self/apitokens/" + token_id
    this._http.delete(url, { headers: { "X-CSRFTOKEN": this.session.csrftoken } }).subscribe(() => {
      this.session.requests += 1;
      this.getTokens();
    })
  }

  close(): void {
    this._cd.detectChanges();
    this.closeManageTokens.emit();
  }

}
