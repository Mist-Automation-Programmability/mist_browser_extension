"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AccountManageOrgComponent = void 0;
var core_1 = require("@angular/core");
var AccountManageOrgComponent = /** @class */ (function () {
    function AccountManageOrgComponent(_cd, _http) {
        this._cd = _cd;
        this._http = _http;
        this.closeManageTokens = new core_1.EventEmitter();
        this.tokens = [];
        this.orgs = [];
        this.do_manage = false;
    }
    AccountManageOrgComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.now = new Date().getTime();
        this.enventManageTokens.subscribe(function (status) { return _this.do_manage = status; });
        this.sessionEvent.subscribe(function (session) {
            _this.tokens = [];
            _this.session = session;
            _this.orgs = session.orgs;
            _this.org_id = "none";
        });
    };
    ////////////
    // TOKENS
    ////////////
    AccountManageOrgComponent.prototype.getTokens = function () {
        var _this = this;
        if (this.do_manage && this.org_id != 'none') {
            var url = "https://api" + this.session.domain + "/api/v1/orgs/" + this.org_id + "/apitokens";
            this._http.get(url, { headers: { "X-CSRFTOKEN": this.session.csrftoken } }).subscribe(function (data) {
                _this.tokens = data;
                _this.tokens.sort(function (a, b) {
                    return a.created_time - b.created_time;
                });
                _this._cd.detectChanges();
            });
        }
        else {
            this.tokens = [];
            this._cd.detectChanges();
        }
    };
    AccountManageOrgComponent.prototype.deleteToken = function (token_id) {
        var _this = this;
        var url = "https://api" + this.session.domain + "/api/v1/orgs/" + this.org_id + "/apitokens/" + token_id;
        this._http["delete"](url, { headers: { "X-CSRFTOKEN": this.session.csrftoken } }).subscribe(function () {
            _this.getTokens();
        });
    };
    AccountManageOrgComponent.prototype.close = function () {
        this.closeManageTokens.emit();
    };
    __decorate([
        core_1.Input()
    ], AccountManageOrgComponent.prototype, "sessionEvent");
    __decorate([
        core_1.Input()
    ], AccountManageOrgComponent.prototype, "enventManageTokens");
    __decorate([
        core_1.Output()
    ], AccountManageOrgComponent.prototype, "closeManageTokens");
    AccountManageOrgComponent = __decorate([
        core_1.Component({
            selector: 'app-account-manage-org',
            templateUrl: 'manage_org.component.html',
            styleUrls: ['../manage/manage.component.scss', 'manage_org.component.scss'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], AccountManageOrgComponent);
    return AccountManageOrgComponent;
}());
exports.AccountManageOrgComponent = AccountManageOrgComponent;
