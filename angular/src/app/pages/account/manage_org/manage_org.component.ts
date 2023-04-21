import { Component, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface TokenElement {
  name: string | null,
  id: string,
  last_used: number | null,
  created_time: number,
  key: string
}
export interface OrgElement {
  org_id: string;
  name: string;
}
export interface SessionElement {
  domain: string;
  csrftoken: string;
  email: string;
  has_sessionid: boolean;
  orgs: OrgElement[];
}

@Component({
  selector: 'app-account-manage-org',
  templateUrl: 'manage_org.component.html',
  styleUrls: ['../manage/manage.component.scss','manage_org.component.scss', '../../../scss/button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountManageOrgComponent implements OnInit {

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
  orgs: OrgElement[] = [];
  org_id: string;
  do_manage: boolean = false;

  ngOnInit() {
    this.now = new Date().getTime();
    this.eventManageTokens.subscribe(status => this.do_manage = status)
    this.sessionEvent.subscribe(session => {
      this.tokens = [];
      this.session = session;
      this.orgs = session.orgs;
      this.org_id = "none";
    })
  }

  ////////////
  // TOKENS
  ////////////


  getTokens(): void {
    if (this.do_manage && this.org_id != 'none') {
      let url = "https://api" + this.session.domain + "/api/v1/orgs/" + this.org_id + "/apitokens"
      this._http.get(url, { headers: { "X-CSRFTOKEN": this.session.csrftoken } }).subscribe((data: [TokenElement]) => {
        this.tokens = data;
        this.tokens.sort((a, b) => {
          return a.created_time - b.created_time;
        })
        this._cd.detectChanges();
      })
    } else {
      this.tokens = [];
      this._cd.detectChanges();
    }
  }

  deleteToken(token_id: string): void {
    let url = "https://api" + this.session.domain + "/api/v1/orgs/" + this.org_id + "/apitokens/" + token_id
    this._http.delete(url, { headers: { "X-CSRFTOKEN": this.session.csrftoken } }).subscribe(() => {
      this.getTokens();
    })
  }

  close(): void {
    this.closeManageTokens.emit();
  }

}
