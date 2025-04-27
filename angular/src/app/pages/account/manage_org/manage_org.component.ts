import { Component, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionElement } from '../../../services/browser.service';
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
    private _http: HttpClient,
    private _privilege: PrivilegeService
  ) { }

  tokens = [];
  now: number;
  displayed_msps: MspElement[] = [];
  displayed_orgs: OrgElement[] = [];
  msp_id: string | undefined = undefined;
  org_loading: boolean = false;
  org_id: string;
  do_manage: boolean = false;
  success: boolean = false;
  error: boolean = false;

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

  deleteToken(token: TokenElement): void {
    let url = "https://" + this.session.api_host + "/api/v1/orgs/" + this.org_id + "/apitokens/" + token.id
    this._http.delete(url, { headers: { "X-CSRFTOKEN": this.session.csrftoken }, observe: 'response'  })
    .subscribe({
      next: data => {
        this.session.requests += 1;
        if (data.status == 200) {
          this.delete_success(token);
        } else {
          this.delete_error(data);
        }
      }, error: err => {
        this.delete_error(err);
      }
    })
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

  private delete_error(err:any) {
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

}
