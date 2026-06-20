import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cleanHeaders } from "../../services/http.utils";
import { BrowserHttpApiService } from "../../services/http.browser.api";
import { AccountManageComponent } from './manage/manage.component';
import { Subject } from 'rxjs';
import { BrowserService, SessionElement } from "../../services/browser.service"

const DEBUG = false;
function debugLog(...args: any[]): void {
  if (DEBUG) {
    console.log(...args);
  }
}

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
    private _browser: BrowserService,
    private _httpApi: BrowserHttpApiService
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
    debugLog('AccountComponent.getSelf: sessions=', this.sessions.map(s => ({
      domain: s.domain, email: s.email, csrftoken: !!s.csrftoken,
      has_sessionid: s.has_sessionid, two_factor_passed: s.two_factor_passed,
      requests: s.requests, request_limit: s.request_limit
    })));
    // Safari path: sessions are already fully populated by the API-probe in
    // BrowserService, so we just surface them and skip the /self call.
    const prepopulated = this.sessions.filter(session => session.email);
    debugLog('AccountComponent.getSelf: prepopulated count=', prepopulated.length);
    if (prepopulated.length) {
      this.has_active_sessions = true;
      prepopulated.forEach(session => {
        debugLog('AccountComponent.getSelf: prepopulated session', session.domain,
          'two_factor_passed=', session.two_factor_passed,
          'csrftoken=', !!session.csrftoken,
          'requests=', session.requests, 'request_limit=', session.request_limit);
        // Probe path already fills usage on Safari; only call /self/usage if missing.
        if (session.two_factor_passed && session.requests === -1) {
          this.getApiUsage(session);
        }
      });
    }

    // Chrome/Firefox path: cookies gave us csrftoken+sessionid, now fill in
    // email/privileges/2FA state from /self.
    const activeSessions = this.sessions.filter(session => session.has_sessionid && session.csrftoken && !session.email);
    if (!activeSessions.length) {
      this.is_working = false;
      this._cd.detectChanges();
      return;
    }

    activeSessions.forEach(session => {
        const getSelfUrl = "https://" + session.api_host + "/api/v1/self";
        this._httpApi.requestWithCredentialFallback<any>(
          () => this._http.get(getSelfUrl, { observe: 'response', withCredentials: true }) as any,
          getSelfUrl,
          {
            method: 'GET',
            headers: {}
          }
        ).subscribe(
          data => {
            const response = data.status ? data : { status: 200, body: data };
            this.handleGetSelfSuccess(session, response);
          },
          err => {
            if (err && err.status === 429) {
              this.handleGetSelfSuccess(session, { status: 429, body: err.data || {} });
              return;
            }
            console.warn("getSelf failed for", session.api_host, err);
            session.email = "request_failed";
            this.is_working = false;
            this._cd.detectChanges();
          }
        );
    })
    this.sessions.sort((a, b) => {
      if (a.cloud_host.toLowerCase() > b.cloud_host.toLowerCase()) return 1;
      else if (a.cloud_host.toLowerCase() < b.cloud_host.toLowerCase()) return -1;
      else return 0;
    })
    this._cd.detectChanges();
  }


  private handleGetSelfSuccess(session: SessionElement, data: any): void {
    debugLog('AccountComponent.handleGetSelfSuccess:', session.domain, 'status=', data.status,
      'api_request_count=', data.body?.api_request_count,
      'api_request_limit=', data.body?.api_request_limit,
      'email=', data.body?.email);
    if (data.status == 200) {
      session.email = data.body["email"];
      session.privileges = data.body["privileges"];
      // Extract API usage from /self response
      if (data.body.hasOwnProperty("api_request_count")) {
        session.requests = data.body["api_request_count"] ?? -1;
        debugLog('AccountComponent.handleGetSelfSuccess: set requests=', session.requests);
      }
      if (data.body.hasOwnProperty("api_request_limit")) {
        session.request_limit = data.body["api_request_limit"] ?? -1;
        debugLog('AccountComponent.handleGetSelfSuccess: set request_limit=', session.request_limit);
      }
      if (session.requests > -1 && session.request_limit > 0) {
        session.request_percentage = (session.requests / session.request_limit) * 100;
      }
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
        // Only call getApiUsage if we didn't get the data from /self
        if (session.requests == -1) {
          this.getApiUsage(session);
        }
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
  }

  getApiUsage(session: SessionElement) {
    let url = "https://" + session.api_host + "/api/v1/self/usage";
    debugLog('AccountComponent.getApiUsage: fetching', url, 'csrftoken=', !!session.csrftoken);
    this._httpApi.requestWithCredentialFallback<UsageElement>(
      () => this._http.get<UsageElement>(url, { headers: cleanHeaders({ "X-CSRFTOKEN": session.csrftoken }), withCredentials: true }),
      url,
      {
        method: 'GET',
        headers: cleanHeaders({ "X-CSRFTOKEN": session.csrftoken })
      }
    ).subscribe(
      usage => {
        debugLog('AccountComponent.getApiUsage: response=', usage);
        session.requests = usage.requests;
        session.request_limit = usage.request_limit;
        session.request_percentage = usage.request_limit > 0 ? (usage.requests / usage.request_limit) * 100 : 0;
        this._cd.detectChanges();
      },
      err => {
        console.warn("getApiUsage failed for", session.api_host, err);
      }
    )
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
