import { Component, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cleanHeaders } from "../../../services/http.utils";
import { BrowserHttpApiService } from "../../../services/http.browser.api";
import { Observable, Subject } from 'rxjs';
import { BrowserService, SessionElement } from '../../../services/browser.service';
import { PrivilegeService, OrgElement, MspElement } from "../../../services/privileges.service"


export interface TokenElement {
  name: string | null,
  id: string,
  last_used: number | null,
  created_time: number,
  key: string
  deleted: boolean
}

@Component({
    selector: 'app-account-manage-org',
    templateUrl: 'manage_org.component.html',
    styleUrls: [
        './manage_org.component.scss',
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class AccountManageOrgComponent implements OnInit {

  //@Input() domain: string;
  eventWarning: Subject<boolean> = new Subject<boolean>()
  @Input() sessionEvent: Observable<SessionElement>;
  @Input() eventManageTokens: Observable<boolean>;
  @Output() closeManageTokens = new EventEmitter<string>();
  session: SessionElement;
  constructor(
    private _cd: ChangeDetectorRef,
    private _http: HttpClient,
    private _privilege: PrivilegeService,
    private _browser: BrowserService,
    private _httpApi: BrowserHttpApiService,
  ) { }

  tokens = [];
  now: number;
  tokenToDelete: TokenElement;
  displayed_msps: MspElement[] = [];
  displayed_orgs: OrgElement[] = [];
  msp_id: string | undefined = undefined;
  org_loading: boolean = false;
  org_id: string;
  do_manage: boolean = false;
  view: string = "";

  ngOnInit() {
    this.now = new Date().getTime();
    this.eventManageTokens.subscribe(status => this.do_manage = status)
    this.sessionEvent.subscribe(session => {
      this.tokens = [];
      this.session = session;
      this.msp_id = "none";
      this.org_id = "none";
      this._privilege.setPrivileges(session.privileges);
      this.displayed_msps = this._privilege.getMspsPrivileges("admin");
      this.mspSelected();
    })
  }

  mspSelected(): void {
    this.org_loading = true;
    this._privilege.getOrgsPrivileges(this.session, this.msp_id, "admin", (orgs) => {
      this.displayed_orgs = orgs;
      this.org_loading = false;
      this._cd.detectChanges();
    });
  }

  ////////////
  // TOKENS
  ////////////


  getTokens(): void {
    if (this.do_manage && this.org_id != 'none') {
      let url = "https://" + this.session.api_host + "/api/v1/orgs/" + this.org_id + "/apitokens"
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
            console.error('AccountManageOrgComponent: getTokens returned a non-array response');
            this.tokens = [];
            this._cd.detectChanges();
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
          console.error('AccountManageOrgComponent: getTokens failed:', err);
        }
      })
    } else {
      this.tokens = [];
      this._cd.detectChanges();
    }
  }

  private deleteToken(token: TokenElement): void {
    let url = "https://" + this.session.api_host + "/api/v1/orgs/" + this.org_id + "/apitokens/" + token.id
    this._browser.openApiAction("DELETE", url);
  }

  close(): void {
    this._cd.detectChanges();
    this.closeManageTokens.emit();
  }


  confirmDeleteToken(token: TokenElement): void {
      this.view = "warning";
      this.tokenToDelete = token;
      this.eventWarning.next(true);
      this._cd.detectChanges();
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
