"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApiComponent = void 0;
var core_1 = require("@angular/core");
var ApiComponent = /** @class */ (function () {
    function ApiComponent(_broswer) {
        this._broswer = _broswer;
    }
    ApiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hosts_manage = this._broswer.getHostManage();
        this.hosts_api = this._broswer.getHostApi();
        this._broswer.getUrl.then(function (tabUrl) {
            _this.tabUrl = tabUrl;
            var host = tabUrl.split("/")[2];
            if (_this.hosts_manage.includes(host))
                _this.display = "manage";
            else if (_this.hosts_api.includes(host) && tabUrl.indexOf("/api/v1/docs") < 0)
                _this.display = "django";
        });
    };
    ApiComponent.prototype.openTab = function () {
        this._broswer.issueOpen();
    };
    ApiComponent = __decorate([
        core_1.Component({
            selector: 'app-api',
            templateUrl: 'api.component.html',
            styleUrls: ['api.component.scss']
        })
    ], ApiComponent);
    return ApiComponent;
}());
exports.ApiComponent = ApiComponent;
