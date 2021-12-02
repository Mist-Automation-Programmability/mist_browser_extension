import { Component, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TokenElement {
  name: string | null,
  id: string,
  last_used: number | null,
  created_time: number,
  key: string
}

export interface SessionElement {
  domain: string;
  csrftoken: string;
  email: string;
  has_sessionid: boolean;
}

@Component({
  selector: 'app-account-manage',
  templateUrl: 'manage.component.html',
  styleUrls: ['manage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountManageComponent {

  //@Input() domain: string;
  @Input() sessionEvent: Observable<SessionElement>;
  @Input() enventManageTokens: Observable<boolean>;
  @Output() closeManageTokens = new EventEmitter<string>();
  session: SessionElement;
  constructor(
    private _cd: ChangeDetectorRef,
    private _http: HttpClient
  ) { }

  tokens = [];
  do_manage: boolean = false;

  ngOnInit() {
    this.enventManageTokens.subscribe(status => this.do_manage = status)
    this.tokens = [];
    this.sessionEvent.subscribe(session => {
        this.session = session;
        this.getTokens();
    })
  }

  ////////////
  // TOKENS
  ////////////


  getTokens(): void {
    if (this.do_manage) {
      let url = "https://api" + this.session.domain + "/api/v1/self/apitokens"
      this._http.get(url, { headers: { "X-CSRFTOKEN": this.session.csrftoken } }).subscribe((data: [TokenElement]) => {
        this.tokens = data;
        this.tokens.sort((a, b)=> {
          return a.created_time - b.created_time;
        })
        this._cd.detectChanges();
      })
    }
  }

  deleteToken(token_id: string): void {
    let url = "https://api" + this.session.domain + "/api/v1/self/apitokens/" + token_id
    this._http.delete(url, { headers: { "X-CSRFTOKEN": this.session.csrftoken } }).subscribe(() => {
      this.getTokens();
    })
  }

  close(): void {
    this.closeManageTokens.emit();
  }

}
