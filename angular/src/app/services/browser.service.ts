import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//import browser from "../browser/webextension-polyfill";
var browser = require("webextension-polyfill");

export interface OrgElement {
    org_id: string;
    name: string;
}

export interface SessionElement {
    domain: string;
    csrftoken: string | null;
    email: string | null;
    has_sessionid: boolean;
    expires_at: number;
    orgs: OrgElement[];
}

@Injectable({
    providedIn: 'root'
})
export class BrowserService {
    private sessionsSource = new BehaviorSubject<SessionElement[]>([]);
    sessions = this.sessionsSource.asObservable();

    private domains: string[] = [
        ".mistsys.com",
        ".mist.com",
        ".eu.mist.com",
        ".gc1.mist.com",
        ".gc2.mist.com",
        ".ac2.mist.com"
    ]

    private host_manage: string[] = [
        "manage-staging.mistsys.com",
        "integration.mistsys.com",
        "manage.mist.com",
        "integration.mist.com",
        "manage.eu.mist.com",
        "manage.gc1.mist.com",
        "manage.gc2.mist.com",
        "manage.ac2.mist.com"
    ]

    private host_api: string[] = [
        "api.mist.com",
        "api.eu.mist.com",
        "api.gc1.mist.com",
        "api.gc2.mist.com",
        "api.ac2.mist.com"
    ]

    private doc_url: string = "https://doc.mist-lab.fr";

    private issue_url: string = "https://github.com/tmunzer/mist_browser_extension/issues/new";

    constructor() { }

    tabUpdate(url: string): void {
        browser.tabs.update({ url: url });
    }

    tabOpen(url: string): void {
        browser.tabs.create({ url: url });
    }
    tabOpenDoc(operation: string): void {
        browser.tabs.create({ url: this.doc_url + "/#operation/" + operation })
    }

    issueOpen(): void {
        browser.tabs.create({ url: this.issue_url })
    }

    getVersion(): string {
        return browser.runtime.getManifest().version;
    }

    getDomains(): string[] {
        return this.domains;
    }
    getHostManage(): string[] {
        return this.host_manage;
    }
    getHostApi(): string[] {
        return this.host_api;
    }
    getUrl = browser.tabs.query({ currentWindow: true, active: true })
        .then((tabs) => {
            const url: string = tabs[0].url;
            return url;
        }).catch(e => { console.log(e); return "" })

    getCookies(cb: () => void): void {
        this.sessionsSource.next([]);
        browser.cookies.getAll({})
            .then((cookies: browser.cookies.Cookie[]) => {
                    cookies.forEach((cookie) => {
                        this._processCookie(cookie);
                    })
                cb();
            })
            .catch(err => console.log(err));
    }

    ////////////
    // SESSIONS
    ////////////
    private _processCookie(cookie: browser.cookies.Cookie): void {
        // check if it's part of our domains
        if (this.domains.indexOf(cookie.domain) > -1) {
            // check if the cookie is still valid
            if (cookie.expirationDate > (Date.now() / 1000)) {
                let i: number = -1;
                // try to find this domain in the list of sessions
                const sessions: SessionElement[] = this.sessionsSource.getValue();
                sessions.forEach((session, index) => {
                    if (session.domain == cookie.domain) {
                        i = index;
                    }
                })
                // if the session already exists in the list, update it with the current cookie
                if (i > -1) {
                    if (cookie.name.startsWith("csrftoken")) sessions[i].csrftoken = cookie.value;
                    else if (cookie.name.startsWith("sessionid")) sessions[i].has_sessionid = true;
                    // if the current cookie has a shorter lifetime than the previous one, use its expirationDate instead
                    if (sessions[i].expires_at > cookie.expirationDate) sessions[i].expires_at = cookie.expirationDate
                    // otherwise, add a new entry in the list
                } else {
                    var tmp = this.sessionsSource.getValue();
                    if (cookie.name.startsWith("csrftoken")) tmp.push({ domain: cookie.domain, email: null, csrftoken: cookie.value, has_sessionid: false, expires_at: cookie.expirationDate, orgs: [] });
                    else if (cookie.name.startsWith("sessionid")) tmp.push({ domain: cookie.domain, email: null, csrftoken: null, has_sessionid: true, expires_at: cookie.expirationDate, orgs: [] });
                    this.sessionsSource.next(tmp);
                }
            }
        }
    }

}