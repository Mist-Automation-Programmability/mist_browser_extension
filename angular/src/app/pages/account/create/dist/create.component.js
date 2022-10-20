"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AccountCreateComponent = void 0;
var core_1 = require("@angular/core");
var AccountCreateComponent = /** @class */ (function () {
    function AccountCreateComponent(_cd, _http) {
        this._cd = _cd;
        this._http = _http;
        this.closeCreateToken = new core_1.EventEmitter();
        this.focused = "";
        this.token_name = "";
        this.do_create = false;
    }
    AccountCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.enventCreateToken.subscribe(function (status) { return _this.do_create = status; });
        this.sessionEvent.subscribe(function (session) {
            _this.session = session;
            _this.token_name = "";
            _this.token = {
                id: undefined,
                last_used: undefined,
                created_time: 0,
                key: "",
                name: ""
            };
        });
    };
    ////////////
    // SESSIONS
    ////////////
    AccountCreateComponent.prototype.createToken = function () {
        var _this = this;
        if (this.do_create) {
            var url = "https://api" + this.session.domain + "/api/v1/self/apitokens";
            this._http.post(url, { name: this.token_name }, { headers: { "X-CSRFTOKEN": this.session.csrftoken } }).subscribe(function (token) {
                _this.token = token;
                _this._cd.detectChanges();
            });
        }
    };
    AccountCreateComponent.prototype.close = function () {
        this.closeCreateToken.emit();
    };
    //
    AccountCreateComponent.prototype.copyToken = function (inputElement) {
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
    ], AccountCreateComponent.prototype, "sessionEvent");
    __decorate([
        core_1.Input()
    ], AccountCreateComponent.prototype, "enventCreateToken");
    __decorate([
        core_1.Output()
    ], AccountCreateComponent.prototype, "closeCreateToken");
    AccountCreateComponent = __decorate([
        core_1.Component({
            selector: 'app-account-create',
            templateUrl: 'create.component.html',
            styleUrls: ['create.component.scss'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], AccountCreateComponent);
    return AccountCreateComponent;
}());
exports.AccountCreateComponent = AccountCreateComponent;
