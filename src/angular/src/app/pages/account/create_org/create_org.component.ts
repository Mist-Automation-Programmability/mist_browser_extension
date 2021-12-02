import { Component, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TokenElement {
  id: string;
  last_used: number | null;
  created_time: number;
  key: string;
  name: string;
}

export interface OrgElement {
  org_id: string,
  name: string,
}

export interface SessionElement {
  domain: string,
  csrftoken: string,
  email: string,
  orgs: OrgElement[],
}

@Component({
  selector: 'app-account-create-org',
  templateUrl: 'create_org.component.html',
  styleUrls: ['../create/create.component.scss', 'create_org.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountCreateOrgComponent implements OnInit {

  //@Input() domain: string;
  @Input() sessionEvent: Observable<SessionElement>;
  @Input() enventCreateToken: Observable<boolean>;
  @Output() closeCreateToken = new EventEmitter<string>();
  session: SessionElement;
  focused: string = "";
  constructor(
    private _cd: ChangeDetectorRef,
    private _http: HttpClient
  ) { }

  token: TokenElement;
  orgs: OrgElement[] = [];
  org_id: string;
  // Token parameters
  token_name: string;
  role: string;
  scope: string;
  name: string;
  site_id: string;
  sitegroup_id: string;
  // action
  do_create: boolean = false;

  ngOnInit() {
    this.enventCreateToken.subscribe(status => this.do_create = status)
    this.sessionEvent.subscribe(session => {
      this.session = session;
      this.token_name = "";
      this.orgs = session.orgs;
      this.org_id = "none";
      this.role="admin";
      this.scope = "org";
      this.token = {
        id: null,
        last_used: null,
        created_time: 0,
        key: "", 
        name: ""
      }
    })
  }

  ////////////
  // SESSIONS
  ////////////
  createToken(): void {
    let body = {
      name: this.token_name,
      privileges: [{
        role: this.role,
        scope: this.scope
      }]
    }
    if (this.scope == "site" && this.site_id) {
      body.privileges[0]["site_id"] = this.site_id; 
    } else if (this.scope == "sitegroupo" && this.sitegroup_id) {
      body.privileges[0]["sitegroup_id"] = this.sitegroup_id;
    }
    if (this.do_create && this.org_id != "none") {
      let url = "https://api" + this.session.domain + "/api/v1/orgs/" + this.org_id + "/apitokens"
      this._http.post(url, body, { headers: { "X-CSRFTOKEN": this.session.csrftoken } }).subscribe((token: TokenElement) => {
        this.token = token;
        this.token_name = "";
        this._cd.detectChanges();
      })
    }
  }

  close(): void {
    this.closeCreateToken.emit()
  }

  //
  copyToken(inputElement: HTMLInputElement): void {
    this.focused = inputElement.id;
    this._cd.detectChanges()
    inputElement.select();
    document.execCommand('copy');
    setTimeout(() => {
      this.focused = "";
      this._cd.detectChanges()
    }, 100);
    inputElement.setSelectionRange(0, 0);
  }

}
