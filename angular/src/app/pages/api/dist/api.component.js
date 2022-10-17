"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.ApiComponent = void 0;
var core_1 = require("@angular/core");
var tab_url_provider_1 = require("../../providers/tab-url.provider");
var ApiComponent = /** @class */ (function () {
    function ApiComponent(tabUrl, _cd) {
        this.tabUrl = tabUrl;
        this._cd = _cd;
        this.hosts_manage = [
            "integration.mistsys.com",
            "manage.mist.com",
            "integration.mist.com",
            "manage.eu.mist.com",
            "manage.gc1.mist.com",
            "manage.gc2.mist.com",
            "manage.ac2.mist.com"
        ];
        this.hosts_api = [
            "api.mist.com",
            "api.eu.mist.com",
            "api.gc1.mist.com",
            "api.gc2.mist.com",
            "api.ac2.mist.com"
        ];
    }
    ApiComponent.prototype.ngOnInit = function () {
        var host = this.tabUrl.split("/")[2];
        if (this.hosts_manage.indexOf(host) > -1)
            this.display = "manage";
        else if (this.hosts_api.indexOf(host) > -1 && this.tabUrl.indexOf("/api/v1/docs") < 0)
            this.display = "django";
    };
    ApiComponent.prototype.openTab = function () {
        chrome.tabs.create({ url: "https://github.com/tmunzer/mist_chrome_extension/issues/new" });
    };
    ApiComponent = __decorate([
        core_1.Component({
            selector: 'app-api',
            templateUrl: 'api.component.html',
            styleUrls: ['api.component.scss'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __param(0, core_1.Inject(tab_url_provider_1.TAB_URL))
    ], ApiComponent);
    return ApiComponent;
}());
exports.ApiComponent = ApiComponent;
