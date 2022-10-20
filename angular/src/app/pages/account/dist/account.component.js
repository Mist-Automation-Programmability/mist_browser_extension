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
    function AccountComponent(_cd, _http, _browser) {
        this._cd = _cd;
        this._http = _http;
        this._browser = _browser;
        this.enventSession = new rxjs_1.Subject();
        this.enventCreateToken = new rxjs_1.Subject();
        this.enventManageTokens = new rxjs_1.Subject();
        this.mistcom = "";
        this.eumistcom = "";
        this.gc1mistcom = "";
        this.manageTokens = "";
        this.createToken = "";
        this.scope = "";
        this.sessions = [];
        this.is_working = true;
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._browser.sessions.subscribe(function (s) { return _this.sessions = s; });
        this.is_working = true;
        this._browser.getCookies(function () { return _this.getSelf(); });
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
        this._browser.tabOpen(dest_url);
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
