"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var api_component_1 = require("./pages/api/api.component");
var manage_component_1 = require("./pages/api/manage/manage.component");
var django_component_1 = require("./pages/api/django/django.component");
var account_component_1 = require("./pages/account/account.component");
var manage_component_2 = require("./pages/account/manage/manage.component");
var create_component_1 = require("./pages/account/create/create.component");
var manage_org_component_1 = require("./pages/account/manage_org/manage_org.component");
var create_org_component_1 = require("./pages/account/create_org/create_org.component");
var about_component_1 = require("./pages/about/about.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                api_component_1.ApiComponent, manage_component_1.ApiManageComponent, django_component_1.ApiDjangoComponent,
                account_component_1.AccountComponent, manage_component_2.AccountManageComponent, create_component_1.AccountCreateComponent, manage_org_component_1.AccountManageOrgComponent, create_org_component_1.AccountCreateOrgComponent,
                about_component_1.AboutComponent
            ],
            imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, forms_1.FormsModule, http_1.HttpClientModule],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
