"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BrowserService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
//import browser from "../browser/webextension-polyfill";
var browser = require("webextension-polyfill");
var BrowserService = /** @class */ (function () {
    function BrowserService() {
        this.sessionsSource = new rxjs_1.BehaviorSubject([]);
        this.sessions = this.sessionsSource.asObservable();
        this.domains = [
            ".mistsys.com",
            ".mist.com",
            ".eu.mist.com",
            ".gc1.mist.com",
            ".gc2.mist.com",
            ".ac2.mist.com"
        ];
        this.host_manage = [
            "integration.mistsys.com",
            "manage.mist.com",
            "integration.mist.com",
            "manage.eu.mist.com",
            "manage.gc1.mist.com",
            "manage.gc2.mist.com",
            "manage.ac2.mist.com"
        ];
        this.host_api = [
            "api.mist.com",
            "api.eu.mist.com",
            "api.gc1.mist.com",
            "api.gc2.mist.com",
            "api.ac2.mist.com"
        ];
        this.doc_url = "https://doc.mist-lab.fr";
        this.issue_url = "https://github.com/tmunzer/mist_browser_extension/issues/new";
        this.getUrl = browser.tabs.query({ currentWindow: true, active: true })
            .then(function (tabs) {
            var url = tabs[0].url;
            return url;
        })["catch"](function (e) { console.log(e); return ""; });
    }
    BrowserService.prototype.tabUpdate = function (url) {
        browser.tabs.update(undefined, { url: url });
    };
    BrowserService.prototype.tabOpen = function (url) {
        browser.tabs.create({ url: url });
    };
    BrowserService.prototype.tabOpenDoc = function (operation) {
        browser.tabs.create({ url: this.doc_url + "/#operation/" + operation });
    };
    BrowserService.prototype.issueOpen = function () {
        browser.tabs.create({ url: this.issue_url });
    };
    BrowserService.prototype.getVersion = function () {
        return browser.runtime.getManifest().version;
    };
    BrowserService.prototype.getDomains = function () {
        return this.domains;
    };
    BrowserService.prototype.getHostManage = function () {
        return this.host_manage;
    };
    BrowserService.prototype.getHostApi = function () {
        return this.host_api;
    };
    BrowserService.prototype.getCookies = function (cb) {
        var _this = this;
        this.sessionsSource.next([]);
        browser.cookies.getAll({})
            .then(function (cookies) {
            cookies.forEach(function (cookie) {
                _this._processCookie(cookie);
            });
            cb();
        })["catch"](function (err) { return console.log(err); });
    };
    ////////////
    // SESSIONS
    ////////////
    BrowserService.prototype._processCookie = function (cookie) {
        // check if it's part of our domains
        if (this.domains.indexOf(cookie.domain) > -1) {
            // check if the cookie is still valid
            if (cookie.expirationDate > (Date.now() / 1000)) {
                var i_1 = -1;
                // try to find this domain in the list of sessions
                var sessions = this.sessionsSource.getValue();
                sessions.forEach(function (session, index) {
                    if (session.domain == cookie.domain) {
                        i_1 = index;
                    }
                });
                // if the session already exists in the list, update it with the current cookie
                if (i_1 > -1) {
                    if (cookie.name.startsWith("csrftoken"))
                        sessions[i_1].csrftoken = cookie.value;
                    else if (cookie.name.startsWith("sessionid"))
                        sessions[i_1].has_sessionid = true;
                    // if the current cookie has a shorter lifetime than the previous one, use its expirationDate instead
                    if (sessions[i_1].expires_at > cookie.expirationDate)
                        sessions[i_1].expires_at = cookie.expirationDate;
                    // otherwise, add a new entry in the list
                }
                else {
                    var tmp = this.sessionsSource.getValue();
                    if (cookie.name.startsWith("csrftoken"))
                        tmp.push({ domain: cookie.domain, email: null, csrftoken: cookie.value, has_sessionid: false, expires_at: cookie.expirationDate, orgs: [] });
                    else if (cookie.name.startsWith("sessionid"))
                        tmp.push({ domain: cookie.domain, email: null, csrftoken: null, has_sessionid: true, expires_at: cookie.expirationDate, orgs: [] });
                    this.sessionsSource.next(tmp);
                }
            }
        }
    };
    BrowserService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], BrowserService);
    return BrowserService;
}());
exports.BrowserService = BrowserService;
