"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AccountCreateOrgComponent = void 0;
var core_1 = require("@angular/core");
var AccountCreateOrgComponent = /** @class */ (function () {
    function AccountCreateOrgComponent(_cd, _http) {
        this._cd = _cd;
        this._http = _http;
        this.closeCreateToken = new core_1.EventEmitter();
        this.focused = "";
        this.orgs = [];
        // action
        this.do_create = false;
    }
    AccountCreateOrgComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.enventCreateToken.subscribe(function (status) { return _this.do_create = status; });
        this.sessionEvent.subscribe(function (session) {
            _this.session = session;
            _this.token_name = "";
            _this.orgs = session.orgs;
            _this.org_id = "none";
            _this.role = "admin";
            _this.scope = "org";
            _this.token = {
                id: null,
                last_used: null,
                created_time: 0,
                key: "",
                name: ""
            };
        });
    };
    ////////////
    // SESSIONS
    ////////////
    AccountCreateOrgComponent.prototype.createToken = function () {
        var _this = this;
        var body = {
            name: this.token_name,
            privileges: [{
                    role: this.role,
                    scope: this.scope
                }]
        };
        if (this.scope == "site" && this.site_id) {
            body.privileges[0]["site_id"] = this.site_id;
        }
        else if (this.scope == "sitegroupo" && this.sitegroup_id) {
            body.privileges[0]["sitegroup_id"] = this.sitegroup_id;
        }
        if (this.do_create && this.org_id != "none") {
            var url = "https://api" + this.session.domain + "/api/v1/orgs/" + this.org_id + "/apitokens";
            this._http.post(url, body, { headers: { "X-CSRFTOKEN": this.session.csrftoken } }).subscribe(function (token) {
                _this.token = token;
                _this._cd.detectChanges();
            });
        }
    };
    AccountCreateOrgComponent.prototype.close = function () {
        this.closeCreateToken.emit();
    };
    //
    AccountCreateOrgComponent.prototype.copyToken = function (inputElement) {
        var _this = this;
        this.focused = inputElement.id;
        this._cd.detectChanges();
        inputElement.select();
        document.execCommand('copy');
        setTimeout(function () {
            _this.focused = "";
            _this._cd.detectChanges();
        }, 100);
        inputElement.setSelectionRange(0, 0);
    };
    __decorate([
        core_1.Input()
    ], AccountCreateOrgComponent.prototype, "sessionEvent");
    __decorate([
        core_1.Input()
    ], AccountCreateOrgComponent.prototype, "enventCreateToken");
    __decorate([
        core_1.Output()
    ], AccountCreateOrgComponent.prototype, "closeCreateToken");
    AccountCreateOrgComponent = __decorate([
        core_1.Component({
            selector: 'app-account-create-org',
            templateUrl: 'create_org.component.html',
            styleUrls: ['../create/create.component.scss', 'create_org.component.scss'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], AccountCreateOrgComponent);
    return AccountCreateOrgComponent;
}());
exports.AccountCreateOrgComponent = AccountCreateOrgComponent;
