import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountManageComponent } from './manage/manage.component';
import { Subject } from 'rxjs';
import { BrowserService, SessionElement } from "../../services/browser.service"





@Component({
  selector: 'app-account',
  templateUrl: 'account.component.html',
  styleUrls: [
    'account.component.scss',
    '../../scss/notice.component.scss',
    '../../scss/popup.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountComponent implements OnInit {

  @ViewChild(AccountManageComponent) accountManage;
  eventSession: Subject<SessionElement> = new Subject<SessionElement>()
  eventCreateToken: Subject<boolean> = new Subject<boolean>()
  eventManageTokens: Subject<boolean> = new Subject<boolean>()

  manageTokens: string = "";
  createToken: string = "";
  scope: string = "";
  constructor(
    private _cd: ChangeDetectorRef,
    private _http: HttpClient,
    private _browser: BrowserService
  ) { }


  sessions: SessionElement[] = [];
  has_active_sessions: boolean = false;
  is_working = true;

  ngOnInit() {
    this._browser.sessions.subscribe(s => this.sessions = s);
    this.is_working = true;
    this._browser.getCookies(() => this.getSelf())
  }


  getSelf() {
    this.sessions.forEach(session => {
      if (session.has_sessionid && session.csrftoken) {
        this._http.get("https://" + session.api_host + "/api/v1/self").subscribe((data) => {
          session.email = data["email"];
          session.privileges = data["privileges"];
          this.has_active_sessions = true;
          this.is_working = false;
          this._cd.detectChanges()
        })
      }
    })
    this.sessions.sort((a, b) => {
      if (a.cloud_host.toLowerCase() > b.cloud_host.toLowerCase()) return 1
      else if (a.cloud_host.toLowerCase() < b.cloud_host.toLowerCase()) return -1
      else return 0
    })
    this._cd.detectChanges();
  }


  openTab(cloud_host: string) {
    let dest_url = "https://" + cloud_host + "/cloud.html";
    this._browser.tabOpen(dest_url);
  }


  ////////////
  // MANAGE TOKENS
  ////////////
  openManageTokens(domain: string, scope: string): void {
    this.manageTokens = domain;
    this.scope = scope;
    this.eventManageTokens.next(true)
    this.sessions.forEach(session => {
      if (session.domain == domain) {
        this.eventSession.next(session);
      }
    })
    this._cd.detectChanges();
  }

  closeManageTokens(): void {
    this.manageTokens = "";
    this.scope = "";
    this.eventManageTokens.next(false)
    this._cd.detectChanges();
  }

  ////////////
  // CREATE TOKENS
  ////////////
  openCreateToken(domain: string, scope: string): void {
    this.createToken = domain;
    this.scope = scope;
    this.eventCreateToken.next(true)
    this.sessions.forEach(session => {
      if (session.domain == domain) {
        this.eventSession.next(session);
      }
    })
    this._cd.detectChanges();
  }

  closeCreateToken(): void {
    this.createToken = "";
    this.scope = "";
    this.eventCreateToken.next(false)
    this._cd.detectChanges();
  }
}
