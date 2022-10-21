import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountManageComponent } from './manage/manage.component';
import { Subject } from 'rxjs';
import { BrowserService, SessionElement, OrgElement } from "../../services/browser.service"





@Component({
  selector: 'app-account',
  templateUrl: 'account.component.html',
  styleUrls: [
    'account.component.scss',
    '../../scss/notice.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountComponent implements OnInit {

  @ViewChild(AccountManageComponent) accountManage;
  enventSession: Subject<SessionElement> = new Subject<SessionElement>()
  enventCreateToken: Subject<boolean> = new Subject<boolean>()
  enventManageTokens: Subject<boolean> = new Subject<boolean>()

  mistcom: string = "";
  eumistcom: string = "";
  gc1mistcom: string = "";

  manageTokens: string = "";
  createToken: string = "";
  scope: string = "";
  constructor(
    private _cd: ChangeDetectorRef,
    private _http: HttpClient,
    private _browser: BrowserService
  ) { }


  sessions: SessionElement[] = [];
  is_working = true;

  ngOnInit() {
    this._browser.sessions.subscribe(s => this.sessions = s);
    this.is_working = true;
    this._browser.getCookies(() => this.getSelf())
  }



  getSelf() {
    this.sessions.forEach(session => {
      if (session.has_sessionid && session.csrftoken) {
        let url = "https://api" + session.domain + "/api/v1/self"
        this._http.get(url).subscribe((data) => {
          session.email = data["email"];
          session.orgs = this.processOrgs(data["privileges"]);
          this._cd.detectChanges()
        })
      }
    })
    this.is_working = false;
    this._cd.detectChanges();
  }

  processOrgs(privileges: any[]): OrgElement[] {
    let orgs: OrgElement[] = [];
    privileges.forEach(privilege => {
      if (["admin", "write"].indexOf(privilege["role"]) > -1) {
        if (privilege["scope"] == "org") {
          orgs.push({ org_id: privilege["org_id"], name: privilege["name"] });
        }
      }
    })

    orgs.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
      else if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
      else return 0
    });;

    return orgs;
  }


  openTab(domain: string) {
    let dest_url = "https://manage" + domain + "/cloud.html";
    this._browser.tabOpen(dest_url);
  }


  ////////////
  // MANAGE TOKENS
  ////////////
  openManageTokens(domain: string, scope: string): void {
    this.manageTokens = domain;
    this.scope = scope;
    this.enventManageTokens.next(true)
    this.sessions.forEach(session => {
      if (session.domain == domain) {
        this.enventSession.next(session);
      }
    })
    this._cd.detectChanges();
  }

  closeManageTokens(): void {
    this.manageTokens = "";
    this.scope = "";
    this.enventManageTokens.next(false)
    this._cd.detectChanges();
  }

  ////////////
  // CREATE TOKENS
  ////////////
  openCreateToken(domain: string, scope: string): void {
    this.createToken = domain;
    this.scope = scope;
    this.enventCreateToken.next(true)
    this.sessions.forEach(session => {
      if (session.domain == domain) {
        this.enventSession.next(session);
      }
    })
    this._cd.detectChanges();
  }

  closeCreateToken(): void {
    this.createToken = "";
    this.scope = "";
    this.enventCreateToken.next(false)
    this._cd.detectChanges();
  }
}
