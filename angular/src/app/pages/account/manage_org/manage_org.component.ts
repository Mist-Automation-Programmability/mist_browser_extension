import { Component, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
        '../../../scss/button.component.scss',
        '../../../scss/message.component.scss',
        '../../../scss/popup.component.scss',
        '../../../scss/select.component.scss',
        './manage_org.component.scss',
        '../manage/manage.component.scss',
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
  success: boolean = false;
  error: boolean = false;
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
      this._http.get(url, { headers: { "X-CSRFTOKEN": this.session.csrftoken } }).subscribe((data: [TokenElement]) => {
        this.tokens = data;
        this.tokens.sort((a, b) => {
          return a.created_time - b.created_time;
        })
        this.session.requests += 1;
        this._cd.detectChanges();
      })
    } else {
      this.tokens = [];
      this._cd.detectChanges();
    }
  }

  private deleteToken(token: TokenElement): void {
    let url = "https://" + this.session.api_host + "/api/v1/orgs/" + this.org_id + "/apitokens/" + token.id
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

  private delete_error(err: any) {
    this.session.requests += 1;
    console.log(err);
    this.error = true;
    this._cd.detectChanges()
    setTimeout(() => {
      this.error = false;
      this._cd.detectChanges()
    }, 3000);
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
