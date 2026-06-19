import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountManageComponent } from './manage/manage.component';
import { Subject } from 'rxjs';
import { BrowserService, SessionElement } from "../../services/browser.service"

export interface UsageElement {
  requests: number,
  request_limit: number,
  seconds: number,
}

@Component({
    selector: 'app-account',
    templateUrl: 'account.component.html',
    styleUrls: [
        '../../scss/button.component.scss',
        '../../scss/notice.component.scss',
        '../../scss/container.component.scss',
        '../../scss/popup.component.scss',
        '../../scss/progress.component.scss',
        'account.component.scss',
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
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
  can_request_cookie_permissions = false;

  ngOnInit() {
    this._browser.sessions.subscribe(s => this.sessions = s);
    this.is_working = true;
    this._browser.hasCookieHostPermissions()
      .then(granted => {
        this.can_request_cookie_permissions = !granted;
        if (!granted) {
          this.is_working = false;
          this._cd.detectChanges();
          return;
        }
        this.loadSessions();
      })
      .catch(() => this.loadSessions());
  }

  loadSessions(): void {
    this.is_working = true;
    this._cd.detectChanges();
    this._browser.getCookies(() => {
      this.getSelf();
      this._cd.detectChanges();
    })
  }

  requestCookiePermissions(): void {
    this._browser.requestCookieHostPermissions()
      .then(granted => {
        this.can_request_cookie_permissions = !granted;
        if (granted) {
          this.loadSessions();
        } else {
          this.is_working = false;
        }
        this._cd.detectChanges();
      })
      .catch(err => console.error("requestCookiePermissions failed:", err));
  }


  getSelf() {
    const activeSessions = this.sessions.filter(session => session.has_sessionid && session.csrftoken);
    if (!activeSessions.length) {
      this.is_working = false;
      this._cd.detectChanges();
      return;
    }

    activeSessions.forEach(session => {
        this._http.get("https://" + session.api_host + "/api/v1/self", { observe: 'response' }).subscribe((data) => {
          if (data.status == 200) {
            session.email = data.body["email"];
            session.privileges = data.body["privileges"];
            if (
              data.body.hasOwnProperty("two_factor_required") &&
              data.body.hasOwnProperty("two_factor_passed") &&
              data.body["two_factor_required"] &&
              !data.body["two_factor_passed"]
            ) {
              session.two_factor_passed = false;
            } else {
              session.two_factor_passed = true;
              this.has_active_sessions = true;
              this.getApiUsage(session)
            }
            this.is_working = false;
          } else if (data.status == 429) {
            session.email = "threshold_reached"
            session.api_threshold_reached = true
            this.has_active_sessions = true;
            this.is_working = false;
            session.requests = 5000;
            session.request_limit = 5000;
            session.request_percentage = 100;
          }
          this._cd.detectChanges()
        })
    })
    this.sessions.sort((a, b) => {
      if (a.cloud_host.toLowerCase() > b.cloud_host.toLowerCase()) return 1;
      else if (a.cloud_host.toLowerCase() < b.cloud_host.toLowerCase()) return -1;
      else return 0;
    })
    this._cd.detectChanges();
  }


  getApiUsage(session: SessionElement) {
    let url = "https://" + session.api_host + "/api/v1/self/usage";
    this._http.get(url, { headers: { "X-CSRFTOKEN": session.csrftoken } }).subscribe((usage: UsageElement) => {
      session.requests = usage.requests;
      session.request_limit = usage.request_limit;
      session.request_percentage = (usage.requests / usage.request_limit) * 100;
      this._cd.detectChanges();
    })
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
