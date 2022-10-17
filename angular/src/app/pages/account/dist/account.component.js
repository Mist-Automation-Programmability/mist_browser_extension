"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AccountComponent = void 0;
var core_1 = require("@angular/core");
var manage_component_1 = require("./manage/manage.component");
var rxjs_1 = require("rxjs");
var AccountComponent = /** @class */ (function () {
    function AccountComponent(_cd, _http) {
        this._cd = _cd;
        this._http = _http;
        this.enventSession = new rxjs_1.Subject();
        this.enventCreateToken = new rxjs_1.Subject();
        this.enventManageTokens = new rxjs_1.Subject();
        this.mistcom = "";
        this.eumistcom = "";
        this.gc1mistcom = "";
        this.manageTokens = "";
        this.createToken = "";
        this.scope = "";
        this.domains = [
            ".mistsys.com",
            ".mist.com",
            ".eu.mist.com",
            ".gc1.mist.com",
            ".gc2.mist.com",
            ".ac2.mist.com"
        ];
        this.sessions = [];
        this.is_working = true;
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.is_working = true;
        this.sessions = [];
        chrome.cookies.getAll({}, function (cookies) {
            cookies.forEach(function (cookie) {
                _this.processCookie(cookie);
            });
            _this.getSelf();
        });
    };
    ////////////
    // SESSIONS
    ////////////
    AccountComponent.prototype.processCookie = function (cookie) {
        // check if it's part of our domains
        if (this.domains.indexOf(cookie.domain) > -1) {
            // check if the cookie is still valid
            if (cookie.expirationDate > (Date.now() / 1000)) {
                var i_1 = -1;
                // try to find this domain in the list of sessions
                this.sessions.forEach(function (session, index) {
                    if (session.domain == cookie.domain) {
                        i_1 = index;
                    }
                });
                // if the session already exists in the list, update it with the current cookie
                if (i_1 > -1) {
                    if (cookie.name.startsWith("csrftoken"))
                        this.sessions[i_1].csrftoken = cookie.value;
                    else if (cookie.name.startsWith("sessionid"))
                        this.sessions[i_1].has_sessionid = true;
                    // if the current cookie has a shorter lifetime than the previous one, use its expirationDate instead
                    if (this.sessions[i_1].expires_at > cookie.expirationDate)
                        this.sessions[i_1].expires_at = cookie.expirationDate;
                    // otherwise, add a new entry in the list
                }
                else {
                    if (cookie.name.startsWith("csrftoken"))
                        this.sessions.push({ domain: cookie.domain, email: null, csrftoken: cookie.value, has_sessionid: false, expires_at: cookie.expirationDate, orgs: [] });
                    else if (cookie.name.startsWith("sessionid"))
                        this.sessions.push({ domain: cookie.domain, email: null, csrftoken: null, has_sessionid: true, expires_at: cookie.expirationDate, orgs: [] });
                }
            }
        }
    };
    AccountComponent.prototype.getSelf = function () {
        var _this = this;
        this.sessions.forEach(function (session) {
            if (session.has_sessionid && session.csrftoken) {
                var url = "https://api" + session.domain + "/api/v1/self";
                _this._http.get(url).subscribe(function (data) {
                    session.email = data["email"];
                    session.orgs = _this.processOrgs(data["privileges"]);
                    _this._cd.detectChanges();
                });
            }
        });
        this.is_working = false;
    };
    AccountComponent.prototype.processOrgs = function (privileges) {
        var orgs = [];
        privileges.forEach(function (privilege) {
            if (["admin", "write"].indexOf(privilege["role"]) > -1) {
                if (privilege["scope"] == "org") {
                    orgs.push({ org_id: privilege["org_id"], name: privilege["name"] });
                }
            }
        });
        orgs.sort(function (a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase())
                return 1;
            else if (a.name.toLowerCase() < b.name.toLowerCase())
                return -1;
            else
                return 0;
        });
        ;
        return orgs;
    };
    AccountComponent.prototype.openTab = function (domain) {
        var dest_url = "https://manage" + domain + "/cloud.html";
        chrome.tabs.create({ url: dest_url });
    };
    ////////////
    // MANAGE TOKENS
    ////////////
    AccountComponent.prototype.openManageTokens = function (domain, scope) {
        var _this = this;
        this.manageTokens = domain;
        this.scope = scope;
        this.enventManageTokens.next(true);
        this.sessions.forEach(function (session) {
            if (session.domain == domain) {
                _this.enventSession.next(session);
            }
        });
        this._cd.detectChanges();
    };
    AccountComponent.prototype.closeManageTokens = function () {
        this.manageTokens = "";
        this.scope = "";
        this.enventManageTokens.next(false);
        this._cd.detectChanges();
    };
    ////////////
    // CREATE TOKENS
    ////////////
    AccountComponent.prototype.openCreateToken = function (domain, scope) {
        var _this = this;
        this.createToken = domain;
        this.scope = scope;
        this.enventCreateToken.next(true);
        this.sessions.forEach(function (session) {
            if (session.domain == domain) {
                _this.enventSession.next(session);
            }
        });
        this._cd.detectChanges();
    };
    AccountComponent.prototype.closeCreateToken = function () {
        this.createToken = "";
        this.scope = "";
        this.enventCreateToken.next(false);
        this._cd.detectChanges();
    };
    __decorate([
        core_1.ViewChild(manage_component_1.AccountManageComponent)
    ], AccountComponent.prototype, "accountManage");
    AccountComponent = __decorate([
        core_1.Component({
            selector: 'app-account',
            templateUrl: 'account.component.html',
            styleUrls: ['account.component.scss'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;
