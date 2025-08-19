import { Component, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrowserService, SessionElement } from '../../../services/browser.service';
import { PrivilegeService, OrgElement, MspElement } from "../../../services/privileges.service"

export interface TokenElement {
  id: string | undefined;
  last_used: number | undefined;
  created_time: number;
  key: string;
  name: string;
}

@Component({
    selector: 'app-account-create-org',
    templateUrl: 'create_org.component.html',
    styleUrls: [
        '../../../scss/button.component.scss',
        '../../../scss/popup.component.scss',
        '../../../scss/select.component.scss',
        '../../../scss/textarea.component.scss',
        'create_org.component.scss',
        '../create/create.component.scss',
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class AccountCreateOrgComponent implements OnInit {

  //@Input() domain: string;
  @Input() sessionEvent: Observable<SessionElement>;
  @Input() eventCreateToken: Observable<boolean>;
  @Output() closeCreateToken = new EventEmitter<string>();
  session: SessionElement;
  focused: string = "";
  constructor(
    private _cd: ChangeDetectorRef,
    private _http: HttpClient,
    private _privilege: PrivilegeService,
    private _browser: BrowserService,
  ) { }

  token: TokenElement;
  msp_id: string | undefined = undefined;
  org_id: string;
  displayed_msps: MspElement[] = [];
  displayed_orgs: OrgElement[] = [];
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
    this.eventCreateToken.subscribe(status => this.do_create = status)
    this.sessionEvent.subscribe(session => {
      this.session = session;
      this.token_name = "";
      this.org_id = "none";
      this.msp_id = "none";
      this.role = "admin";
      this.scope = "org";
      this.token = {
        id: undefined,
        last_used: undefined,
        created_time: 0,
        key: "",
        name: ""
      };
      this._privilege.setPrivileges(session.privileges);
      this.displayed_msps = this._privilege.getMspsPrivileges("admin");
      this.mspSelected();
    })
  }

  mspSelected(): void {
    this._privilege.getOrgsPrivileges(this.session, this.msp_id, "admin", (orgs) => { this.displayed_orgs = orgs });
  }
  ////////////
  // TOKEN
  ////////////
  createToken(): void {
    let body = {
      name: this.token_name,
      privileges: [{
        role: this.role,
        scope: this.scope,
        site_id: undefined,
        sitegroup_id: undefined,
      }]
    }
    if (this.scope == "site" && this.site_id) {
      body.privileges[0]["site_id"] = this.site_id;
    } else if (this.scope == "sitegroup" && this.sitegroup_id) {
      body.privileges[0]["sitegroup_id"] = this.sitegroup_id;
    }
    if (this.do_create && this.org_id != "none") {
      let url = "https://" + this.session.api_host + "/api/v1/orgs/" + this.org_id + "/apitokens"
      this._http
        .post<TokenElement>(url, body, { headers: { "X-CSRFTOKEN": this.session.csrftoken } })
        .subscribe({
          next: (data) => {
            this.token = data;
            this.session.requests += 1;
            this._cd.detectChanges();
          },
          error: (e) => {
            this.createTokenBackup(url, body);
          }
        })
    }
  }

  private createTokenBackup(url: string, body): void {
    this._browser.setStorage("post", JSON.stringify({ url: url, payload: body, ts: Date.now() }));
    setTimeout(() => {
      this._browser.tabOpen(url);
    }, 10);
  }

  close(): void {
    this.closeCreateToken.emit()
  }

  //
  copyToken(inputElement: HTMLTextAreaElement): void {
    this.focused = inputElement.id;
    this._cd.detectChanges()
    inputElement.select();
    document.execCommand('copy');
    setTimeout(() => {
      this.focused = "";
      this._cd.detectChanges()
    }, 150);
    inputElement.setSelectionRange(0, 0);
  }

}
