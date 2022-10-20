"use strict";
(self["webpackChunkangular_mist_extension"] = self["webpackChunkangular_mist_extension"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: 'popup',
        component: _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent
    },
    {
        path: '**',
        component: _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _pages_api_api_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/api/api.component */ 4609);
/* harmony import */ var _pages_account_account_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/account/account.component */ 2707);
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/about/about.component */ 3794);





function AppComponent_app_api_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-api");
} }
function AppComponent_app_account_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-account");
} }
function AppComponent_app_about_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-about");
} }
class AppComponent {
    constructor() {
        this.display = "api";
    }
    show(app) {
        this.display = app;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 21, vars: 6, consts: [[2, "text-align", "center"], [1, "top"], ["src", "assets/banner.jpeg", "alt", "banner", 1, "banner"], ["src", "assets/circle.png", "alt", "logo", 1, "logo"], [1, "app-container"], [4, "ngIf"], [1, "bottom"], [1, "bottom", 3, "ngClass", "click"], ["src", "assets/api.svg", "alt", "api", 1, "bottom", "icon"], [1, "bottom", "xxs"], ["src", "assets/account.svg", "alt", "account", 1, "bottom", "icon"], ["src", "assets/help.svg", "alt", "help", 1, "bottom", "icon"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2)(3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AppComponent_app_api_5_Template, 1, 0, "app-api", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AppComponent_app_account_6_Template, 1, 0, "app-account", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AppComponent_app_about_7_Template, 1, 0, "app-about", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_9_listener() { return ctx.show("api"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_13_listener() { return ctx.show("account"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Accounts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_17_listener() { return ctx.show("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "about");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.display == "api");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.display == "account");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.display == "about");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.display == "api" ? "selected" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.display == "account" ? "selected" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.display == "about" ? "selected" : "");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _pages_api_api_component__WEBPACK_IMPORTED_MODULE_0__.ApiComponent, _pages_account_account_component__WEBPACK_IMPORTED_MODULE_1__.AccountComponent, _pages_about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent], styles: [".banner[_ngcontent-%COMP%] {\n  max-height: 50px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 22px;\n  top: 22px;\n  height: 55px;\n  width: 55px;\n  border-radius: 27px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\n  z-index: 100;\n}\n\napp-api[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  overflow: auto;\n}\n\napp-account[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n\napp-about[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n\n.app-container[_ngcontent-%COMP%] {\n  height: 450px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n\ndiv.bottom[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  border-top: solid 1px #ddd;\n}\n\nbutton.bottom[_ngcontent-%COMP%] {\n  background-color: #fff;\n  transition: all 0.2s ease-in-out;\n  flex-direction: column;\n  width: 100%;\n  border: none;\n  display: flex;\n  padding: 0.5em;\n  align-items: center;\n  cursor: pointer;\n}\n\nbutton.bottom[_ngcontent-%COMP%]:not(.selected):hover {\n  transition: all 0.2s ease-in-out;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  background-color: #eee;\n}\n\nbutton.bottom[_ngcontent-%COMP%]:active {\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n  transition: all 0.2s ease-in-out;\n  background-color: #aaa;\n}\n\nimg.bottom[_ngcontent-%COMP%] {\n  height: 2em;\n}\n\ndiv.bottom[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  word-spacing: 4px;\n  font-size: smaller;\n}\n\ndiv.xxs[_ngcontent-%COMP%] {\n  font-size: xx-small !important;\n}\n\nimg.icon[_ngcontent-%COMP%] {\n  margin: 0.2em;\n}\n\nbutton.selected[_ngcontent-%COMP%] {\n  color: #eee;\n  background-color: #999;\n  transition: all 0.2s ease-in-out;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;\n}\n\nbutton[_ngcontent-%COMP%]:not(.selected)   img[_ngcontent-%COMP%] {\n  filter: invert(100%) sepia(0%) saturate(1352%) hue-rotate(0deg) brightness(10%) contrast(0%);\n  transition: all 0.2s ease-in-out;\n}\n\nbutton.selected[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: invert(100%) sepia(0%) saturate(1352%) hue-rotate(0deg) brightness(90%) contrast(100%);\n  transition: all 0.2s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxxRkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EscUZBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQUFKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FBREo7O0FBSUE7RUFDSSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxnQ0FBQTtFQUNBLDJDQUFBO0VBQ0Esc0JBQUE7QUFESjs7QUFJQTtFQUNJLGlEQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtBQURKOztBQUlBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLDhCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDBHQUFBO0FBREo7O0FBSUE7RUFDSSw0RkFBQTtFQUNBLGdDQUFBO0FBREo7O0FBSUE7RUFDSSw4RkFBQTtFQUNBLGdDQUFBO0FBREoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbm5lciB7XG4gICAgbWF4LWhlaWdodDogNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMnB4IDRweCAtMXB4O1xufVxuXG4ubG9nbyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyMnB4O1xuICAgIHRvcDogMjJweDtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgd2lkdGg6IDU1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjdweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggNHB4IC0xcHg7XG4gICAgei1pbmRleDogMTAwO1xufVxuXG5hcHAtYXBpIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuYXBwLWFjY291bnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG5hcHAtYWJvdXQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8vXG4uYXBwLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA0NTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuXG4vL1xuZGl2LmJvdHRvbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNkZGQ7XG59XG5cbmJ1dHRvbi5ib3R0b20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b24uYm90dG9tOm5vdCguc2VsZWN0ZWQpOmhvdmVyIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG5cbmJ1dHRvbi5ib3R0b206YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG59XG5cbmltZy5ib3R0b20ge1xuICAgIGhlaWdodDogMmVtO1xufVxuXG5kaXYuYm90dG9tIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgd29yZC1zcGFjaW5nOiA0cHg7XG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xufVxuXG5kaXYueHhzIHtcbiAgICBmb250LXNpemU6IHh4LXNtYWxsICFpbXBvcnRhbnQ7XG59XG5cbmltZy5pY29uIHtcbiAgICBtYXJnaW46IDAuMmVtO1xufVxuXG5idXR0b24uc2VsZWN0ZWQge1xuICAgIGNvbG9yOiAjZWVlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggMzBweCA2MHB4IC0xMnB4IGluc2V0LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDE4cHggMzZweCAtMThweCBpbnNldDtcbn1cblxuYnV0dG9uOm5vdCguc2VsZWN0ZWQpIGltZyB7XG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDEzNTIlKSBodWUtcm90YXRlKDBkZWcpIGJyaWdodG5lc3MoMTAlKSBjb250cmFzdCgwJSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbmJ1dHRvbi5zZWxlY3RlZCBpbWcge1xuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgxMzUyJSkgaHVlLXJvdGF0ZSgwZGVnKSBicmlnaHRuZXNzKDkwJSkgY29udHJhc3QoMTAwJSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59Il19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _pages_api_api_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/api/api.component */ 4609);
/* harmony import */ var _pages_api_manage_manage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/api/manage/manage.component */ 1512);
/* harmony import */ var _pages_api_django_django_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/api/django/django.component */ 4276);
/* harmony import */ var _pages_account_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/account/account.component */ 2707);
/* harmony import */ var _pages_account_manage_manage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/account/manage/manage.component */ 4190);
/* harmony import */ var _pages_account_create_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/account/create/create.component */ 4392);
/* harmony import */ var _pages_account_manage_org_manage_org_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/account/manage_org/manage_org.component */ 6545);
/* harmony import */ var _pages_account_create_org_create_org_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/account/create_org/create_org.component */ 5662);
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/about/about.component */ 3794);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _pages_api_api_component__WEBPACK_IMPORTED_MODULE_2__.ApiComponent, _pages_api_manage_manage_component__WEBPACK_IMPORTED_MODULE_3__.ApiManageComponent, _pages_api_django_django_component__WEBPACK_IMPORTED_MODULE_4__.ApiDjangoComponent,
        _pages_account_account_component__WEBPACK_IMPORTED_MODULE_5__.AccountComponent, _pages_account_manage_manage_component__WEBPACK_IMPORTED_MODULE_6__.AccountManageComponent, _pages_account_create_create_component__WEBPACK_IMPORTED_MODULE_7__.AccountCreateComponent, _pages_account_manage_org_manage_org_component__WEBPACK_IMPORTED_MODULE_8__.AccountManageOrgComponent, _pages_account_create_org_create_org_component__WEBPACK_IMPORTED_MODULE_9__.AccountCreateOrgComponent,
        _pages_about_about_component__WEBPACK_IMPORTED_MODULE_10__.AboutComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule] }); })();


/***/ }),

/***/ 3794:
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _services_browser_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/browser.service */ 4071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);






function AboutComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Unknown");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AboutComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "You have the lastest Version");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function AboutComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AboutComponent_div_27_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.openTab("download_url")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Downlaod");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("New version available (", ctx_r2.last_version, ")");
} }
function AboutComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.error_message);
} }
class AboutComponent {
    constructor(_http, _browser) {
        this._http = _http;
        this._browser = _browser;
        this.github_release_url = "https://api.github.com/repos/tmunzer/mist_browser_extension/releases/latest";
        this.github_repo_url = "https://github.com/tmunzer/mist_browser_extension";
    }
    ngOnInit() {
        this.current_version = this._browser.getVersion();
    }
    checkNewRelease() {
        this.up_to_date = undefined;
        this.download_url = undefined;
        this.error_happened = undefined;
        this.error_message = undefined;
        this._http.get(this.github_release_url).subscribe(data => {
            this.last_version = data.name;
            console.log(this.current_version, this.last_version);
            console.log(this.current_version < this.last_version);
            if (this.current_version < this.last_version) {
                this.up_to_date = false;
                this.html_url = data.html_url;
                data.assets.forEach((element) => {
                    if (element.name == "extension-build.zip") {
                        this.download_url = element.browser_download_url;
                    }
                });
            }
            else {
                this.up_to_date = true;
            }
        }, error => {
            this.error_happened = true;
            this.error_message = "unable to fetch data from the server";
            console.log(error);
        });
    }
    openTab(target) {
        let dest_url = undefined;
        switch (target) {
            case "openapi":
                dest_url = "https://doc.mist-lab.fr";
                break;
            case "postman":
                dest_url = "https://documenter.getpostman.com/view/224925/SzYgQufe";
                break;
            case "mist":
                dest_url = "https://api.mist.com/api/v1/docs";
                break;
            case "html_url":
                dest_url = this.html_url;
                break;
            case "download_url":
                dest_url = this.download_url;
                break;
            case "github":
                dest_url = this.github_repo_url;
                break;
        }
        if (dest_url) {
            this._browser.tabOpen(dest_url);
        }
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_browser_service__WEBPACK_IMPORTED_MODULE_0__.BrowserService)); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 35, vars: 5, consts: [[1, "content", "no-grow"], [1, "box-links"], [1, "links", 3, "click"], ["src", "assets/open.svg", "alt", "open", 1, "icon-open"], [1, "box-version"], [1, "version-info"], [1, "version-text"], [1, "version-value"], ["class", "version-unknown", 4, "ngIf"], ["class", "version-uptodate", 4, "ngIf"], ["class", "version-newversion", 4, "ngIf"], ["class", "version-error", 4, "ngIf"], [1, "check-version", 3, "click"], [1, "version-unknown"], ["src", "assets/question.svg", "alt", "unknow version"], [1, "version-uptodate"], [1, "version-newversion"], [1, "download", 3, "click"], ["src", "assets/download.svg", "alt", "download"], [1, "version-error"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Mist API Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1)(4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AboutComponent_Template_button_click_4_listener() { return ctx.openTab("postman"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Postman ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AboutComponent_Template_button_click_7_listener() { return ctx.openTab("openapi"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " OpenAPI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AboutComponent_Template_button_click_10_listener() { return ctx.openTab("mist"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " MistAPI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 0)(14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Extension information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 4)(17, "div", 5)(18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Current Version:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 5)(23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Lastest Version:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, AboutComponent_div_25_Template, 4, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, AboutComponent_div_26_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, AboutComponent_div_27_Template, 7, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, AboutComponent_div_28_Template, 3, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AboutComponent_Template_button_click_29_listener() { return ctx.checkNewRelease(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Check For New Version");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 1)(32, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AboutComponent_Template_button_click_32_listener() { return ctx.openTab("github"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Extension Page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.current_version);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.last_version && !ctx.error_happened);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.last_version && ctx.up_to_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.last_version && !ctx.up_to_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error_happened);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [".content[_ngcontent-%COMP%] {\n  margin: 0.5em 1em;\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n}\n\n.content.no-grow[_ngcontent-%COMP%] {\n  flex-grow: 0;\n}\n\n.content.grow[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-weight: 200;\n  margin-left: 0.8em;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  padding: 0.5em;\n  width: 80%;\n  margin: 0.5em;\n  height: 2.5em;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  background-color: #eee;\n  color: #aaa;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;\n}\n\n.box-links[_ngcontent-%COMP%] {\n  align-items: center;\n  flex-direction: column;\n  display: flex;\n  justify-content: flex-start;\n  margin: 0 2em;\n}\n\nbutton.links[_ngcontent-%COMP%]:enabled {\n  background-color: #84b035;\n  color: white;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\n  transition: background-color 0.2s ease-in-out;\n  cursor: pointer;\n}\n\nbutton.links[_ngcontent-%COMP%]:enabled:hover {\n  background-color: #649015;\n}\n\n.box-version[_ngcontent-%COMP%] {\n  margin: 1em 1em;\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n  border: 1px solid #ddd;\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n  border-radius: 2px;\n}\n\n.version-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin: 0.5em 1em;\n}\n\n.version-text[_ngcontent-%COMP%] {\n  font-weight: 200;\n  margin-right: 1em;\n}\n\n.version-unknown[_ngcontent-%COMP%], .version-uptodate[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.version-newversion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.version-unknown[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 1.4em;\n  margin-left: 1em;\n  filter: invert(42%) sepia(93%) saturate(1352%) hue-rotate(7deg) brightness(90%) contrast(119%);\n}\n\n.version-uptodata[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 1.4em;\n  margin-left: 1em;\n  filter: invert(42%) sepia(93%) saturate(1352%) hue-rotate(45deg) brightness(90%) contrast(119%);\n}\n\n.version-newversion[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 1.4em;\n  margin-left: 1em;\n  filter: invert(42%) sepia(93%) saturate(1352%) hue-rotate(330deg) brightness(90%) contrast(119%);\n}\n\n.download[_ngcontent-%COMP%] {\n  margin: 0.5em 0;\n  transition: background-color 0.2s ease-in-out;\n  background-color: #ddd;\n}\n\n.download[_ngcontent-%COMP%]:hover {\n  background-color: #bbb;\n}\n\n.check-version[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  transition: background-color 0.2s ease-in-out;\n  background-color: #ddd;\n  cursor: pointer;\n}\n\n.check-version[_ngcontent-%COMP%]:hover {\n  background-color: #bbb;\n}\n\nimg.icon-open[_ngcontent-%COMP%] {\n  height: 15px;\n  padding: 0 5px;\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtBQUFKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQURKOztBQUtBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRko7O0FBS0E7RUFDSSxzQkFBQTtFQUNBLFdBQUE7RUFDQSwrQ0FBQTtBQUZKOztBQU1BO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7QUFISjs7QUFNQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1GQUFBO0VBQ0EsNkNBQUE7RUFDQSxlQUFBO0FBSEo7O0FBTUE7RUFDSSx5QkFBQTtBQUhKOztBQU9BO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpREFBQTtFQUNBLGtCQUFBO0FBSko7O0FBT0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUpKOztBQU9BO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQUpKOztBQU9BOztFQUVJLGFBQUE7RUFDQSxtQkFBQTtBQUpKOztBQU9BO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBSko7O0FBT0E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4RkFBQTtBQUpKOztBQU9BO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0ZBQUE7QUFKSjs7QUFPQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdHQUFBO0FBSko7O0FBT0E7RUFDSSxlQUFBO0VBQ0EsNkNBQUE7RUFDQSxzQkFBQTtBQUpKOztBQU9BO0VBQ0ksc0JBQUE7QUFKSjs7QUFPQTtFQUNJLFdBQUE7RUFDQSxTQUFBO0VBQ0EsNkNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFKSjs7QUFPQTtFQUNJLHNCQUFBO0FBSko7O0FBT0E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDRGQUFBO0FBSkoiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDT05URU5BSVJTXG4uY29udGVudCB7XG4gICAgbWFyZ2luOiAwLjVlbSAxZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udGVudC5uby1ncm93IHtcbiAgICBmbGV4LWdyb3c6IDA7XG59XG5cbi5jb250ZW50Lmdyb3cge1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxuLy8gVElUTEVTXG5oMiB7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBtYXJnaW4tbGVmdDogMC44ZW07XG59XG5cbi8vIEJVVFRPTlNcbmJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IC41ZW07XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDAuNWVtO1xuICAgIGhlaWdodDogMi41ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBjb2xvcjogI2FhYTtcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyA1JSkgMHB4IDBweCAwcHggMXB4O1xufVxuXG4vLyBsaW5rc1xuLmJveC1saW5rcyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbjogMCAyZW07XG59XG5cbmJ1dHRvbi5saW5rczplbmFibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODRiMDM1O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDFweCAzcHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAxcHggMnB4IDBweDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b24ubGlua3M6ZW5hYmxlZDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0OTAxNTtcbn1cblxuLy8gVkVSU0lPTlxuLmJveC12ZXJzaW9uIHtcbiAgICBtYXJnaW46IDFlbSAxZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm94LXNoYWRvdzogcmdiYSg5OSwgOTksIDk5LCAwLjIpIDBweCAycHggOHB4IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi52ZXJzaW9uLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW46IDAuNWVtIDFlbTtcbn1cblxuLnZlcnNpb24tdGV4dCB7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cblxuLnZlcnNpb24tdW5rbm93bixcbi52ZXJzaW9uLXVwdG9kYXRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi52ZXJzaW9uLW5ld3ZlcnNpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnZlcnNpb24tdW5rbm93biBpbWcge1xuICAgIGhlaWdodDogMS40ZW07XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBmaWx0ZXI6IGludmVydCg0MiUpIHNlcGlhKDkzJSkgc2F0dXJhdGUoMTM1MiUpIGh1ZS1yb3RhdGUoN2RlZykgYnJpZ2h0bmVzcyg5MCUpIGNvbnRyYXN0KDExOSUpO1xufVxuXG4udmVyc2lvbi11cHRvZGF0YSBpbWcge1xuICAgIGhlaWdodDogMS40ZW07XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBmaWx0ZXI6IGludmVydCg0MiUpIHNlcGlhKDkzJSkgc2F0dXJhdGUoMTM1MiUpIGh1ZS1yb3RhdGUoNDVkZWcpIGJyaWdodG5lc3MoOTAlKSBjb250cmFzdCgxMTklKTtcbn1cblxuLnZlcnNpb24tbmV3dmVyc2lvbiBpbWcge1xuICAgIGhlaWdodDogMS40ZW07XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBmaWx0ZXI6IGludmVydCg0MiUpIHNlcGlhKDkzJSkgc2F0dXJhdGUoMTM1MiUpIGh1ZS1yb3RhdGUoMzMwZGVnKSBicmlnaHRuZXNzKDkwJSkgY29udHJhc3QoMTE5JSk7XG59XG5cbi5kb3dubG9hZCB7XG4gICAgbWFyZ2luOiAwLjVlbSAwO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4uZG93bmxvYWQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XG59XG5cbi5jaGVjay12ZXJzaW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2hlY2stdmVyc2lvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcbn1cblxuaW1nLmljb24tb3BlbiB7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgwZGVnKSBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDEwMCUpO1xufSJdfQ== */"] });


/***/ }),

/***/ 2707:
/*!****************************************************!*\
  !*** ./src/app/pages/account/account.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountComponent": () => (/* binding */ AccountComponent)
/* harmony export */ });
/* harmony import */ var _manage_manage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage/manage.component */ 4190);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _services_browser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/browser.service */ 4071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create/create.component */ 4392);
/* harmony import */ var _manage_org_manage_org_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage_org/manage_org.component */ 6545);
/* harmony import */ var _create_org_create_org_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create_org/create_org.component */ 5662);













function AccountComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5)(1, "div")(2, "div", 6)(3, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountComponent_div_0_div_1_Template_h2_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const session_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.openTab(session_r3.domain)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Logged in as ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Session expires at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 11)(16, "div", 12)(17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, " User Tokens ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 11)(22, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountComponent_div_0_div_1_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const session_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.openManageTokens(session_r3.domain, "user")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Manage");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountComponent_div_0_div_1_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const session_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.openCreateToken(session_r3.domain, "user")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 12)(31, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, " Org Tokens ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 11)(36, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountComponent_div_0_div_1_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const session_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.openManageTokens(session_r3.domain, "org")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Manage");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountComponent_div_0_div_1_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const session_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.openCreateToken(session_r3.domain, "org")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const session_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" manage", session_r3.domain, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](session_r3.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](14, 3, session_r3.expires_at * 1000, "yyyy-MM-dd HH:mm:ss"));
} }
function AccountComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AccountComponent_div_0_div_1_Template, 44, 6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const session_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", session_r3.email);
} }
function AccountComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 22)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Sorry, I'm not able to find any Mist Session in this browser...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Please log in to your Mist Dashobard first.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function AccountComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 22)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "I'm still eating your cookies... Not done yet...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Please wait a bit more... Thanks!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
const _c0 = function (a0) { return { hidden: a0 }; };
class AccountComponent {
    constructor(_cd, _http, _browser) {
        this._cd = _cd;
        this._http = _http;
        this._browser = _browser;
        this.enventSession = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.enventCreateToken = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.enventManageTokens = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.mistcom = "";
        this.eumistcom = "";
        this.gc1mistcom = "";
        this.manageTokens = "";
        this.createToken = "";
        this.scope = "";
        this.sessions = [];
        this.is_working = true;
    }
    ngOnInit() {
        this._browser.sessions.subscribe(s => this.sessions = s);
        this.is_working = true;
        this._browser.getCookies(() => this.getSelf());
    }
    getSelf() {
        this.sessions.forEach(session => {
            if (session.has_sessionid && session.csrftoken) {
                let url = "https://api" + session.domain + "/api/v1/self";
                this._http.get(url).subscribe((data) => {
                    session.email = data["email"];
                    session.orgs = this.processOrgs(data["privileges"]);
                    this._cd.detectChanges();
                });
            }
        });
        this.is_working = false;
    }
    processOrgs(privileges) {
        let orgs = [];
        privileges.forEach(privilege => {
            if (["admin", "write"].indexOf(privilege["role"]) > -1) {
                if (privilege["scope"] == "org") {
                    orgs.push({ org_id: privilege["org_id"], name: privilege["name"] });
                }
            }
        });
        orgs.sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase())
                return 1;
            else if (a.name.toLowerCase() < b.name.toLowerCase())
                return -1;
            else
                return 0;
        });
        ;
        return orgs;
    }
    openTab(domain) {
        let dest_url = "https://manage" + domain + "/cloud.html";
        this._browser.tabOpen(dest_url);
    }
    ////////////
    // MANAGE TOKENS
    ////////////
    openManageTokens(domain, scope) {
        this.manageTokens = domain;
        this.scope = scope;
        this.enventManageTokens.next(true);
        this.sessions.forEach(session => {
            if (session.domain == domain) {
                this.enventSession.next(session);
            }
        });
        this._cd.detectChanges();
    }
    closeManageTokens() {
        this.manageTokens = "";
        this.scope = "";
        this.enventManageTokens.next(false);
        this._cd.detectChanges();
    }
    ////////////
    // CREATE TOKENS
    ////////////
    openCreateToken(domain, scope) {
        this.createToken = domain;
        this.scope = scope;
        this.enventCreateToken.next(true);
        this.sessions.forEach(session => {
            if (session.domain == domain) {
                this.enventSession.next(session);
            }
        });
        this._cd.detectChanges();
    }
    closeCreateToken() {
        this.createToken = "";
        this.scope = "";
        this.enventCreateToken.next(false);
        this._cd.detectChanges();
    }
}
AccountComponent.ɵfac = function AccountComponent_Factory(t) { return new (t || AccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_browser_service__WEBPACK_IMPORTED_MODULE_1__.BrowserService)); };
AccountComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AccountComponent, selectors: [["app-account"]], viewQuery: function AccountComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_manage_manage_component__WEBPACK_IMPORTED_MODULE_0__.AccountManageComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.accountManage = _t.first);
    } }, decls: 7, vars: 23, consts: [[4, "ngFor", "ngForOf"], ["class", "notice-text", 4, "ngIf"], [1, "popup", "white", 3, "ngClass", "sessionEvent", "enventManageTokens", "closeManageTokens"], [1, "popup", "transparent", 3, "ngClass", "sessionEvent", "enventCreateToken", "closeCreateToken"], ["class", "box-cloud", 4, "ngIf"], [1, "box-cloud"], [1, "title-cloud-box"], [1, "title-cloud", 3, "click"], ["src", "assets/open.svg", "alt", "open"], [1, "text-cloud", "first"], [1, "text-cloud", "last"], [2, "display", "flex", "flex-direction", "row"], [2, "display", "flex", "flex-direction", "column", "width", "45%", "margin", "1em", "border", "1px solid #bbb", "border-radius", "2px", "align-items", "stretch"], [2, "display", "flex", "flex-direction", "row", "justify-content", "center", "user-select", "none"], ["src", "assets/user.svg", "alt", "user", 1, "bottom", "icon", 2, "height", "20px", "margin", "4px"], [2, "display", "flex", "justify-content", "center", "flex-direction", "column"], [1, "cloud", "token", "tooltip", "left", 3, "click"], ["src", "assets/list.svg", 1, "icon"], [1, "tooltiptext"], [1, "cloud", "token", "tooltip", "right", 3, "click"], ["src", "assets/add.svg", 1, "icon"], ["src", "assets/org.svg", "alt", "user", 1, "bottom", "icon", 2, "height", "20px", "margin", "4px"], [1, "notice-text"]], template: function AccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AccountComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AccountComponent_div_1_Template, 5, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AccountComponent_div_2_Template, 5, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "app-account-manage", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("closeManageTokens", function AccountComponent_Template_app_account_manage_closeManageTokens_3_listener() { return ctx.closeManageTokens(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "app-account-create", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("closeCreateToken", function AccountComponent_Template_app_account_create_closeCreateToken_4_listener() { return ctx.closeCreateToken(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "app-account-manage-org", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("closeManageTokens", function AccountComponent_Template_app_account_manage_org_closeManageTokens_5_listener() { return ctx.closeManageTokens(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "app-account-create-org", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("closeCreateToken", function AccountComponent_Template_app_account_create_org_closeCreateToken_6_listener() { return ctx.closeCreateToken(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.sessions);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sessions.length == 0 && ctx.is_working == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sessions.length == 0 && ctx.is_working == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](15, _c0, ctx.manageTokens == "" || ctx.scope != "user"))("sessionEvent", ctx.enventSession.asObservable())("enventManageTokens", ctx.enventManageTokens.asObservable());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](17, _c0, ctx.createToken == "" || ctx.scope != "user"))("sessionEvent", ctx.enventSession.asObservable())("enventCreateToken", ctx.enventCreateToken.asObservable());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](19, _c0, ctx.manageTokens == "" || ctx.scope != "org"))("sessionEvent", ctx.enventSession.asObservable())("enventManageTokens", ctx.enventManageTokens.asObservable());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](21, _c0, ctx.createToken == "" || ctx.scope != "org"))("sessionEvent", ctx.enventSession.asObservable())("enventCreateToken", ctx.enventCreateToken.asObservable());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _manage_manage_component__WEBPACK_IMPORTED_MODULE_0__.AccountManageComponent, _create_create_component__WEBPACK_IMPORTED_MODULE_2__.AccountCreateComponent, _manage_org_manage_org_component__WEBPACK_IMPORTED_MODULE_3__.AccountManageOrgComponent, _create_org_create_org_component__WEBPACK_IMPORTED_MODULE_4__.AccountCreateOrgComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: [".content[_ngcontent-%COMP%] {\n  margin: 1em;\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n}\n\n.popup[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n  left: 0;\n  height: 453px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: flex-start;\n  visibility: visible;\n  opacity: 1;\n  transition: visibility 0.2s ease-in-out, opacity 0.2s ease-in-out;\n}\n\n.popup.white[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\n.popup.transparent[_ngcontent-%COMP%] {\n  background: rgba(185, 185, 185, 0.7);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.popup.hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0.2s ease-in-out, opacity 0.2s ease-in-out;\n}\n\n.box-cloud[_ngcontent-%COMP%] {\n  margin: 2em 1em 0;\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n  border: 1px solid #ddd;\n  box-shadow: 0 3px 6px 0 rgba(99, 99, 99, 0.1);\n  border-radius: 2px;\n}\n\n.title-cloud-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  background-color: white;\n  border-radius: 2px;\n  margin-top: 0em;\n  transition: background-color 0.2s ease-in-out;\n  cursor: pointer;\n}\n\n.title-cloud-box[_ngcontent-%COMP%]:hover {\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\n  background-color: #ddd;\n}\n\n.title-cloud[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: 200;\n  margin: 0.2em;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  cursor: pointer;\n}\n\n.title-cloud[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 0.5em;\n  opacity: 0.5;\n  height: 1em;\n}\n\n.text-cloud[_ngcontent-%COMP%] {\n  margin: 0.2em auto;\n  font-weight: 200;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n.text-cloud.first[_ngcontent-%COMP%] {\n  margin-top: 1.5em;\n}\n\n.text-cloud.last[_ngcontent-%COMP%] {\n  margin-bottom: 0.2em;\n}\n\n.cloud[_ngcontent-%COMP%] {\n  width: 50%;\n  transition: background-color 0.2s ease-in-out;\n  background-color: #ddd;\n}\n\n.cloud[_ngcontent-%COMP%]:hover {\n  background-color: #bbb;\n}\n\n.cloud.token.left[_ngcontent-%COMP%] {\n  border-radius: 0 0 0 2px;\n}\n\n.cloud.token.right[_ngcontent-%COMP%] {\n  border-radius: 0 0 2px 0;\n}\n\n.cloud.token[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  padding: 0.5em;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  background-color: #eee;\n  color: #aaa;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;\n}\n\nbutton.token[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-content: center;\n  align-items: center;\n  justify-content: center;\n  padding: 0.1em;\n  cursor: pointer;\n}\n\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n  top: 130%;\n  left: 30%;\n  font-size: smaller;\n  font-weight: 100;\n}\n\n.notice-text[_ngcontent-%COMP%] {\n  padding: 1em;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  height: 100%;\n  font-weight: 100;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpRUFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlFQUFBO0FBQUo7O0FBSUE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkNBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxtRkFBQTtFQUNBLHNCQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxpQkFBQTtBQURKOztBQUlBO0VBQ0ksb0JBQUE7QUFESjs7QUFJQTtFQUNJLFVBQUE7RUFDQSw2Q0FBQTtFQUNBLHNCQUFBO0FBREo7O0FBSUE7RUFDSSxzQkFBQTtBQURKOztBQUlBO0VBQ0ksd0JBQUE7QUFESjs7QUFJQTtFQUNJLHdCQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0FBREo7O0FBS0E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUtBO0VBQ0ksc0JBQUE7RUFDQSxXQUFBO0VBQ0EsK0NBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBRko7O0FBTUE7RUFDSSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFNQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSEoiLCJmaWxlIjoiYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENPTlRFTkFJUlNcbi5jb250ZW50IHtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wb3B1cCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTBweDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogNDUzcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjJzIGVhc2UtaW4tb3V0LCBvcGFjaXR5IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5wb3B1cC53aGl0ZSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLnBvcHVwLnRyYW5zcGFyZW50IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTg1IDE4NSAxODUgLyA3MCUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnBvcHVwLmhpZGRlbiB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjJzIGVhc2UtaW4tb3V0LCBvcGFjaXR5IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi8vIGNsb3Vkc1xuLmJveC1jbG91ZCB7XG4gICAgbWFyZ2luOiAyZW0gMWVtIDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiKDk5IDk5IDk5IC8gMTAlKTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi50aXRsZS1jbG91ZC1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBtYXJnaW4tdG9wOiAwZW07XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRpdGxlLWNsb3VkLWJveDpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAxcHggM3B4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMXB4IDJweCAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuLnRpdGxlLWNsb3VkIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBtYXJnaW46IDAuMmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRpdGxlLWNsb3VkIGltZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBoZWlnaHQ6IDFlbTtcbn1cblxuLnRleHQtY2xvdWQge1xuICAgIG1hcmdpbjogMC4yZW0gYXV0bztcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4udGV4dC1jbG91ZC5maXJzdCB7XG4gICAgbWFyZ2luLXRvcDogMS41ZW07XG59XG5cbi50ZXh0LWNsb3VkLmxhc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDAuMmVtO1xufVxuXG4uY2xvdWQge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi5jbG91ZDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcbn1cblxuLmNsb3VkLnRva2VuLmxlZnQge1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDJweDtcbn1cblxuLmNsb3VkLnRva2VuLnJpZ2h0IHtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMnB4IDA7XG59XG5cbi5jbG91ZC50b2tlbiBpbWcge1xuICAgIGhlaWdodDogMjBweDtcbn1cblxuLy8gQlVUVE9OU1xuYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMC41ZW07XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBjb2xvcjogI2FhYTtcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyA1JSkgMHB4IDBweCAwcHggMXB4O1xufVxuXG5idXR0b24udG9rZW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjFlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8vIHRvb2x0aXBcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XG4gICAgdG9wOiAxMzAlO1xuICAgIGxlZnQ6IDMwJTtcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLm5vdGljZS10ZXh0IHtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 4392:
/*!**********************************************************!*\
  !*** ./src/app/pages/account/create/create.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountCreateComponent": () => (/* binding */ AccountCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);







function AccountCreateComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " NEW API TOKEN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccountCreateComponent_div_0_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.token_name = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountCreateComponent_div_0_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.createToken()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8)(11, "textarea", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountCreateComponent_div_0_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.copyToken(_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountCreateComponent_div_0_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.close()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "CLOSE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("manage", ctx_r0.session.domain, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.token_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.focused == "token" ? "focused" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.token.key);
} }
class AccountCreateComponent {
    constructor(_cd, _http) {
        this._cd = _cd;
        this._http = _http;
        this.closeCreateToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.focused = "";
        this.token_name = "";
        this.do_create = false;
    }
    ngOnInit() {
        this.enventCreateToken.subscribe(status => this.do_create = status);
        this.sessionEvent.subscribe(session => {
            this.session = session;
            this.token_name = "";
            this.token = {
                id: undefined,
                last_used: undefined,
                created_time: 0,
                key: "",
                name: ""
            };
        });
    }
    ////////////
    // SESSIONS
    ////////////
    createToken() {
        if (this.do_create) {
            let url = "https://api" + this.session.domain + "/api/v1/self/apitokens";
            this._http.post(url, { name: this.token_name }, { headers: { "X-CSRFTOKEN": this.session.csrftoken } }).subscribe((token) => {
                this.token = token;
                this._cd.detectChanges();
            });
        }
    }
    close() {
        this.closeCreateToken.emit();
    }
    //
    copyToken(inputElement) {
        this.focused = inputElement.id;
        this._cd.detectChanges();
        inputElement.select();
        document.execCommand('copy');
        setTimeout(() => {
            this.focused = "";
            this._cd.detectChanges();
        }, 100);
        inputElement.setSelectionRange(0, 0);
    }
}
AccountCreateComponent.ɵfac = function AccountCreateComponent_Factory(t) { return new (t || AccountCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
AccountCreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountCreateComponent, selectors: [["app-account-create"]], inputs: { sessionEvent: "sessionEvent", enventCreateToken: "enventCreateToken" }, outputs: { closeCreateToken: "closeCreateToken" }, decls: 1, vars: 1, consts: [["class", "content", 4, "ngIf"], [1, "content"], [1, "box-token"], ["for", "token", 1, "token"], [1, "cloud"], [1, "token_opt"], ["type", "text", "placeholder", "Token Name (optional)", 2, "margin", "1em 0", "padding", "0.5em", "border", "1px solid #a7a7a7", 3, "ngModel", "ngModelChange"], [3, "click"], [1, "token-input"], ["type", "text", "readonly", "", "rows", "3", "id", "token", 1, "token", 3, "ngClass"], ["token_input", ""], ["name", "copy", 1, "copy-token", 3, "click"], ["src", "assets/copy.svg", "alt", "copy", 1, "copy-token"], [1, "close", 3, "click"]], template: function AccountCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AccountCreateComponent_div_0_Template, 18, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.session);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], styles: [".content[_ngcontent-%COMP%] {\n  padding: 1em;\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n  background-color: white;\n  margin: 1em;\n  padding: 0;\n  border: 1px solid #bbb;\n  border-radius: 2px;\n}\n\n.cloud[_ngcontent-%COMP%] {\n  font-weight: 100;\n}\n\n.box-token[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 1em;\n}\n\n.token-input[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-around;\n}\n\ntextarea.token[_ngcontent-%COMP%]:-moz-read-only {\n  resize: none;\n  width: 100%;\n  text-align: center;\n  font: inherit;\n  font-weight: 200;\n  border: none;\n  padding: 1em 1em;\n  margin: 1em 0;\n  border-radius: 6px;\n  background-color: transparent;\n  -moz-transition: all 1s ease-in-out;\n  transition: all 1s ease-in-out;\n}\n\ntextarea.token[_ngcontent-%COMP%]:read-only {\n  resize: none;\n  width: 100%;\n  text-align: center;\n  font: inherit;\n  font-weight: 200;\n  border: none;\n  padding: 1em 1em;\n  margin: 1em 0;\n  border-radius: 6px;\n  background-color: transparent;\n  transition: all 1s ease-in-out;\n}\n\ntextarea.token[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n}\n\ntextarea.token.focused[_ngcontent-%COMP%] {\n  background-color: #555;\n  transition: all 0.2s ease-in-out;\n}\n\nlabel.token[_ngcontent-%COMP%] {\n  margin: 0.2em 0.5em 0.2em 1em;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  letter-spacing: 0.1em;\n}\n\nbutton.copy-token[_ngcontent-%COMP%] {\n  background-color: white;\n  transition: all 0.2s ease-in-out;\n  margin: 1em 0;\n}\n\nbutton.copy-token[_ngcontent-%COMP%]:hover   img.copy-token[_ngcontent-%COMP%] {\n  filter: invert(42%) sepia(93%) saturate(1352%) hue-rotate(40deg) brightness(90%) contrast(119%);\n  transition: filter 0.2s ease-in-out;\n}\n\nimg.copy-token[_ngcontent-%COMP%] {\n  height: 20px;\n}\n\n.token_opt[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  padding: 0.5em;\n}\n\nbutton.close[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 0 0 2px 2px;\n  background-color: #0096a3;\n  color: white;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\n  transition: background-color 0.2s ease-in-out;\n}\n\nbutton.close[_ngcontent-%COMP%]:hover {\n  background-color: #007683;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0VBQUEsOEJBQUE7QUFBSjs7QUFYQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxzQkFBQTtFQUNBLGdDQUFBO0FBQUo7O0FBR0E7RUFDSSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFHQTtFQUNJLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0E7RUFDSSwrRkFBQTtFQUNBLG1DQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBQUo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUZBQUE7RUFDQSw2Q0FBQTtBQURKOztBQUlBO0VBQ0kseUJBQUE7QUFESiIsImZpbGUiOiJjcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDT05URU5BSVJTXG4uY29udGVudCB7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uY2xvdWQge1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi5ib3gtdG9rZW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMWVtO1xufVxuXG4udG9rZW4taW5wdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxudGV4dGFyZWEudG9rZW46cmVhZC1vbmx5IHtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMWVtIDFlbTtcbiAgICBtYXJnaW46IDFlbSAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XG59XG5cbnRleHRhcmVhLnRva2VuOmZvY3VzLXZpc2libGUge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbnRleHRhcmVhLnRva2VuLmZvY3VzZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbmxhYmVsLnRva2VuIHtcbiAgICBtYXJnaW46IC4yZW0gLjVlbSAuMmVtIDFlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG59XG5cbmJ1dHRvbi5jb3B5LXRva2VuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBtYXJnaW46IDFlbSAwO1xufVxuXG5idXR0b24uY29weS10b2tlbjpob3ZlciBpbWcuY29weS10b2tlbiB7XG4gICAgZmlsdGVyOiBpbnZlcnQoNDIlKSBzZXBpYSg5MyUpIHNhdHVyYXRlKDEzNTIlKSBodWUtcm90YXRlKDQwZGVnKSBicmlnaHRuZXNzKDkwJSkgY29udHJhc3QoMTE5JSk7XG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbmltZy5jb3B5LXRva2VuIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cbi50b2tlbl9vcHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLy8gQlVUVE9OU1xuYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMC41ZW07XG59XG5cbmJ1dHRvbi5jbG9zZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDJweCAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTZhMztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAxcHggM3B4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMXB4IDJweCAwcHg7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG5idXR0b24uY2xvc2U6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc2ODM7XG59Il19 */"], changeDetection: 0 });


/***/ }),

/***/ 5662:
/*!******************************************************************!*\
  !*** ./src/app/pages/account/create_org/create_org.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountCreateOrgComponent": () => (/* binding */ AccountCreateOrgComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);







function AccountCreateOrgComponent_div_0_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const org_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", org_r5.org_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](org_r5.name);
} }
function AccountCreateOrgComponent_div_0_select_27_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccountCreateOrgComponent_div_0_select_27_Template_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.site_id = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 8)(2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "-- Please Select a Site --");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.site_id);
} }
function AccountCreateOrgComponent_div_0_select_28_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccountCreateOrgComponent_div_0_select_28_Template_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.sitegroup_id = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 8)(2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "-- Please Select a Site Group --");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.sitegroup_id);
} }
function AccountCreateOrgComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " NEW API TOKEN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccountCreateOrgComponent_div_0_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.token_name = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccountCreateOrgComponent_div_0_Template_select_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.org_id = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 8)(10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "-- Please Select an Org --");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AccountCreateOrgComponent_div_0_option_12_Template, 3, 2, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccountCreateOrgComponent_div_0_Template_select_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.role = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Super User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Network Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Observer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccountCreateOrgComponent_div_0_Template_select_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.scope = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Org");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "SiteGroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AccountCreateOrgComponent_div_0_select_27_Template, 4, 1, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AccountCreateOrgComponent_div_0_select_28_Template, 4, 1, "select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountCreateOrgComponent_div_0_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.createToken()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22)(32, "textarea", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountCreateOrgComponent_div_0_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.copyToken(_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountCreateOrgComponent_div_0_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.close()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "CLOSE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("manage", ctx_r0.session.domain, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.token_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.org_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.orgs);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.scope);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.scope == "site");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.scope == "sitegroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.focused == "token " ? "focused " : " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.token.key);
} }
class AccountCreateOrgComponent {
    constructor(_cd, _http) {
        this._cd = _cd;
        this._http = _http;
        this.closeCreateToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.focused = "";
        this.orgs = [];
        // action
        this.do_create = false;
    }
    ngOnInit() {
        this.enventCreateToken.subscribe(status => this.do_create = status);
        this.sessionEvent.subscribe(session => {
            this.session = session;
            this.token_name = "";
            this.orgs = session.orgs;
            this.org_id = "none";
            this.role = "admin";
            this.scope = "org";
            this.token = {
                id: undefined,
                last_used: undefined,
                created_time: 0,
                key: "",
                name: ""
            };
        });
    }
    ////////////
    // SESSIONS
    ////////////
    createToken() {
        let body = {
            name: this.token_name,
            privileges: [{
                    role: this.role,
                    scope: this.scope,
                    site_id: undefined,
                    sitegroup_id: undefined,
                }]
        };
        if (this.scope == "site" && this.site_id) {
            body.privileges[0]["site_id"] = this.site_id;
        }
        else if (this.scope == "sitegroupo" && this.sitegroup_id) {
            body.privileges[0]["sitegroup_id"] = this.sitegroup_id;
        }
        if (this.do_create && this.org_id != "none") {
            let url = "https://api" + this.session.domain + "/api/v1/orgs/" + this.org_id + "/apitokens";
            this._http.post(url, body, { headers: { "X-CSRFTOKEN": this.session.csrftoken } }).subscribe((token) => {
                this.token = token;
                this._cd.detectChanges();
            });
        }
    }
    close() {
        this.closeCreateToken.emit();
    }
    //
    copyToken(inputElement) {
        this.focused = inputElement.id;
        this._cd.detectChanges();
        inputElement.select();
        document.execCommand('copy');
        setTimeout(() => {
            this.focused = "";
            this._cd.detectChanges();
        }, 100);
        inputElement.setSelectionRange(0, 0);
    }
}
AccountCreateOrgComponent.ɵfac = function AccountCreateOrgComponent_Factory(t) { return new (t || AccountCreateOrgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
AccountCreateOrgComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountCreateOrgComponent, selectors: [["app-account-create-org"]], inputs: { sessionEvent: "sessionEvent", enventCreateToken: "enventCreateToken" }, outputs: { closeCreateToken: "closeCreateToken" }, decls: 1, vars: 1, consts: [["class", "content", 4, "ngIf"], [1, "content"], [1, "box-token"], ["for", "token", 1, "token"], [1, "cloud"], [1, "org_select"], ["type", "text", "placeholder", "Token Name (optional)", 2, "margin", "1em 0", "padding", "0.5em", "border", "1px solid #a7a7a7", 3, "ngModel", "ngModelChange"], ["name", "org_id", 3, "ngModel", "ngModelChange"], ["value", "none", 1, "none"], [2, "width", "100%", "text-align", "center"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "role", 3, "ngModel", "ngModelChange"], ["value", "admin"], ["value", "write"], ["value", "read"], ["name", "scope", 3, "ngModel", "ngModelChange"], ["value", "org"], ["value", "site", "disabled", ""], ["value", "sitegroup", "disabled", ""], ["name", "site_id", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["name", "sitegroup_id", 3, "ngModel", "ngModelChange", 4, "ngIf"], [3, "click"], [1, "token-input"], ["type", "text", "readonly", "", "rows", "3", "id", "token", 1, "token", 3, "ngClass"], ["org_token_input", ""], ["name", "copy", 1, "copy-token", 3, "click"], ["src", "assets/copy.svg", "alt", "copy", 1, "copy-token"], [1, "close", 3, "click"], [3, "value"], ["name", "site_id", 3, "ngModel", "ngModelChange"], ["name", "sitegroup_id", 3, "ngModel", "ngModelChange"]], template: function AccountCreateOrgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AccountCreateOrgComponent_div_0_Template, 39, 10, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.session);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], styles: [".content[_ngcontent-%COMP%] {\n  padding: 1em;\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n  background-color: white;\n  margin: 1em;\n  padding: 0;\n  border: 1px solid #bbb;\n  border-radius: 2px;\n}\n\n.cloud[_ngcontent-%COMP%] {\n  font-weight: 100;\n}\n\n.box-token[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 1em;\n}\n\n.token-input[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-around;\n}\n\ntextarea.token[_ngcontent-%COMP%]:-moz-read-only {\n  resize: none;\n  width: 100%;\n  text-align: center;\n  font: inherit;\n  font-weight: 200;\n  border: none;\n  padding: 1em 1em;\n  margin: 1em 0;\n  border-radius: 6px;\n  background-color: transparent;\n  -moz-transition: all 1s ease-in-out;\n  transition: all 1s ease-in-out;\n}\n\ntextarea.token[_ngcontent-%COMP%]:read-only {\n  resize: none;\n  width: 100%;\n  text-align: center;\n  font: inherit;\n  font-weight: 200;\n  border: none;\n  padding: 1em 1em;\n  margin: 1em 0;\n  border-radius: 6px;\n  background-color: transparent;\n  transition: all 1s ease-in-out;\n}\n\ntextarea.token[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n}\n\ntextarea.token.focused[_ngcontent-%COMP%] {\n  background-color: #555;\n  transition: all 0.2s ease-in-out;\n}\n\nlabel.token[_ngcontent-%COMP%] {\n  margin: 0.2em 0.5em 0.2em 1em;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  letter-spacing: 0.1em;\n}\n\nbutton.copy-token[_ngcontent-%COMP%] {\n  background-color: white;\n  transition: all 0.2s ease-in-out;\n  margin: 1em 0;\n}\n\nbutton.copy-token[_ngcontent-%COMP%]:hover   img.copy-token[_ngcontent-%COMP%] {\n  filter: invert(42%) sepia(93%) saturate(1352%) hue-rotate(40deg) brightness(90%) contrast(119%);\n  transition: filter 0.2s ease-in-out;\n}\n\nimg.copy-token[_ngcontent-%COMP%] {\n  height: 20px;\n}\n\n.token_opt[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  padding: 0.5em;\n}\n\nbutton.close[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 0 0 2px 2px;\n  background-color: #0096a3;\n  color: white;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\n  transition: background-color 0.2s ease-in-out;\n}\n\nbutton.close[_ngcontent-%COMP%]:hover {\n  background-color: #007683;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0VBQUEsOEJBQUE7QUFBSjs7QUFYQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxzQkFBQTtFQUNBLGdDQUFBO0FBQUo7O0FBR0E7RUFDSSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFHQTtFQUNJLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0E7RUFDSSwrRkFBQTtFQUNBLG1DQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBQUo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUZBQUE7RUFDQSw2Q0FBQTtBQURKOztBQUlBO0VBQ0kseUJBQUE7QUFESiIsImZpbGUiOiJjcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDT05URU5BSVJTXG4uY29udGVudCB7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uY2xvdWQge1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi5ib3gtdG9rZW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMWVtO1xufVxuXG4udG9rZW4taW5wdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxudGV4dGFyZWEudG9rZW46cmVhZC1vbmx5IHtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMWVtIDFlbTtcbiAgICBtYXJnaW46IDFlbSAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XG59XG5cbnRleHRhcmVhLnRva2VuOmZvY3VzLXZpc2libGUge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbnRleHRhcmVhLnRva2VuLmZvY3VzZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbmxhYmVsLnRva2VuIHtcbiAgICBtYXJnaW46IC4yZW0gLjVlbSAuMmVtIDFlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG59XG5cbmJ1dHRvbi5jb3B5LXRva2VuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBtYXJnaW46IDFlbSAwO1xufVxuXG5idXR0b24uY29weS10b2tlbjpob3ZlciBpbWcuY29weS10b2tlbiB7XG4gICAgZmlsdGVyOiBpbnZlcnQoNDIlKSBzZXBpYSg5MyUpIHNhdHVyYXRlKDEzNTIlKSBodWUtcm90YXRlKDQwZGVnKSBicmlnaHRuZXNzKDkwJSkgY29udHJhc3QoMTE5JSk7XG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbmltZy5jb3B5LXRva2VuIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cbi50b2tlbl9vcHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLy8gQlVUVE9OU1xuYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMC41ZW07XG59XG5cbmJ1dHRvbi5jbG9zZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDJweCAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTZhMztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAxcHggM3B4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMXB4IDJweCAwcHg7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG5idXR0b24uY2xvc2U6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc2ODM7XG59Il19 */", "select[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-bottom: 1em;\n}\n\n.org_select[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-content: center;\n  justify-content: space-between;\n  margin: 1em;\n}\n\nselect[_ngcontent-%COMP%] {\n  padding: 0.5em;\n  border: 1px solid #bbb;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;\n  text-align: center;\n}\n\noption[_ngcontent-%COMP%] {\n  text-align: start;\n}\n\noption.none[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZV9vcmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtBQUNKIiwiZmlsZSI6ImNyZWF0ZV9vcmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWxlY3Qge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG4ub3JnX3NlbGVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiAxZW07XG59XG5cbnNlbGVjdCB7XG4gICAgcGFkZGluZzogMC41ZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JiYjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyA1JSkgMHB4IDBweCAwcHggMXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxub3B0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxub3B0aW9uLm5vbmUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufSJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 4190:
/*!**********************************************************!*\
  !*** ./src/app/pages/account/manage/manage.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountManageComponent": () => (/* binding */ AccountManageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);






function AccountManageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "This account doesn't have any API Token yet...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "You can go back and create a new API Token directly from this extension!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
const _c0 = function (a0) { return { "color": a0 }; };
function AccountManageComponent_div_4_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const token_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r3.now - token_r2.last_used * 1000 > 7776000000 ? "#e26b00" : null));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, token_r2.last_used * 1000, "yyyy-MM-dd HH:mm:ss"));
} }
function AccountManageComponent_div_4_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Never");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountManageComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "table")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td")(7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr")(10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Key:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td")(13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr")(16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Creation Time:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td")(19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr")(23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Last Used Time:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AccountManageComponent_div_4_div_26_Template, 3, 7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AccountManageComponent_div_4_div_27_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11)(29, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountManageComponent_div_4_Template_button_click_29_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const token_r2 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.deleteToken(token_r2.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const token_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](token_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](token_r2.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 5, token_r2.created_time * 1000, "yyyy-MM-dd HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", token_r2.last_used);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !token_r2.last_used);
} }
class AccountManageComponent {
    constructor(_cd, _http) {
        this._cd = _cd;
        this._http = _http;
        this.closeManageTokens = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.tokens = [];
        this.do_manage = false;
    }
    ngOnInit() {
        this.now = new Date().getTime();
        this.enventManageTokens.subscribe(status => this.do_manage = status);
        this.sessionEvent.subscribe(session => {
            this.tokens = [];
            this.session = session;
            this.getTokens();
        });
    }
    ////////////
    // TOKENS
    ////////////
    getTokens() {
        if (this.do_manage) {
            let url = "https://api" + this.session.domain + "/api/v1/self/apitokens";
            this._http.get(url, { headers: { "X-CSRFTOKEN": this.session.csrftoken } }).subscribe((data) => {
                this.tokens = data;
                this.tokens.sort((a, b) => {
                    return a.created_time - b.created_time;
                });
                this._cd.detectChanges();
            });
        }
    }
    deleteToken(token_id) {
        let url = "https://api" + this.session.domain + "/api/v1/self/apitokens/" + token_id;
        this._http.delete(url, { headers: { "X-CSRFTOKEN": this.session.csrftoken } }).subscribe(() => {
            this.getTokens();
        });
    }
    close() {
        this.closeManageTokens.emit();
    }
}
AccountManageComponent.ɵfac = function AccountManageComponent_Factory(t) { return new (t || AccountManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
AccountManageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountManageComponent, selectors: [["app-account-manage"]], inputs: { sessionEvent: "sessionEvent", enventManageTokens: "enventManageTokens" }, outputs: { closeManageTokens: "closeManageTokens" }, decls: 5, vars: 2, consts: [[1, "close", 3, "click"], [1, "container", 2, "height", "100%", "display", "flex", "flex-direction", "column", "justify-content", "flex-start"], ["style", "height: 100%;display: flex;justify-content: center;flex-direction: column;text-align: center; font-weight: lighter; margin: 1em;", 4, "ngIf"], ["class", "token-container", 4, "ngFor", "ngForOf"], [2, "height", "100%", "display", "flex", "justify-content", "center", "flex-direction", "column", "text-align", "center", "font-weight", "lighter", "margin", "1em"], [2, "margin", "1em"], [2, "margin", "0 2em"], [1, "token-container"], [1, "token"], [3, "ngStyle", 4, "ngIf"], ["style", "color: #f44336;font-weight: 400;", 4, "ngIf"], [1, "delete"], [3, "click"], ["src", "assets/delete.svg", "alt", "delete"], [3, "ngStyle"], [2, "color", "#f44336", "font-weight", "400"]], template: function AccountManageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountManageComponent_Template_button_click_0_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CLOSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AccountManageComponent_div_3_Template, 5, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AccountManageComponent_div_4_Template, 31, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tokens.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tokens);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe], styles: [".content[_ngcontent-%COMP%] {\n  margin: 1em;\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  padding: 0.5em;\n}\n\nbutton.close[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #0096a3;\n  color: white;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\n  transition: background-color 0.2s ease-in-out;\n}\n\nbutton.close[_ngcontent-%COMP%]:hover {\n  background-color: #007683;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin: 0;\n  overflow: auto;\n}\n\n.token-container[_ngcontent-%COMP%] {\n  margin: 1em;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid #ddd;\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n  border-radius: 2px;\n  height: 7em;\n}\n\n.token[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 1em;\n}\n\n.token-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.delete[_ngcontent-%COMP%], .delete[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: white;\n  transition: background-color 0.2s ease-in-out;\n}\n\n.delete[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #f44336;\n}\n\n.delete[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: background-color 0.2s ease-in-out;\n}\n\n.delete[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  filter: invert(90%);\n}\n\nth[_ngcontent-%COMP%] {\n  font-weight: 200;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQUFKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtRkFBQTtFQUNBLDZDQUFBO0FBREo7O0FBSUE7RUFDSSx5QkFBQTtBQURKOztBQUlBO0VBQ0ksU0FBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpREFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7O0VBRUksWUFBQTtFQUNBLHVCQUFBO0VBQ0EsNkNBQUE7QUFESjs7QUFJQTtFQUNJLHlCQUFBO0FBREo7O0FBSUE7RUFDSSw2Q0FBQTtBQURKOztBQUlBO0VBQ0ksbUJBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFESiIsImZpbGUiOiJtYW5hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDT05URU5BSVJTXG4uY29udGVudCB7XG4gICAgbWFyZ2luOiAxZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vLyBCVVRUT05TXG5idXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbn1cblxuYnV0dG9uLmNsb3NlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NmEzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDFweCAzcHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAxcHggMnB4IDBweDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbmJ1dHRvbi5jbG9zZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzY4Mztcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udG9rZW4tY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDk5LCA5OSwgOTksIDAuMikgMHB4IDJweCA4cHggMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBoZWlnaHQ6IDdlbTtcbn1cblxuLnRva2VuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMWVtO1xufVxuXG4udG9rZW4taW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uZGVsZXRlLFxuLmRlbGV0ZSBidXR0b24ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5kZWxldGUgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuXG4uZGVsZXRlIGJ1dHRvbiBpbWcge1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmRlbGV0ZSBidXR0b246aG92ZXIgaW1nIHtcbiAgICBmaWx0ZXI6IGludmVydCg5MCUpO1xufVxuXG50aCB7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 6545:
/*!******************************************************************!*\
  !*** ./src/app/pages/account/manage_org/manage_org.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountManageOrgComponent": () => (/* binding */ AccountManageOrgComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);







function AccountManageOrgComponent_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 8)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const org_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", org_r4.org_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](org_r4.name);
} }
function AccountManageOrgComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please select an Org...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function AccountManageOrgComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "This Org doesn't have any API Token yet...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "You can go back and create a new API Token directly from this extension!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
const _c0 = function (a0) { return { "color": a0 }; };
function AccountManageOrgComponent_div_10_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const token_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r6.now - token_r5.last_used * 1000 > 7776000000 ? "#e26b00" : null));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, token_r5.last_used * 1000, "yyyy-MM-dd HH:mm:ss"));
} }
function AccountManageOrgComponent_div_10_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Never");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountManageOrgComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "table")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td")(7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr")(10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Key:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td")(13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr")(16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Creation Time:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td")(19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr")(23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Last Used Time:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AccountManageOrgComponent_div_10_div_26_Template, 3, 7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AccountManageOrgComponent_div_10_div_27_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16)(29, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountManageOrgComponent_div_10_Template_button_click_29_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const token_r5 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.deleteToken(token_r5.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const token_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](token_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](token_r5.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 5, token_r5.created_time * 1000, "yyyy-MM-dd HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", token_r5.last_used);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !token_r5.last_used);
} }
class AccountManageOrgComponent {
    constructor(_cd, _http) {
        this._cd = _cd;
        this._http = _http;
        this.closeManageTokens = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.tokens = [];
        this.orgs = [];
        this.do_manage = false;
    }
    ngOnInit() {
        this.now = new Date().getTime();
        this.enventManageTokens.subscribe(status => this.do_manage = status);
        this.sessionEvent.subscribe(session => {
            this.tokens = [];
            this.session = session;
            this.orgs = session.orgs;
            this.org_id = "none";
        });
    }
    ////////////
    // TOKENS
    ////////////
    getTokens() {
        if (this.do_manage && this.org_id != 'none') {
            let url = "https://api" + this.session.domain + "/api/v1/orgs/" + this.org_id + "/apitokens";
            this._http.get(url, { headers: { "X-CSRFTOKEN": this.session.csrftoken } }).subscribe((data) => {
                this.tokens = data;
                this.tokens.sort((a, b) => {
                    return a.created_time - b.created_time;
                });
                this._cd.detectChanges();
            });
        }
        else {
            this.tokens = [];
            this._cd.detectChanges();
        }
    }
    deleteToken(token_id) {
        let url = "https://api" + this.session.domain + "/api/v1/orgs/" + this.org_id + "/apitokens/" + token_id;
        this._http.delete(url, { headers: { "X-CSRFTOKEN": this.session.csrftoken } }).subscribe(() => {
            this.getTokens();
        });
    }
    close() {
        this.closeManageTokens.emit();
    }
}
AccountManageOrgComponent.ɵfac = function AccountManageOrgComponent_Factory(t) { return new (t || AccountManageOrgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
AccountManageOrgComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountManageOrgComponent, selectors: [["app-account-manage-org"]], inputs: { sessionEvent: "sessionEvent", enventManageTokens: "enventManageTokens" }, outputs: { closeManageTokens: "closeManageTokens" }, decls: 11, vars: 5, consts: [[1, "close", 3, "click"], ["name", "org_id", 3, "ngModel", "ngModelChange", "change"], ["value", "none", 1, "none"], [2, "width", "100%", "text-align", "center"], [3, "value", 4, "ngFor", "ngForOf"], [1, "container", 2, "height", "100%", "display", "flex", "flex-direction", "column", "justify-content", "flex-start"], ["style", "height: 100%;display: flex;justify-content: center;flex-direction: column;text-align: center; font-weight: lighter; margin: 1em;", 4, "ngIf"], ["class", "token-container", 4, "ngFor", "ngForOf"], [3, "value"], [2, "height", "100%", "display", "flex", "justify-content", "center", "flex-direction", "column", "text-align", "center", "font-weight", "lighter", "margin", "1em"], [2, "margin", "1em"], [2, "margin", "0 2em"], [1, "token-container"], [1, "token"], [3, "ngStyle", 4, "ngIf"], ["style", "color: #f44336;font-weight: 400;", 4, "ngIf"], [1, "delete"], [3, "click"], ["src", "assets/delete.svg", "alt", "delete"], [3, "ngStyle"], [2, "color", "#f44336", "font-weight", "400"]], template: function AccountManageOrgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountManageOrgComponent_Template_button_click_0_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CLOSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccountManageOrgComponent_Template_select_ngModelChange_2_listener($event) { return ctx.org_id = $event; })("change", function AccountManageOrgComponent_Template_select_change_2_listener() { return ctx.getTokens(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "-- Please Select an Org --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AccountManageOrgComponent_option_6_Template, 3, 2, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AccountManageOrgComponent_div_8_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AccountManageOrgComponent_div_9_Template, 5, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AccountManageOrgComponent_div_10_Template, 31, 8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.org_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orgs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.org_id == "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tokens.length == 0 && ctx.org_id != "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tokens);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe], styles: [".content[_ngcontent-%COMP%] {\n  margin: 1em;\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  padding: 0.5em;\n}\n\nbutton.close[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #0096a3;\n  color: white;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\n  transition: background-color 0.2s ease-in-out;\n}\n\nbutton.close[_ngcontent-%COMP%]:hover {\n  background-color: #007683;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin: 0;\n  overflow: auto;\n}\n\n.token-container[_ngcontent-%COMP%] {\n  margin: 1em;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid #ddd;\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n  border-radius: 2px;\n  height: 7em;\n}\n\n.token[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 1em;\n}\n\n.token-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.delete[_ngcontent-%COMP%], .delete[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: white;\n  transition: background-color 0.2s ease-in-out;\n}\n\n.delete[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #f44336;\n}\n\n.delete[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: background-color 0.2s ease-in-out;\n}\n\n.delete[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  filter: invert(90%);\n}\n\nth[_ngcontent-%COMP%] {\n  font-weight: 200;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQUFKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtRkFBQTtFQUNBLDZDQUFBO0FBREo7O0FBSUE7RUFDSSx5QkFBQTtBQURKOztBQUlBO0VBQ0ksU0FBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpREFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7O0VBRUksWUFBQTtFQUNBLHVCQUFBO0VBQ0EsNkNBQUE7QUFESjs7QUFJQTtFQUNJLHlCQUFBO0FBREo7O0FBSUE7RUFDSSw2Q0FBQTtBQURKOztBQUlBO0VBQ0ksbUJBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFESiIsImZpbGUiOiJtYW5hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDT05URU5BSVJTXG4uY29udGVudCB7XG4gICAgbWFyZ2luOiAxZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vLyBCVVRUT05TXG5idXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbn1cblxuYnV0dG9uLmNsb3NlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NmEzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDFweCAzcHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAxcHggMnB4IDBweDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbmJ1dHRvbi5jbG9zZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzY4Mztcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udG9rZW4tY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDk5LCA5OSwgOTksIDAuMikgMHB4IDJweCA4cHggMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBoZWlnaHQ6IDdlbTtcbn1cblxuLnRva2VuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMWVtO1xufVxuXG4udG9rZW4taW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uZGVsZXRlLFxuLmRlbGV0ZSBidXR0b24ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5kZWxldGUgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuXG4uZGVsZXRlIGJ1dHRvbiBpbWcge1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmRlbGV0ZSBidXR0b246aG92ZXIgaW1nIHtcbiAgICBmaWx0ZXI6IGludmVydCg5MCUpO1xufVxuXG50aCB7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */", "select[_ngcontent-%COMP%] {\n  padding: 0.5em;\n  border: 1px solid #bbb;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;\n  text-align: center;\n}\n\noption[_ngcontent-%COMP%] {\n  text-align: start;\n}\n\noption.none[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZV9vcmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLDZCQUFBO0FBQ0oiLCJmaWxlIjoibWFuYWdlX29yZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlbGVjdCB7XG4gICAgcGFkZGluZzogMC41ZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JiYjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyA1JSkgMHB4IDBweCAwcHggMXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxub3B0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxub3B0aW9uLm5vbmUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufSJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 4609:
/*!********************************************!*\
  !*** ./src/app/pages/api/api.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiComponent": () => (/* binding */ ApiComponent)
/* harmony export */ });
/* harmony import */ var _services_browser_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/browser.service */ 4071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _manage_manage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage/manage.component */ 1512);
/* harmony import */ var _django_django_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./django/django.component */ 4276);






function ApiComponent_app_api_manage_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-api-manage");
} }
function ApiComponent_app_api_django_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-api-django");
} }
function ApiComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " This page is not supported by the application yet... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "If you think it should, please create a request to report your current URL.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ApiComponent_div_2_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.openTab()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Create a Request");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} }
class ApiComponent {
    constructor(_broswer) {
        this._broswer = _broswer;
    }
    ngOnInit() {
        this.hosts_manage = this._broswer.getHostManage();
        this.hosts_api = this._broswer.getHostApi();
        this._broswer.getUrl.then(tabUrl => {
            this.tabUrl = tabUrl;
            let host = tabUrl.split("/")[2];
            if (this.hosts_manage.includes(host))
                this.display = "manage";
            else if (this.hosts_api.includes(host) && tabUrl.indexOf("/api/v1/docs") < 0)
                this.display = "django";
        });
    }
    openTab() {
        this._broswer.issueOpen();
    }
}
ApiComponent.ɵfac = function ApiComponent_Factory(t) { return new (t || ApiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_browser_service__WEBPACK_IMPORTED_MODULE_0__.BrowserService)); };
ApiComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ApiComponent, selectors: [["app-api"]], decls: 3, vars: 3, consts: [[4, "ngIf"], ["class", "notice-text", 4, "ngIf"], [1, "notice-text"], [2, "margin-top", "1em"], [2, "display", "flex", "flex-direction", "row", "justify-content", "center"], [1, "request", 3, "click"]], template: function ApiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ApiComponent_app_api_manage_0_Template, 1, 0, "app-api-manage", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ApiComponent_app_api_django_1_Template, 1, 0, "app-api-django", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ApiComponent_div_2_Template, 8, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.display == "manage");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.display == "django");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.display != "manage" && ctx.display != "django");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _manage_manage_component__WEBPACK_IMPORTED_MODULE_1__.ApiManageComponent, _django_django_component__WEBPACK_IMPORTED_MODULE_2__.ApiDjangoComponent], styles: [".content[_ngcontent-%COMP%] {\n  margin: 0.5em 1em;\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n}\n\n.notice-text[_ngcontent-%COMP%] {\n  padding: 1em;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  height: 100%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n.content.no-grow[_ngcontent-%COMP%] {\n  flex-grow: 0;\n}\n\n.content.grow[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-weight: 200;\n  margin-left: 0.8em;\n}\n\n.not_mist[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 100;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n.box-apitab[_ngcontent-%COMP%] {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n\nbutton.apitab[_ngcontent-%COMP%] {\n  margin: 0.2em;\n  border-radius: 4px;\n  padding: 0.5em;\n  font-size: small;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  justify-items: center;\n  align-items: center;\n}\n\nbutton.apitab[_ngcontent-%COMP%]:enabled {\n  background-color: #0096a3;\n  color: white;\n  transition: background-color 0.2s ease-in-out;\n}\n\nbutton.apitab[_ngcontent-%COMP%]:enabled:hover {\n  box-shadow: rgba(50, 50, 93, 0.2509803922) 0 30px 60px -12px inset, rgba(0, 0, 0, 0.3019607843) 0 18px 36px -18px inset;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  padding: 0.5em;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  background-color: #eee;\n  color: #aaa;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;\n}\n\n.ids[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 0.5em;\n}\n\n.box-ids[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.box-ids-input[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-around;\n}\n\ninput.ids[_ngcontent-%COMP%]:-moz-read-only {\n  width: 100%;\n  border-radius: 2px;\n  text-align: center;\n  font: inherit;\n  font-weight: 200;\n  border: none;\n  padding: 0.3em;\n  border-radius: 60px;\n  background-color: transparent;\n  -moz-transition: all 1s ease-in-out;\n  transition: all 1s ease-in-out;\n}\n\ninput.ids[_ngcontent-%COMP%]:read-only {\n  width: 100%;\n  border-radius: 2px;\n  text-align: center;\n  font: inherit;\n  font-weight: 200;\n  border: none;\n  padding: 0.3em;\n  border-radius: 60px;\n  background-color: transparent;\n  transition: all 1s ease-in-out;\n}\n\ninput.ids[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n}\n\ninput.ids.focused[_ngcontent-%COMP%] {\n  background-color: #555;\n  transition: all 0.2s ease-in-out;\n}\n\nlabel.ids[_ngcontent-%COMP%] {\n  margin: 0.2em 0.5em 0.2em 1em;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  letter-spacing: 0.1em;\n}\n\nbutton.copy-ids[_ngcontent-%COMP%] {\n  background-color: white;\n  transition: all 0.2s ease-in-out;\n  border-radius: 5px;\n  display: flex;\n  margin-left: 1em;\n}\n\nbutton.copy-ids[_ngcontent-%COMP%]:hover   img.copy-ids[_ngcontent-%COMP%] {\n  filter: invert(42%) sepia(93%) saturate(1352%) hue-rotate(40deg) brightness(90%) contrast(119%);\n  transition: filter 0.2s ease-in-out;\n}\n\nimg.copy-ids[_ngcontent-%COMP%] {\n  height: 20px;\n}\n\nbutton.request[_ngcontent-%COMP%] {\n  margin: 2em;\n  background-color: transparent;\n  background-color: initial;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  cursor: pointer;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;\n  transition: background-color 0.2s ease-in-out;\n}\n\nbutton.request[_ngcontent-%COMP%]:hover {\n  background-color: lightgray;\n}\n\nimg.icon-open[_ngcontent-%COMP%] {\n  height: 15px;\n  padding: 0 5px;\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7QUFBSjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUFESjs7QUFLQTtFQUNJLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7QUFGSjs7QUFLQTtFQUVJLHVIQUFBO0FBSEo7O0FBT0E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFKSjs7QUFPQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLCtDQUFBO0FBSko7O0FBUUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBTEo7O0FBUUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUxKOztBQVFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FBTEo7O0FBUUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0VBQUEsOEJBQUE7QUFMSjs7QUFMQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUFMSjs7QUFRQTtFQUNJLGFBQUE7QUFMSjs7QUFRQTtFQUNJLHNCQUFBO0VBQ0EsZ0NBQUE7QUFMSjs7QUFRQTtFQUNJLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUxKOztBQVFBO0VBQ0ksdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBTEo7O0FBUUE7RUFDSSwrRkFBQTtFQUNBLG1DQUFBO0FBTEo7O0FBUUE7RUFDSSxZQUFBO0FBTEo7O0FBUUE7RUFDSSxXQUFBO0VBQ0EsNkJBQUE7RUFBQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsK0NBQUE7RUFDQSw2Q0FBQTtBQUxKOztBQVFBO0VBQ0ksMkJBQUE7QUFMSjs7QUFRQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsNEZBQUE7QUFMSiIsImZpbGUiOiJhcGkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDT05URU5BSVJTXG4uY29udGVudCB7XG4gICAgbWFyZ2luOiAwLjVlbSAxZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubm90aWNlLXRleHQge1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uY29udGVudC5uby1ncm93IHtcbiAgICBmbGV4LWdyb3c6IDA7XG59XG5cbi5jb250ZW50Lmdyb3cge1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxuLy8gVElUTEVTXG5oMiB7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBtYXJnaW4tbGVmdDogMC44ZW07XG59XG5cbi5ub3RfbWlzdCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi8vIGFwaXRhYlxuLmJveC1hcGl0YWIge1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbmJ1dHRvbi5hcGl0YWIge1xuICAgIG1hcmdpbjogMC4yZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IC41ZW07XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmJ1dHRvbi5hcGl0YWI6ZW5hYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTZhMztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG5idXR0b24uYXBpdGFiOmVuYWJsZWQ6aG92ZXIge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMwMDc2ODM7XG4gICAgYm94LXNoYWRvdzogIzMyMzI1ZDQwIDAgMzBweCA2MHB4IC0xMnB4IGluc2V0LCAjMDAwMDAwNGQgMCAxOHB4IDM2cHggLTE4cHggaW5zZXQ7XG59XG5cbi8vIEJVVFRPTlNcbmJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGNvbG9yOiAjYWFhO1xuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDUlKSAwcHggMHB4IDBweCAxcHg7XG59XG5cbi8vIERJU0FCTEVEIElOUFVURVNcbi5pZHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDAuNWVtO1xufVxuXG4uYm94LWlkcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ib3gtaWRzLWlucHV0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbmlucHV0LmlkczpyZWFkLW9ubHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAwLjNlbTtcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcbn1cblxuaW5wdXQuaWRzOmZvY3VzLXZpc2libGUge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbmlucHV0Lmlkcy5mb2N1c2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG5sYWJlbC5pZHMge1xuICAgIG1hcmdpbjogLjJlbSAuNWVtIC4yZW0gMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbn1cblxuYnV0dG9uLmNvcHktaWRzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xufVxuXG5idXR0b24uY29weS1pZHM6aG92ZXIgaW1nLmNvcHktaWRzIHtcbiAgICBmaWx0ZXI6IGludmVydCg0MiUpIHNlcGlhKDkzJSkgc2F0dXJhdGUoMTM1MiUpIGh1ZS1yb3RhdGUoNDBkZWcpIGJyaWdodG5lc3MoOTAlKSBjb250cmFzdCgxMTklKTtcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuaW1nLmNvcHktaWRzIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cbmJ1dHRvbi5yZXF1ZXN0IHtcbiAgICBtYXJnaW46IDJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyA1JSkgMHB4IDBweCAwcHggMXB4O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuYnV0dG9uLnJlcXVlc3Q6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuaW1nLmljb24tb3BlbiB7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgwZGVnKSBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDEwMCUpO1xufSJdfQ== */"] });


/***/ }),

/***/ 4276:
/*!******************************************************!*\
  !*** ./src/app/pages/api/django/django.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiDjangoComponent": () => (/* binding */ ApiDjangoComponent)
/* harmony export */ });
/* harmony import */ var _services_browser_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/browser.service */ 4071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);






function ApiDjangoComponent_div_4_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const query_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](query_r7.description);
} }
function ApiDjangoComponent_div_4_div_5_select_4_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const enum_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", enum_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](enum_r13);
} }
function ApiDjangoComponent_div_4_div_5_select_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ApiDjangoComponent_div_4_div_5_select_4_Template_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const query_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](query_r7.value = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApiDjangoComponent_div_4_div_5_select_4_option_1_Template, 2, 2, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const query_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", query_r7.value)("name", query_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", query_r7.schema.enum);
} }
function ApiDjangoComponent_div_4_div_5_div_5_select_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ApiDjangoComponent_div_4_div_5_div_5_select_1_Template_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const query_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](query_r7.value = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "True");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "False");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const query_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", query_r7.value)("name", query_r7.value);
} }
function ApiDjangoComponent_div_4_div_5_div_5_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ApiDjangoComponent_div_4_div_5_div_5_input_2_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const query_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](query_r7.value = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const query_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", query_r7.value);
} }
function ApiDjangoComponent_div_4_div_5_div_5_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ApiDjangoComponent_div_4_div_5_div_5_div_3_div_1_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const query_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](query_r7.value = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const query_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", query_r7.schema.minimum)("ngModel", query_r7.value);
} }
function ApiDjangoComponent_div_4_div_5_div_5_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ApiDjangoComponent_div_4_div_5_div_5_div_3_div_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const query_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](query_r7.value = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const query_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", query_r7.value);
} }
function ApiDjangoComponent_div_4_div_5_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApiDjangoComponent_div_4_div_5_div_5_div_3_div_1_Template, 2, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ApiDjangoComponent_div_4_div_5_div_5_div_3_div_2_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const query_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", "minimum")("ngIfIn", query_r7.schema);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !"minimum")("ngIfIn", query_r7.schema);
} }
function ApiDjangoComponent_div_4_div_5_div_5_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ApiDjangoComponent_div_4_div_5_div_5_div_4_div_1_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46); const query_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](query_r7.value = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const query_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", query_r7.schema.minimum)("ngModel", query_r7.value);
} }
function ApiDjangoComponent_div_4_div_5_div_5_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ApiDjangoComponent_div_4_div_5_div_5_div_4_div_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50); const query_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](query_r7.value = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const query_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", query_r7.value);
} }
function ApiDjangoComponent_div_4_div_5_div_5_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApiDjangoComponent_div_4_div_5_div_5_div_4_div_1_Template, 2, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ApiDjangoComponent_div_4_div_5_div_5_div_4_div_2_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const query_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", "minimum")("ngIfIn", query_r7.schema);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !"minimum")("ngIfIn", query_r7.schema);
} }
function ApiDjangoComponent_div_4_div_5_div_5_input_5_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ApiDjangoComponent_div_4_div_5_div_5_input_5_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55); const query_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](query_r7.value = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const query_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", query_r7.value);
} }
function ApiDjangoComponent_div_4_div_5_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApiDjangoComponent_div_4_div_5_div_5_select_1_Template, 5, 2, "select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ApiDjangoComponent_div_4_div_5_div_5_input_2_Template, 1, 1, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ApiDjangoComponent_div_4_div_5_div_5_div_3_Template, 3, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ApiDjangoComponent_div_4_div_5_div_5_div_4_Template, 3, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ApiDjangoComponent_div_4_div_5_div_5_input_5_Template, 1, 1, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const query_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", query_r7.schema.type == "boolean");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", query_r7.schema.type == "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", query_r7.schema.type == "integer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", query_r7.schema.type == "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", query_r7.schema.type != "boolean" && query_r7.schema.type != "integer" && query_r7.schema.type != "number" && query_r7.schema.type != "string");
} }
function ApiDjangoComponent_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ApiDjangoComponent_div_4_div_5_div_3_Template, 4, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ApiDjangoComponent_div_4_div_5_select_4_Template, 2, 3, "select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ApiDjangoComponent_div_4_div_5_div_5_Template, 6, 5, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const query_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", query_r7.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", query_r7.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", query_r7.schema.enum);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !query_r7.schema.enum);
} }
function ApiDjangoComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApiDjangoComponent_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r58.updateUrl()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Update URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ApiDjangoComponent_div_4_div_5_Template, 6, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.query_params);
} }
function ApiDjangoComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This API call hasn't any query parameters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ApiDjangoComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApiDjangoComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r60.openDoc(ctx_r60.docs.get.operationId)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "GET");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 30)(4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.docs.get.operationId, " ");
} }
function ApiDjangoComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApiDjangoComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r62.openDoc(ctx_r62.docs.post.operationId)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "POST");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 30)(4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.docs.post.operationId, " ");
} }
function ApiDjangoComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApiDjangoComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r64.openDoc(ctx_r64.docs.put.operationId)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "PUT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 30)(4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.docs.put.operationId, " ");
} }
function ApiDjangoComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApiDjangoComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r66.openDoc(ctx_r66.docs.delete.operationId)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "DELETE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 30)(4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.docs.delete.operationId, " ");
} }
const api_structure = __webpack_require__(/*! ../../../../assets/api.json */ 9759);
class ApiDjangoComponent {
    constructor(_cd, _browser) {
        this._cd = _cd;
        this._browser = _browser;
        this.mist_url = "";
        this.quick_links = [];
        this.path_params = [];
        this.query_params = [];
        this.docs = {
            "get": undefined,
            "post": undefined,
            "put": undefined,
            "delete": undefined,
        };
    }
    ngOnInit() {
        this.hosts = this._browser.getHostApi();
        this._browser.getUrl.then(tabUrl => {
            this.tabUrl = tabUrl.split("?");
            const path = this.tabUrl[0].split("/");
            const query = this.tabUrl[1];
            let path_part = path.splice(3, path.length);
            this.processPath(path_part, query);
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    // PÄTH FUNCTIONS
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    processPath(path_part, query) {
        let tmp = api_structure;
        path_part.forEach(next_path => {
            if ("paths" in tmp && next_path in tmp.paths) {
                tmp = tmp.paths[next_path];
            }
            else if ("paths" in tmp) {
                let data;
                for (let [key, val] of Object.entries(tmp.paths)) {
                    if (key.indexOf("{") == 0 && key.indexOf("}") == key.length - 1) {
                        data = val;
                    }
                }
                if (data)
                    tmp = data;
                else
                    console.error("Not able to find the right entry for " + path_part.join("/"));
            }
            else {
                console.error("Not able to find the right entry for " + path_part.join("/"));
            }
        });
        if ("specs" in tmp) {
            ["get", "post", "put", "delete"].forEach(method => {
                if (tmp["specs"][method]) {
                    this.docs[method] = {
                        operationId: tmp["specs"][method]["operationId"]
                    };
                }
            });
            if (this.docs["get"]) {
                this.processQuery(query, tmp["specs"]["get"]["parameters"]);
            }
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    // QUERY FUNCTIONS
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    processQuery(query, specs) {
        let query_key_value = {};
        if (query) {
            const query_parts = query.split("&");
            query_parts.forEach(part => {
                const splitted_part = part.split("=");
                query_key_value[splitted_part[0]] = splitted_part[1];
            });
        }
        if (specs) {
            specs.forEach((spec) => {
                let data = { name: "", value: "", description: "", schema: undefined };
                if ("in" in spec && spec["in"] == "query")
                    data = spec;
                else if ("$ref" in spec && spec["$ref"]) {
                    const ref_parts = spec["$ref"].split("/");
                    data = api_structure[ref_parts[1]][ref_parts[2]][ref_parts[3]];
                }
                data["value"] = query_key_value[data["name"]];
                this.query_params.push(data);
            });
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    // OTHER FUNCTIONS
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    updateUrl() {
        let url = this.tabUrl.split("?")[0];
        let query = [];
        this.query_params.forEach(param => {
            if (param.value != undefined)
                query.push(param.name + "=" + param.value);
        });
        if (query.length > 0)
            url = url + "?" + query.join("&");
        this._browser.tabUpdate(url);
    }
    // open a new tab with the url passed in parameter
    openApiTab(url) {
        this._browser.tabOpen(url);
    }
    openDoc(operation) {
        this._browser.tabOpenDoc(operation);
    }
}
ApiDjangoComponent.ɵfac = function ApiDjangoComponent_Factory(t) { return new (t || ApiDjangoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_browser_service__WEBPACK_IMPORTED_MODULE_0__.BrowserService)); };
ApiDjangoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ApiDjangoComponent, selectors: [["app-api-django"]], decls: 13, vars: 6, consts: [[1, "content", "no-grow"], [4, "ngIf"], ["class", "notice-text", 4, "ngIf"], ["class", "doc-link", 3, "click", 4, "ngIf"], [1, "update", 3, "click"], [1, "grid-wrapper"], ["class", "grid-item", 4, "ngFor", "ngForOf"], [1, "grid-item"], ["class", "tooltip", 4, "ngIf"], [3, "ngModel", "name", "ngModelChange", 4, "ngIf"], [1, "tooltip"], ["src", "assets/question.svg", 1, "help", "icon"], [1, "tooltiptext"], [3, "ngModel", "name", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "string", 3, "ngModel", "ngModelChange", 4, "ngIf"], [3, "ngModel", "ngModelChange", 4, "ngIf"], ["value", "true"], ["value", "false"], ["type", "string", 3, "ngModel", "ngModelChange"], [4, "ngIf", "ngIfIn"], ["type", "number", 3, "min", "ngModel", "ngModelChange"], ["type", "number", 3, "ngModel", "ngModelChange"], ["type", "number", "step", "0.01", 3, "min", "ngModel", "ngModelChange"], ["type", "number", "step", "0.01", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange"], [1, "notice-text"], [1, "doc-link", 3, "click"], [1, "method", "get"], [1, "operation"], [1, "operationId"], ["src", "assets/manual.svg", "alt", "question"], [1, "method", "post"], [1, "method", "put"], [1, "method", "delete"]], template: function ApiDjangoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Query Parameters");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ApiDjangoComponent_div_4_Template, 6, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ApiDjangoComponent_div_5_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div")(7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ApiDjangoComponent_button_9_Template, 8, 1, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ApiDjangoComponent_button_10_Template, 8, 1, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ApiDjangoComponent_button_11_Template, 8, 1, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ApiDjangoComponent_button_12_Template, 8, 1, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.query_params.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.query_params.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.docs.get);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.docs.post);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.docs.put);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.docs.delete);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], styles: [".grid-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  justify-items: stretch;\n  align-items: stretch;\n  justify-content: center;\n}\n\n.grid-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: stretch;\n  font-weight: 100;\n  margin: 0.2em 0.5em;\n  width: 150px;\n}\n\n.doc-link[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: smaller;\n  background-color: white;\n  border: 1px solid #eee;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\n  cursor: pointer;\n  margin: 1em 0;\n  transition: all 0.2s ease-in-out;\n}\n\n.doc-link[_ngcontent-%COMP%]:hover {\n  transition: all 0.2s ease-in-out;\n}\n\n.doc-link[_ngcontent-%COMP%]   .operation[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: 200;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  font-size: small;\n  padding: 0 0.5em;\n}\n\n.doc-link[_ngcontent-%COMP%]   .operation[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  color: gray;\n  height: 1.5em;\n  margin: 0.5em;\n  filter: invert(100%) sepia(0) saturate(1352%) hue-rotate(0deg) brightness(10%) contrast(0);\n}\n\n.operationId[_ngcontent-%COMP%] {\n  width: 14em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: gray;\n  text-align: start;\n}\n\n.method[_ngcontent-%COMP%] {\n  margin: 0.5em;\n  padding: 0.5em;\n  width: 6em;\n  font-weight: 500;\n  border-radius: 0.5em;\n  text-align: center;\n}\n\n.get[_ngcontent-%COMP%] {\n  color: green;\n  border: 1px solid green;\n}\n\n.post[_ngcontent-%COMP%] {\n  color: blue;\n  border: 1px solid blue;\n}\n\n.put[_ngcontent-%COMP%] {\n  color: orange;\n  border: 1px solid orange;\n}\n\n.delete[_ngcontent-%COMP%] {\n  color: red;\n  border: 1px solid red;\n}\n\n.help.icon[_ngcontent-%COMP%] {\n  filter: invert(100%) sepia(0) saturate(1352%) hue-rotate(0deg) brightness(10%) contrast(0);\n  height: 15px;\n  margin-left: 1px;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n  padding: 5px 0 5px 5px;\n  margin: 2px 0;\n}\n\nselect[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n\n.ng-untouched[_ngcontent-%COMP%] {\n  color: gray;\n}\n\nselect[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 4px;\n  border: 1px solid lightgray;\n  margin: 2px 0;\n}\n\nbutton.update[_ngcontent-%COMP%] {\n  background-color: #84b035;\n  color: white;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\n  transition: background-color 0.2s ease-in-out;\n  cursor: pointer;\n  width: 100%;\n  margin: 1em 0;\n}\n\nbutton.update[_ngcontent-%COMP%]:enabled:hover {\n  box-shadow: rgba(50, 50, 93, 0.2509803922) 0 30px 60px -12px inset, rgba(0, 0, 0, 0.3019607843) 0 18px 36px -18px inset;\n}\n\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n  top: 100%;\n  left: -30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5kamFuZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1GQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQURKOztBQUlBO0VBQ0ksZ0NBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSwwRkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0FBREo7O0FBSUE7RUFDSSxVQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFLQTtFQUNJLDBGQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7RUFDSSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUZKOztBQUtBOztFQUVJLDJFQUFBO0FBRko7O0FBS0E7RUFDSSxXQUFBO0FBRko7O0FBS0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtBQUZKOztBQU1BO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUZBQUE7RUFDQSw2Q0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUhKOztBQU1BO0VBRUksdUhBQUE7QUFKSjs7QUFRQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBTEoiLCJmaWxlIjoiYXBpLmRqYW5nby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEdSSURcbi5ncmlkLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdHJldGNoO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZ3JpZC1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgbWFyZ2luOiAuMmVtIC41ZW07XG4gICAgd2lkdGg6IDE1MHB4O1xufVxuXG4vLyBMSU5LU1xuLmRvYy1saW5rIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMTAlKSAwcHggMXB4IDNweCAwcHgsIHJnYigwIDAgMCAvIDYlKSAwcHggMXB4IDJweCAwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbjogMWVtIDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5kb2MtbGluazpob3ZlciB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5kb2MtbGluayAub3BlcmF0aW9uIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBwYWRkaW5nOiAwIDAuNWVtO1xufVxuXG4uZG9jLWxpbmsgLm9wZXJhdGlvbiBpbWcge1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgbWFyZ2luOiAwLjVlbTtcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwKSBzYXR1cmF0ZSgxMzUyJSkgaHVlLXJvdGF0ZSgwZGVnKSBicmlnaHRuZXNzKDEwJSkgY29udHJhc3QoMCk7XG59XG5cbi5vcGVyYXRpb25JZCB7XG4gICAgd2lkdGg6IDE0ZW07XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGNvbG9yOiBncmF5O1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG4ubWV0aG9kIHtcbiAgICBtYXJnaW46IDAuNWVtO1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIHdpZHRoOiA2ZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5nZXQge1xuICAgIGNvbG9yOiBncmVlbjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbn1cblxuLnBvc3Qge1xuICAgIGNvbG9yOiBibHVlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG59XG5cbi5wdXQge1xuICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xufVxuXG4uZGVsZXRlIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuLy8vLy8vIElOUFVUXG4uaGVscC5pY29uIHtcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwKSBzYXR1cmF0ZSgxMzUyJSkgaHVlLXJvdGF0ZSgwZGVnKSBicmlnaHRuZXNzKDEwJSkgY29udHJhc3QoMCk7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XG59XG5cbmlucHV0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgcGFkZGluZzogNXB4IDAgNXB4IDVweDtcbiAgICBtYXJnaW46IDJweCAwO1xufVxuXG5zZWxlY3Q6Zm9jdXMsXG5pbnB1dDpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiKDAgMCAwIC8gMTAlKSwgMCAxcHggMnB4IDAgcmdiKDAgMCAwIC8gNiUpO1xufVxuXG4ubmctdW50b3VjaGVkIHtcbiAgICBjb2xvcjogZ3JheTtcbn1cblxuc2VsZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIG1hcmdpbjogMnB4IDA7XG59XG5cbi8vIEJVVFRPTlxuYnV0dG9uLnVwZGF0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg0YjAzNTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAxcHggM3B4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMXB4IDJweCAwcHg7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDFlbSAwO1xufVxuXG5idXR0b24udXBkYXRlOmVuYWJsZWQ6aG92ZXIge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM2NDkwMTU7XG4gICAgYm94LXNoYWRvdzogIzMyMzI1ZDQwIDAgMzBweCA2MHB4IC0xMnB4IGluc2V0LCAjMDAwMDAwNGQgMCAxOHB4IDM2cHggLTE4cHggaW5zZXQ7XG59XG5cbi8vIHRvb2x0aXBcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XG4gICAgdG9wOiAxMDAlO1xuICAgIGxlZnQ6IC0zMCU7XG59Il19 */", ".content[_ngcontent-%COMP%] {\n  margin: 0.5em 1em;\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n}\n\n.notice-text[_ngcontent-%COMP%] {\n  padding: 1em;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  height: 100%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n.content.no-grow[_ngcontent-%COMP%] {\n  flex-grow: 0;\n}\n\n.content.grow[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-weight: 200;\n  margin-left: 0.8em;\n}\n\n.not_mist[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 100;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n.box-apitab[_ngcontent-%COMP%] {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n\nbutton.apitab[_ngcontent-%COMP%] {\n  margin: 0.2em;\n  border-radius: 4px;\n  padding: 0.5em;\n  font-size: small;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  justify-items: center;\n  align-items: center;\n}\n\nbutton.apitab[_ngcontent-%COMP%]:enabled {\n  background-color: #0096a3;\n  color: white;\n  transition: background-color 0.2s ease-in-out;\n}\n\nbutton.apitab[_ngcontent-%COMP%]:enabled:hover {\n  box-shadow: rgba(50, 50, 93, 0.2509803922) 0 30px 60px -12px inset, rgba(0, 0, 0, 0.3019607843) 0 18px 36px -18px inset;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  padding: 0.5em;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  background-color: #eee;\n  color: #aaa;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;\n}\n\n.ids[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 0.5em;\n}\n\n.box-ids[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.box-ids-input[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-around;\n}\n\ninput.ids[_ngcontent-%COMP%]:-moz-read-only {\n  width: 100%;\n  border-radius: 2px;\n  text-align: center;\n  font: inherit;\n  font-weight: 200;\n  border: none;\n  padding: 0.3em;\n  border-radius: 60px;\n  background-color: transparent;\n  -moz-transition: all 1s ease-in-out;\n  transition: all 1s ease-in-out;\n}\n\ninput.ids[_ngcontent-%COMP%]:read-only {\n  width: 100%;\n  border-radius: 2px;\n  text-align: center;\n  font: inherit;\n  font-weight: 200;\n  border: none;\n  padding: 0.3em;\n  border-radius: 60px;\n  background-color: transparent;\n  transition: all 1s ease-in-out;\n}\n\ninput.ids[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n}\n\ninput.ids.focused[_ngcontent-%COMP%] {\n  background-color: #555;\n  transition: all 0.2s ease-in-out;\n}\n\nlabel.ids[_ngcontent-%COMP%] {\n  margin: 0.2em 0.5em 0.2em 1em;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  letter-spacing: 0.1em;\n}\n\nbutton.copy-ids[_ngcontent-%COMP%] {\n  background-color: white;\n  transition: all 0.2s ease-in-out;\n  border-radius: 5px;\n  display: flex;\n  margin-left: 1em;\n}\n\nbutton.copy-ids[_ngcontent-%COMP%]:hover   img.copy-ids[_ngcontent-%COMP%] {\n  filter: invert(42%) sepia(93%) saturate(1352%) hue-rotate(40deg) brightness(90%) contrast(119%);\n  transition: filter 0.2s ease-in-out;\n}\n\nimg.copy-ids[_ngcontent-%COMP%] {\n  height: 20px;\n}\n\nbutton.request[_ngcontent-%COMP%] {\n  margin: 2em;\n  background-color: transparent;\n  background-color: initial;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  cursor: pointer;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;\n  transition: background-color 0.2s ease-in-out;\n}\n\nbutton.request[_ngcontent-%COMP%]:hover {\n  background-color: lightgray;\n}\n\nimg.icon-open[_ngcontent-%COMP%] {\n  height: 15px;\n  padding: 0 5px;\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7QUFBSjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUFESjs7QUFLQTtFQUNJLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7QUFGSjs7QUFLQTtFQUVJLHVIQUFBO0FBSEo7O0FBT0E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFKSjs7QUFPQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLCtDQUFBO0FBSko7O0FBUUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBTEo7O0FBUUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUxKOztBQVFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FBTEo7O0FBUUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0VBQUEsOEJBQUE7QUFMSjs7QUFMQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUFMSjs7QUFRQTtFQUNJLGFBQUE7QUFMSjs7QUFRQTtFQUNJLHNCQUFBO0VBQ0EsZ0NBQUE7QUFMSjs7QUFRQTtFQUNJLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUxKOztBQVFBO0VBQ0ksdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBTEo7O0FBUUE7RUFDSSwrRkFBQTtFQUNBLG1DQUFBO0FBTEo7O0FBUUE7RUFDSSxZQUFBO0FBTEo7O0FBUUE7RUFDSSxXQUFBO0VBQ0EsNkJBQUE7RUFBQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsK0NBQUE7RUFDQSw2Q0FBQTtBQUxKOztBQVFBO0VBQ0ksMkJBQUE7QUFMSjs7QUFRQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsNEZBQUE7QUFMSiIsImZpbGUiOiJhcGkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDT05URU5BSVJTXG4uY29udGVudCB7XG4gICAgbWFyZ2luOiAwLjVlbSAxZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubm90aWNlLXRleHQge1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uY29udGVudC5uby1ncm93IHtcbiAgICBmbGV4LWdyb3c6IDA7XG59XG5cbi5jb250ZW50Lmdyb3cge1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxuLy8gVElUTEVTXG5oMiB7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBtYXJnaW4tbGVmdDogMC44ZW07XG59XG5cbi5ub3RfbWlzdCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi8vIGFwaXRhYlxuLmJveC1hcGl0YWIge1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbmJ1dHRvbi5hcGl0YWIge1xuICAgIG1hcmdpbjogMC4yZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IC41ZW07XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmJ1dHRvbi5hcGl0YWI6ZW5hYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTZhMztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG5idXR0b24uYXBpdGFiOmVuYWJsZWQ6aG92ZXIge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMwMDc2ODM7XG4gICAgYm94LXNoYWRvdzogIzMyMzI1ZDQwIDAgMzBweCA2MHB4IC0xMnB4IGluc2V0LCAjMDAwMDAwNGQgMCAxOHB4IDM2cHggLTE4cHggaW5zZXQ7XG59XG5cbi8vIEJVVFRPTlNcbmJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGNvbG9yOiAjYWFhO1xuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDUlKSAwcHggMHB4IDBweCAxcHg7XG59XG5cbi8vIERJU0FCTEVEIElOUFVURVNcbi5pZHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDAuNWVtO1xufVxuXG4uYm94LWlkcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ib3gtaWRzLWlucHV0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbmlucHV0LmlkczpyZWFkLW9ubHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAwLjNlbTtcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcbn1cblxuaW5wdXQuaWRzOmZvY3VzLXZpc2libGUge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbmlucHV0Lmlkcy5mb2N1c2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG5sYWJlbC5pZHMge1xuICAgIG1hcmdpbjogLjJlbSAuNWVtIC4yZW0gMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbn1cblxuYnV0dG9uLmNvcHktaWRzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xufVxuXG5idXR0b24uY29weS1pZHM6aG92ZXIgaW1nLmNvcHktaWRzIHtcbiAgICBmaWx0ZXI6IGludmVydCg0MiUpIHNlcGlhKDkzJSkgc2F0dXJhdGUoMTM1MiUpIGh1ZS1yb3RhdGUoNDBkZWcpIGJyaWdodG5lc3MoOTAlKSBjb250cmFzdCgxMTklKTtcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuaW1nLmNvcHktaWRzIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cbmJ1dHRvbi5yZXF1ZXN0IHtcbiAgICBtYXJnaW46IDJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyA1JSkgMHB4IDBweCAwcHggMXB4O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuYnV0dG9uLnJlcXVlc3Q6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuaW1nLmljb24tb3BlbiB7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgwZGVnKSBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDEwMCUpO1xufSJdfQ== */", ".banner[_ngcontent-%COMP%] {\n  max-height: 50px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 22px;\n  top: 22px;\n  height: 55px;\n  width: 55px;\n  border-radius: 27px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\n  z-index: 100;\n}\n\napp-api[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  overflow: auto;\n}\n\napp-account[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n\napp-about[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n\n.app-container[_ngcontent-%COMP%] {\n  height: 450px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n\ndiv.bottom[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  border-top: solid 1px #ddd;\n}\n\nbutton.bottom[_ngcontent-%COMP%] {\n  background-color: #fff;\n  transition: all 0.2s ease-in-out;\n  flex-direction: column;\n  width: 100%;\n  border: none;\n  display: flex;\n  padding: 0.5em;\n  align-items: center;\n  cursor: pointer;\n}\n\nbutton.bottom[_ngcontent-%COMP%]:not(.selected):hover {\n  transition: all 0.2s ease-in-out;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  background-color: #eee;\n}\n\nbutton.bottom[_ngcontent-%COMP%]:active {\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n  transition: all 0.2s ease-in-out;\n  background-color: #aaa;\n}\n\nimg.bottom[_ngcontent-%COMP%] {\n  height: 2em;\n}\n\ndiv.bottom[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  word-spacing: 4px;\n  font-size: smaller;\n}\n\ndiv.xxs[_ngcontent-%COMP%] {\n  font-size: xx-small !important;\n}\n\nimg.icon[_ngcontent-%COMP%] {\n  margin: 0.2em;\n}\n\nbutton.selected[_ngcontent-%COMP%] {\n  color: #eee;\n  background-color: #999;\n  transition: all 0.2s ease-in-out;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;\n}\n\nbutton[_ngcontent-%COMP%]:not(.selected)   img[_ngcontent-%COMP%] {\n  filter: invert(100%) sepia(0%) saturate(1352%) hue-rotate(0deg) brightness(10%) contrast(0%);\n  transition: all 0.2s ease-in-out;\n}\n\nbutton.selected[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: invert(100%) sepia(0%) saturate(1352%) hue-rotate(0deg) brightness(90%) contrast(100%);\n  transition: all 0.2s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxxRkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EscUZBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQUFKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FBREo7O0FBSUE7RUFDSSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxnQ0FBQTtFQUNBLDJDQUFBO0VBQ0Esc0JBQUE7QUFESjs7QUFJQTtFQUNJLGlEQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtBQURKOztBQUlBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLDhCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDBHQUFBO0FBREo7O0FBSUE7RUFDSSw0RkFBQTtFQUNBLGdDQUFBO0FBREo7O0FBSUE7RUFDSSw4RkFBQTtFQUNBLGdDQUFBO0FBREoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbm5lciB7XG4gICAgbWF4LWhlaWdodDogNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMnB4IDRweCAtMXB4O1xufVxuXG4ubG9nbyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyMnB4O1xuICAgIHRvcDogMjJweDtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgd2lkdGg6IDU1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjdweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggNHB4IC0xcHg7XG4gICAgei1pbmRleDogMTAwO1xufVxuXG5hcHAtYXBpIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuYXBwLWFjY291bnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG5hcHAtYWJvdXQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8vXG4uYXBwLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA0NTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuXG4vL1xuZGl2LmJvdHRvbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNkZGQ7XG59XG5cbmJ1dHRvbi5ib3R0b20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b24uYm90dG9tOm5vdCguc2VsZWN0ZWQpOmhvdmVyIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG5cbmJ1dHRvbi5ib3R0b206YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG59XG5cbmltZy5ib3R0b20ge1xuICAgIGhlaWdodDogMmVtO1xufVxuXG5kaXYuYm90dG9tIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgd29yZC1zcGFjaW5nOiA0cHg7XG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xufVxuXG5kaXYueHhzIHtcbiAgICBmb250LXNpemU6IHh4LXNtYWxsICFpbXBvcnRhbnQ7XG59XG5cbmltZy5pY29uIHtcbiAgICBtYXJnaW46IDAuMmVtO1xufVxuXG5idXR0b24uc2VsZWN0ZWQge1xuICAgIGNvbG9yOiAjZWVlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggMzBweCA2MHB4IC0xMnB4IGluc2V0LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDE4cHggMzZweCAtMThweCBpbnNldDtcbn1cblxuYnV0dG9uOm5vdCguc2VsZWN0ZWQpIGltZyB7XG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDEzNTIlKSBodWUtcm90YXRlKDBkZWcpIGJyaWdodG5lc3MoMTAlKSBjb250cmFzdCgwJSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbmJ1dHRvbi5zZWxlY3RlZCBpbWcge1xuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgxMzUyJSkgaHVlLXJvdGF0ZSgwZGVnKSBicmlnaHRuZXNzKDkwJSkgY29udHJhc3QoMTAwJSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59Il19 */"] });


/***/ }),

/***/ 1512:
/*!******************************************************!*\
  !*** ./src/app/pages/api/manage/manage.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiManageComponent": () => (/* binding */ ApiManageComponent)
/* harmony export */ });
/* harmony import */ var _services_browser_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/browser.service */ 4071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);





function ApiManageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sorry, this website does not look like a Mist Dashboard...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "If you think I'm wrong, please send me an email with the current URL.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function ApiManageComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "ORG ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApiManageComponent_div_4_div_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.copyId(_r6)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r3.org_id)("ngClass", ctx_r3.focused == "org_id" ? "focused" : "");
} }
function ApiManageComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "SITE ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApiManageComponent_div_4_div_2_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.copyId(_r9)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r4.site_id)("ngClass", ctx_r4.focused == "site_id" ? "focused" : "");
} }
function ApiManageComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApiManageComponent_div_4_div_3_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.copyId(_r12)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, ctx_r5.obj_name), " ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r5.obj_id)("ngClass", ctx_r5.focused == "obj_id" ? "focused" : "");
} }
function ApiManageComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApiManageComponent_div_4_div_1_Template, 9, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ApiManageComponent_div_4_div_2_Template, 9, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ApiManageComponent_div_4_div_3_Template, 10, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.org_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.site_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.obj_id);
} }
function ApiManageComponent_div_5_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApiManageComponent_div_5_button_4_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const quick_link_r16 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.openApiTab(quick_link_r16.url)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quick_link_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, quick_link_r16.name));
} }
function ApiManageComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Quick API Access");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ApiManageComponent_div_5_button_4_Template, 5, 3, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.quick_links);
} }
class ApiManageComponent {
    constructor(_cd, _browser) {
        this._cd = _cd;
        this._browser = _browser;
        this.mist_url = "";
        this.quick_links = [];
        this.org_id = "";
        this.site_id = "";
        this.obj_id = "";
        this.obj_name = "";
        this.focused = "";
        this.hosts = [
            "manage.mist.com",
            "integration.mist.com",
            "manage.eu.mist.com",
            "manage.gc1.mist.com",
            "manage.gc2.mist.com",
            "manage.ac2.mist.com",
        ];
        this.external_links = {
            doc: "https://doc.mist-lab.fr",
            postman: "https://documenter.getpostman.com/view/224925/SzYgQufe",
            mist: "https://api.mist.com/api/v1/docs"
        };
    }
    ngOnInit() {
        this._browser.getUrl.then(tabUrl => {
            this.tabUrl = tabUrl;
            this.generateApiUrl();
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    // API URL ENTRYPOINT
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    // API URL ENTRYPOINT
    generateApiUrl() {
        const orgsle_re = /https:\/\/(manage|integration)\.(?<host>[a-z0-9.]*(mist|mistsys)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!dashboard\/(?<scope>siteComparison|wiredSiteComparison|wanSiteComparison)\/(?<sle>[a-z-]*)\/(?<worstsle>[a-z-]*)\/([a-z-_]*)\/(?<period>[0-9a-z-]*)\/(?<start>[0-9]*)\/(?<stop>[0-9]*)/iys;
        const sle_re = /https:\/\/(manage|integration)\.(?<host>[a-z0-9.]*(mist|mistsys)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!dashboard\/(?<detail>serviceLevels|wiredserviceLevels|wanserviceLevels)\/(?<scope>[a-z-]*)\/(?<scope_id>[a-f0-9-]*)\/(?<period>[0-9a-z-]*)\/(?<start>[0-9]*)\/(?<stop>[0-9]*)\/(?<site_id>[a-f0-9-]*)/iys;
        const insights_re = /https:\/\/(manage|integration)\.(?<host>[a-z0-9.]*(mist|mistsys)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!dashboard\/insights\/((?<obj>[a-z]+)\/)?((?<obj_id>[a-z0-9-]+)\/)?((?<period>[a-z0-9]+)\/)?((?<start>[0-9]*)\/)?((?<stop>[0-9]*)\/)?(?<site_id>[0-9a-f-]*)?/iys;
        const alarm_re = /https:\/\/(manage|integration)\.(?<host>[a-z0-9.]*(mist|mistsys)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!alerts\/?(?<scope>org|site)?\/?(?<uuid>[0-9a-z-]*)\/?(?<period>[0-9a-z]*)?\/?(?<start>[0-9]*)?\/?(?<stop>[0-9]*)?\/?(?<show_ack>true|false)?\/?(?<group>[a-z%0-9]*)?\/?(?<show_crit>true|false)?\/?(?<show_warn>true|false)?\/?(?<show_info>true|false)?\/?(?<site_id>[0-9a-z-]*)?/iys;
        const events_re = /https:\/\/(manage|integration)\.(?<host>[a-z0-9.]*(mist|mistsys)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!marvis\/?(?<scope>org|site)?\/?(?<period>[0-9a-z]*)?\/?(?<start>[0-9]*)?\/?(?<stop>[0-9]*)?\/?(?<site_id>[0-9a-z-]*)?/iys;
        const floorplans_re = /https:\/\/(manage|integration)\.(?<host>[a-z0-9.]*mist\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!cliLocation\/(?<detail>view|config|validationPath|wayfinding)?\/?(?<uuid>[0-9a-f-]*)\/?(floorplan|beaconsAndZones)?\/?(?<site_id>[0-9a-f-]*)?/iys;
        const evpn_re = /https:\/\/(manage|integration)\.(?<host>[a-z0-9.]*(mist|mistsys)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!evpn\/site\/?([0-9]\/)?(?<site_id>[0-9a-z_-]*)?(\/(?<topology_id>[0-9a-f-]*))?/yis;
        const site_wlan_template_re = /https:\/\/(manage|integration)\.(?<host>[a-z0-9.]*(mist|mistsys)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!wlan\/orgWlanDetail\/(?<template_id>[0-9a-z_-]*)\/(?<wlan_id>[0-9a-f-]*)\/(?<site_id>[0-9a-f-]*)/is;
        const site_common_re = /https:\/\/(manage|integration)\.(?<host>[a-z0-9.]*(mist|mistsys)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!(?<obj>[a-z]+)\/?((?<detail>detail|site|admin|edgedetail|clusterdetail|new|view)\/)?([0-9]\/)?((?<obj_id>[0-9a-z_-]*)\/)?(?<site_id>[0-9a-f-]*)?/yis;
        const site_common_objs = ["ap", "gateway", "switch", "assets", "wlan", "tags", "psk", "tunnels", "clients", "sdkclients", "wiredclients", "wxlan", "security", "switchconfig", "pcap", "siteedge"];
        const org_common_re = /https:\/\/(manage|integration)\.(?<host>[a-z0-9.]*(mist|mistsys)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!(?<obj>[a-z]+)\/?((?<detail>detail|site|admin|edgedetail|clusterdetail|new|view|template|rfTemplate)\/)?([0-9]\/)?((?<obj_id>[0-9a-z_-]*))/yis;
        const org_common_objs = ["orgtags", "misttunnels", "templates", "switchtemplate", "gatewaytemplates", "hubs", "deviceprofiles", "org", "orgpsk", "configuration", "auditlogs", "apinventory", "adminconfig", "subscription", "edge", "vpns", "template", "rftemplates", "services", "networks", "applicationpolicy", "nactags", "naccertificates", "nacpolicy", "nacidentityproviders", "onboardingworkflow"];
        const base_re = /https:\/\/(manage|integration)\.(?<host>[a-z0-9.]*(mist|mistsys)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!/yis;
        const orgsle = orgsle_re.exec(this.tabUrl);
        const sle = sle_re.exec(this.tabUrl);
        const insights = insights_re.exec(this.tabUrl);
        const alarm = alarm_re.exec(this.tabUrl);
        const evpn = evpn_re.exec(this.tabUrl);
        const site_wlan_template = site_wlan_template_re.exec(this.tabUrl);
        const events = events_re.exec(this.tabUrl);
        const floorplans = floorplans_re.exec(this.tabUrl);
        const site_common = site_common_re.exec(this.tabUrl);
        const org_common = org_common_re.exec(this.tabUrl);
        const base = base_re.exec(this.tabUrl);
        if (orgsle) {
            this.orgSleUrl(orgsle);
        }
        else if (sle) {
            this.sleUrl(sle);
        }
        else if (insights) {
            this.insightsUrl(insights);
        }
        else if (alarm) {
            this.alarmUrl(alarm);
        }
        else if (evpn) {
            this.evpnUrl(evpn);
        }
        else if (site_wlan_template) {
            this.siteWlanTemplateUrl(site_wlan_template);
        }
        else if (events) {
            this.eventsUrl(events);
        }
        else if (floorplans) {
            this.floorplansUrl(floorplans);
        }
        else if (site_common && site_common["groups"] && site_common_objs.includes(site_common["groups"]["obj"].toLowerCase())) {
            this.commonSiteUrl(site_common);
        }
        else if (org_common && org_common["groups"] && org_common_objs.includes(org_common["groups"]["obj"].toLowerCase())) {
            this.commonOrgUrl(org_common);
        }
        else if (base) {
            this.baseUrl(base);
        }
        this._cd.detectChanges();
    }
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    // API URL
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// MAC 
    getMac(uuid) {
        const splitted_uuid = uuid.split("-");
        return splitted_uuid[splitted_uuid.length - 1];
    }
    setName(obj_name = "", detail) {
        obj_name = obj_name.toLowerCase();
        if (detail && detail != "new") {
            this.obj_name = obj_name;
        }
        else {
            if (obj_name.includes("switch")) {
                this.obj_name = obj_name.replace("switch", "switches");
            }
            else if (obj_name.includes("policy")) {
                this.obj_name = obj_name.replace("policy", "policies");
            }
            else {
                this.obj_name = obj_name + "s";
            }
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// COMMON ORG FUNCTIONS
    forgeOrgObject(obj_name, host, detail, extra_param = undefined) {
        let url = "";
        if (detail && detail != "new") {
            // set QUICK LINK
            url = "https://api." + host + "/api/v1/orgs/" + this.org_id + "/" + obj_name + "/" + this.obj_id;
            this.quick_links.push({ url: url, name: this.obj_name });
        }
        else {
            // set QUICK LINK
            this.obj_id = undefined;
            url = "https://api." + host + "/api/v1/orgs/" + this.org_id + "/" + obj_name;
            if (extra_param)
                url += "?" + extra_param;
            this.quick_links.push({ url: url, name: this.obj_name });
        }
    }
    forgeOrgObjectStats(obj_name, host, detail, extra_param = undefined) {
        let url = "";
        if (detail && detail != "new") {
            // set QUICK LINK
            url = "https://api." + host + "/api/v1/orgs/" + this.org_id + "/stats/" + obj_name + "/" + this.obj_id;
            if (extra_param)
                url += "?" + extra_param;
            this.quick_links.push({ url: url, name: this.obj_name + " STATS" });
        }
    }
    forgeOrgObjectEvents(obj_name, host, detail, extra_param = undefined) {
        let url = "";
        if (detail && detail != "new" && this.obj_id) {
            // MAC
            const mac = this.getMac(this.obj_id);
            // set QUICK LINK
            url = "https://api." + host + "/api/v1/orgs/" + this.org_id + "/" + obj_name + "/events/search?limit=1000&mac=" + mac;
            if (!extra_param) {
                url += "&duration=1d";
            }
            else {
                url += "&" + extra_param;
            }
            this.quick_links.push({ url: url, name: this.obj_name + " EVENTS" });
        }
        else {
            url = "https://api." + host + "/api/v1/orgs/" + this.org_id + "/" + obj_name + "/events/search?limit=1000&device_type=" + obj_name;
            if (!extra_param) {
                url += "&duration=1d";
            }
            else {
                url += "&" + extra_param;
            }
            this.quick_links.push({ url: url, name: this.obj_name + " EVENTS" });
        }
    }
    forgeOrgNacIdp(host) {
        if (this.obj_id) {
            this.quick_links.push({ name: "NAC IDP", url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/ssos/" + this.obj_id }, { name: "NAC IDP Metadata", url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/ssos/" + this.obj_id + "/metadata" }, { name: "DOWNLOAD NAC IDP Metadata", url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/ssos/" + this.obj_id + "/metadata.xml" }, { name: "NAC IDP Latest failures", url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/ssos/" + this.obj_id + "/failures" });
        }
        else {
            this.quick_links.push({ name: "ORG SSOS", url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/ssos" });
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// COMMON SITE FUNCTIONS
    forgeSiteObject(obj_name, host, detail, extra_param = undefined) {
        let url = "";
        if (detail && detail != "new") {
            // set QUICK LINK
            url = "https://api." + host + "/api/v1/sites/" + this.site_id + "/" + obj_name + "/" + this.obj_id;
            this.quick_links.push({ url: url, name: this.obj_name });
            if (["switch", "gateway"].includes(this.obj_name)) {
                this.quick_links.push({ url: url + "/config_cmd", name: this.obj_name + " CMDS" });
            }
        }
        else {
            // set QUICK LINK
            url = "https://api." + host + "/api/v1/sites/" + this.site_id + "/" + obj_name;
            if (extra_param)
                url += "?" + extra_param;
            this.quick_links.push({ url: url, name: this.obj_name });
        }
    }
    forgeSiteObjectSearch(obj_name, host, detail, extra_param = undefined) {
        let url = "";
        if (detail && detail != "new") {
            // set QUICK LINK
            url = "https://api." + host + "/api/v1/sites/" + this.site_id + "/" + obj_name + "/search?mac=" + this.obj_id;
            this.quick_links.push({ url: url, name: this.obj_name });
        }
        else {
            // set QUICK LINK
            url = "https://api." + host + "/api/v1/sites/" + this.site_id + "/" + obj_name + "/search";
            if (extra_param)
                url += "?" + extra_param;
            this.quick_links.push({ url: url, name: this.obj_name });
        }
    }
    forgeSiteObjectStats(obj_name, host, detail, extra_param = undefined) {
        let url = "";
        if (detail && detail != "new") {
            // set QUICK LINK
            url = "https://api." + host + "/api/v1/sites/" + this.site_id + "/stats/" + obj_name + "/" + this.obj_id;
            if (extra_param)
                url += "?" + extra_param;
            this.quick_links.push({ url: url, name: this.obj_name + " STATS" });
        }
        else {
            // set QUICK LINK
            url = "https://api." + host + "/api/v1/sites/" + this.site_id + "/stats/" + obj_name;
            if (extra_param)
                url += "?" + extra_param;
            this.quick_links.push({ url: url, name: this.obj_name + " STATS" });
        }
    }
    forgeSiteObjectEvents(obj_name, device_type, host, detail, extra_param = undefined) {
        let url = "";
        if (detail && detail != "new" && this.obj_id) {
            // MAC
            const mac = this.getMac(this.obj_id);
            // set QUICK LINK
            url = "https://api." + host + "/api/v1/sites/" + this.site_id + "/" + obj_name + "/events/search?limit=1000&mac=" + mac;
            if (!extra_param) {
                url += "&duration=1d";
            }
            else {
                url += "&" + extra_param;
            }
            this.quick_links.push({ url: url, name: this.obj_name + " EVENTS" });
        }
        else {
            url = "https://api." + host + "/api/v1/sites/" + this.site_id + "/" + obj_name + "/events/search?limit=1000";
            if (device_type) {
                url += "&device_type=" + device_type;
            }
            if (!extra_param) {
                url += "&duration=1d";
            }
            else {
                url += "&" + extra_param;
            }
            this.quick_links.push({ url: url, name: this.obj_name + " EVENTS" });
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// SITE SECURITY FUNCTION
    forgeSiteSecurity(host) {
        this.quick_links.push({
            url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/rogues/events/search?limit=100&duration=1d",
            name: "rogues events"
        }, {
            url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/insights/rogues?limit=100&duration=1d",
            name: "all aps"
        }, {
            url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/insights/rogues?limit=100&duration=1d&type=honeypot",
            name: "honeypot aps"
        }, {
            url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/insights/rogues?limit=100&duration=1d&type=lan",
            name: "rogues aps"
        }, {
            url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/insights/rogues?limit=100&duration=1d&type=spoof",
            name: "spoof aps"
        }, {
            url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/insights/rogues?limit=100&duration=1d&type=others",
            name: "others aps"
        }, {
            url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/insights/rogues/clients?limit=100&duration=1d",
            name: "rogues clients"
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// SITE SWITCH CONF FUNCTION
    forgeSiteSwitchConfig(host) {
        this.quick_links.push({
            url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/setting/derived",
            name: "switchconfig"
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// SITE DEVICE LAST CONFIG FUNCTION
    forgeSiteApLastConfig(detail, host, device_type) {
        if (detail && this.obj_id) {
            const mac = this.getMac(this.obj_id);
            if (device_type == "ap" && mac) {
                this.quick_links.push({
                    url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/devices/last_config/search?" + device_type + "=" + mac,
                    name: "Last Config"
                });
            }
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// ORG OBJ FUNCTION
    forgeOrg(host) {
        this.quick_links.push({
            url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/setting",
            name: "org setting"
        }, {
            url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/stats",
            name: "org stats"
        }, {
            url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/ssos",
            name: "org ssos"
        }, {
            url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/webhooks",
            name: "org webhooks"
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// SITE ASSETS FUNCTION
    forgeAsset(host, mac) {
        if (mac)
            this.quick_links.push({
                url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/zones/visits/search?duration=1d&interval=3600&user_type=asset&scope=zone&user=" + mac,
                name: "asset zones visits"
            });
    }
    forgeSiteAssetStats(obj_name, host, detail, extra_param = undefined) {
        let url = "";
        if (detail && detail != "new") {
            // set QUICK LINK
            url = "https://api." + host + "/api/v1/sites/" + this.site_id + "/stats/" + obj_name + "/" + this.obj_id;
            if (extra_param)
                url += "?" + extra_param;
            this.quick_links.push({ url: url, name: this.obj_name + " STATS" });
        }
        else {
            // set QUICK LINK
            url = "https://api." + host + "/api/v1/sites/" + this.site_id + "/stats/assets";
            if (extra_param)
                url += "?" + extra_param;
            this.quick_links.push({ url: url, name: "ASSETS STATS" });
            url = "https://api." + host + "/api/v1/sites/" + this.site_id + "/stats/discovered_assets";
            if (extra_param)
                url += "?" + extra_param;
            this.quick_links.push({ url: url, name: "DISCOVERED ASSETS STATS" });
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// SITE OBJ FUNCTION
    forgeSite(host, detail, extra_params = undefined) {
        if (extra_params) {
            extra_params = "?" + extra_params;
        }
        else {
            extra_params = "";
        }
        if (detail == "site") {
            this.site_id = this.obj_id;
            this.obj_id = undefined;
            this.quick_links.push({
                url: "https://api." + host + "/api/v1/sites/" + this.site_id,
                name: "site info"
            }, {
                url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/setting",
                name: "site setting"
            }, {
                url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/webhooks",
                name: "site webhooks"
            }, {
                url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/stats" + extra_params,
                name: "site stats"
            }, {
                url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/devices/events/search" + extra_params,
                name: "site devices events"
            });
        }
        else {
            this.obj_id = undefined;
            this.quick_links.push({
                url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/sites",
                name: "sites"
            }, {
                url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/sites/search",
                name: "site configs"
            }, {
                url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/sitegroups",
                name: "site groups"
            });
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// MIST EDGE FUNCTION
    forgeEdge(host, detail) {
        if (detail == "edgedetail") {
            this.obj_name = "mxedge";
            this.forgeOrgObject("mxedges", host, detail);
            this.forgeOrgObjectStats("mxedges", host, detail);
            this.forgeSiteObjectEvents("mxedges", "mxedge", host, detail);
        }
        else if (detail == "clusterdetail") {
            this.obj_name = "mxcluster";
            this.forgeOrgObject("mxclusters", host, detail);
        }
        else {
            this.quick_links.push({
                url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/mxedges",
                name: "mxedges"
            }, {
                url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/mxclusters",
                name: "mxclusters"
            });
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// HUB PROFILE FUNCTION
    forgeHubProfile(host, detail) {
        if (detail == "detail") {
            this.obj_name = "hubprofile";
            this.forgeOrgObject("deviceprofiles", host, detail);
        }
        else {
            this.quick_links.push({
                url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/deviceprofiles?type=gateway",
                name: "hubprofiles"
            });
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// DISCOVERED SWITCHES FUNCTION
    forgeSiteDiscoveredSwitchUrl(host, mac = undefined) {
        if (mac) {
            this.quick_links.push({
                url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/stats/discovered_switches/search?system_name=" + mac,
                name: "discovered switch"
            });
        }
        else if (!this.obj_id) {
            this.quick_links.push({
                url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/stats/discovered_switches/search",
                name: "discovered switches"
            });
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// ORG SLE FUNCTION
    forgeOrgSlehUrl(host, scope, sle, worstsle = undefined, extra_params = undefined) {
        /*
        host: mist.com, eu.mist.com, gc1.mist.com
        scope: wifi, wire, wan
        */
        if (!worstsle || worstsle == "-")
            worstsle = sle;
        this.quick_links.push({
            url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/insights/sites-sle?sle=" + scope + "&" + extra_params,
            name: scope + " Org SLEs"
        }, {
            url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/insights/worst-sites-by-sle?sle=" + worstsle + "&" + extra_params,
            name: "Worst sites by " + worstsle
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////
    //////////////////////  SLE FUNCTION
    forgeSlehUrl(host, scope, site_id, scope_id, sles, extra_params = null) {
        /*
        host: mist.com, eu.mist.com, gc1.mist.com
        scope: wifi, wire, wan
        */
        sles.forEach(sle => {
            this.quick_links.push({
                url: "https://api." + host + "/api/v1/sites/" + site_id + "/sle/" + scope + "/" + scope_id + "/metric/" + sle + "/summary-trend?" + extra_params,
                name: sle + " " + scope + " SLE"
            });
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// BASE URL FUNCTION DISPATCHER
    baseUrl(res) {
        var _a;
        this.org_id = (_a = res === null || res === void 0 ? void 0 : res.groups) === null || _a === void 0 ? void 0 : _a.org_id;
    }
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// ORG WLANS FUNCTION DISPATCHER FOR SITE URLS
    siteWlanTemplateUrl(res) {
        var _a, _b, _c, _d, _e, _f, _g;
        this.org_id = (_a = res === null || res === void 0 ? void 0 : res.groups) === null || _a === void 0 ? void 0 : _a.org_id;
        this.site_id = (_b = res === null || res === void 0 ? void 0 : res.groups) === null || _b === void 0 ? void 0 : _b.site_id;
        this.obj_id = (_c = res === null || res === void 0 ? void 0 : res.groups) === null || _c === void 0 ? void 0 : _c.wlan_id;
        this.quick_links.push({
            url: "https://api." + ((_d = res === null || res === void 0 ? void 0 : res.groups) === null || _d === void 0 ? void 0 : _d.host) + "/api/v1/orgs/" + this.org_id + "/wlans/" + ((_e = res === null || res === void 0 ? void 0 : res.groups) === null || _e === void 0 ? void 0 : _e.wlan_id),
            name: "Org Wlan in use"
        }, {
            url: "https://api." + ((_f = res === null || res === void 0 ? void 0 : res.groups) === null || _f === void 0 ? void 0 : _f.host) + "/api/v1/orgs/" + this.org_id + "/templates/" + ((_g = res === null || res === void 0 ? void 0 : res.groups) === null || _g === void 0 ? void 0 : _g.template_id),
            name: "Org Config Template in use"
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// COMMON URL FUNCTION DISPATCHER FOR SITE URLS
    commonSiteUrl(res) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62;
        this.org_id = (_a = res === null || res === void 0 ? void 0 : res.groups) === null || _a === void 0 ? void 0 : _a.org_id;
        let extra_params = undefined;
        const uuid_re = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;
        if (((_b = res === null || res === void 0 ? void 0 : res.groups) === null || _b === void 0 ? void 0 : _b.host) && ((_c = res === null || res === void 0 ? void 0 : res.groups) === null || _c === void 0 ? void 0 : _c.org_id) && ((_d = res === null || res === void 0 ? void 0 : res.groups) === null || _d === void 0 ? void 0 : _d.obj)) {
            this.obj_id = (_e = res === null || res === void 0 ? void 0 : res.groups) === null || _e === void 0 ? void 0 : _e.obj_id;
            this.site_id = (_f = res === null || res === void 0 ? void 0 : res.groups) === null || _f === void 0 ? void 0 : _f.site_id;
            switch ((_g = res === null || res === void 0 ? void 0 : res.groups) === null || _g === void 0 ? void 0 : _g.obj.toLowerCase()) {
                // SITE
                case "ap":
                case "gateway":
                    this.setName((_h = res === null || res === void 0 ? void 0 : res.groups) === null || _h === void 0 ? void 0 : _h.obj, (_j = res === null || res === void 0 ? void 0 : res.groups) === null || _j === void 0 ? void 0 : _j.detail);
                    if (!((_k = res === null || res === void 0 ? void 0 : res.groups) === null || _k === void 0 ? void 0 : _k.details))
                        extra_params = "type=" + ((_l = res === null || res === void 0 ? void 0 : res.groups) === null || _l === void 0 ? void 0 : _l.obj);
                    this.forgeSiteObject("devices", (_m = res === null || res === void 0 ? void 0 : res.groups) === null || _m === void 0 ? void 0 : _m.host, (_o = res === null || res === void 0 ? void 0 : res.groups) === null || _o === void 0 ? void 0 : _o.detail, extra_params);
                    this.forgeSiteObjectStats("devices", (_p = res === null || res === void 0 ? void 0 : res.groups) === null || _p === void 0 ? void 0 : _p.host, (_q = res === null || res === void 0 ? void 0 : res.groups) === null || _q === void 0 ? void 0 : _q.detail, extra_params);
                    this.forgeSiteObjectEvents("devices", (_r = res === null || res === void 0 ? void 0 : res.groups) === null || _r === void 0 ? void 0 : _r.obj, (_s = res === null || res === void 0 ? void 0 : res.groups) === null || _s === void 0 ? void 0 : _s.host, (_t = res === null || res === void 0 ? void 0 : res.groups) === null || _t === void 0 ? void 0 : _t.detail);
                    this.forgeSiteApLastConfig((_u = res === null || res === void 0 ? void 0 : res.groups) === null || _u === void 0 ? void 0 : _u.detail, (_v = res === null || res === void 0 ? void 0 : res.groups) === null || _v === void 0 ? void 0 : _v.host, (_w = res === null || res === void 0 ? void 0 : res.groups) === null || _w === void 0 ? void 0 : _w.obj);
                    break;
                case "switch":
                    if (["list", "topology", "location"].includes(this.obj_id))
                        this.obj_id = undefined;
                    var is_uuid = false;
                    if (this.obj_id)
                        is_uuid = uuid_re.test(this.obj_id);
                    if (this.obj_id && !is_uuid) {
                        this.obj_name = "discoveredswitch";
                        this.setName("discoveredswitch", "detail");
                        this.forgeSiteDiscoveredSwitchUrl((_x = res === null || res === void 0 ? void 0 : res.groups) === null || _x === void 0 ? void 0 : _x.host, this.obj_id);
                    }
                    else {
                        this.setName((_y = res === null || res === void 0 ? void 0 : res.groups) === null || _y === void 0 ? void 0 : _y.obj, (_z = res === null || res === void 0 ? void 0 : res.groups) === null || _z === void 0 ? void 0 : _z.detail);
                        if (!((_0 = res === null || res === void 0 ? void 0 : res.groups) === null || _0 === void 0 ? void 0 : _0.details))
                            extra_params = "type=" + ((_1 = res === null || res === void 0 ? void 0 : res.groups) === null || _1 === void 0 ? void 0 : _1.obj);
                        this.forgeSiteObject("devices", (_2 = res === null || res === void 0 ? void 0 : res.groups) === null || _2 === void 0 ? void 0 : _2.host, (_3 = res === null || res === void 0 ? void 0 : res.groups) === null || _3 === void 0 ? void 0 : _3.detail, extra_params);
                        this.forgeSiteObjectStats("devices", (_4 = res === null || res === void 0 ? void 0 : res.groups) === null || _4 === void 0 ? void 0 : _4.host, (_5 = res === null || res === void 0 ? void 0 : res.groups) === null || _5 === void 0 ? void 0 : _5.detail, extra_params);
                        this.forgeSiteObjectEvents("devices", (_6 = res === null || res === void 0 ? void 0 : res.groups) === null || _6 === void 0 ? void 0 : _6.obj, (_7 = res === null || res === void 0 ? void 0 : res.groups) === null || _7 === void 0 ? void 0 : _7.host, (_8 = res === null || res === void 0 ? void 0 : res.groups) === null || _8 === void 0 ? void 0 : _8.detail);
                        this.forgeSiteDiscoveredSwitchUrl((_9 = res === null || res === void 0 ? void 0 : res.groups) === null || _9 === void 0 ? void 0 : _9.host);
                    }
                    break;
                case "assets":
                    // need to retrieve the asset ID to generate the detail request
                    if (!((_10 = res === null || res === void 0 ? void 0 : res.groups) === null || _10 === void 0 ? void 0 : _10.detail)) {
                        this.setName((_11 = res === null || res === void 0 ? void 0 : res.groups) === null || _11 === void 0 ? void 0 : _11.obj.substr(0, ((_12 = res === null || res === void 0 ? void 0 : res.groups) === null || _12 === void 0 ? void 0 : _12.obj.length) - 1), (_13 = res === null || res === void 0 ? void 0 : res.groups) === null || _13 === void 0 ? void 0 : _13.detail);
                        this.forgeSiteObject((_14 = res === null || res === void 0 ? void 0 : res.groups) === null || _14 === void 0 ? void 0 : _14.obj, (_15 = res === null || res === void 0 ? void 0 : res.groups) === null || _15 === void 0 ? void 0 : _15.host, (_16 = res === null || res === void 0 ? void 0 : res.groups) === null || _16 === void 0 ? void 0 : _16.detail);
                        this.forgeSiteAssetStats((_17 = res === null || res === void 0 ? void 0 : res.groups) === null || _17 === void 0 ? void 0 : _17.obj, (_18 = res === null || res === void 0 ? void 0 : res.groups) === null || _18 === void 0 ? void 0 : _18.host, (_19 = res === null || res === void 0 ? void 0 : res.groups) === null || _19 === void 0 ? void 0 : _19.detail);
                    }
                    else {
                        this.forgeAsset((_20 = res === null || res === void 0 ? void 0 : res.groups) === null || _20 === void 0 ? void 0 : _20.host, this.obj_id);
                    }
                    break;
                case "wlan":
                    this.setName((_21 = res === null || res === void 0 ? void 0 : res.groups) === null || _21 === void 0 ? void 0 : _21.obj, (_22 = res === null || res === void 0 ? void 0 : res.groups) === null || _22 === void 0 ? void 0 : _22.detail);
                    this.forgeSiteObject("wlans", (_23 = res === null || res === void 0 ? void 0 : res.groups) === null || _23 === void 0 ? void 0 : _23.host, (_24 = res === null || res === void 0 ? void 0 : res.groups) === null || _24 === void 0 ? void 0 : _24.detail);
                    break;
                case "tags":
                    this.setName("wxtag", (_25 = res === null || res === void 0 ? void 0 : res.groups) === null || _25 === void 0 ? void 0 : _25.detail);
                    this.forgeSiteObject("wxtags", (_26 = res === null || res === void 0 ? void 0 : res.groups) === null || _26 === void 0 ? void 0 : _26.host, (_27 = res === null || res === void 0 ? void 0 : res.groups) === null || _27 === void 0 ? void 0 : _27.detail);
                    break;
                case "psk":
                    this.setName((_28 = res === null || res === void 0 ? void 0 : res.groups) === null || _28 === void 0 ? void 0 : _28.obj, (_29 = res === null || res === void 0 ? void 0 : res.groups) === null || _29 === void 0 ? void 0 : _29.detail);
                    this.forgeSiteObject("psks", (_30 = res === null || res === void 0 ? void 0 : res.groups) === null || _30 === void 0 ? void 0 : _30.host, (_31 = res === null || res === void 0 ? void 0 : res.groups) === null || _31 === void 0 ? void 0 : _31.detail);
                    break;
                // case "siteedge":
                //   // NOT ABLE TO GET SITE ID FROM URL
                //   this.forgeSiteObject("mxedges", res?.groups?.host, res?.groups?.detail);
                //   this.forgeSiteObjectStats("mxedges", res?.groups?.host, res?.groups?.detail);
                //   break;
                case "tunnels":
                    this.setName("wxtunnel", (_32 = res === null || res === void 0 ? void 0 : res.groups) === null || _32 === void 0 ? void 0 : _32.detail);
                    this.forgeSiteObject("wxtunnels", (_33 = res === null || res === void 0 ? void 0 : res.groups) === null || _33 === void 0 ? void 0 : _33.host, (_34 = res === null || res === void 0 ? void 0 : res.groups) === null || _34 === void 0 ? void 0 : _34.detail);
                    this.forgeSiteObjectStats("wxtunnels", (_35 = res === null || res === void 0 ? void 0 : res.groups) === null || _35 === void 0 ? void 0 : _35.host, (_36 = res === null || res === void 0 ? void 0 : res.groups) === null || _36 === void 0 ? void 0 : _36.detail);
                    break;
                case "clients":
                case "sdkclients":
                    this.setName((_37 = res === null || res === void 0 ? void 0 : res.groups) === null || _37 === void 0 ? void 0 : _37.obj.substr(0, ((_38 = res === null || res === void 0 ? void 0 : res.groups) === null || _38 === void 0 ? void 0 : _38.obj.length) - 1), (_39 = res === null || res === void 0 ? void 0 : res.groups) === null || _39 === void 0 ? void 0 : _39.detail);
                    this.forgeSiteObjectSearch((_40 = res === null || res === void 0 ? void 0 : res.groups) === null || _40 === void 0 ? void 0 : _40.obj, (_41 = res === null || res === void 0 ? void 0 : res.groups) === null || _41 === void 0 ? void 0 : _41.host, (_42 = res === null || res === void 0 ? void 0 : res.groups) === null || _42 === void 0 ? void 0 : _42.detail);
                    this.forgeSiteObjectStats((_43 = res === null || res === void 0 ? void 0 : res.groups) === null || _43 === void 0 ? void 0 : _43.obj, (_44 = res === null || res === void 0 ? void 0 : res.groups) === null || _44 === void 0 ? void 0 : _44.host, (_45 = res === null || res === void 0 ? void 0 : res.groups) === null || _45 === void 0 ? void 0 : _45.detail);
                    break;
                case "wiredclients":
                    this.setName((_46 = res === null || res === void 0 ? void 0 : res.groups) === null || _46 === void 0 ? void 0 : _46.obj.substr(0, ((_47 = res === null || res === void 0 ? void 0 : res.groups) === null || _47 === void 0 ? void 0 : _47.obj.length) - 1), (_48 = res === null || res === void 0 ? void 0 : res.groups) === null || _48 === void 0 ? void 0 : _48.detail);
                    this.forgeSiteObjectSearch("wired_clients", (_49 = res === null || res === void 0 ? void 0 : res.groups) === null || _49 === void 0 ? void 0 : _49.host, (_50 = res === null || res === void 0 ? void 0 : res.groups) === null || _50 === void 0 ? void 0 : _50.detail);
                    break;
                case "wxlan":
                    this.setName("wxrule", (_51 = res === null || res === void 0 ? void 0 : res.groups) === null || _51 === void 0 ? void 0 : _51.detail);
                    this.forgeSiteObject("wxrules", (_52 = res === null || res === void 0 ? void 0 : res.groups) === null || _52 === void 0 ? void 0 : _52.host, (_53 = res === null || res === void 0 ? void 0 : res.groups) === null || _53 === void 0 ? void 0 : _53.detail);
                    this.forgeSiteObjectStats("wxrules", (_54 = res === null || res === void 0 ? void 0 : res.groups) === null || _54 === void 0 ? void 0 : _54.host, (_55 = res === null || res === void 0 ? void 0 : res.groups) === null || _55 === void 0 ? void 0 : _55.detail);
                    break;
                case "security":
                    this.forgeSiteSecurity((_56 = res === null || res === void 0 ? void 0 : res.groups) === null || _56 === void 0 ? void 0 : _56.host);
                    break;
                case "switchconfig":
                    this.setName("switchconfig", (_57 = res === null || res === void 0 ? void 0 : res.groups) === null || _57 === void 0 ? void 0 : _57.detail);
                    this.forgeSiteSwitchConfig((_58 = res === null || res === void 0 ? void 0 : res.groups) === null || _58 === void 0 ? void 0 : _58.host);
                    break;
                case "pcap":
                    this.setName((_59 = res === null || res === void 0 ? void 0 : res.groups) === null || _59 === void 0 ? void 0 : _59.obj, (_60 = res === null || res === void 0 ? void 0 : res.groups) === null || _60 === void 0 ? void 0 : _60.detail);
                    this.forgeSiteObject("pcaps", (_61 = res === null || res === void 0 ? void 0 : res.groups) === null || _61 === void 0 ? void 0 : _61.host, (_62 = res === null || res === void 0 ? void 0 : res.groups) === null || _62 === void 0 ? void 0 : _62.detail);
                    break;
            }
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// COMMON URL FUNCTION DISPATCHER FOR ORG URLS
    commonOrgUrl(res) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53;
        this.org_id = (_a = res === null || res === void 0 ? void 0 : res.groups) === null || _a === void 0 ? void 0 : _a.org_id;
        let extra_params = undefined;
        const uuid_re = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;
        if (((_b = res === null || res === void 0 ? void 0 : res.groups) === null || _b === void 0 ? void 0 : _b.host) && ((_c = res === null || res === void 0 ? void 0 : res.groups) === null || _c === void 0 ? void 0 : _c.org_id) && ((_d = res === null || res === void 0 ? void 0 : res.groups) === null || _d === void 0 ? void 0 : _d.obj)) {
            this.obj_id = (_e = res === null || res === void 0 ? void 0 : res.groups) === null || _e === void 0 ? void 0 : _e.obj_id;
            switch ((_f = res === null || res === void 0 ? void 0 : res.groups) === null || _f === void 0 ? void 0 : _f.obj.toLowerCase()) {
                // ORG
                case "org":
                    this.obj_id = undefined;
                    this.setName("org", (_g = res === null || res === void 0 ? void 0 : res.groups) === null || _g === void 0 ? void 0 : _g.detail);
                    this.forgeOrg((_h = res === null || res === void 0 ? void 0 : res.groups) === null || _h === void 0 ? void 0 : _h.host);
                    break;
                case "configuration":
                    this.setName("site", (_j = res === null || res === void 0 ? void 0 : res.groups) === null || _j === void 0 ? void 0 : _j.detail);
                    this.forgeSite((_k = res === null || res === void 0 ? void 0 : res.groups) === null || _k === void 0 ? void 0 : _k.host, (_l = res === null || res === void 0 ? void 0 : res.groups) === null || _l === void 0 ? void 0 : _l.detail);
                    break;
                case "orgtags":
                    this.setName("wxtag", (_m = res === null || res === void 0 ? void 0 : res.groups) === null || _m === void 0 ? void 0 : _m.detail);
                    this.forgeOrgObject("wxtags", (_o = res === null || res === void 0 ? void 0 : res.groups) === null || _o === void 0 ? void 0 : _o.host, (_p = res === null || res === void 0 ? void 0 : res.groups) === null || _p === void 0 ? void 0 : _p.detail);
                    break;
                case "orgpsk":
                    this.setName("org psk", (_q = res === null || res === void 0 ? void 0 : res.groups) === null || _q === void 0 ? void 0 : _q.detail);
                    this.forgeOrgObject("psks", (_r = res === null || res === void 0 ? void 0 : res.groups) === null || _r === void 0 ? void 0 : _r.host, (_s = res === null || res === void 0 ? void 0 : res.groups) === null || _s === void 0 ? void 0 : _s.detail);
                    break;
                case "misttunnels":
                    this.setName("mxtunnel", (_t = res === null || res === void 0 ? void 0 : res.groups) === null || _t === void 0 ? void 0 : _t.detail);
                    this.forgeOrgObject("mxtunnels", (_u = res === null || res === void 0 ? void 0 : res.groups) === null || _u === void 0 ? void 0 : _u.host, (_v = res === null || res === void 0 ? void 0 : res.groups) === null || _v === void 0 ? void 0 : _v.detail);
                    break;
                case "switchtemplate":
                    this.setName((_w = res === null || res === void 0 ? void 0 : res.groups) === null || _w === void 0 ? void 0 : _w.obj, (_x = res === null || res === void 0 ? void 0 : res.groups) === null || _x === void 0 ? void 0 : _x.detail);
                    this.forgeOrgObject("networktemplates", (_y = res === null || res === void 0 ? void 0 : res.groups) === null || _y === void 0 ? void 0 : _y.host, (_z = res === null || res === void 0 ? void 0 : res.groups) === null || _z === void 0 ? void 0 : _z.detail);
                    break;
                case "templates":
                    this.setName((_0 = res === null || res === void 0 ? void 0 : res.groups) === null || _0 === void 0 ? void 0 : _0.obj.substr(0, ((_1 = res === null || res === void 0 ? void 0 : res.groups) === null || _1 === void 0 ? void 0 : _1.obj.length) - 1), (_2 = res === null || res === void 0 ? void 0 : res.groups) === null || _2 === void 0 ? void 0 : _2.detail);
                    this.forgeOrgObject((_3 = res === null || res === void 0 ? void 0 : res.groups) === null || _3 === void 0 ? void 0 : _3.obj, (_4 = res === null || res === void 0 ? void 0 : res.groups) === null || _4 === void 0 ? void 0 : _4.host, (_5 = res === null || res === void 0 ? void 0 : res.groups) === null || _5 === void 0 ? void 0 : _5.detail);
                    this.obj_name = "org wlans";
                    this.forgeOrgObject("wlans", (_6 = res === null || res === void 0 ? void 0 : res.groups) === null || _6 === void 0 ? void 0 : _6.host, undefined);
                    break;
                case "auditlogs":
                    this.setName((_7 = res === null || res === void 0 ? void 0 : res.groups) === null || _7 === void 0 ? void 0 : _7.obj.substr(0, ((_8 = res === null || res === void 0 ? void 0 : res.groups) === null || _8 === void 0 ? void 0 : _8.obj.length) - 1), (_9 = res === null || res === void 0 ? void 0 : res.groups) === null || _9 === void 0 ? void 0 : _9.detail);
                    this.forgeOrgObject("logs", (_10 = res === null || res === void 0 ? void 0 : res.groups) === null || _10 === void 0 ? void 0 : _10.host, (_11 = res === null || res === void 0 ? void 0 : res.groups) === null || _11 === void 0 ? void 0 : _11.detail);
                    break;
                case "apinventory":
                    this.obj_name = "APs inventory";
                    this.forgeOrgObject("inventory", (_12 = res === null || res === void 0 ? void 0 : res.groups) === null || _12 === void 0 ? void 0 : _12.host, (_13 = res === null || res === void 0 ? void 0 : res.groups) === null || _13 === void 0 ? void 0 : _13.detail, "type=ap");
                    this.obj_name = "Switches inventory";
                    this.forgeOrgObject("inventory", (_14 = res === null || res === void 0 ? void 0 : res.groups) === null || _14 === void 0 ? void 0 : _14.host, (_15 = res === null || res === void 0 ? void 0 : res.groups) === null || _15 === void 0 ? void 0 : _15.detail, "type=switch");
                    this.obj_name = "Gateways inventory";
                    this.forgeOrgObject("inventory", (_16 = res === null || res === void 0 ? void 0 : res.groups) === null || _16 === void 0 ? void 0 : _16.host, (_17 = res === null || res === void 0 ? void 0 : res.groups) === null || _17 === void 0 ? void 0 : _17.detail, "type=gateway");
                    break;
                case "adminconfig":
                    this.setName("admin", (_18 = res === null || res === void 0 ? void 0 : res.groups) === null || _18 === void 0 ? void 0 : _18.detail);
                    this.forgeOrgObject("admins", (_19 = res === null || res === void 0 ? void 0 : res.groups) === null || _19 === void 0 ? void 0 : _19.host, (_20 = res === null || res === void 0 ? void 0 : res.groups) === null || _20 === void 0 ? void 0 : _20.detail);
                    break;
                case "subscription":
                    this.setName((_21 = res === null || res === void 0 ? void 0 : res.groups) === null || _21 === void 0 ? void 0 : _21.obj, (_22 = res === null || res === void 0 ? void 0 : res.groups) === null || _22 === void 0 ? void 0 : _22.detail);
                    this.forgeOrgObject("licenses", (_23 = res === null || res === void 0 ? void 0 : res.groups) === null || _23 === void 0 ? void 0 : _23.host, (_24 = res === null || res === void 0 ? void 0 : res.groups) === null || _24 === void 0 ? void 0 : _24.detail);
                    break;
                case "edge":
                    this.setName("mxedge", (_25 = res === null || res === void 0 ? void 0 : res.groups) === null || _25 === void 0 ? void 0 : _25.detail);
                    this.forgeEdge((_26 = res === null || res === void 0 ? void 0 : res.groups) === null || _26 === void 0 ? void 0 : _26.host, (_27 = res === null || res === void 0 ? void 0 : res.groups) === null || _27 === void 0 ? void 0 : _27.detail);
                    break;
                case "hubs":
                    this.setName("hubprofile", (_28 = res === null || res === void 0 ? void 0 : res.groups) === null || _28 === void 0 ? void 0 : _28.detail);
                    this.forgeHubProfile((_29 = res === null || res === void 0 ? void 0 : res.groups) === null || _29 === void 0 ? void 0 : _29.host, (_30 = res === null || res === void 0 ? void 0 : res.groups) === null || _30 === void 0 ? void 0 : _30.detail);
                    break;
                case "services":
                case "rftemplates":
                case "vpns":
                case "deviceprofiles":
                case "gatewaytemplates":
                case "networks":
                    this.setName((_31 = res === null || res === void 0 ? void 0 : res.groups) === null || _31 === void 0 ? void 0 : _31.obj.substr(0, ((_32 = res === null || res === void 0 ? void 0 : res.groups) === null || _32 === void 0 ? void 0 : _32.obj.length) - 1), (_33 = res === null || res === void 0 ? void 0 : res.groups) === null || _33 === void 0 ? void 0 : _33.detail);
                    this.forgeOrgObject((_34 = res === null || res === void 0 ? void 0 : res.groups) === null || _34 === void 0 ? void 0 : _34.obj.toLowerCase(), (_35 = res === null || res === void 0 ? void 0 : res.groups) === null || _35 === void 0 ? void 0 : _35.host, (_36 = res === null || res === void 0 ? void 0 : res.groups) === null || _36 === void 0 ? void 0 : _36.detail);
                    break;
                case "applicationpolicy":
                    this.setName("servicepolicy", (_37 = res === null || res === void 0 ? void 0 : res.groups) === null || _37 === void 0 ? void 0 : _37.details);
                    this.forgeOrgObject("servicepolicies", (_38 = res === null || res === void 0 ? void 0 : res.groups) === null || _38 === void 0 ? void 0 : _38.host, (_39 = res === null || res === void 0 ? void 0 : res.groups) === null || _39 === void 0 ? void 0 : _39.detail);
                    break;
                case "nactags":
                    this.setName("NAC Tag", (_40 = res === null || res === void 0 ? void 0 : res.groups) === null || _40 === void 0 ? void 0 : _40.detail);
                    this.forgeOrgObject((_41 = res === null || res === void 0 ? void 0 : res.groups) === null || _41 === void 0 ? void 0 : _41.obj.toLowerCase(), (_42 = res === null || res === void 0 ? void 0 : res.groups) === null || _42 === void 0 ? void 0 : _42.host, (_43 = res === null || res === void 0 ? void 0 : res.groups) === null || _43 === void 0 ? void 0 : _43.detail);
                    break;
                case "naccertificates":
                    this.setName("NAC Certificates", (_44 = res === null || res === void 0 ? void 0 : res.groups) === null || _44 === void 0 ? void 0 : _44.detail);
                    this.quick_links.push({
                        url: "https://api." + ((_45 = res === null || res === void 0 ? void 0 : res.groups) === null || _45 === void 0 ? void 0 : _45.host) + "/api/v1/orgs/" + this.org_id + "/setting",
                        name: "org setting"
                    });
                    break;
                case "nacpolicy":
                    this.setName("NAC Policy", (_46 = res === null || res === void 0 ? void 0 : res.groups) === null || _46 === void 0 ? void 0 : _46.detail);
                    this.forgeOrgObject("nacrules", (_47 = res === null || res === void 0 ? void 0 : res.groups) === null || _47 === void 0 ? void 0 : _47.host, (_48 = res === null || res === void 0 ? void 0 : res.groups) === null || _48 === void 0 ? void 0 : _48.detail);
                    break;
                case "nacidentityproviders":
                    console.log(res.groups);
                    this.setName("NAC IDP", (_49 = res === null || res === void 0 ? void 0 : res.groups) === null || _49 === void 0 ? void 0 : _49.detail);
                    this.forgeOrgNacIdp((_50 = res === null || res === void 0 ? void 0 : res.groups) === null || _50 === void 0 ? void 0 : _50.host);
                    break;
                case "onboardingworkflow":
                    this.setName("Psk Portal", (_51 = res === null || res === void 0 ? void 0 : res.groups) === null || _51 === void 0 ? void 0 : _51.detail);
                    this.forgeOrgObject("pskportals", (_52 = res === null || res === void 0 ? void 0 : res.groups) === null || _52 === void 0 ? void 0 : _52.host, (_53 = res === null || res === void 0 ? void 0 : res.groups) === null || _53 === void 0 ? void 0 : _53.detail);
                    break;
            }
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// ALARM URL FUNCTION DISPATCHER
    alarmUrl(res) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
        this.org_id = (_a = res === null || res === void 0 ? void 0 : res.groups) === null || _a === void 0 ? void 0 : _a.org_id;
        let extra_params = "";
        let severity_array = [];
        let scope = "";
        let scope_id = undefined;
        if (((_b = res === null || res === void 0 ? void 0 : res.groups) === null || _b === void 0 ? void 0 : _b.scope) == "org") {
            scope = "orgs";
            scope_id = (_c = res === null || res === void 0 ? void 0 : res.groups) === null || _c === void 0 ? void 0 : _c.org_id;
        }
        else {
            if ((_d = res === null || res === void 0 ? void 0 : res.groups) === null || _d === void 0 ? void 0 : _d.site_id) {
                this.site_id = (_e = res === null || res === void 0 ? void 0 : res.groups) === null || _e === void 0 ? void 0 : _e.site_id;
            }
            else {
                this.site_id = (_f = res === null || res === void 0 ? void 0 : res.groups) === null || _f === void 0 ? void 0 : _f.uuid;
            }
            scope = "sites";
            scope_id = this.site_id;
        }
        if (((_g = res === null || res === void 0 ? void 0 : res.groups) === null || _g === void 0 ? void 0 : _g.start) && ((_h = res === null || res === void 0 ? void 0 : res.groups) === null || _h === void 0 ? void 0 : _h.stop)) {
            extra_params = "start=" + ((_j = res === null || res === void 0 ? void 0 : res.groups) === null || _j === void 0 ? void 0 : _j.start) + "&end=" + ((_k = res === null || res === void 0 ? void 0 : res.groups) === null || _k === void 0 ? void 0 : _k.stop);
        }
        if (((_l = res === null || res === void 0 ? void 0 : res.groups) === null || _l === void 0 ? void 0 : _l.show_crit) && ((_m = res === null || res === void 0 ? void 0 : res.groups) === null || _m === void 0 ? void 0 : _m.show_crit) == "true")
            severity_array.push("critical");
        if (((_o = res === null || res === void 0 ? void 0 : res.groups) === null || _o === void 0 ? void 0 : _o.show_warn) && ((_p = res === null || res === void 0 ? void 0 : res.groups) === null || _p === void 0 ? void 0 : _p.show_warn) == "true")
            severity_array.push("warn");
        if (((_q = res === null || res === void 0 ? void 0 : res.groups) === null || _q === void 0 ? void 0 : _q.show_info) && ((_r = res === null || res === void 0 ? void 0 : res.groups) === null || _r === void 0 ? void 0 : _r.show_info) == "true")
            severity_array.push("info");
        if (severity_array.length > 0)
            extra_params += "&severity=" + severity_array.join(",");
        else
            extra_params += "&severity=none";
        if (((_s = res === null || res === void 0 ? void 0 : res.groups) === null || _s === void 0 ? void 0 : _s.group) && ((_t = res === null || res === void 0 ? void 0 : res.groups) === null || _t === void 0 ? void 0 : _t.group) != "any%20type")
            extra_params += "&group=" + ((_u = res === null || res === void 0 ? void 0 : res.groups) === null || _u === void 0 ? void 0 : _u.group);
        if (((_v = res === null || res === void 0 ? void 0 : res.groups) === null || _v === void 0 ? void 0 : _v.show_ack) && ((_w = res === null || res === void 0 ? void 0 : res.groups) === null || _w === void 0 ? void 0 : _w.show_ack) == "false")
            extra_params += "&acked=false";
        this.quick_links.push({
            url: "https://api." + ((_x = res === null || res === void 0 ? void 0 : res.groups) === null || _x === void 0 ? void 0 : _x.host) + "/api/v1/" + scope + "/" + scope_id + "/alarms/search?" + extra_params,
            name: scope + " Alarms"
        }, {
            url: "https://api." + ((_y = res === null || res === void 0 ? void 0 : res.groups) === null || _y === void 0 ? void 0 : _y.host) + "/api/v1/" + scope + "/" + scope_id + "/alarms/count?" + extra_params,
            name: scope + " Alarms count"
        }, {
            url: "https://api." + ((_z = res === null || res === void 0 ? void 0 : res.groups) === null || _z === void 0 ? void 0 : _z.host) + "/api/v1/orgs/" + this.org_id + "/alarmtemplates",
            name: " Alarms Templates"
        }, {
            url: "https://api." + ((_0 = res === null || res === void 0 ? void 0 : res.groups) === null || _0 === void 0 ? void 0 : _0.host) + "/api/v1/const/alarm_defs",
            name: " Alarms Definitions"
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// EVPN URL FUNCTION DISPATCHER
    evpnUrl(res) {
        var _a, _b, _c, _d, _e, _f;
        this.org_id = (_a = res === null || res === void 0 ? void 0 : res.groups) === null || _a === void 0 ? void 0 : _a.org_id;
        this.site_id = (_b = res === null || res === void 0 ? void 0 : res.groups) === null || _b === void 0 ? void 0 : _b.site_id;
        let extra_params = "";
        if ((_c = res === null || res === void 0 ? void 0 : res.groups) === null || _c === void 0 ? void 0 : _c.topology_id) {
            this.obj_id = (_d = res === null || res === void 0 ? void 0 : res.groups) === null || _d === void 0 ? void 0 : _d.topology_id;
            this.quick_links.push({
                url: "https://api." + ((_e = res === null || res === void 0 ? void 0 : res.groups) === null || _e === void 0 ? void 0 : _e.host) + "/api/v1/sites/" + this.site_id + "/evpn_topologies/" + this.obj_id,
                name: "EVPN Topology"
            });
        }
        else {
            this.quick_links.push({
                url: "https://api." + ((_f = res === null || res === void 0 ? void 0 : res.groups) === null || _f === void 0 ? void 0 : _f.host) + "/api/v1/sites/" + this.site_id + "/evpn_topologies",
                name: "Site EVPN Topologies"
            });
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// EVENTS URL FUNCTION DISPATCHER
    eventsUrl(res) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        this.org_id = (_a = res === null || res === void 0 ? void 0 : res.groups) === null || _a === void 0 ? void 0 : _a.org_id;
        let extra_params = "";
        if ((_b = res === null || res === void 0 ? void 0 : res.groups) === null || _b === void 0 ? void 0 : _b.site_id) {
            this.site_id = (_c = res === null || res === void 0 ? void 0 : res.groups) === null || _c === void 0 ? void 0 : _c.site_id;
        }
        else {
            this.site_id = (_d = res === null || res === void 0 ? void 0 : res.groups) === null || _d === void 0 ? void 0 : _d.uuid;
        }
        if (((_e = res === null || res === void 0 ? void 0 : res.groups) === null || _e === void 0 ? void 0 : _e.start) && ((_f = res === null || res === void 0 ? void 0 : res.groups) === null || _f === void 0 ? void 0 : _f.stop)) {
            extra_params = "start=" + ((_g = res === null || res === void 0 ? void 0 : res.groups) === null || _g === void 0 ? void 0 : _g.start) + "&end=" + ((_h = res === null || res === void 0 ? void 0 : res.groups) === null || _h === void 0 ? void 0 : _h.stop);
        }
        this.quick_links.push({
            url: "https://api." + ((_j = res === null || res === void 0 ? void 0 : res.groups) === null || _j === void 0 ? void 0 : _j.host) + "/api/v1/sites/" + this.site_id + "/insights/marvis?" + extra_params,
            name: "Site Events"
        });
    }
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// EVENTS URL FUNCTION DISPATCHER
    floorplansUrl(res) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.org_id = (_a = res === null || res === void 0 ? void 0 : res.groups) === null || _a === void 0 ? void 0 : _a.org_id;
        if ((_b = res === null || res === void 0 ? void 0 : res.groups) === null || _b === void 0 ? void 0 : _b.site_id) {
            this.site_id = (_c = res === null || res === void 0 ? void 0 : res.groups) === null || _c === void 0 ? void 0 : _c.site_id;
            this.obj_id = (_d = res === null || res === void 0 ? void 0 : res.groups) === null || _d === void 0 ? void 0 : _d.uuid;
        }
        else {
            this.site_id = (_e = res === null || res === void 0 ? void 0 : res.groups) === null || _e === void 0 ? void 0 : _e.uuid;
        }
        this.setName("floor plan", (_f = res === null || res === void 0 ? void 0 : res.groups) === null || _f === void 0 ? void 0 : _f.detail);
        this.forgeSiteObject("maps", (_g = res === null || res === void 0 ? void 0 : res.groups) === null || _g === void 0 ? void 0 : _g.host, (_h = res === null || res === void 0 ? void 0 : res.groups) === null || _h === void 0 ? void 0 : _h.detail);
    }
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// INSIGHTS URL FUNCTION DISPATCHER
    insightsUrl(res) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
        this.org_id = (_a = res === null || res === void 0 ? void 0 : res.groups) === null || _a === void 0 ? void 0 : _a.org_id;
        this.site_id = (_b = res === null || res === void 0 ? void 0 : res.groups) === null || _b === void 0 ? void 0 : _b.site_id;
        this.obj_id = (_c = res === null || res === void 0 ? void 0 : res.groups) === null || _c === void 0 ? void 0 : _c.obj_id;
        let extra_params = undefined;
        if (((_d = res === null || res === void 0 ? void 0 : res.groups) === null || _d === void 0 ? void 0 : _d.start) && ((_e = res === null || res === void 0 ? void 0 : res.groups) === null || _e === void 0 ? void 0 : _e.stop)) {
            extra_params = "start=" + ((_f = res === null || res === void 0 ? void 0 : res.groups) === null || _f === void 0 ? void 0 : _f.start) + "&end=" + ((_g = res === null || res === void 0 ? void 0 : res.groups) === null || _g === void 0 ? void 0 : _g.stop);
        }
        if (((_h = res === null || res === void 0 ? void 0 : res.groups) === null || _h === void 0 ? void 0 : _h.host) && ((_j = res === null || res === void 0 ? void 0 : res.groups) === null || _j === void 0 ? void 0 : _j.org_id)) {
            switch ((_k = res === null || res === void 0 ? void 0 : res.groups) === null || _k === void 0 ? void 0 : _k.obj) {
                case "device":
                    this.setName("ap", "insights");
                    this.forgeSiteObject("devices", (_l = res === null || res === void 0 ? void 0 : res.groups) === null || _l === void 0 ? void 0 : _l.host, "detail");
                    this.forgeSiteObjectStats("devices", (_m = res === null || res === void 0 ? void 0 : res.groups) === null || _m === void 0 ? void 0 : _m.host, "detail", extra_params);
                    this.forgeSiteObjectEvents("devices", "ap", (_o = res === null || res === void 0 ? void 0 : res.groups) === null || _o === void 0 ? void 0 : _o.host, "detail", extra_params);
                    this.forgeSiteApLastConfig((_p = res === null || res === void 0 ? void 0 : res.groups) === null || _p === void 0 ? void 0 : _p.detail, (_q = res === null || res === void 0 ? void 0 : res.groups) === null || _q === void 0 ? void 0 : _q.host, 'ap');
                    break;
                case "client":
                    this.setName("client", "insights");
                    this.forgeSiteObjectSearch("clients", (_r = res === null || res === void 0 ? void 0 : res.groups) === null || _r === void 0 ? void 0 : _r.host, "detail");
                    this.forgeSiteObjectStats("clients", (_s = res === null || res === void 0 ? void 0 : res.groups) === null || _s === void 0 ? void 0 : _s.host, "detail", extra_params);
                    this.forgeSiteObjectEvents("clients", undefined, (_t = res === null || res === void 0 ? void 0 : res.groups) === null || _t === void 0 ? void 0 : _t.host, "detail", extra_params);
                    break;
                case "juniperSwitch":
                    this.setName("switch", "insights");
                    this.forgeSiteObject("devices", (_u = res === null || res === void 0 ? void 0 : res.groups) === null || _u === void 0 ? void 0 : _u.host, "detail");
                    this.forgeSiteObjectStats("devices", (_v = res === null || res === void 0 ? void 0 : res.groups) === null || _v === void 0 ? void 0 : _v.host, "detail", extra_params);
                    this.forgeSiteObjectEvents("devices", "switch", (_w = res === null || res === void 0 ? void 0 : res.groups) === null || _w === void 0 ? void 0 : _w.host, "detail", extra_params);
                    break;
                case "juniperGateway":
                    this.setName("gateway", "insights");
                    this.forgeSiteObject("devices", (_x = res === null || res === void 0 ? void 0 : res.groups) === null || _x === void 0 ? void 0 : _x.host, "detail");
                    this.forgeSiteObjectStats("devices", (_y = res === null || res === void 0 ? void 0 : res.groups) === null || _y === void 0 ? void 0 : _y.host, "detail", extra_params);
                    this.forgeSiteObjectEvents("devices", "gateway", (_z = res === null || res === void 0 ? void 0 : res.groups) === null || _z === void 0 ? void 0 : _z.host, "detail", extra_params);
                    break;
                case "wiredClient":
                    this.setName("wired client", "insights");
                    this.forgeSiteObjectSearch("wired_clients", (_0 = res === null || res === void 0 ? void 0 : res.groups) === null || _0 === void 0 ? void 0 : _0.host, "detail", extra_params);
                    this.forgeSiteObjectEvents("wired_clients", undefined, (_1 = res === null || res === void 0 ? void 0 : res.groups) === null || _1 === void 0 ? void 0 : _1.host, "detail", extra_params);
                    break;
                case "edge":
                    this.setName("mxedge", "insights");
                    this.forgeOrgObject("mxedges", (_2 = res === null || res === void 0 ? void 0 : res.groups) === null || _2 === void 0 ? void 0 : _2.host, "detail");
                    this.forgeOrgObjectStats("mxedges", (_3 = res === null || res === void 0 ? void 0 : res.groups) === null || _3 === void 0 ? void 0 : _3.host, "detail", extra_params);
                    this.forgeOrgObjectEvents("mxedges", (_4 = res === null || res === void 0 ? void 0 : res.groups) === null || _4 === void 0 ? void 0 : _4.host, "detail", extra_params);
                    break;
                case "site":
                case undefined:
                    this.setName("site", "insights");
                    this.forgeSite((_5 = res === null || res === void 0 ? void 0 : res.groups) === null || _5 === void 0 ? void 0 : _5.host, "site", extra_params);
                    break;
            }
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// ORG SLE URL FUNCTION DISPATCHER
    orgSleUrl(res) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        this.org_id = (_a = res === null || res === void 0 ? void 0 : res.groups) === null || _a === void 0 ? void 0 : _a.org_id;
        let extra_params = undefined;
        if (((_b = res === null || res === void 0 ? void 0 : res.groups) === null || _b === void 0 ? void 0 : _b.start) && ((_c = res === null || res === void 0 ? void 0 : res.groups) === null || _c === void 0 ? void 0 : _c.stop)) {
            extra_params = "start=" + ((_d = res === null || res === void 0 ? void 0 : res.groups) === null || _d === void 0 ? void 0 : _d.start) + "&end=" + ((_e = res === null || res === void 0 ? void 0 : res.groups) === null || _e === void 0 ? void 0 : _e.stop);
        }
        if (((_f = res === null || res === void 0 ? void 0 : res.groups) === null || _f === void 0 ? void 0 : _f.host) && ((_g = res === null || res === void 0 ? void 0 : res.groups) === null || _g === void 0 ? void 0 : _g.org_id)) {
            switch ((_h = res === null || res === void 0 ? void 0 : res.groups) === null || _h === void 0 ? void 0 : _h.scope) {
                case "siteComparison":
                    this.forgeOrgSlehUrl((_j = res === null || res === void 0 ? void 0 : res.groups) === null || _j === void 0 ? void 0 : _j.host, "wifi", (_k = res === null || res === void 0 ? void 0 : res.groups) === null || _k === void 0 ? void 0 : _k.sle, (_l = res === null || res === void 0 ? void 0 : res.groups) === null || _l === void 0 ? void 0 : _l.worstsle, extra_params);
                    break;
                case "wiredSiteComparison":
                    this.forgeOrgSlehUrl((_m = res === null || res === void 0 ? void 0 : res.groups) === null || _m === void 0 ? void 0 : _m.host, "wired", (_o = res === null || res === void 0 ? void 0 : res.groups) === null || _o === void 0 ? void 0 : _o.sle, (_p = res === null || res === void 0 ? void 0 : res.groups) === null || _p === void 0 ? void 0 : _p.worstsle, extra_params);
                    break;
                case "wanSiteComparison":
                    this.forgeOrgSlehUrl((_q = res === null || res === void 0 ? void 0 : res.groups) === null || _q === void 0 ? void 0 : _q.host, "wan", (_r = res === null || res === void 0 ? void 0 : res.groups) === null || _r === void 0 ? void 0 : _r.sle, (_s = res === null || res === void 0 ? void 0 : res.groups) === null || _s === void 0 ? void 0 : _s.worstsle, extra_params);
                    break;
            }
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// SLE URL FUNCTION DISPATCHER
    sleUrl(res) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        this.org_id = (_a = res === null || res === void 0 ? void 0 : res.groups) === null || _a === void 0 ? void 0 : _a.org_id;
        this.site_id = (_b = res === null || res === void 0 ? void 0 : res.groups) === null || _b === void 0 ? void 0 : _b.site_id;
        let extra_params = null;
        let scope = "";
        if (((_c = res === null || res === void 0 ? void 0 : res.groups) === null || _c === void 0 ? void 0 : _c.scope) != "site") {
            this.setName((_d = res === null || res === void 0 ? void 0 : res.groups) === null || _d === void 0 ? void 0 : _d.scope, "sle");
            this.obj_id = (_e = res === null || res === void 0 ? void 0 : res.groups) === null || _e === void 0 ? void 0 : _e.scope_id;
        }
        if (((_f = res === null || res === void 0 ? void 0 : res.groups) === null || _f === void 0 ? void 0 : _f.scope) == "juniperSwitch") {
            scope = "switch";
        }
        else if (((_g = res === null || res === void 0 ? void 0 : res.groups) === null || _g === void 0 ? void 0 : _g.scope) == "juniperGateway") {
            scope = "gateway";
        }
        else if (((_h = res === null || res === void 0 ? void 0 : res.groups) === null || _h === void 0 ? void 0 : _h.scope) == "device") {
            scope = "ap";
        }
        else {
            scope = (_j = res === null || res === void 0 ? void 0 : res.groups) === null || _j === void 0 ? void 0 : _j.scope;
        }
        if (((_k = res === null || res === void 0 ? void 0 : res.groups) === null || _k === void 0 ? void 0 : _k.start) && ((_l = res === null || res === void 0 ? void 0 : res.groups) === null || _l === void 0 ? void 0 : _l.stop)) {
            extra_params = "start=" + ((_m = res === null || res === void 0 ? void 0 : res.groups) === null || _m === void 0 ? void 0 : _m.start) + "&end=" + ((_o = res === null || res === void 0 ? void 0 : res.groups) === null || _o === void 0 ? void 0 : _o.stop);
        }
        if (((_p = res === null || res === void 0 ? void 0 : res.groups) === null || _p === void 0 ? void 0 : _p.host) && ((_q = res === null || res === void 0 ? void 0 : res.groups) === null || _q === void 0 ? void 0 : _q.org_id)) {
            let sles = [];
            switch ((_r = res === null || res === void 0 ? void 0 : res.groups) === null || _r === void 0 ? void 0 : _r.detail) {
                case "serviceLevels":
                    sles = [
                        "time-to-connect",
                        "failed-to-connect",
                        "roaming",
                        "throughput",
                        "coverage",
                        "capacity",
                        "ap-availability"
                    ];
                    break;
                case "wiredServiceLevels":
                    sles = [
                        "switch-stc",
                        "switch-health",
                        "switch-throughput"
                    ];
                    break;
                case "wanServiceLevels":
                    sles = [
                        "gateway-health",
                        "wan-link-health",
                        "application-health"
                    ];
                    break;
            }
            this.forgeSlehUrl((_s = res === null || res === void 0 ? void 0 : res.groups) === null || _s === void 0 ? void 0 : _s.host, scope, (_t = res === null || res === void 0 ? void 0 : res.groups) === null || _t === void 0 ? void 0 : _t.site_id, (_u = res === null || res === void 0 ? void 0 : res.groups) === null || _u === void 0 ? void 0 : _u.scope_id, sles, extra_params);
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    // OTHER FUNCTIONS
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    // open a new tab with the url passed in parameter
    openApiTab(url) {
        this._browser.tabOpen(url);
    }
    // open a new tab 
    openTab(target) {
        if (target in this.external_links) {
            this._browser.tabOpen(this.external_links[target]);
        }
    }
    // copy the id (org_id, site_id, ...) into the clipboard
    copyId(inputElement) {
        this.focused = inputElement.id;
        inputElement.select();
        document.execCommand('copy');
        setTimeout(() => {
            this.focused = "";
            this._cd.detectChanges();
        }, 100);
        inputElement.setSelectionRange(0, 0);
    }
}
ApiManageComponent.ɵfac = function ApiManageComponent_Factory(t) { return new (t || ApiManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_browser_service__WEBPACK_IMPORTED_MODULE_0__.BrowserService)); };
ApiManageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ApiManageComponent, selectors: [["app-api-manage"]], decls: 6, vars: 3, consts: [[1, "content", "no-grow"], ["class", "not_mist", 4, "ngIf"], [4, "ngIf"], ["class", "content no-grow", 4, "ngIf"], [1, "not_mist"], ["class", "box-ids", "style", "display: flex;flex-direction: row;align-items: center;justify-content: center;", 4, "ngIf"], [1, "box-ids", 2, "display", "flex", "flex-direction", "row", "align-items", "center", "justify-content", "center"], [2, "flex-direction", "column", "display", "flex", "align-items", "center", "justify-content", "center", "flex-grow", "1"], ["for", "org_id", 1, "ids"], [1, "box-ids-input"], ["type", "text", "readonly", "", "id", "org_id", 1, "ids", 3, "value", "ngClass"], ["org_id_input", ""], ["name", "copy", 1, "copy-ids", 3, "click"], ["src", "assets/copy.svg", "alt", "copy", 1, "copy-ids"], ["for", "site_id", 1, "ids"], ["type", "text", "readonly", "", "id", "site_id", 1, "ids", 3, "value", "ngClass"], ["site_id_input", ""], ["for", "obj_id", 1, "ids"], ["type", "text", "readonly", "", "id", "obj_id", 1, "ids", 3, "value", "ngClass"], ["obj_id_input", ""], [1, "box-apitab"], ["class", "apitab", 3, "click", 4, "ngFor", "ngForOf"], [1, "apitab", 3, "click"], ["src", "assets/open.svg", "alt", "open", 1, "icon-open"]], template: function ApiManageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Page Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ApiManageComponent_div_3_Template, 5, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ApiManageComponent_div_4_Template, 4, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ApiManageComponent_div_5_Template, 5, 1, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.org_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.org_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.quick_links.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.UpperCasePipe], styles: [".content[_ngcontent-%COMP%] {\n  margin: 0.5em 1em;\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n}\n\n.notice-text[_ngcontent-%COMP%] {\n  padding: 1em;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  height: 100%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n.content.no-grow[_ngcontent-%COMP%] {\n  flex-grow: 0;\n}\n\n.content.grow[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-weight: 200;\n  margin-left: 0.8em;\n}\n\n.not_mist[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 100;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n.box-apitab[_ngcontent-%COMP%] {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n\nbutton.apitab[_ngcontent-%COMP%] {\n  margin: 0.2em;\n  border-radius: 4px;\n  padding: 0.5em;\n  font-size: small;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  justify-items: center;\n  align-items: center;\n}\n\nbutton.apitab[_ngcontent-%COMP%]:enabled {\n  background-color: #0096a3;\n  color: white;\n  transition: background-color 0.2s ease-in-out;\n}\n\nbutton.apitab[_ngcontent-%COMP%]:enabled:hover {\n  box-shadow: rgba(50, 50, 93, 0.2509803922) 0 30px 60px -12px inset, rgba(0, 0, 0, 0.3019607843) 0 18px 36px -18px inset;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  padding: 0.5em;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  background-color: #eee;\n  color: #aaa;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;\n}\n\n.ids[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 0.5em;\n}\n\n.box-ids[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.box-ids-input[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-around;\n}\n\ninput.ids[_ngcontent-%COMP%]:-moz-read-only {\n  width: 100%;\n  border-radius: 2px;\n  text-align: center;\n  font: inherit;\n  font-weight: 200;\n  border: none;\n  padding: 0.3em;\n  border-radius: 60px;\n  background-color: transparent;\n  -moz-transition: all 1s ease-in-out;\n  transition: all 1s ease-in-out;\n}\n\ninput.ids[_ngcontent-%COMP%]:read-only {\n  width: 100%;\n  border-radius: 2px;\n  text-align: center;\n  font: inherit;\n  font-weight: 200;\n  border: none;\n  padding: 0.3em;\n  border-radius: 60px;\n  background-color: transparent;\n  transition: all 1s ease-in-out;\n}\n\ninput.ids[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n}\n\ninput.ids.focused[_ngcontent-%COMP%] {\n  background-color: #555;\n  transition: all 0.2s ease-in-out;\n}\n\nlabel.ids[_ngcontent-%COMP%] {\n  margin: 0.2em 0.5em 0.2em 1em;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  letter-spacing: 0.1em;\n}\n\nbutton.copy-ids[_ngcontent-%COMP%] {\n  background-color: white;\n  transition: all 0.2s ease-in-out;\n  border-radius: 5px;\n  display: flex;\n  margin-left: 1em;\n}\n\nbutton.copy-ids[_ngcontent-%COMP%]:hover   img.copy-ids[_ngcontent-%COMP%] {\n  filter: invert(42%) sepia(93%) saturate(1352%) hue-rotate(40deg) brightness(90%) contrast(119%);\n  transition: filter 0.2s ease-in-out;\n}\n\nimg.copy-ids[_ngcontent-%COMP%] {\n  height: 20px;\n}\n\nbutton.request[_ngcontent-%COMP%] {\n  margin: 2em;\n  background-color: transparent;\n  background-color: initial;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  cursor: pointer;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;\n  transition: background-color 0.2s ease-in-out;\n}\n\nbutton.request[_ngcontent-%COMP%]:hover {\n  background-color: lightgray;\n}\n\nimg.icon-open[_ngcontent-%COMP%] {\n  height: 15px;\n  padding: 0 5px;\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7QUFBSjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUFESjs7QUFLQTtFQUNJLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7QUFGSjs7QUFLQTtFQUVJLHVIQUFBO0FBSEo7O0FBT0E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFKSjs7QUFPQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLCtDQUFBO0FBSko7O0FBUUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBTEo7O0FBUUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUxKOztBQVFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FBTEo7O0FBUUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0VBQUEsOEJBQUE7QUFMSjs7QUFMQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUFMSjs7QUFRQTtFQUNJLGFBQUE7QUFMSjs7QUFRQTtFQUNJLHNCQUFBO0VBQ0EsZ0NBQUE7QUFMSjs7QUFRQTtFQUNJLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUxKOztBQVFBO0VBQ0ksdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBTEo7O0FBUUE7RUFDSSwrRkFBQTtFQUNBLG1DQUFBO0FBTEo7O0FBUUE7RUFDSSxZQUFBO0FBTEo7O0FBUUE7RUFDSSxXQUFBO0VBQ0EsNkJBQUE7RUFBQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsK0NBQUE7RUFDQSw2Q0FBQTtBQUxKOztBQVFBO0VBQ0ksMkJBQUE7QUFMSjs7QUFRQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsNEZBQUE7QUFMSiIsImZpbGUiOiJhcGkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDT05URU5BSVJTXG4uY29udGVudCB7XG4gICAgbWFyZ2luOiAwLjVlbSAxZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubm90aWNlLXRleHQge1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uY29udGVudC5uby1ncm93IHtcbiAgICBmbGV4LWdyb3c6IDA7XG59XG5cbi5jb250ZW50Lmdyb3cge1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxuLy8gVElUTEVTXG5oMiB7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBtYXJnaW4tbGVmdDogMC44ZW07XG59XG5cbi5ub3RfbWlzdCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi8vIGFwaXRhYlxuLmJveC1hcGl0YWIge1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbmJ1dHRvbi5hcGl0YWIge1xuICAgIG1hcmdpbjogMC4yZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IC41ZW07XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmJ1dHRvbi5hcGl0YWI6ZW5hYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTZhMztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG5idXR0b24uYXBpdGFiOmVuYWJsZWQ6aG92ZXIge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMwMDc2ODM7XG4gICAgYm94LXNoYWRvdzogIzMyMzI1ZDQwIDAgMzBweCA2MHB4IC0xMnB4IGluc2V0LCAjMDAwMDAwNGQgMCAxOHB4IDM2cHggLTE4cHggaW5zZXQ7XG59XG5cbi8vIEJVVFRPTlNcbmJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGNvbG9yOiAjYWFhO1xuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDUlKSAwcHggMHB4IDBweCAxcHg7XG59XG5cbi8vIERJU0FCTEVEIElOUFVURVNcbi5pZHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDAuNWVtO1xufVxuXG4uYm94LWlkcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ib3gtaWRzLWlucHV0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbmlucHV0LmlkczpyZWFkLW9ubHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAwLjNlbTtcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcbn1cblxuaW5wdXQuaWRzOmZvY3VzLXZpc2libGUge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbmlucHV0Lmlkcy5mb2N1c2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG5sYWJlbC5pZHMge1xuICAgIG1hcmdpbjogLjJlbSAuNWVtIC4yZW0gMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbn1cblxuYnV0dG9uLmNvcHktaWRzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xufVxuXG5idXR0b24uY29weS1pZHM6aG92ZXIgaW1nLmNvcHktaWRzIHtcbiAgICBmaWx0ZXI6IGludmVydCg0MiUpIHNlcGlhKDkzJSkgc2F0dXJhdGUoMTM1MiUpIGh1ZS1yb3RhdGUoNDBkZWcpIGJyaWdodG5lc3MoOTAlKSBjb250cmFzdCgxMTklKTtcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuaW1nLmNvcHktaWRzIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cbmJ1dHRvbi5yZXF1ZXN0IHtcbiAgICBtYXJnaW46IDJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyA1JSkgMHB4IDBweCAwcHggMXB4O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuYnV0dG9uLnJlcXVlc3Q6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuaW1nLmljb24tb3BlbiB7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgwZGVnKSBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDEwMCUpO1xufSJdfQ== */"] });


/***/ }),

/***/ 4071:
/*!*********************************************!*\
  !*** ./src/app/services/browser.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserService": () => (/* binding */ BrowserService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


//import browser from "../browser/webextension-polyfill";
var browser = __webpack_require__(/*! webextension-polyfill */ 8022);
class BrowserService {
    constructor() {
        this.sessionsSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
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
            .then((tabs) => {
            const url = tabs[0].url;
            return url;
        }).catch(e => { console.log(e); return ""; });
    }
    tabUpdate(url) {
        browser.tabs.update(undefined, { url: url });
    }
    tabOpen(url) {
        browser.tabs.create({ url: url });
    }
    tabOpenDoc(operation) {
        browser.tabs.create({ url: this.doc_url + "/#operation/" + operation });
    }
    issueOpen() {
        browser.tabs.create({ url: this.issue_url });
    }
    getVersion() {
        return browser.runtime.getManifest().version;
    }
    getDomains() {
        return this.domains;
    }
    getHostManage() {
        return this.host_manage;
    }
    getHostApi() {
        return this.host_api;
    }
    getCookies(cb) {
        this.sessionsSource.next([]);
        browser.cookies.getAll({})
            .then((cookies) => {
            cookies.forEach((cookie) => {
                this._processCookie(cookie);
            });
            cb();
        })
            .catch(err => console.log(err));
    }
    ////////////
    // SESSIONS
    ////////////
    _processCookie(cookie) {
        // check if it's part of our domains
        if (this.domains.indexOf(cookie.domain) > -1) {
            // check if the cookie is still valid
            if (cookie.expirationDate > (Date.now() / 1000)) {
                let i = -1;
                // try to find this domain in the list of sessions
                const sessions = this.sessionsSource.getValue();
                sessions.forEach((session, index) => {
                    if (session.domain == cookie.domain) {
                        i = index;
                    }
                });
                // if the session already exists in the list, update it with the current cookie
                if (i > -1) {
                    if (cookie.name.startsWith("csrftoken"))
                        sessions[i].csrftoken = cookie.value;
                    else if (cookie.name.startsWith("sessionid"))
                        sessions[i].has_sessionid = true;
                    // if the current cookie has a shorter lifetime than the previous one, use its expirationDate instead
                    if (sessions[i].expires_at > cookie.expirationDate)
                        sessions[i].expires_at = cookie.expirationDate;
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
    }
}
BrowserService.ɵfac = function BrowserService_Factory(t) { return new (t || BrowserService)(); };
BrowserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BrowserService, factory: BrowserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




//import { TAB_URL } from './app/providers/tab-url.provider';
// import { browser } from 'webextension-polyfill';
// browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
//   if (environment.production) {
//     enableProdMode();
//   }
//   const { url: tabUrl } = [...tabs].pop();
//   // provides the current Tab ID so you can send messages to the content page
//   platformBrowserDynamic([{ provide: TAB_URL, useValue: tabUrl }])
//     .bootstrapModule(AppModule)
//     .catch(error => console.error(error));
// });
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(error => console.error(error));


/***/ }),

/***/ 9759:
/*!*****************************!*\
  !*** ./src/assets/api.json ***!
  \*****************************/
/***/ ((module) => {

module.exports = JSON.parse('{"paths":{"api":{"paths":{"v1":{"paths":{"const":{"paths":{"alarm_defs":{"specs":{"get":{"description":"Get brief definitions of all the supported alarm types.  The example field contains an example payload as you would recieve in the alarm webhook output.","operationId":"getAlarmDefinitions","tags":["Constants"]}}},"ap_channels":{"specs":{"get":{"description":"Get List of Available channels per country code","operationId":"getApChannels","parameters":[{"$ref":"#/components/parameters/country_code"}],"tags":["Constants"]}}},"ap_led_status":{"specs":{"get":{"description":"Get AP LED definition","operationId":"getApLedDefinition","tags":["Constants"]}}},"applications":{"specs":{"get":{"description":"Get a list of applications that Juniper-Mist APs recognize","operationId":"getApplications","tags":["Constants"]}}},"client_events":{"specs":{"get":{"description":"Get List of available Client Events","operationId":"getClientEventsDefinitions","tags":["Constants"]}}},"countries":{"specs":{"get":{"description":"Get List of available Country Codes","operationId":"getCountryCodes","tags":["Constants"]}}},"device_events":{"specs":{"get":{"description":"Get list of device events","operationId":"getDeviceEventsDefinitions","tags":["Constants"]}}},"device_models":{"specs":{"get":{"description":"Get a list of AP device models for the Mist Site","operationId":"getApModels","tags":["Constants"]}}},"insight_metrics":{"specs":{"get":{"description":"Get Available Insight Metrics","operationId":"getSiteAvailableInsightMetrics","tags":["Constants"]}}},"languages":{"specs":{"get":{"description":"Get Languages","operationId":"getSiteLanguages","tags":["Constants"]}}},"mxedge_events":{"specs":{"get":{"tags":["Constants"],"operationId":"getMxEdgeEventsDefinitions","description":"Get List of available MX Edge Events"}}},"mxedge_models":{"specs":{"get":{"tags":["Constants"],"operationId":"getMxEdgeModels","description":"get available Mx Edge models"}}},"system_events":{"specs":{"get":{"description":"Get list of available system events","operationId":"getSystemEventsDefinitions","tags":["Constants"],"deprecated":true}}},"traffic_types":{"specs":{"get":{"description":"Get List of identified traffic","tags":["Constants"],"operationId":"get-api-v1-const-traffic_types"}}}}},"installer":{"paths":{"orgs":{"paths":{"{org_id}":{"paths":{"alarmtemplates":{"specs":{"get":{"description":"Get the list of alarm templates","operationId":"getInstallerAlarmTemplates","tags":["Installer"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}},"deviceprofiles":{"specs":{"get":{"description":"Get Device Profiles","operationId":"getInstallerDeviceProfiles_WIP_","tags":["Installer"],"parameters":[]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}},"devices":{"specs":{"get":{"description":"Get recently claimed devices","operationId":"getInstallerListOfRenctlyClaimedDevices","tags":["Installer"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"This mirrors `POST /api/v1/orgs/{org_id}/inventory` (see Inventory API)","operationId":"claimInstallerDevices","tags":["Installer"]}},"paths":{"{device_mac}":{"specs":{"delete":{"description":"Unassign recently claimed devices","operationId":"unassignInstallerRecentlyClaimedDevice","tags":["Installer"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/device_mac"}],"put":{"description":"Provision device ","operationId":"provisionInstallerDevices","tags":["Installer"]}},"paths":{"locate":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/device_mac"}],"post":{"description":"Locate a Device by blinking it’s LED, it’s a persisted state that has to be stopped by calling Stop Locating API","operationId":"startInstallerLocateDevice","tags":["Installer"]}}},"unlocate":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/device_mac"}],"post":{"description":"Stop it","operationId":"stopInstallerLocateDevice","tags":["Installer"]}}},"{image_name}":{"specs":{"delete":{"description":"delete image","operationId":"deleteInstallerDeviceImage","tags":["Installer"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/image_name"},{"$ref":"#/components/parameters/device_mac"}],"post":{"description":"Add image","operationId":"InstallerDeviceImage","tags":["Installer"]}}}}}}},"rftemplates":{"specs":{"get":{"description":"Get RF Template","operationId":"getInstallerRfTemplatesNames","tags":["Installer"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}},"secpolicies":{"specs":{"get":{"description":"Get Secuity Policies","operationId":"getInstallerSecPolicies","tags":["Installer"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}},"sitegroups":{"specs":{"get":{"description":"Get Site Groups","operationId":"getInstallerSiteGroups","tags":["Installer"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}},"sites":{"specs":{"get":{"description":"Get Sites","operationId":"getInstallerSites","tags":["Installer"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]},"paths":{"{site_name}":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/site_name"}],"put":{"description":"Often the Installers are asked to assign Devices to Sites. The Sites can either be pre-created or created/modified by the Installer. If this is an update, the same grace period also applies.","operationId":"createOrUpdateInstallerSites","tags":["Installer"]}},"paths":{"maps":{"specs":{"get":{"description":"Get Maps","operationId":"getInstallerMaps","tags":["Installer"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/site_name"}]},"paths":{"import":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/site_name"}],"post":{"description":"Import data from files is a multipart POST which has an file, an optional json, and an optional csv, to create floorplan, assign & place ap if name or mac matches","operationId":"importInstallerMap","tags":["Installer"]}}},"{map_id}":{"specs":{"delete":{"description":"Delete Map","operationId":"deleteInstallerMap","tags":["Installer"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/site_name"},{"$ref":"#/components/parameters/map_id"}],"post":{"description":"Create a MAP","operationId":"createInstallerMap","tags":["Installer"]},"put":{"description":"Update map","operationId":"updateInstallerMap","tags":["Installer"]}}}}}}}}}}}}},"sites":{"paths":{"{site_name}":{"paths":{"optimize":{"specs":{"get":{"description":"After installation is considered complete (APs are placed on maps, all powered up), you can trigger an optimize operation where RRM will kick in (and maybe other things in the future) before it’s automatically scheduled.","operationId":"optimizeInstallerRrm","tags":["Installer"]},"parameters":[{"$ref":"#/components/parameters/site_name"}]}}}}}}}},"invite":{"paths":{"verify":{"paths":{"{token}":{"specs":{"parameters":[{"$ref":"#/components/parameters/token"}],"post":{"description":"**Note**: another call to ```GET /api/v1/self``` is required to see the new set of privileges","operationId":"verifyAdminInvite","tags":["Admin"]}}}}}}},"login":{"specs":{"post":{"description":"Log in with email/password","operationId":"login","tags":["Login"]}},"paths":{"lookup":{"specs":{"post":{"description":"Login Lookup","operationId":"lookup","tags":["Login"]}}},"oauth":{"paths":{"{provider}":{"specs":{"delete":{"description":"Unlink OAuth2 Provider","operationId":"unlinkOAuth2Provider","tags":["Login With OAuth2"]},"get":{"description":"Obtain Authorization URL for Login","operationId":"getOAuth2AuthorizationUrlForLogin","parameters":[{"in":"query","name":"forward","schema":{"example":"http://manage.mist.com/oauth/callback.html","type":"string"}}],"tags":["Login With OAuth2"]},"parameters":[{"in":"path","name":"provider","required":true,"schema":{"type":"string"}}],"post":{"description":"Login via OAuth2","operationId":"loginOAuth2","tags":["Login With OAuth2"]}}}}},"two_factor":{"specs":{"post":{"description":"Send 2FA Code","operationId":"twoFactor","tags":["Login With OAuth2"]}}}}},"logout":{"specs":{"post":{"description":"Logout","operationId":"logout","tags":["Login"]}}},"mobile":{"paths":{"verify":{"paths":{"{secret}":{"specs":{"parameters":[{"$ref":"#/components/parameters/secret"}],"post":{"description":"Verify secret","operationId":"activateSdkInvite","tags":["Mobile"]}}}}}}},"msps":{"specs":{"post":{"description":"Create MSP account","operationId":"createMsp","tags":["Msps"]}},"paths":{"{msp_id}":{"specs":{"delete":{"description":"Deleting MSP removes the MSP and OrgGroup under the MSP as well as all privileges associated with them. It does not remove any Org or Admins","operationId":"deleteMsp","tags":["Msps"]},"parameters":[{"$ref":"#/components/parameters/msp_id"}],"put":{"description":"Update MSP","operationId":"updateMsp","tags":["Msps"]},"get":{"tags":["Msps Admins"],"operationId":"getMspDetails","description":"Get MSP Detail"}},"paths":{"admins":{"specs":{"get":{"description":"Get MSP Admins","operationId":"getMspAdmins","tags":["Msps Admins"]},"parameters":[{"$ref":"#/components/parameters/msp_id"}]},"paths":{"{admin_id}":{"specs":{"delete":{"description":"This removes all privileges this admin has against the MSP. This goes deep all the way to the sites","operationId":"revokeMspAdmin","tags":["Msps Admins"]},"get":{"description":"Get MSP Admins","operationId":"getMspAdmin","tags":["Msps Admins"]},"parameters":[{"$ref":"#/components/parameters/msp_id"},{"$ref":"#/components/parameters/admin_id"}],"put":{"description":"Update MSP Admin","operationId":"updateMspAdmin","tags":["Msps Admins"]}}}}},"claim":{"specs":{"post":{"tags":["Msps Licenses"],"operationId":"claimMspLicence","description":"Claim an Order by Activation Code"},"parameters":[{"$ref":"#/components/parameters/msp_id"}]}},"insights":{"paths":{"{metric}":{"specs":{"parameters":[{"in":"path","name":"msp_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},{"in":"path","name":"metric","schema":{"type":"string"},"description":"see /api/v1/const/insight_metrics for available metrics","required":true}],"get":{"tags":["Msps SLEs"],"operationId":"getMspSle","description":"Get MSP SLEs (all/worst Orgs ...)","parameters":[{"schema":{"type":"string"},"in":"query","name":"sle","description":"see /api/v1/const/insight_metrics for more details"},{"schema":{"type":"string"},"in":"query","name":"metric","description":"see /api/v1/const/insight_metrics for more details"},{"$ref":"#/components/parameters/duration"},{"schema":{"type":"string","enum":["10m","1h"]},"in":"query","name":"interval"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"}]}}}}},"inventory":{"paths":{"{device_mac}":{"specs":{"get":{"description":"Get Inventoy By device MAC address","operationId":"getMspInventoryByMac","tags":["Msps Inventory"]},"parameters":[{"$ref":"#/components/parameters/msp_id"},{"$ref":"#/components/parameters/device_mac"}]}}}},"invites":{"specs":{"parameters":[{"$ref":"#/components/parameters/msp_id"}],"post":{"description":"Invite MSP Admin\\n\\n**Note**: An email will also be sent to the user with a link to https://manage.mist.com/verify/invite?token=:token","operationId":"inviteMspAdmin","tags":["Msps Invites"]}},"paths":{"{invite_id}":{"specs":{"delete":{"description":"Delete admin invite","operationId":"uninviteMspAdmin","tags":["Msps Invites"]},"parameters":[{"$ref":"#/components/parameters/msp_id"},{"$ref":"#/components/parameters/invite_id"}],"put":{"description":"Update MSP admin invite","operationId":"updateMspAdminInvite","tags":["Msps Invites"]}}}}},"licenses":{"specs":{"get":{"tags":["Msps Licenses"],"operationId":"getMspLicenses","description":"Get Msp Licenses"},"parameters":[{"$ref":"#/components/parameters/msp_id"}],"put":{"tags":["Msps Licenses"],"operationId":"moveOrDeleteMspLicenseToAnotherOrg","description":"Move or Delete MSP Licenses"}}},"logo":{"specs":{"post":{"tags":["Msps Logo"],"operationId":"postMspLogo","description":"Upload Logo (only for advanced msp users)"},"delete":{"tags":["Msps Logo"],"operationId":"deleteMspLogo","description":"Delete MSP Logo"},"parameters":[{"$ref":"#/components/parameters/msp_id"}]}},"logs":{"specs":{"parameters":[{"$ref":"#/components/parameters/msp_id"}],"get":{"tags":["Msps Logs"],"operationId":"getMspLogs","description":"Get a list of change logs for the current MSP","parameters":[{"schema":{"type":"string"},"in":"query","name":"org_id"},{"schema":{"type":"string"},"in":"query","name":"admin_name","description":"admin name or email"},{"schema":{"type":"string"},"in":"query","name":"message"}]}},"paths":{"count":{"specs":{"parameters":[{"$ref":"#/components/parameters/msp_id"}],"get":{"tags":["Msps Logs"],"operationId":"countMspLogs","description":"Count by Distinct Attributes of Audit Logs","parameters":[{"schema":{"type":"string","enum":["admin_id","admin_name","message","org_id"],"default":"admin_name"},"in":"query","name":"distinct"}]}}}}},"orggroups":{"specs":{"get":{"description":"Get MSP Org Groups","operationId":"getMspOrgGroups","tags":["Msps Org Groups"]},"parameters":[{"$ref":"#/components/parameters/msp_id"}],"post":{"description":"Create MSP Org Group","operationId":"createMspOrgGroup","tags":["Msps Org Groups"]}},"paths":{"{orggroup_id}":{"specs":{"delete":{"description":"Delete MSP Org Group","operationId":"deleteMspOrgGroup","tags":["Msps Org Groups"]},"get":{"description":"Get MSP Org Group Details","operationId":"getMspOrgGroup","tags":["Msps Org Groups"]},"parameters":[{"$ref":"#/components/parameters/msp_id"},{"$ref":"#/components/parameters/orggroup_id"}],"put":{"description":"Update MSP Org Group","operationId":"updateMspOrgGroup","tags":["Msps Org Groups"]}}}}},"orgs":{"specs":{"get":{"description":"Get MSP Orgs","operationId":"getMspOrgs","tags":["Msps Orgs"]},"parameters":[{"$ref":"#/components/parameters/msp_id"}],"post":{"description":"Create an Org under MSP","operationId":"createMspOrg","tags":["Msps Orgs"]},"put":{"description":"Assign or Unassign Orgs to an MSP account","operationId":"manageMspOrgs","tags":["Msps Orgs"]}},"paths":{"search":{"specs":{"get":{"description":"Search Org in MSP","operationId":"searchMspOrgs","parameters":[{"$ref":"#/components/parameters/name"},{"description":"org id","in":"query","name":"org_id","schema":{"format":"uuid","type":"string"}},{"description":"if this org has sufficient subscription","in":"query","name":"sub_insufficient","schema":{"type":"boolean"}},{"description":"if this org is under trial period","in":"query","name":"trial_enabled","schema":{"type":"boolean"}},{"description":"a list of types that enabled by usage","in":"query","name":"usage_types","schema":{"items":{"type":"string"},"type":"array"}}],"tags":["Msps Orgs"]},"parameters":[{"$ref":"#/components/parameters/msp_id"}]}},"{org_id}":{"specs":{"get":{"description":"Get MSP Org Details","operationId":"getMspOrg","tags":["Msps Orgs"]},"parameters":[{"$ref":"#/components/parameters/msp_id"},{"$ref":"#/components/parameters/org_id"}]}}}},"search":{"specs":{"get":{"description":"Search in MSP Orgs","operationId":"searchMspOrgGroup","parameters":[{"description":"orgs","example":"orgs","in":"query","name":"type","required":true,"schema":{"enum":["orgs"],"type":"string"}},{"$ref":"#/components/parameters/q"},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Msps Search"]},"parameters":[{"$ref":"#/components/parameters/msp_id"}]}},"ssoroles":{"specs":{"get":{"description":"Get MSP SSO Roles","operationId":"getMspSsoRoles","tags":["Msps SSO Roles"]},"parameters":[{"$ref":"#/components/parameters/msp_id"}],"post":{"description":"Create MSP Role","operationId":"createMspSsoRole","tags":["Msps SSO Roles"]}},"paths":{"{ssorole_id}":{"specs":{"delete":{"description":"Delete MSP SSO Roles","operationId":"deleteMspSsoRoles","tags":["Msps SSO Roles"]},"parameters":[{"$ref":"#/components/parameters/msp_id"},{"$ref":"#/components/parameters/ssorole_id"}],"put":{"description":"Update SSO Role","operationId":"updateMspSsoRole","tags":["Msps SSO Roles"]}}}}},"ssos":{"specs":{"get":{"description":"Get MSP SSO Config","operationId":"getMspSso","tags":["Msps SSO"]},"parameters":[{"$ref":"#/components/parameters/msp_id"}],"post":{"description":"Create MSP SSO profile","operationId":"createMspSso","tags":["Msps SSO"]}},"paths":{"{sso_id}":{"specs":{"delete":{"description":"Delete MSP SSO Config","operationId":"deleteMspSso","tags":["Msps SSO"]},"parameters":[{"$ref":"#/components/parameters/msp_id"},{"$ref":"#/components/parameters/sso_id"}],"put":{"description":"Update MSP SSO config","operationId":"updateMspSso","tags":["Msps SSO"]}},"paths":{"failures":{"specs":{"get":{"description":"Get MSP SSO Latest Failures","operationId":"getMspSsoLatestFailures","tags":["Msps SSO"]},"parameters":[{"$ref":"#/components/parameters/msp_id"},{"$ref":"#/components/parameters/sso_id"}]}},"metadata":{"specs":{"get":{"description":"Get MSP SSO SAML Metadata","operationId":"getMspSsoSamlMetadata","tags":["Msps SSO"]},"parameters":[{"$ref":"#/components/parameters/msp_id"},{"$ref":"#/components/parameters/sso_id"}]}},"metadata.xml":{"specs":{"get":{"description":"Download MSP SSO SAML Metadata","operationId":"downloadMspSsoSamlMetadata","tags":["Msps SSO"]},"parameters":[{"$ref":"#/components/parameters/msp_id"},{"$ref":"#/components/parameters/sso_id"}]}}}}}},"stats":{"paths":{"licenses":{"specs":{"get":{"description":"Get MSP Licences","operationId":"getMspOrgLicenses","parameters":[],"tags":["Msps Stats"]},"parameters":[{"$ref":"#/components/parameters/msp_id"}]}},"orgs":{"specs":{"get":{"description":"Get MSP Orgs Stats","operationId":"getMspOrgStats","parameters":[{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"}],"tags":["Msps Stats"]},"parameters":[{"$ref":"#/components/parameters/msp_id"}]}}}},"tickets":{"specs":{"parameters":[{"$ref":"#/components/parameters/msp_id"}],"get":{"tags":["Msps Tickets"],"operationId":"getMspTickets","description":"Get Tickets of a MSP","parameters":[{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}]}},"paths":{"count":{"specs":{"parameters":[{"$ref":"#/components/parameters/msp_id"}],"get":{"tags":["Msps Tickets"],"operationId":"countMspTickets","description":"Count tickets","parameters":[{"schema":{"type":"string","default":"status","enum":["status","type","org_id"]},"in":"query","name":"distinct"}]}}}}}}}}},"orgs":{"specs":{"post":{"description":"Org admin can invite people to manage the org. Furthermore, he can dictate the level of security those accounts are. The check is enforced when the invited admin tries to “accept” the invitation and every time the admin tries to login","operationId":"createOrg","tags":["Orgs"]}},"paths":{"{org_id}":{"specs":{"delete":{"description":"Delete Org","operationId":"deleteOrg","tags":["Orgs"]},"get":{"description":"Get Organization information","operationId":"getOrgInfo","tags":["Orgs"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"put":{"description":"Update Org","operationId":"updateOrg","tags":["Orgs"]}},"paths":{"128routers":{"paths":{"register_cmd":{"specs":{"get":{"description":"128T devices can be managed/adopted by Mist.","operationId":"getOrg128TRegistrationCommands","tags":["Orgs 128T"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}}}},"admins":{"specs":{"get":{"description":"Get a list of people who can manage the Site/Org under the Org","operationId":"getOrgAdmins","tags":["Orgs Admins"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]},"paths":{"{admin_id}":{"specs":{"delete":{"description":"This removes all privileges this admin has against the org","operationId":"revokeOrgAdmin","tags":["Orgs Admins"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/admin_id"}],"put":{"description":"Invite Org Admin","operationId":"updateOrgAdmin","tags":["Orgs Admins"]}}}}},"alarms":{"paths":{"ack":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Ack multiple Org Alarms","operationId":"multiAckOrgAlarms","tags":["Orgs Alarms"]}}},"ack_all":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Ack all Org Alarms\\n\\n**N.B.**: Batch size for multiple alarm ack and unack has to be less or or equal to 1000.","operationId":"ackOrgAllAlarms","tags":["Orgs Alarms"]}}},"count":{"specs":{"get":{"description":"Count Org Alarms","operationId":"countOrgAlarms","parameters":[{"in":"query","name":"distinct","schema":{"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Orgs Alarms"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}},"search":{"specs":{"get":{"description":"Search Org Alarms","operationId":"searchOrgAlarms","parameters":[{"in":"query","name":"type","schema":{"type":"string"}},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/page"}],"tags":["Orgs Alarms"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}},"unack":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Unack multiple Org Alarms","operationId":"multiUnackOrgAlarms","tags":["Orgs Alarms"]}}},"unack_all":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Unack all Org Alarms\\n\\n**N.B.**: Batch size for multiple alarm ack and unack has to be less or or equal to 1000.","operationId":"unackOrgAllArlarms","tags":["Orgs Alarms"]}}},"{alarm_id}":{"paths":{"ack":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/alarm_id"}],"post":{"description":"Ack Org Alarm","operationId":"ackOrgAlarm","tags":["Orgs Alarms"]}}}}}}},"alarmtemplates":{"specs":{"get":{"description":"Get Org Alarm Templates","operationId":"getOrgAlarmTemplates","tags":["Orgs Alarm Templates"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Available rules can be found in Orgs>Consts>getAlarmDefs\\n\\nThe delivery dict is only required if different from the template delivery settings.","operationId":"createOrgAlarmTemplate","tags":["Orgs Alarm Templates"]}},"paths":{"suppress":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"In certain situations, for example, scheduled maintanance, you may want to suspend alarms to be triggered for a period of time.","operationId":"suppressOrgAlarm","tags":["Orgs Alarm Templates"]}}},"{alarmtemplate_id}":{"specs":{"delete":{"description":"Delete Org Alarm Template","operationId":"deleteOrgAlarmTemplate","tags":["Orgs Alarm Templates"]},"get":{"description":"Get Org Alarm Template Details","operationId":"getOrgAlarmTemplate","tags":["Orgs Alarm Templates"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/alarmtemplate_id"}],"put":{"description":"Update Org Alarm Template","operationId":"updateOrgAlarmTemplate","tags":["Orgs Alarm Templates"]}}}}},"apitokens":{"specs":{"get":{"description":"get organization api tokens","operationId":"getOrgApiTokens","tags":["Orgs API Tokens"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Create Org API Token\\nNote that the token key is only available during creation time.","operationId":"createOrgApiToken","tags":["Orgs API Tokens"]}},"paths":{"{apitoken_id}":{"specs":{"delete":{"description":"Delete Org API Token","operationId":"deleteOrgApiToken","tags":["Orgs API Tokens"]},"get":{"description":"Get Org API Token","operationId":"getOrgApiToken","tags":["Orgs API Tokens"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/apitoken_id"}],"put":{"description":"Update Org API Token","operationId":"updateOrgApiToken","tags":["Orgs API Tokens"]}}}}},"aptemplates":{"specs":{"get":{"description":"Get AP Templates","operationId":"getOrgAptemplates","tags":["Orgs AP Templates"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Create Org AP Template","operationId":"createOrgAptemplate","tags":["Orgs AP Templates"]}},"paths":{"{aptemplate_id}":{"specs":{"delete":{"description":"Delete existing AP Template","operationId":"deleteOrgAptemplate","tags":["Orgs AP Templates"]},"get":{"description":"Get AP Template","operationId":"getOrgAptemplate","tags":["Orgs AP Templates"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/aptemplate_id"}],"put":{"description":"Update AP Template","operationId":"updateOrgAptemplate","tags":["Orgs AP Templates"]}}}}},"assetfilters":{"specs":{"get":{"description":"Get the list of all BLE asset filters for the given site. Each asset filter in the list operates independently. For a filter object to match an asset, all of the filter properties must match (logical ‘AND’ of each filter property). For example, the “Visitor Tags” filter below will match an asset when both the “ibeacon\\\\_uuid” and “ibeacon_major” properties match the asset. All non-matching assets are ignored.","operationId":"getOrgAssetFilters","tags":["Orgs Asset Filters"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Create Asset Filter\\n\\nCreates a single BLE asset filter for the given site. Any subset of filter properties can be included in the filter. A matching asset must meet the conditions of all given filter properties (logical ‘AND’).","operationId":"createOrgAssetFilters","tags":["Orgs Asset Filters"]}},"paths":{"{assetfilter_id}":{"specs":{"delete":{"description":"Deletes an existing BLE asset filter for the given site.","operationId":"deleteOrgAssetFilters","tags":["Orgs Asset Filters"]},"get":{"description":"Get Org Asset Filter Details","operationId":"getOrgAssetFilter","tags":["Orgs Asset Filters"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/assetfilter_id"}],"put":{"description":"Updates an existing BLE asset filter for the given site.","operationId":"updateOrgAssetFilters","tags":["Orgs Asset Filters"]}}}}},"assets":{"specs":{"get":{"description":"Get Org Assets","operationId":"getOrgAssets","tags":["Orgs Assets"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Create Org Asset","operationId":"createOrgAsset","tags":["Orgs Assets"]}},"paths":{"import":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Impert Org Assets. \\n\\nIt can be done via a CSV file or a JSON payload.\\n\\n#### CSV File Format\\n```csv\\nname,mac\\n\\"asset_name\\",5c5b53010101\\n``` ","operationId":"importOrgAssets","tags":["Orgs Assets"]}}},"{asset_id}":{"specs":{"delete":{"description":"Delete Org Asset","operationId":"deleteOrgAsset","tags":["Orgs Assets"]},"get":{"description":"Get Org Asset Details","operationId":"getOrgAsset","tags":["Orgs Assets"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/asset_id"}],"put":{"description":"Update Org Asset","operationId":"updateOrgAsset","tags":["Orgs Assets"]}}}}},"cert":{"specs":{"get":{"description":"Get Org Certificates","operationId":"getOrgCertificates","tags":["Orgs Cert"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]},"paths":{"regenerate":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Clear Org Certificates","operationId":"clearOrgCertificates","tags":["Orgs Cert"]}}}}},"claim":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"#### Body Parameters\\n**Parameter**|**Type**|**Description**\\n:-------------: |:-------------: |:-------------:\\ncode|string|activation code\\ntype|string|what to claim, all (default) / license / inventory","operationId":"claimOrgLicense","tags":["Orgs Claim"]}}},"clients":{"paths":{"count":{"specs":{"get":{"description":"Count Org Wireless Clients","operationId":"countOrgWirelessClients","parameters":[{"in":"query","name":"distinct","schema":{"default":"device","enum":["mac","hostname","device","os","model","ap","vlan","ssid","ip"]}},{"description":"partial / full MAC address","in":"query","name":"mac","schema":{"type":"string"}},{"description":"partial / full hostname","in":"query","name":"hostname","schema":{"type":"string"}},{"description":"device type, e.g. Mac, Nvidia, iPhone","in":"query","name":"device","schema":{"type":"string"}},{"description":"os, e.g. Sierra, Yosemite, Windows 10","in":"query","name":"os","schema":{"type":"string"}},{"description":"model, e.g. “MBP 15 late 2013”, 6, 6s, “8+ GSM”","in":"query","name":"model","schema":{"type":"string"}},{"description":"AP mac where the client has connected to","in":"query","name":"ap","schema":{"type":"string"}},{"description":"vlan","in":"query","name":"vlan","schema":{"type":"string"}},{"description":"SSID","in":"query","name":"ssid","schema":{"type":"string"}},{"$ref":"#/components/parameters/ip"},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Orgs Clients"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}},"events":{"paths":{"search":{"specs":{"get":{"description":"Get Org Clients Events","operationId":"searchOrgClientEvents","parameters":[{"description":"event type, e.g. MARVIS_EVENT_CLIENT_FBT_FAILURE","in":"query","name":"type","schema":{"type":"string"}},{"description":"for assoc/disassoc events","in":"query","name":"reason_code","schema":{"type":"integer"}},{"description":"SSID Name","in":"query","name":"ssid","schema":{"type":"string"}},{"description":"AP MAC","in":"query","name":"ap","schema":{"type":"string"}},{"description":"802.11 standard","in":"query","name":"proto","schema":{"enum":["b","g","n","ac","ax","a"],"type":"string"}},{"description":"24 / 5","in":"query","name":"band","schema":{"enum":["24","5"],"type":"string"}},{"description":"wlan_id","in":"query","name":"wlan_id","schema":{"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Orgs Clients"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}}}},"search":{"specs":{"get":{"description":"Search Org Wireless Clients","operationId":"searchOrgWirelessClients","parameters":[{"description":"partial / full MAC address","in":"query","name":"mac","schema":{"type":"string"}},{"$ref":"#/components/parameters/ip"},{"description":"partial / full hostname","in":"query","name":"hostname","schema":{"type":"string"}},{"description":"device type, e.g. Mac, Nvidia, iPhone","in":"query","name":"device","schema":{"type":"string"}},{"description":"os, e.g. Sierra, Yosemite, Windows 10","in":"query","name":"os","schema":{"type":"string"}},{"description":"model, e.g. “MBP 15 late 2013”, 6, 6s, “8+ GSM”","in":"query","name":"model","schema":{"type":"string"}},{"description":"AP mac where the client has connected to","in":"query","name":"ap","schema":{"type":"string"}},{"$ref":"#/components/parameters/psk_id_query"},{"$ref":"#/components/parameters/psk_name"},{"description":"vlan","in":"query","name":"vlan","schema":{"type":"string"}},{"description":"SSID","in":"query","name":"ssid","schema":{"type":"string"}},{"description":"partial / full MAC address, hostname","in":"query","name":"text","schema":{"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Orgs Clients"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}},"sessions":{"paths":{"count":{"specs":{"get":{"description":"Count Org Wireless Clients Sessions","operationId":"countOrgWirelessClientsSessions","parameters":[{"in":"query","name":"distinct","required":true,"schema":{"default":"device","enum":["ssid","ap","ip","vlan","hostname","os","model","device"],"type":"string"}},{"description":"AP MAC","in":"query","name":"ap","schema":{"type":"string"}},{"description":"5 / 24","in":"query","name":"band","schema":{"enum":["24","5"],"type":"string"}},{"description":"E.g. “Mac”, “iPhone”, “Apple watch”","in":"query","name":"client_family","schema":{"type":"string"}},{"description":"E.g. “Apple”","in":"query","name":"client_manufacture","schema":{"type":"string"}},{"description":"E.g. “8+”, “XS”","in":"query","name":"client_model","schema":{"type":"string"}},{"description":"E.g. “Mojave”, “Windows 10”, “Linux”","in":"query","name":"client_os","schema":{"type":"string"}},{"description":"SSID","in":"query","name":"ssid","schema":{"type":"string"}},{"description":"wlan_id","in":"query","name":"wlan_id","schema":{"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Orgs Clients"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}},"search":{"specs":{"get":{"description":"#### Query Parameters\\n**Parameter**|**Type**|**Description**\\n:-------------: |:-------------: |:-------------:\\nap|string|AP MAC\\nband|string|5 / 24\\nclient_family|string|E.g. “Mac”, “iPhone”, “Apple watch”\\nclient_manufacture|string|E.g. “Apple”\\nclient_model|string|E.g. “8+”, “XS”\\nclient_os|string|E.g. “Mojave”, “Windows 10”, “Linux”\\nssid|string|SSID\\nwlan_id|string|wlan_id","operationId":"searchOrgWirelessClientSessions","parameters":[{"description":"AP MAC","in":"query","name":"ap","schema":{"type":"string"}},{"description":"5 / 24","in":"query","name":"band","schema":{"enum":["24","5"],"type":"string"}},{"description":"E.g. “Mac”, “iPhone”, “Apple watch”","in":"query","name":"client_family","schema":{"type":"string"}},{"description":"E.g. “Apple”","in":"query","name":"client_manufacture","schema":{"type":"string"}},{"description":"E.g. “8+”, “XS”","in":"query","name":"client_model","schema":{"type":"string"}},{"description":"E.g. “Mojave”, “Windows 10”, “Linux”","in":"query","name":"client_os","schema":{"type":"string"}},{"description":"SSID","in":"query","name":"ssid","schema":{"type":"string"}},{"description":"wlan_id","in":"query","name":"wlan_id","schema":{"type":"string"}},{"$ref":"#/components/parameters/psk_id_query"},{"$ref":"#/components/parameters/psk_name"},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Orgs Clients"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}}}}}},"clone":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Create an Org by cloning from another one. Org Settings, Templates, Wxlan Tags, Wxlan Tunnels, Wxlan Rules, Org Wlans will be copied. Sites and Site Groups will not be copied, and therefore, the copied template will not be applied to any site/sitegroups.","operationId":"cloneOrg","tags":["Orgs"]}}},"crl":{"specs":{"get":{"description":"Get Org CRL File","operationId":"getOrgCrlFile","tags":["Orgs CRL"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]},"paths":{"truncate":{"specs":{"parameters":[{"schema":{"type":"string"},"name":"org_id","in":"path","required":true}],"post":{"tags":["Orgs Cert"],"operationId":"truncateOrgCrlFile","description":"By default, all certs used by recently unclaimed devices within 9 month will be included in CRL. If the list grows too big, you can truncate it"}}}}},"deviceprofiles":{"specs":{"get":{"description":"Get Org Device Profiles","operationId":"getOrgDeviceProfiles","tags":["Orgs Device Profiles"],"parameters":[{"schema":{"type":"string","default":"ap","enum":["ap","switch","gateway"]},"in":"query","name":"type"}]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Create Device Profile","operationId":"createOrgDeviceProfiles","tags":["Orgs Device Profiles"]}},"paths":{"{deviceprofile_id}":{"specs":{"delete":{"description":"Delete Org Device Profile","operationId":"deleteOrgDeviceProfile","tags":["Orgs Device Profiles"]},"get":{"description":"Get Org device Profile Details","operationId":"getOrgDeviceProfile","tags":["Orgs Device Profiles"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/deviceprofile_id"}],"put":{"description":"Update Org Device Profile","operationId":"updateOrgDeviceProfile","tags":["Orgs Device Profiles"]}},"paths":{"assign":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/deviceprofile_id"}],"post":{"description":"Assign Org Device Profile to Devices","operationId":"assignOrgDeviceProfileToDevices","tags":["Orgs Device Profiles"]}}},"unassign":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/deviceprofile_id"}],"post":{"description":"Unassign Org Device Profile from Devices","operationId":"unassignOrgDeviceProfilesFromDevices","tags":["Orgs Device Profiles"]}}}}}}},"devices":{"specs":{"get":{"description":"Get Org Devices","operationId":"getOrgDevices","tags":["Orgs Devices"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]},"paths":{"count":{"specs":{"get":{"description":"Count Org Devices","operationId":"countOrgDevices","parameters":[{"example":"model","in":"query","name":"distinct","required":true,"schema":{"default":"model","enum":["hostname","site_id","model","mac","version","ip","mxtunnel_status","mxedge_id","lldp_system_name","lldp_system_desc","lldp_port_id","lldp_mgmt_addr"],"type":"string"}},{"description":"partial / full hostname","in":"query","name":"hostname","schema":{"type":"string"}},{"description":"site id","in":"query","name":"site_id","schema":{"type":"string"}},{"description":"device model","in":"query","name":"model","schema":{"type":"string"}},{"description":"AP mac","in":"query","name":"mac","schema":{"type":"string"}},{"description":"version","in":"query","name":"version","schema":{"type":"string"}},{"$ref":"#/components/parameters/ip"},{"description":"MxTunnel status, up / down","in":"query","name":"mxtunnel_status","schema":{"enum":["up","down"],"type":"string"}},{"description":"Mist Edge id, if AP is connecting to a Mist Edge","in":"query","name":"mxedge_id","schema":{"type":"string"}},{"description":"LLDP system name","in":"query","name":"lldp_system_name","schema":{"type":"string"}},{"description":"LLDP system description","in":"query","name":"lldp_system_desc","schema":{"type":"string"}},{"description":"LLDP port id","in":"query","name":"lldp_port_id","schema":{"type":"string"}},{"description":"LLDP management ip address","in":"query","name":"lldp_mgmt_addr","schema":{"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Orgs Devices"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}},"events":{"paths":{"count":{"specs":{"get":{"description":"Count Org Devices Events","operationId":"countOrgDevicesEvents","parameters":[{"in":"query","name":"distinct","required":true,"schema":{"default":"model","enum":["org_id","site_id","ap","apfw","model","text","timestamp","type"],"type":"string"}},{"description":"org id","in":"query","name":"org_id","schema":{"type":"string"}},{"description":"site id","in":"query","name":"site_id","schema":{"type":"string"}},{"description":"AP mac","in":"query","name":"ap","schema":{"type":"string"}},{"description":"AP Firmware","in":"query","name":"apfw","schema":{"type":"string"}},{"description":"device model","in":"query","name":"model","schema":{"type":"string"}},{"description":"event message","in":"query","name":"text","schema":{"type":"string"}},{"description":"event time","in":"query","name":"timestamp","schema":{"type":"string"}},{"description":"Events Type","in":"query","name":"type","schema":{"enum":["AP_CONFIG_CHANGED_BY_RRM","AP_CONFIG_CHANGED_BY_USER","AP_CONFIGURED","AP_RECONFIGURED","AP_RESTARTED","AP_RESTART_BY_USER","AP_RRM_ACTION","CLIENT_DNS_OK","MARVIS_DNS_FAILURE"],"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Orgs Devices"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}},"search":{"specs":{"get":{"description":"Search Org Devices Events","operationId":"searchOrgDevicesEvents","parameters":[{"description":"org id","in":"query","name":"org_id","schema":{"type":"string"}},{"description":"site id","in":"query","name":"site_id","schema":{"type":"string"}},{"description":"AP mac","in":"query","name":"ap","schema":{"type":"string"}},{"description":"AP Firmware","in":"query","name":"apfw","schema":{"type":"string"}},{"description":"device model","in":"query","name":"model","schema":{"type":"string"}},{"description":"event message","in":"query","name":"text","schema":{"type":"string"}},{"description":"event time","in":"query","name":"timestamp","schema":{"type":"string"}},{"description":"Events Type","in":"query","name":"type","schema":{"enum":["AP_CONFIG_CHANGED_BY_RRM","AP_CONFIG_CHANGED_BY_USER","AP_CONFIGURED","AP_RECONFIGURED","AP_RESTARTED","AP_RESTART_BY_USER","AP_RRM_ACTION","CLIENT_DNS_OK","MARVIS_DNS_FAILURE"],"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Orgs Devices"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}}}},"radio_macs":{"specs":{"parameters":[{"schema":{"type":"string"},"name":"org_id","in":"path","required":true}],"get":{"tags":["Orgs Devices"],"operationId":"getOrgApsMacs","description":"Get Org AP Device Mac and Radio MACs"}}},"search":{"specs":{"get":{"description":"Search Org Devices","operationId":"searchOrgDevices","parameters":[{"description":"partial / full hostname","in":"query","name":"hostname","schema":{"type":"string"}},{"description":"site id","in":"query","name":"site_id","schema":{"type":"string"}},{"description":"device model","in":"query","name":"model","schema":{"type":"string"}},{"description":"AP mac","in":"query","name":"mac","schema":{"type":"string"}},{"description":"version","in":"query","name":"version","schema":{"type":"string"}},{"$ref":"#/components/parameters/ip"},{"description":"MxTunnel status, up / down","in":"query","name":"mxtunnel_status","schema":{"enum":["up","down"],"type":"string"}},{"description":"Mist Edge id, if AP is connecting to a Mist Edge","in":"query","name":"mxedge_id","schema":{"type":"string"}},{"description":"LLDP system name","in":"query","name":"lldp_system_name","schema":{"type":"string"}},{"description":"LLDP system description","in":"query","name":"lldp_system_desc","schema":{"type":"string"}},{"description":"LLDP port id","in":"query","name":"lldp_port_id","schema":{"type":"string"}},{"description":"LLDP management ip address","in":"query","name":"lldp_mgmt_addr","schema":{"type":"string"}},{"description":"Bandwith of band_24","in":"query","name":"band_24_bandwith","schema":{"type":"integer"}},{"description":"Bandwith of band_5","in":"query","name":"band_5_bandwith","schema":{"type":"integer"}},{"description":"Bandwith of band_6","in":"query","name":"band_6_bandwith","schema":{"type":"integer"}},{"description":"Channel of band_24","in":"query","name":"band_24_channel","schema":{"type":"integer"}},{"description":"Channel of band_5","in":"query","name":"band_5_channel","schema":{"type":"integer"}},{"description":"Channel of band_6","in":"query","name":"band_6_channel","schema":{"type":"integer"}},{"description":"Port speed of eth0","in":"query","name":"eth0_port_speed","schema":{"type":"integer"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Orgs Devices"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}},"upgrade":{"specs":{"get":{"description":"get Site multi devces upgrades","operationId":"getOrgMultiSitesDevicesUpgrades","tags":["Orgs Devices"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Upgrade Multiple Sites","operationId":"upgradeOrgMultiSitesDevices","tags":["Orgs Devices"]}},"paths":{"{upgrade_id}":{"specs":{"get":{"description":"Get Multi Site Upgrade","operationId":"getOrgMultiSitesUpgrade","tags":["Orgs Devices"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"in":"path","name":"upgrade_id","required":true,"schema":{"format":"uuid","type":"string"}}]}}}}}},"evpn_topologies":{"specs":{"get":{"description":"Get the existing EVPN topology","operationId":"getOrgEvpnTopologies","tags":["Orgs Devices EVPN"]},"parameters":[{"in":"path","name":"org_id","required":true,"schema":{"type":"string"}}],"post":{"description":"While all the `evpn_id` / `downlink_ips` can be specifidd by hand, the easiest way is to call the `build_vpn_topology` API, allowing you to examine the diff, and update it yourself. You can also simply call it with `overwrite=true` which will apply the updates for you.\\n\\n**Notes:**\\n1. You can use `core` / `distribution` / `access` to create a CLOS topology\\n2. You can also use `core` / `distribution` to form a 2-tier EVPN topology where ESI-Lag is configured distribution to connect to access switches\\n3. In a small/medium campus, `collapsed-core` can be used where core switches are the inter-connected to do EVPN\\n4. The API uses a few pre-defined parameters and best-practices to generate the configs. It can be customized by using `evpn_options` in Site Setting / Network Template. (e.g. a different subnet for the underlay)\\n\\n#### Collapsed Core\\nIn a small-medium campus, EVPN can also be enabled only at the core switches (up to 4) by assigning all participating switches with `collapsed-core role`. When there are more than 2 switches, a ring-like topology will be formed.\\n\\n#### ESI-Lag\\nIf the access switchess does not have EVPN support, you can take advantage of EVPN by setting up ESI-Lag on distribution switches\\n\\n#### Leaf / Access / Collapsed-Core\\nFor leaf nodes in a EVPN topology, you’d have to configure the IPs for networks that would participate in EVPN. Optionally, VRFs to isolate traffic from one tenant verus another","operationId":"createOrgEvpnTopology","tags":["Orgs Devices EVPN"]}},"paths":{"{evpn_topology_id}":{"specs":{"delete":{"description":"Delete the Org EVPN Topology","operationId":"deleteOrgEvpnTopology","tags":["Orgs Devices EVPN"]},"get":{"description":"Get One EVPN Topology Detail","operationId":"getOrgEvpnTolopogy","tags":["Orgs Devices EVPN"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/evpn_topology_id"}],"put":{"description":"Update the EVPN Topolgy","operationId":"updateOrgEvpnTopology","tags":["Orgs Devices EVPN"]}}}}},"gatewaytemplates":{"specs":{"get":{"description":"Get Organization Gateway Templates","operationId":"getOrgGatewayTemplates","tags":["Orgs Gateway Templates"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Create Org Gateway Template","operationId":"createOrgGatewayTemplate","tags":["Orgs Gateway Templates"]}},"paths":{"{gatewaytemplate_id}":{"specs":{"delete":{"description":"Delete Organization Gateway Template","operationId":"deleteOrgGatewayTemplate","tags":["Orgs Gateway Templates"]},"get":{"description":"Get Organization Gateway Template details","operationId":"getOrgGatewayTemplate","tags":["Orgs Gateway Templates"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/gatewaytemplate_id"}],"put":{"description":"Update Organization Gateway Template","operationId":"updateOrgGatewayTemplate","tags":["Orgs Gateway Templates"]}}}}},"insights":{"paths":{"sites-sle":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"}],"get":{"tags":["Orgs SLEs"],"operationId":"getOrgSitesSle","description":"Get Org Sites SLE","parameters":[{"schema":{"type":"string","enum":["wan","wired","wifi"]},"in":"query","name":"sle"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/duration"}]}}},"{metric}":{"specs":{"parameters":[{"in":"path","name":"org_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},{"in":"path","description":"see /api/v1/const/insight_metrics for available metrics","name":"metric","schema":{"type":"string"},"required":true}],"get":{"tags":["Orgs SLEs"],"operationId":"getOrgSle","description":"Get Org SLEs (all/worst sites, Mx Edges, ...)","parameters":[{"schema":{"type":"string"},"in":"query","name":"sle","description":"see /api/v1/const/insight_metrics for more details"},{"schema":{"type":"string"},"in":"query","name":"metric","description":"see /api/v1/const/insight_metrics for more details"},{"$ref":"#/components/parameters/duration"},{"schema":{"type":"string","enum":["10m","1h"]},"in":"query","name":"interval"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"}]}}}}},"inventory":{"specs":{"get":{"description":"Get Org Inventory\\n\\n### VC (Virtual-Chassis) Management\\nIdeally VC should be managed as a single device - where - one managed entity where config / monitoring is anchored against (with a stable identify MAC) - all members appears in the inventory\\n\\nIn our implementation, we strive to achieve that without manual user configurations by \\n1. during claim or adoption a VC, we require FPC0 to exist and will use its MAC as identify for the entire chassis\\n2. other VC members will be automatically populated when they’re all present\\n\\nThe perceivable result is \\n1. from `/sites/:site_id/stats/devices/:fpc0_mac` API, you’d see the VC where module_stat contains the VC members \\n2. from `/orgs/:org_id/inventory?vc=true` API, you’d see all VC members with vc_mac pointing to the FPC0","operationId":"getOrgInventory","parameters":[{"description":"device serial","in":"query","name":"serial","schema":{"type":"string"}},{"description":"device model","in":"query","name":"model","schema":{"type":"string"}},{"in":"query","name":"type","schema":{"enum":["ap","switch","gateway"],"type":"string","default":"ap"}},{"description":"MAC address","in":"query","name":"mac","schema":{"type":"string"}},{"description":"site id if assigned, null if not assigned","in":"query","name":"site_id","schema":{"type":"string"}},{"in":"query","name":"vc_mac","schema":{"type":"string"}},{"in":"query","name":"vc","schema":{"type":"string"}},{"in":"query","name":"unassigned","schema":{"type":"boolean"}}],"tags":["Orgs Inventory"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Add Device to Org Inventory","operationId":"addOrgInventory","tags":["Orgs Inventory"]},"put":{"description":"** Add or Delete multiple inventory from org **\\n* if Delete\\nThis removes the inventory from the org. If the inventory is already assigned to a site, it will be unassigned.","operationId":"updateOrgInventoryAssignment","tags":["Orgs Inventory"]}},"paths":{"reevaluate_auto_assignment":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"tags":["Orgs Inventory"],"operationId":"reevaluateOrgAutoAssignment","description":"Reevaluate Auto Assignment"}}},"replace":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"It’s a common request we get from the customers. When a AP HW has problem and need a replacement, they would want to copy the existing attributes (Device Config) of this old AP to the new one. It can be done by providing the MAC of a device that’s currently in the inventory but not assigned. The Device replaced will become unclaimed.\\n\\n**Note:** For Gateway devices only like-for-like replacements (can only replace a SRX320 with a SRX320 and not some otehr model) are allowed.","operationId":"replaceOrgDevices","tags":["Orgs Inventory"]}}}}},"invites":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"If the request is successful, an email will also be sent to the user with a link to ```https://manage.mist.com/verify/invite?token=:token&expire=1459632743&org=OrgName```","operationId":"inviteOrgAdmin","tags":["Orgs Invites"]}},"paths":{"{invite_id}":{"specs":{"delete":{"description":"Delete Admin Invite","operationId":"uninviteOrgAdmin","tags":["Orgs Invites"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/invite_id"}],"put":{"description":"Update Admin Invite","operationId":"updateOrgAdminInvite","tags":["Orgs Invites"]}}}}},"jsi":{"paths":{"devices":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"}],"get":{"tags":["Orgs JSI Inventory"],"operationId":"getOrgJsiDevices","description":"Get all devices that connected to JSI","parameters":[{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/page"},{"schema":{"type":"string"},"in":"query","name":"model"},{"schema":{"type":"string"},"in":"query","name":"serial"},{"schema":{"type":"string"},"in":"query","name":"mac"}]}}},"inventory":{"specs":{"parameters":[{"schema":{"type":"string"},"name":"org_id","in":"path","required":true}],"get":{"tags":["Orgs JSI Inventory"],"operationId":"getOrgJsiInventory","description":"This gets all devices purchased from the accounts associated with the Org","parameters":[{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/page"},{"schema":{"type":"string"},"in":"query","name":"model"},{"schema":{"type":"string"},"in":"query","name":"serial"}]}}}}},"junos":{"paths":{"register_cmd":{"specs":{"get":{"description":"Junos devices running mist agents can be managed/adopted by Mist.\\n","operationId":"getOrgJunosDevicesRegistrationCommands","tags":["Orgs Devices"]},"parameters":[{"in":"path","name":"org_id","required":true,"schema":{"type":"string"}}]}}}},"licenses":{"specs":{"get":{"description":"Get the list of licenses","operationId":"getOrgLicencesSummary","tags":["Orgs Licenses"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"put":{"description":"Move, Undo Move or Delete Org License to Another Org\\nIf the admin has admin privilege against the `org_id` and `dst_org_id`, he can move some of the licenses to another Org. Given that: \\n1. the specified license is currently active \\n2. there’s enough licenses left in the specified license (by subscription_id) \\n3. there will still be enough entitled licenses for the type of license after the amendment","operationId":"moveOrDeleteOrgLicenseToAnotherOrg","tags":["Orgs Licenses"]}},"paths":{"usages":{"specs":{"get":{"description":"Get Licenses Usage by Sites\\nThis shows license usage (i.e. needed) based on the features enabled for the site.","operationId":"getOrgLicencesBySite","tags":["Orgs Licenses"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}}}},"logs":{"specs":{"get":{"description":"Get a list of change logs for the current Org","operationId":"getOrgLogs","parameters":[{"description":"site id","in":"query","name":"site_id","schema":{"type":"string"}},{"description":"admin name or email","in":"query","name":"admin_name","schema":{"type":"string"}},{"description":"message","in":"query","name":"message","schema":{"type":"string"}},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/duration"}],"tags":["Orgs Logs"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]},"paths":{"count":{"specs":{"get":{"description":"Count by Distinct Attributes of Audit Logs","operationId":"countOrgLogsByDistinctAttributes","parameters":[{"in":"query","name":"distinct","required":true,"schema":{"default":"admin_name","enum":["admin_id","admin_name","message","site_id"],"type":"string"}},{"in":"query","name":"admin_id","schema":{"type":"string"}},{"in":"query","name":"admin_name","schema":{"type":"string"}},{"in":"query","name":"site_id","schema":{"type":"string"}},{"in":"query","name":"message","schema":{"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Orgs Logs"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}}}},"maps":{"paths":{"import":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Import data from files is a multipart POST which has an file, an optional json, and an optional csv, to create floorplan, assign matching inventory to specific site, place ap if name or mac matches\\n\\n# CSV File Format\\n```csv\\nVendor AP name,Mist AP Mac\\nUS Office AP-2 - 5c:5b:35:00:00:02,5c5b35000002\\n``` ","operationId":"importOrgMaps","tags":["Orgs Maps"]}}}}},"mxclusters":{"specs":{"get":{"description":"Get MxEdge Clusters","operationId":"getOrgMxEdgeClusters","tags":["Orgs MxClusters"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Create MxCluster","operationId":"createOrgMxEdgeCluster","tags":["Orgs MxClusters"]}},"paths":{"{mxcluster_id}":{"specs":{"delete":{"description":"Delete Org MXEdge Cluster","operationId":"deleteOrgMxEdgeCluster","tags":["Orgs MxClusters"]},"get":{"description":"Get Org MxEdge Cluster Details","operationId":"getOrgMxEdgeCluster","tags":["Orgs MxClusters"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/mxcluster_id"}],"put":{"description":"Update Org MxEdge Cluster","operationId":"updateOrgMxEdgeCluster","tags":["Orgs MxClusters"]}}}}},"mxedges":{"specs":{"get":{"description":"Get Org MxEdges","operationId":"getOrgMxEdges","tags":["Orgs MxEdges"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Create MxEdge","operationId":"createOrgMxEdge","tags":["Orgs MxEdges"]}},"paths":{"assign":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Assign Org MxEdge to Site","operationId":"assignOrgMxEdgeToSite","tags":["Orgs MxEdges"]}}},"claim":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"For a Mist Edge in default state, it will show a random claim code like `135-546-673` which you can “claim” it into your Org","operationId":"claimOrgMxEdge","tags":["Orgs MxEdges"]}}},"unassign":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Unassign Org MxEdge from Site","operationId":"unassignOrgMxEdgeFromSite","tags":["Orgs MxEdges"]}}},"upgrade":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Upgrade Mist Edges","operationId":"upgradeOrgMxEdges","tags":["Orgs MxEdges"]},"get":{"tags":["Orgs MxEdges"],"operationId":"getOrgMxEdgeUpgrades","description":"Get Mist Edge Upgrades"}},"paths":{"{upgrade_id}":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"},{"schema":{"type":"string","format":"uuid"},"name":"upgrade_id","in":"path","required":true}],"get":{"tags":["Orgs MxEdges"],"operationId":"getOrgMxEdgeUpgrade","description":"Get Mist Edge Upgrade"}}}}},"version":{"specs":{"get":{"description":"Get Mist Edge Upgrade Information","operationId":"getOrgMxEdgeUpgradeInfo","parameters":[{"description":"upgrade channel to follow, stable (default) / beta / alpha","in":"query","name":"channel","schema":{"default":"stable","enum":["stable","beta","alpha"],"type":"string"}}],"tags":["Orgs MxEdges"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}},"{mxedge_id}":{"specs":{"delete":{"description":"Delete Org MxEdge","operationId":"deleteOrgMxEdge","tags":["Orgs MxEdges"]},"get":{"description":"Get Org MxEdge details","operationId":"getOrgMxEdge","tags":["Orgs MxEdges"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/mxedge_id"}],"put":{"description":"Update Org MxEdge","operationId":"updateOrgMxEdge","tags":["Orgs MxEdges"]}},"paths":{"restart":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/mxedge_id"}],"post":{"description":"In the case where a Mist Edge is replaced, you would need to unregister it. Which disconnects the currently the connected Mist Edge and allow another to register.","operationId":"restartOrgMxEdge","tags":["Orgs MxEdges"]}}},"services":{"paths":{"tunterm":{"paths":{"bounce_port":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/mxedge_id"}],"post":{"description":"Bounce TunTerm Data Ports","operationId":"bounceOrgMxEdgeDataPorts","parameters":[],"tags":["Orgs MxEdges"]}}}}},"{name}":{"paths":{"{action}":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/mxedge_id"},{"description":"tunterm or radsecproxy or mxagent","in":"path","name":"name","required":true,"schema":{"enum":["tunterm","radsecproxy","mxagent"],"type":"string"}},{"description":"restart or start or stop","in":"path","name":"action","required":true,"schema":{"enum":["restart","start","stop"],"type":"string"}}],"post":{"description":"Control Services on a Mist Edge","operationId":"controlOrgMxEdgeServices","tags":["Orgs MxEdges"]}}}}}}},"support":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/mxedge_id"}],"post":{"tags":["Orgs MxEdges"],"operationId":"uploadOrgMxEdgeSupportFiles","description":"Support / Upload Mist Edge support files"}}},"unregister":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/mxedge_id"}],"post":{"description":"In the case where a Mist Edge is replaced, you would need to unregister it. Which disconnects the currently the connected Mist Edge and allow another to register.","operationId":"unregisterOrgMxEdge","tags":["Orgs MxEdges"]}}},"upgrade":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/mxedge_id"}],"post":{"description":"Upgrade MxEdge","operationId":"upgradeOrgMxEdge","tags":["Orgs MxEdges"]}}}}}}},"mxtunnels":{"specs":{"get":{"description":"Get Org MxTiunnels","operationId":"getOrgMxTunnels","tags":["Orgs MxTunnels"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Create MxTunnel","operationId":"createOrgMxTunnel","tags":["Orgs MxTunnels"]}},"paths":{"{mxtunnel_id}":{"specs":{"delete":{"description":"Delete Org MxTunnel","operationId":"deleteOrgMxTunnel","tags":["Orgs MxTunnels"]},"get":{"description":"Get Org MxTunnel Details","operationId":"getOrgMxTunnel","tags":["Orgs MxTunnels"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/mxtunnel_id"}],"put":{"description":"Update Org MxTunnel","operationId":"updateOrgMxTunnel","tags":["Orgs MxTunnels"]}}}}},"nacrules":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"}],"get":{"tags":["Orgs NAC"],"operationId":"getOrgNacRules","description":"get Org NAC Rules"},"post":{"tags":["Orgs NAC"],"operationId":"createOrgNacRule","description":"create Org NAC Rule"}},"paths":{"{nacrule_id}":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/nacrule_id"}],"get":{"tags":["Orgs NAC"],"operationId":"getOrgNacRule","description":"Get Org NAC Rule"},"put":{"tags":["Orgs NAC"],"operationId":"updateOrgNacRule","description":"Update Org NAC Rule"},"delete":{"tags":["Orgs NAC"],"operationId":"deleteOrgNacRule","description":"Delete Org NAC Rule"}}}}},"nactags":{"specs":{"get":{"tags":["Orgs NAC"],"operationId":"getOrgNacTags","description":"Get Org NAC Tags"},"post":{"tags":["Orgs NAC"],"operationId":"createOrgNacTag","description":"Create Org NAC Tag"},"parameters":[{"$ref":"#/components/parameters/org_id"}]},"paths":{"{nactag_id}":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/nactag_id"}],"get":{"tags":["Orgs NAC"],"operationId":"getOrgNacTag","description":"Get Org NAC Tag"},"put":{"tags":["Orgs NAC"],"operationId":"updateOrgNacTag","description":"Update Org NAC Tag "},"delete":{"tags":["Orgs NAC"],"operationId":"DeleteOrgNacTag","description":"Delete Org NAC Tag"}}}}},"networks":{"specs":{"get":{"description":"Get Organization Networks","operationId":"getOrgNetworks","tags":["Orgs Networks"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Create Organization Network","operationId":"createOrgNetwork","tags":["Orgs Networks"]}},"paths":{"{network_id}":{"specs":{"delete":{"description":"Delete Organization Network","operationId":"deleteOrgNetwork","tags":["Orgs Networks"]},"get":{"description":"Get Organization Network Details","operationId":"get-api-v1-orgs-org_id-networks-network_id","tags":["Orgs Gateway Templates"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/network_id"}],"put":{"description":"Update Organization Network","operationId":"updateOrgNetwork","tags":["Orgs Networks"]}}}}},"networktemplates":{"specs":{"get":{"description":"Get Org Network Templates","operationId":"getOrgNetworkTemplates","tags":["Orgs Network Templates"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Update Org Network Templates","operationId":"createOrgNetworkTemplate","tags":["Orgs Network Templates"]}},"paths":{"{networktemplate_id}":{"specs":{"delete":{"description":"Delete Org Network Template","operationId":"deleteOrgNetworkTemplate","tags":["Orgs Network Templates"]},"get":{"description":"Get Org Network Templates Details","operationId":"getOrgNetworkTemplate","tags":["Orgs Network Templates"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/networktemplate_id"}],"put":{"description":"Update Org Network Template","operationId":"updateOrgNetworkTemplates","parameters":[],"tags":["Orgs Network Templates"]}}}}},"ocdevices":{"paths":{"outbound_ssh_cmd":{"specs":{"get":{"description":"Get Org Juniper Devices command\\n\\nJuniper devices can be managed/adopted by Mist. Currently outbound-ssh + netconf is used.\\nA few lines of CLI commands are generated per-Org, allowing the Juniper devices to phone home to Mist.","operationId":"getOrgJuniperDevicesCommand","tags":["Orgs Devices"],"parameters":[{"schema":{"type":"string"},"in":"query","name":"site_id","description":"site_id would be used for proxy config check of the site and automatic site assignment"}]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}}}},"pskportals":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"}],"get":{"tags":["Orgs Psk Portals"],"operationId":"getOrgPskPortals","description":"get Org Psk Portals\\n\\nPSK Self-Service Portals are for \\n1. **WIFI users** who want to connect to a WLAN with personal PSK, they’re told to connect to a URL\\nwhere they can login (likely through company’s SSO) and get the WIFI Name / Passphrase - required input fields name, email so we can generate PSK \\n2. **PSK Admins** (they don’t have access to normal Network Admin Portal)"},"post":{"tags":["Orgs Psk Portals"],"operationId":"createOrgPskPortal","description":"Create Org Psk Portal"}},"paths":{"{pskportal_id}":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/pskportal_id"}],"get":{"tags":["Orgs Psk Portals"],"operationId":"getOrgPskPortal","description":"get Org Psk Portal Details"},"put":{"tags":["Orgs Psk Portals"],"operationId":"updateOrgPskPortal","description":"update Org Psk Portal"},"delete":{"description":"Delete Org Psk Portal","tags":["Orgs Psk Portals"],"operationId":"deleteOrgPskPortal"}}}}},"psks":{"specs":{"get":{"description":"Get Org Psks","operationId":"getOrgPsks","parameters":[{"example":"psk_name","in":"query","name":"name","schema":{"type":"string"}},{"in":"query","name":"ssid","schema":{"type":"string"}},{"in":"query","name":"role","schema":{"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"}],"tags":["Orgs Psks"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Create Org PSK","operationId":"createOrgPsk","tags":["Orgs Psks"],"parameters":[{"schema":{"type":"boolean"},"in":"query","name":"upsert","description":"if a key exists with the same `name`, replace it with the new one"}]},"put":{"description":"Update multi PSKs","operationId":"updateOrgMultiPsks","tags":["Orgs Psks"]}},"paths":{"import":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Import PSK from CSV file or JSON\\n\\n## CSV File Format\\n```\\nPSK Import CSV File Format:\\nname,ssid,passphrase,usage,vlan_id,mac,max_usage,role,expire_time,notify_expiry,expiry_notification_time,notify_on_create_or_edit,email\\nCommon,warehouse,foryoureyesonly,single,35,a31425f31278,0,student,1618594236\\nJustin,reception,visible,multi,1002,200,teacher,1618594236\\nCommon2,ssid,1245678-xx,single,35,a31425f31278,0,student,1618594236,true,7,true,admin@test.com\\n```","operationId":"importOrgPsk","tags":["Orgs Psks"]}}},"{psk_id}":{"specs":{"delete":{"description":"Delete Org PSK","operationId":"deleteOrgPsk","tags":["Orgs Psks"]},"get":{"description":"Get Org PSK Details","operationId":"getOrgPsk","tags":["Orgs Psks"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/psk_id"}],"put":{"description":"Update Org PSK ","operationId":"updateOrgPsk","tags":["Orgs Psks"]}}}}},"rftemplates":{"specs":{"get":{"description":"Get Org RF Template","operationId":"getOrgRfTemplates","tags":["Orgs RF Templates"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Create Org RF Template","operationId":"createOrgRfTemplate","tags":["Orgs RF Templates"]}},"paths":{"{rftemplate_id}":{"specs":{"delete":{"description":"Delete Org RF Template","operationId":"deleteOrgRfTemplate","tags":["Orgs RF Templates"]},"get":{"description":"Get Org RF Template Details","operationId":"getOrgRfTemplate","tags":["Orgs RF Templates"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/rftemplate_id"}],"put":{"description":"Update Org RF Template ","operationId":"updateOrgRfTemplate","tags":["Orgs RF Templates"]}}}}},"sdkclients":{"paths":{"{sdkclient_id}":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/sdkclient_id"}],"put":{"description":"Update SDK Client","operationId":"updateSdkClient","tags":["Orgs SDK Clients"]}}}}},"sdkinvites":{"specs":{"get":{"description":"Get SDK Invites","operationId":"getSdkInvites","tags":["Orgs SDK Invites"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Create SDK Invite","operationId":"createSdkInvite","tags":["Orgs SDK Invites"]}},"paths":{"{sdkinvite_id}":{"specs":{"delete":{"description":"Revoke SDK Invite","operationId":"revokeSdkInvite","tags":["Orgs SDK Invites"]},"get":{"description":"Get SDK Invite Details","operationId":"getSdkInvite","tags":["Orgs SDK Invites"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/sdkinvite_id"}],"put":{"description":"Update SDK Invite","operationId":"updateSdkInvite","tags":["Orgs SDK Invites"]}},"paths":{"email":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/sdkinvite_id"}],"post":{"description":"Send SDK Invite by Email","operationId":"sendSdkInviteEmail","tags":["Orgs SDK Invites"]}}},"qrcode":{"specs":{"get":{"description":"Revoke SDK Invite","operationId":"getSdkInviteQrCode","tags":["Orgs SDK Invites"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/sdkinvite_id"}]}},"sms":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/sdkinvite_id"}],"post":{"description":"Send SDK Invite by SMS","operationId":"sendSdkInviteSms","tags":["Orgs SDK Invites"]}}}}}}},"sdktemplates":{"specs":{"get":{"description":"Get SDK Templates","operationId":"getSdkTemplates","tags":["Orgs SDK Templates"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Create SDK Template","operationId":"createSdkTemplate","tags":["Orgs SDK Templates"]}},"paths":{"{sdktemplate_id}":{"specs":{"delete":{"description":"Delete SDK Template","operationId":"deleteSdkTemplate","tags":["Orgs SDK Templates"]},"get":{"description":"Get SDK Template Details","operationId":"getSdkTemplate","tags":["Orgs SDK Templates"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/sdktemplate_id"}],"put":{"description":"Update SDK Template","operationId":"updateSdkTemplate","tags":["Orgs SDK Templates"]}}}}},"secpolicies":{"specs":{"get":{"description":"Get Org Security Policies","operationId":"getOrgSecPolicies","tags":["Orgs SecPolicies"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Create Org Security Policy","operationId":"createOrgSecPolicies","tags":["Orgs SecPolicies"]}},"paths":{"{secpolicy_id}":{"specs":{"delete":{"description":"Delete Org Security Policy","operationId":"deleteOrgSecPolicies","tags":["Orgs SecPolicies"]},"get":{"description":"Get Org Security Policy","operationId":"getOrgSecPolicy","tags":["Orgs SecPolicies"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/secpolicy_id"}],"put":{"description":"Update Org Security Policy","operationId":"updateOrgSecPolicies","tags":["Orgs SecPolicies"]}}}}},"servicepolicies":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"}],"get":{"tags":["Orgs Service Policies"],"operationId":"getOrgServicePolicies","description":"Get Org Service Policies"},"post":{"tags":["Orgs Service Policies"],"operationId":"createOrgServicePolicy","description":"Create Org Serrvice Policy"}},"paths":{"{servicepolicy_id}":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/servicepolicy_id"}],"get":{"tags":["Orgs Service Policies"],"operationId":"getOrgServicePolicy","description":"Get Org Service Policy Details"},"put":{"tags":["Orgs Service Policies"],"operationId":"updateOrgServicePolicy","description":"Update Org Serrvice Policy"},"delete":{"tags":["Orgs Service Policies"],"operationId":"deleteOrgServicePolicy","description":"Delete Org Service Policuy"}}}}},"services":{"specs":{"get":{"description":"Get Org Services","operationId":"getOrgServices","tags":["Orgs Services"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Create getOrgServices Service","operationId":"createOrgService","tags":["Orgs Services"]}},"paths":{"{service_id}":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/service_id"}],"get":{"tags":["Orgs Services"],"operationId":"getOrgService","description":"Get Org Service"},"put":{"tags":["Orgs Services"],"operationId":"updateOrgService","description":"update Org Service"},"delete":{"tags":["Orgs Services"],"operationId":"deleteOrgService","description":"deleteOrgService"}}}}},"setting":{"specs":{"get":{"description":"Get Org Settings","operationId":"getOrgSettings","tags":["Orgs Setting"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"put":{"description":"Update Org Settings","operationId":"updateOrgSettings","tags":["Orgs Setting"]}},"paths":{"blacklist":{"specs":{"delete":{"description":"Delete Org Blacklist Station Clients","operationId":"deleteOrgClientsBlocklist","tags":["Orgs Setting"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Create Org Blacklist Client List. \\n\\nIf there is already a blacklist, this API will replace it with the new one. \\n\\nMax number of blacklist clients is 1000. \\n\\nRetrieve the current blacklisted clients from `blacklist_url` under Org:Setting\\n","operationId":"createOrgClientsBlocklist","tags":["Orgs Setting"]}}},"juniper":{"paths":{"link_accounts":{"specs":{"parameters":[{"in":"path","name":"org_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}}],"post":{"tags":["Orgs"],"operationId":"linkOrgToJuniperJuniperAccount","description":"Link Juniper Accounts"}}},"linked_account":{"specs":{"parameters":[{"in":"path","name":"org_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}}],"delete":{"operationId":"unlinkOrgFromJuniperCustomerId","tags":["Orgs"],"description":"Unlink Juniper Customer ID"}}}}},"pcap_bucket":{"paths":{"setup":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Provide Customer Bucket Name\\n\\nSetting up Custom PCAP Bucket Involves the following:\\n* provide the bucket name\\n* we’ll attempt to write a file MIST_TOKEN\\n* you have to verify the ownership of the bucket by providing the content of the MIST_TOKEN","operationId":"setOrgCustomBucket","tags":["Orgs Setting"]}}},"verify":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Verify Customer PCAP Bucket\\n\\n**Note**: If successful, a “VERIFIED” file will be created in the bucket","operationId":"verifyOrgCustomBucket","tags":["Orgs Setting"]}}}}},"{app_name}":{"paths":{"link":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"},{"schema":{"type":"string"},"name":"app_name","in":"path","required":true,"description":"OAuth application name (Example : zoom, teams, etc..)"}],"get":{"tags":["Orgs OAuth"],"operationId":"getOrgOauthAppLinkedStatus","description":"Get Org Level OAuth Application Linked Status","parameters":[{"schema":{"type":"string"},"in":"query","name":"forward","description":"Mist portal url to which backend needs to redirect after succesful OAuth authorization. **Required** to get the `authorization_url`"}]},"delete":{"operationId":"deleteOrgOauthAppAuthorization","tags":["Orgs OAuth"],"description":"Delete Org Level OAuth Application Authorization With Mist Portal"}}}}}}},"sitegroups":{"specs":{"get":{"description":"Get Org Site Groups","operationId":"getOrgSiteGroups","tags":["Orgs Sitegroups"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Create Org Site Group","operationId":"createOrgSiteGroup","tags":["Orgs Sitegroups"]}},"paths":{"{sitegroup_id}":{"specs":{"delete":{"description":"Delete Org Site Group","operationId":"deleteOrgSiteGroup","tags":["Orgs Sitegroups"]},"get":{"description":"Get Org Site Group","operationId":"getOrgSiteGroup","tags":["Orgs Sitegroups"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/sitegroup_id"}],"put":{"description":"Update Org Site Group","operationId":"updateOrgSiteGroup","tags":["Orgs Sitegroups"]}}}}},"sites":{"specs":{"get":{"description":"Get Org Sites","operationId":"getOrgSites","tags":["Orgs Sites"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Create Org Site","operationId":"createOrgSite","tags":["Orgs Sites"]}},"paths":{"count":{"specs":{"get":{"description":"Count Sites","operationId":"countOrgSites","parameters":[{"in":"query","name":"distinct","schema":{"default":"id","enum":["analytic_enabled","app_waking","asset_enabled","auto_upgrade_enabled","auto_upgrade_version","country_code","honeypot_enabled","id","locate_unconnected","mesh_enabled","name","rogue_enabled","remote_syslog_enabled","rtsa_enabled","vna_enabled","wifi_enabled"],"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Orgs Sites"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}},"search":{"specs":{"get":{"description":"Search Sites","operationId":"searchOrgSites","parameters":[{"description":"if Advanced Analytic feature is enabled","in":"query","name":"analytic_enabled","schema":{"type":"boolean"}},{"description":"if App Waking feature is enabled","in":"query","name":"app_waking","schema":{"type":"boolean"}},{"description":"if Asset Tracking is enabled","in":"query","name":"asset_enabled","schema":{"type":"boolean"}},{"description":"if Auto Upgrade feature is enabled","in":"query","name":"auto_upgrade_enabled","schema":{"type":"boolean"}},{"description":"if Auto Upgrade feature is enabled","in":"query","name":"auto_upgrade_version","schema":{"type":"boolean"}},{"description":"site country code","in":"query","name":"country_code","schema":{"type":"string"}},{"description":"if Honeypot detection is enabled","in":"query","name":"honeypot_enabled","schema":{"type":"boolean"}},{"description":"site id","in":"query","name":"id","schema":{"type":"string"}},{"description":"if unconnected client are located","in":"query","name":"locate_unconnected","schema":{"type":"boolean"}},{"description":"if Mesh feature is enabled","in":"query","name":"mesh_enabled","schema":{"type":"boolean"}},{"description":"site name","in":"query","name":"name","schema":{"type":"string"}},{"description":"if Rogue detection is enabled","in":"query","name":"rogue_enabled","schema":{"type":"boolean"}},{"description":"if Remote Syslog is enabled","in":"query","name":"remote_syslog_enabled","schema":{"type":"boolean"}},{"description":"if managed mobility feature is enabled","in":"query","name":"rtsa_enabled","schema":{"type":"boolean"}},{"description":"if Virtual Network Assistant is enabled","in":"query","name":"vna_enabled","schema":{"type":"boolean"}},{"description":"if WIFI feature is enabled","in":"query","name":"wifi_enabled","schema":{"type":"boolean"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Orgs Sites"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}},"{site_name}":{"paths":{"maps":{"paths":{"import":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/site_name"}],"post":{"description":"Import data from files is a multipart POST which has an file, an optional json, and an optional csv, to create floorplan, assign matching inventory to specific site, place ap if name or mac matches\\n\\n#### Request\\n\\n```\\n\\"json\\": a JSON string describing your upload\\n\\"file\\": a binary file\\n```","operationId":"importOrgMapToSite","tags":["Orgs Sites"]}}}}}}}}},"ssoroles":{"specs":{"get":{"description":"Get Org SSO Roles","operationId":"getOrgSsoRoles","tags":["Orgs SSO Roles"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Create Org SSO Role","operationId":"createOrgSsoRole","tags":["Orgs SSO Roles"]}},"paths":{"{ssorole_id}":{"specs":{"delete":{"description":"Delete Org SSO Role","operationId":"deleteOrgSsoRoles","tags":["Orgs SSO Roles"]},"get":{"description":"Get Org SSO Role Details","operationId":"getOrgSsoRole","tags":["Orgs SSO Roles"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/ssorole_id"}],"put":{"description":"Update Org SSO Role","operationId":"updateOrgSsoRole","tags":["Orgs SSO Roles"]}}}}},"ssos":{"specs":{"get":{"description":"Get Org SSO Configuration","operationId":"getOrgSsos","tags":["Orgs SSO"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Create Org SSO Configuration","operationId":"createOrgSso","tags":["Orgs SSO"]}},"paths":{"{sso_id}":{"specs":{"delete":{"description":"Delete Org SSO Configuration","operationId":"deleteOrgSso","tags":["Orgs SSO"]},"get":{"description":"Get Org SSO Configuration Details","operationId":"getOrgSso","tags":["Orgs SSO"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/sso_id"}],"put":{"description":"Update Org SSO Configuration","operationId":"updateOrgSso","tags":["Orgs SSO"]}},"paths":{"failures":{"specs":{"get":{"description":"Get Org SSO Latest Failures","operationId":"getOrgSsoLatestFailures","parameters":[{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Orgs SSO"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/sso_id"}]}},"metadata":{"specs":{"get":{"description":"Get Org SSO SAML Metadata","operationId":"getOrgSsoSamlMetadata","tags":["Orgs SSO"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/sso_id"}]}},"metadata.xml":{"specs":{"get":{"description":"Download Org SSO SAML Metdata","operationId":"downloadOrgSsoSamlMetadata","tags":["Orgs SSO"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/sso_id"}]}}}}}},"ssr":{"paths":{"upgrade":{"specs":{"parameters":[{"schema":{"type":"string"},"name":"org_id","in":"path","required":true}],"post":{"tags":["Orgs Devices SSR"],"operationId":"upgradeOrgSsrs","description":"Upgrade Org SSRs"},"get":{"tags":["Orgs Devices SSR"],"operationId":"getOrgSsrUpgrades","description":"Get Org SSR Upgrades"}},"paths":{"{upgrade_id}":{"paths":{"cancel":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/upgrade_id"}],"post":{"tags":["Orgs Devices SSR"],"operationId":"cancelOrgSsrUpgrade","description":"Best effort to cancel an upgrade. Devices which are already upgraded wont be touched↵\\n"}}}}}}},"versions":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"}],"get":{"tags":["Orgs Devices"],"operationId":"getOrgSsrUpgradeInfo","description":"Get Org SSD Ugprade information","parameters":[{"schema":{"type":"string"},"in":"query","name":"channel"}]}}}}},"stats":{"specs":{"get":{"description":"Get Org Stats","operationId":"getOrgStats","parameters":[{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Orgs Stats"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]},"paths":{"assets":{"specs":{"get":{"description":"Get Org Assets Stats","operationId":"getOrgAssetsStats","parameters":[{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Orgs Stats"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]},"paths":{"count":{"specs":{"get":{"description":"Count Org Assets","operationId":"countOrgAssetsByDistanceField","parameters":[{"in":"query","name":"distinct","schema":{"enum":["site_id","mac","map_id","ibeacon_uuid","ibeacon_major","ibeacon_minor"],"type":"string"}}],"tags":["Orgs Assets"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}},"search":{"specs":{"get":{"description":"Search for Org Assets","operationId":"searchOrgAssets","parameters":[{"in":"query","name":"site_id","schema":{"type":"string"}},{"in":"query","name":"mac","schema":{"type":"string"}},{"in":"query","name":"map_id","schema":{"type":"string"}},{"in":"query","name":"ibeacon_uuid","schema":{"type":"string"}},{"in":"query","name":"ibeacon_major","schema":{"type":"string"}},{"in":"query","name":"ibeacon_minor","schema":{"type":"string"}},{"in":"query","name":"ap_mac","schema":{"type":"string"}},{"in":"query","name":"beam","schema":{"type":"string"}},{"in":"query","name":"rssi","schema":{"type":"string"}}],"tags":["Orgs Assets"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}}}},"devices":{"specs":{"get":{"description":"Org Devices stats\\nThis API renders some high-level device stats, pagination is assumed and returned in response header (as the response is an array)\\n","operationId":"getOrgDevicesStats","parameters":[{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"},{"in":"query","name":"type","schema":{"default":"ap","enum":["ap","switch","gateways","all"],"type":"string"}},{"in":"query","name":"status","schema":{"default":"all","enum":["all","connected","disconnected"],"type":"string"}}],"tags":["Orgs Stats"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}},"mxedges":{"specs":{"get":{"description":"Get Org MxEdge Stats","operationId":"getOrgMxEdgesStats","parameters":[{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Orgs Stats"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]},"paths":{"{mxedge_id}":{"specs":{"get":{"description":"Get Org MxEdge Details Stats","operationId":"getOrgMxEdgeStats","tags":["Orgs Stats"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/mxedge_id"}]}}}},"ports":{"paths":{"search":{"specs":{"get":{"description":"Search Switch / Gateway Ports","operationId":"searchOrgSwOrGwPorts","parameters":[{"description":"indicates full or half duplex","in":"query","name":"full_duplex","schema":{"type":"boolean"}},{"description":"device identifier","in":"query","name":"mac","schema":{"type":"string"}},{"description":"Chassis identifier of the chassis type listed","in":"query","name":"neighbor_mac","schema":{"type":"string"}},{"description":"Description supplied by the system on the interface E.g. “GigabitEthernet2/0/39”","in":"query","name":"neighbor_port_desc","schema":{"type":"string"}},{"description":"Name supplied by the system on the interface E.g. neighbor system name E.g. “Kumar-Acc-SW.mist.local”","in":"query","name":"neighbor_system_name","schema":{"type":"string"}},{"description":"is the POE configured not be disabled.","in":"query","name":"poe_disabled","schema":{"type":"boolean"}},{"description":"poe mode depending on class E.g. “802.3at”","in":"query","name":"poe_mode","schema":{"type":"string"}},{"description":"is the device attached to POE","in":"query","name":"poe_on","schema":{"type":"boolean"}},{"description":"interface name","in":"query","name":"port_id","schema":{"type":"string"}},{"description":"interface mac address","in":"query","name":"port_mac","schema":{"type":"string"}},{"description":"Amount of power being used by the interface at the time the command is executed. Unit in watts.","in":"query","name":"power_draw","schema":{"type":"number"}},{"description":"Output packets","in":"query","name":"tx_pkts","schema":{"type":"integer"}},{"description":"Input packets","in":"query","name":"rx_pkts","schema":{"type":"integer"}},{"description":"Input bytes","in":"query","name":"rx_bytes","schema":{"type":"integer"}},{"description":"Output rate","in":"query","name":"tx_bps","schema":{"type":"integer"}},{"description":"Input rate","in":"query","name":"rx_bps","schema":{"type":"integer"}},{"description":"Output errors","in":"query","name":"tx_errors","schema":{"type":"integer"}},{"description":"Input errors","in":"query","name":"rx_errors","schema":{"type":"integer"}},{"description":"Multicast output packets","in":"query","name":"tx_mcast_pkts","schema":{"type":"integer"}},{"description":"Broadcast output packets","in":"query","name":"tx_bcast_pkts","schema":{"type":"integer"}},{"description":"Multicast input packets","in":"query","name":"rx_mcast_pkts","schema":{"type":"integer"}},{"description":"Broadcast input packets","in":"query","name":"rx_bcast_pkts","schema":{"type":"integer"}},{"description":"port speed","in":"query","name":"speed","schema":{"type":"integer"}},{"description":"Limit on number of dynamically learned macs","in":"query","name":"mac_limit","schema":{"type":"integer"}},{"description":"Number of mac addresses in the forwarding table","in":"query","name":"mac_count","schema":{"type":"integer"}},{"description":"indicates if interface is up","in":"query","name":"up","schema":{"type":"boolean"}},{"description":"if `up`==`true`","in":"query","name":"stp_state","schema":{"enum":["forwarding","blocking","learning","listening","disabled"],"type":"string"}},{"description":"if `up`==`true`","in":"query","name":"stp_role","schema":{"enum":["designated","backup","alternate","root","root-prevented"],"type":"string"}},{"description":"if `up`==`true` && has Authenticator role","in":"query","name":"auth_state","schema":{"enum":["init","authenticated","authenticating","held"],"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Devices Stats"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}}}},"switch_ports":{"paths":{"count":{"specs":{"get":{"description":"Count by Distinct Attributes of Switch/Gateway Ports","operationId":"countOrgByDisctinctAttributesOfSwitchPorts","parameters":[{"description":"port_id, port_mac, full_duplex, mac, neighbor_macneighbor_port_desc, neighbor_system_name, poe_disabled, poe_mode, poe_on, speed, up","in":"query","name":"distinct","schema":{"default":"mac","enum":["port_id","port_mac","full_duplex","mac","neighbor_mac","neighbor_port_desc","neighbor_system_name","poe_disabled","poe_mode","poe_on","speed","up"],"type":"string"}},{"description":"indicates full or half duplex","in":"query","name":"full_duplex","schema":{"type":"boolean"}},{"description":"device identifier","in":"query","name":"mac","schema":{"type":"string"}},{"description":"Chassis identifier of the chassis type listed","in":"query","name":"neighbor_mac","schema":{"type":"string"}},{"description":"Description supplied by the system on the interface E.g. “GigabitEthernet2/0/39”","in":"query","name":"neighbor_port_desc","schema":{"type":"string"}},{"description":"Name supplied by the system on the interface E.g. neighbor system name E.g. “Kumar-Acc-SW.mist.local”","in":"query","name":"neighbor_system_name","schema":{"type":"string"}},{"description":"is the POE configured not be disabled.","in":"query","name":"poe_disabled","schema":{"type":"boolean"}},{"description":"poe mode depending on class E.g. “802.3at”","in":"query","name":"poe_mode","schema":{"type":"string"}},{"description":"is the device attached to POE","in":"query","name":"poe_on","schema":{"type":"boolean"}},{"description":"interface name","in":"query","name":"port_id","schema":{"type":"string"}},{"description":"interface mac address","in":"query","name":"port_mac","schema":{"type":"string"}},{"description":"Amount of power being used by the interface at the time the command is executed. Unit in watts.","in":"query","name":"power_draw","schema":{"type":"number"}},{"description":"Output packets","in":"query","name":"tx_pkts","schema":{"type":"integer"}},{"description":"Input packets","in":"query","name":"rx_pkts","schema":{"type":"integer"}},{"description":"Input bytes","in":"query","name":"rx_bytes","schema":{"type":"integer"}},{"description":"Output rate","in":"query","name":"tx_bps","schema":{"type":"integer"}},{"description":"Input rate","in":"query","name":"rx_bps","schema":{"type":"integer"}},{"description":"Multicast output packets","in":"query","name":"tx_mcast_pkts","schema":{"type":"integer"}},{"description":"Broadcast output packets","in":"query","name":"tx_bcast_pkts","schema":{"type":"integer"}},{"description":"Multicast input packets","in":"query","name":"rx_mcast_pkts","schema":{"type":"integer"}},{"description":"Broadcast input packets","in":"query","name":"rx_bcast_pkts","schema":{"type":"integer"}},{"description":"port speed","in":"query","name":"speed","schema":{"type":"integer"}},{"description":"if `up`==`true`","in":"query","name":"stp_state","schema":{"enum":["forwarding","blocking","learning","listening","disabled"],"type":"string"}},{"description":"if `up`==`true`","in":"query","name":"stp_role","schema":{"enum":["designated","backup","alternate","root","root-prevented"],"type":"string"}},{"description":"if `up`==`true`","in":"query","name":"auth_state","schema":{"enum":["init","authenticated","authenticating","held"],"type":"string"}},{"description":"indicates if interface is up","in":"query","name":"up","schema":{"type":"boolean"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Orgs Stats"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}}}},"tunnels":{"paths":{"count":{"specs":{"get":{"description":"Count Org Mx Tunnels","operationId":"countOrgMxTunnelsStats","parameters":[{"in":"query","name":"distinct","schema":{"default":"wxtunnel_id","enum":["mxcluster_id","wxtunnel_id","site_id","org_id"],"type":"string"}},{"in":"query","name":"mxcluster_id","schema":{"type":"string"}},{"in":"query","name":"org_id","schema":{"type":"string"}},{"in":"query","name":"site_id","schema":{"type":"string"}},{"in":"query","name":"wxtunnel_id","schema":{"type":"string"}},{"in":"query","name":"ap","schema":{"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Orgs Stats"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}},"search":{"specs":{"get":{"description":"Search Org MxTunnels Stats","operationId":"getOrgMxTunnelsStats","parameters":[{"in":"query","name":"mxcluster_id","schema":{"type":"string"}},{"in":"query","name":"org_id","schema":{"type":"string"}},{"in":"query","name":"site_id","schema":{"type":"string"}},{"in":"query","name":"wxtunnel_id","schema":{"type":"string"}},{"in":"query","name":"ap","schema":{"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Orgs Stats"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}}}},"vpn_peers":{"paths":{"count":{"specs":{"get":{"description":"Count Org Peer Path Statgs","operationId":"countOrgPeerPathStats","parameters":[{"in":"query","name":"distinct","schema":{"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Orgs VPNs"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}},"search":{"specs":{"get":{"description":"Search Org Peer Path Stats","operationId":"searchOrgPeerPathStats","parameters":[{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"}],"tags":["Orgs VPNs"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}}}}}},"subscriptions":{"specs":{"delete":{"description":"Unsubscribe from Org Alarms/Reports\\nSubscriptions define how Org Alarms/Reports are delivered to whom","operationId":"unsubscribeOrgAlarmsReports","tags":["Orgs Subscriptions"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Subscribe to Org Alarms/Reports\\nSubscriptions define how Org Alarms/Reports are delivered to whom","operationId":"subscribeOrgAlarmsReports","tags":["Orgs Subscriptions"]}}},"templates":{"specs":{"get":{"description":"Get Org Templates","operationId":"getOrgTemplates","tags":["Orgs Templates"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Create Org Template","operationId":"createOrgTemplate","tags":["Orgs Templates"]}},"paths":{"{template_id}":{"specs":{"delete":{"description":"Delete Org Template","operationId":"deleteOrgTemplate","tags":["Orgs Templates"]},"get":{"description":"Get Org Template Details","operationId":"getOrgTemplate","tags":["Orgs Templates"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/template_id"}],"put":{"description":"Update Org Template","operationId":"updateOrgTemplate","tags":["Orgs Templates"]}},"paths":{"clone":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/template_id"}],"post":{"description":"Clone Org Template","operationId":"cloneOrgTemplate","tags":["Orgs Templates"]}}}}}}},"tickets":{"specs":{"get":{"description":"Get Tickets of an Org","operationId":"getOrgTickets","parameters":[{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Orgs Tickets"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Create a support ticket","operationId":"createOrgTicket","tags":["Orgs Tickets"]}},"paths":{"count":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"}],"get":{"tags":["Orgs Tickets"],"operationId":"countOrgTickets","description":"Count Org Tickets","parameters":[{"schema":{"type":"string","default":"status","enum":["status","type"]},"in":"query","name":"distinct"}]}}},"{ticket_id}":{"specs":{"get":{"description":"Get support ticket details","operationId":"getOrgTicket","tags":["Orgs Tickets"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/ticket_id"}],"put":{"description":"Update support ticket","operationId":"updateOrgTicket","tags":["Orgs Tickets"]}},"paths":{"comments":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/ticket_id"}],"post":{"description":"Add Comment to support ticket","operationId":"addOrgTicketComment","tags":["Orgs Tickets"]}}}}}}},"troubleshoot":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"}],"get":{"tags":["Orgs Troubleshoot"],"operationId":"troubleshootOrgClient","description":"Troubleshoot Org Client","parameters":[{"schema":{"type":"string"},"in":"query","name":"mac","required":true},{"schema":{"type":"string","format":"uuid"},"in":"query","name":"site_id"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"}]}}},"vpns":{"specs":{"get":{"description":"Get Org VPNs","operationId":"getOrgsVpns","tags":["Orgs VPNs"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Create Org VPN","operationId":"createOrgVpns","tags":["Orgs VPNs"]}},"paths":{"{vpn_id}":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/vpn_id"}],"get":{"tags":["Orgs VPNs"],"operationId":"getOrgVpn","description":"getOrgVpn"},"put":{"tags":["Orgs VPNs"],"operationId":"updateOrgVpn","description":"update Org Vpn"},"delete":{"tags":["Orgs VPNs"],"operationId":"deleteOrgVpn","description":"delete Org Vpn"}}}}},"webhooks":{"specs":{"get":{"description":"Get Org Webhooks","operationId":"getOrgWebhooks","tags":["Orgs Webhooks"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Create Org Webhook","operationId":"createOrgWebhook","tags":["Orgs Webhooks"]}},"paths":{"{webhook_id}":{"specs":{"delete":{"description":"Delete Org Webhook","operationId":"deleteOrgWebhook","tags":["Orgs Webhooks"]},"get":{"description":"Get Org Webhook Details","operationId":"getOrgWebhook","tags":["Orgs Webhooks"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/webhook_id"}],"put":{"description":"Update Org Webhook","operationId":"updateOrgWebhook","tags":["Orgs Webhooks"]}}}}},"wired_clients":{"paths":{"count":{"specs":{"get":{"description":"Count by Distinct Attributes of Clients","operationId":"countOrgWiredClients","parameters":[{"in":"query","name":"distinct","schema":{"default":"mac","enum":["port_id","vlan","mac"],"type":"string"}},{"description":"client mac","in":"query","name":"mac","schema":{"type":"string"}},{"description":"device mac","in":"query","name":"device_mac","schema":{"type":"string"}},{"description":"port id","in":"query","name":"port_id","schema":{"type":"string"}},{"description":"vlan","in":"query","name":"vlan","schema":{"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Orgs Wired Clients"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}},"search":{"specs":{"get":{"tags":["Orgs Clients"],"operationId":"searchOrgClientsWired","description":"Search for Wired Clients in org","parameters":[{"schema":{"type":"string"},"in":"query","name":"device_mac","description":"device mac"},{"schema":{"type":"string"},"in":"query","name":"mac","description":"client mac"},{"schema":{"type":"string"},"in":"query","name":"port_id","description":"port id"},{"schema":{"type":"integer"},"in":"query","name":"vlan","description":"vlan"},{"schema":{"type":"string"},"in":"query","name":"site_id","description":"site id"},{"schema":{"type":"string"},"in":"query","name":"ip","description":"ip"},{"schema":{"type":"string"},"in":"query","name":"manufacture","description":"client manufacture"},{"schema":{"type":"string"},"in":"query","name":"text","description":"single entry of hostname/mac"}]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}}}},"wlans":{"specs":{"get":{"description":"Get Org Wlans","operationId":"getOrgWlans","tags":["Orgs Wlans"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Create Org Wlan","operationId":"createOrgWlan","tags":["Orgs Wlans"]}},"paths":{"derived":{"specs":{"get":{"description":"Get Org WLAN Derived","operationId":"getOrgWlanDerived","parameters":[{"description":"whether to resolve SITE_VARS","example":true,"in":"query","name":"resolve","schema":{"type":"boolean"}}],"tags":["Orgs Wlans"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}},"{wlan_id}":{"specs":{"delete":{"description":"Delete Org WLAN","operationId":"deleteOrgWlan","tags":["Orgs Wlans"]},"get":{"description":"Get Org Wlan Detail","operationId":"getOrgWLAN","tags":["Orgs Wlans"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/wlan_id"}],"put":{"description":"Update Org Wlan","operationId":"updateOrgWlan","tags":["Orgs Wlans"]}},"paths":{"portal_image":{"specs":{"delete":{"description":"Delete Org WLAN Portal Image","operationId":"deleteOrgWlanPortalImage","tags":["Orgs Wlans"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/wlan_id"}],"post":{"description":"Upload Org WLAN Portal Image","operationId":"uploadOrgWlanPortalImage","tags":["Orgs Wlans"]}}},"portal_template":{"specs":{"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/wlan_id"}],"put":{"description":"Update Org WLAN Portal Template","operationId":"updateOrgWlanPortalTemplate","tags":["Orgs Wlans"]}}}}}}},"wxrules":{"specs":{"get":{"description":"Get Org WxRules","operationId":"getOrgWxRules","tags":["Orgs WxRules"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Create Org WxRule","operationId":"createOrgWxRule","tags":["Orgs WxRules"]}},"paths":{"derived":{"specs":{"get":{"description":"Get Derived Org WxRule","operationId":"getOrgWxRulesDerived","tags":["Orgs WxRules"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}},"{wxrules_id}":{"specs":{"delete":{"description":"Delete Org WxRule","operationId":"deleteOrgWxRule","tags":["Orgs WxRules"]},"get":{"description":"Get Org WxRule Details","operationId":"getOrgWxRule","tags":["Orgs WxRules"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/wxrules_id"}],"put":{"description":"Update Org WxRule","operationId":"updateOrgWxRule","tags":["Orgs WxRules"]}}}}},"wxtags":{"specs":{"get":{"description":"Get WxLAN Tags","operationId":"getOrgWxTags","tags":["Orgs WxTags"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Create WxLAN Tag","operationId":"createOrgWxTag","tags":["Orgs WxTags"]}},"paths":{"apps":{"specs":{"get":{"description":"Get Application List","operationId":"getOrgApplicationList","tags":["Orgs WxTags"]},"parameters":[{"$ref":"#/components/parameters/org_id"}]}},"{wxtag_id}":{"specs":{"delete":{"description":"Delete WxLAN Tag","operationId":"deleteOrgWxTag","tags":["Orgs WxTags"]},"get":{"description":"Get WxLAN Tag Details","operationId":"getOrgWxTag","tags":["Orgs WxTags"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/wxtag_id"}],"put":{"description":"Update WxLAN Tag","operationId":"updateOrgWxTag","tags":["Orgs WxTags"]}},"paths":{"clients":{"specs":{"get":{"description":"Get Current Matching Clients of a WXLAN Tag","operationId":"getOrgCurrentMatchingClientsOfAWxTag","tags":["Orgs WxTags"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/wxtag_id"}]}}}}}},"wxtunnels":{"specs":{"get":{"description":"Get Org WxLAN Tunnels","operationId":"getOrgWxTunnels","tags":["Orgs WxTunnels"]},"parameters":[{"$ref":"#/components/parameters/org_id"}],"post":{"description":"Create Org WxAN Tunnel","operationId":"createOrgWxTunnel","tags":["Orgs WxTunnels"]}},"paths":{"{wxtunnel_id}":{"specs":{"delete":{"description":"Delete Org WxLAN Tunnel","operationId":"deleteOrgWxTunnel","tags":["Orgs WxTunnels"]},"get":{"description":"Get Org WxLAN Tunnel Details","operationId":"getOrgWxTunnel","tags":["Orgs WxTunnels"]},"parameters":[{"$ref":"#/components/parameters/org_id"},{"$ref":"#/components/parameters/wxtunnel_id"}],"put":{"description":"Update Org WxLAN Tunnel","operationId":"updateOrgWxTunnel","tags":["Orgs WxTunnels"]}}}}}}}}},"recover":{"specs":{"post":{"description":"Recover Password\\nAn email will also be sent to the user with a link to https://manage.mist.com/verify/recover?token=:token","operationId":"recoverPassword","tags":["Self"]}},"paths":{"verify":{"paths":{"{token}":{"specs":{"parameters":[{"$ref":"#/components/parameters/token"}],"post":{"description":"Verify Recover Password\\nWith correct verification, the user will be authenticated. UI can then prompt for new password","operationId":"verifyRecoverPasssword","tags":["Self"]}}}}}}},"register":{"specs":{"post":{"description":"Register a new admin and his/her org\\nAn email will also be sent to the user with a link to https://manage.mist.com/verify/register?token=:token","operationId":"registerNewAdmin","tags":["Admin"]}},"paths":{"verify":{"paths":{"{token}":{"specs":{"parameters":[{"$ref":"#/components/parameters/token"}],"post":{"description":"Verify registration","operationId":"verifyRegistration","tags":["Admin"]}}}}}}},"self":{"specs":{"delete":{"description":"To delete ones account and every associated with it. The effects:\\n\\nthe account would be deleted\\nany orphaned Org (that only has this account as admin) will be deleted\\nalong with all data with Org (sites, wlans, devices) will be gone.","operationId":"deleteSelf","tags":["Self"]},"get":{"description":"Get Account information","operationId":"getSelf","tags":["Self"]},"put":{"description":"update Account Information","operationId":"updateSelf","tags":["Self"]}},"paths":{"apitokens":{"specs":{"get":{"description":"List Current API Tokens","operationId":"getApiTokens","tags":["API Token"]},"post":{"description":"Create API Token\\nNote that the key is only available during creation time.","operationId":"createApiToken","tags":["API Token"]}},"paths":{"{apitoken_id}":{"specs":{"delete":{"description":"Delete an API Token","operationId":"deleteApiToken","tags":["API Token"]},"parameters":[{"in":"path","name":"apitoken_id","required":true,"schema":{"type":"string"}}]}}}},"logs":{"specs":{"get":{"description":"Audit logs records all administrative activities done by current admin across all orgs\\n\\nGet a list of change logs across all Orgs for current admin","operationId":"getSelfAuditLogs","parameters":[{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Self"]}}},"oauth":{"paths":{"{provider}":{"specs":{"get":{"description":"Obtain Authorization URL for Linking","operationId":"getOAuth2UrlForLinking","parameters":[{"in":"query","name":"forward","schema":{"example":"http://manage.mist.com/oauth/callback.html","type":"string"}}],"tags":["Login With OAuth2"]},"parameters":[{"in":"path","name":"provider","required":true,"schema":{"type":"string"}}],"post":{"description":"Link Mist account with an OAuth2 Provider","operationId":"linkOAuth2MistAccount","tags":["Login With OAuth2"]}}}}},"subscriptions":{"specs":{"get":{"description":"Get all the subscriptions","operationId":"getAlarmSubscriptions","tags":["Self"]}}},"two_factor":{"paths":{"token":{"specs":{"get":{"description":"Generate QR code for verification","operationId":"generateQrCodeForVerification","parameters":[{"in":"query","name":"by","schema":{"default":"qrcode","enum":["qrcode"],"type":"string"}}],"tags":["Self"]}}},"verify":{"specs":{"post":{"description":"Verify Two-factor (OTP)\\n\\nTo verify two-factor authentication by using a code generated by app (e.g. Google Authenticator, Authy) or by SMS. Upon successful verification, the otp_verified will be set to true if it hasn’t already been.","operationId":"verifyTwoFactor","tags":["Self"]}}}}},"update":{"specs":{"post":{"description":"Change Email\\nWe require the user to verify that they actually own the email address they intend to change it to.\\n\\nAfter the API call, the user will receive an email to the new email address with a link like https://manage.mist.com/verify/update?expire=:exp_time&email=:admin_email&token=:token\\n\\nUpon clicking the link, the user is provided with a login page to authenticate using existing credentials. After successful login, the email address of the user gets updated\\n\\n**Note**: The request parameter email can be used by UI to validate that the current session (if any) belongs to the admin or provide a login page (by pre-populating the email on login screen). UI can also use the request parameter expire to validate token expiry.","operationId":"updateSelfEmail","tags":["Self"]}},"paths":{"verify":{"paths":{"{token}":{"specs":{"get":{"description":"Verify Email change","operationId":"verifySelfEmail","tags":["Self"]},"parameters":[{"$ref":"#/components/parameters/token"}]}}}}}}}},"sites":{"paths":{"{site_id}":{"specs":{"delete":{"description":"Delete Site","operationId":"deleteSite","tags":["Sites"]},"get":{"description":"Get Site Info","operationId":"getSiteInfo","tags":["Sites"]},"parameters":[{"$ref":"#/components/parameters/site_id"}],"put":{"description":"Update Site Info","operationId":"updateSiteInfo","tags":["Sites"]}},"paths":{"alarms":{"paths":{"ack":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"Ack multiple Site Alarms","operationId":"multiAckSiteAlarms","tags":["Sites Alarms"]}}},"ack_all":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"Ack all Site Alarms\\n\\n**N.B.**: Batch size for multiple alarm ack and unack has to be less or or equal to 1000.","operationId":"ackSiteAllAlarms","tags":["Sites Alarms"]}}},"count":{"specs":{"get":{"description":"Count Site Alarms","operationId":"countSiteAlarms","parameters":[{"description":"Group by and count the alarms by some distinct field","in":"query","name":"distinct","schema":{"default":"type","enum":["type","acked","severity","group"],"type":"string"}},{"description":"Name of the admins who have acked the alarms; accepts multiple values separated by comma","in":"query","name":"ack_admin_name","schema":{"type":"string"}},{"in":"query","name":"acked","schema":{"type":"boolean"}},{"description":"Key-name of the alarms; accepts multiple values separated by comma","in":"query","name":"type","schema":{"type":"string"}},{"description":"Alarm severity; accepts multiple values separated by comma","in":"query","name":"severity","schema":{"type":"string"}},{"description":"Alarm group name; accepts multiple values separated by comma","in":"query","name":"group","schema":{"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Alarms"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"search":{"specs":{"get":{"description":"Search Site Alarms","operationId":"getSiteAlarms","parameters":[{"description":"Key-name of the alarms; accepts multiple values separated by comma","in":"query","name":"type","schema":{"type":"string"}},{"description":"Name of the admins who have acked the alarms; accepts multiple values separated by comma","in":"query","name":"ack_admin_name","schema":{"type":"string"}},{"in":"query","name":"acked","schema":{"type":"boolean"}},{"description":"Alarm severity; accepts multiple values separated by comma","in":"query","name":"severity","schema":{"type":"string"}},{"description":"Alarm group name; accepts multiple values separated by comma","in":"query","name":"group","schema":{"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Alarms"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"unack":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"Unack multiple Site Alarms","operationId":"multiUnackSiteAlarms","tags":["Sites Alarms"]}}},"unack_all":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"Unack all Site Alarms\\n\\n**N.B.**: Batch size for multiple alarm ack and unack has to be less or or equal to 1000.","operationId":"unackSiteAllArlarms","tags":["Sites Alarms"]}}},"{alarm_id}":{"paths":{"ack":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/alarm_id"}],"post":{"description":"Ack Site Alarm","operationId":"ackSiteAlarm","tags":["Sites Alarms"]}}},"unack":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/alarm_id"}],"post":{"description":"Unack Site Alarm","operationId":"unackSiteAlarm","tags":["Sites Alarms"]}}}}}}},"anomaly":{"paths":{"client":{"paths":{"{client_mac}":{"paths":{"{metric}":{"specs":{"get":{"description":"Get Client Anomaly Events","operationId":"getSiteAnomalyEventsForClient","tags":["Sites Anomaly"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/client_mac"},{"$ref":"#/components/parameters/metric"}]}}}}}},"device":{"paths":{"{device_mac}":{"paths":{"{metric}":{"specs":{"get":{"description":"Get Device Anomaly Events","operationId":"getSiteAnomalyEventsforDevice","tags":["Sites Anomaly"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/metric"},{"$ref":"#/components/parameters/device_mac"}]}}}}}},"{metric}":{"specs":{"get":{"description":"Get Site Anomaly Events","operationId":"getSiteAnomalyEvents","tags":["Sites Anomaly"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/metric"}]}}}},"apps":{"specs":{"get":{"description":"Get Application List","operationId":"getSiteApps","tags":["Sites Applications"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"assetfilters":{"specs":{"get":{"description":"Get Site Asset Filters","operationId":"getSiteAssetFilters","tags":["Sites Asset Filters"]},"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"Create Site Asset Filter","operationId":"createSiteAssetFilters","tags":["Sites Asset Filters"]}},"paths":{"{assetfilter_id}":{"specs":{"delete":{"description":"Deletes an existing BLE asset filter for the given site.","operationId":"deleteSiteAssetFilter","tags":["Sites Asset Filters"]},"get":{"description":"Get Site Asset Filter Details","operationId":"getSiteAssetFilter","tags":["Sites Asset Filters"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/assetfilter_id"}],"put":{"description":"Updates an existing BLE asset filter for the given site.","operationId":"updateSiteAssetFilter","tags":["Sites Asset Filters"]}}}}},"assets":{"specs":{"get":{"description":"Get Site Assets","operationId":"getSiteAssets","tags":["Sites Assets"]},"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"Create Site Asset","operationId":"createSiteAsset","tags":["Sites Assets"]}},"paths":{"import":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"Impert Site Assets. \\n\\nIt can be done via a CSV file or a JSON payload.\\n\\n## CSV File Format\\n```csv\\nname,mac\\n\\"asset_name\\",5c5b53010101\\n``` ","operationId":"importSiteAssets","parameters":[{"description":"API will replace the assets with same mac if provided `upsert`==`True`, otherwise will report in errors in response.","in":"query","name":"upsert","schema":{"default":"False","enum":["True","False"],"type":"string"}}],"tags":["Sites Assets"]}}},"{asset_id}":{"specs":{"delete":{"description":"Delete Site Asset","operationId":"deleteSiteAsset","tags":["Sites Assets"]},"get":{"description":"Get Site Asset Details","operationId":"getSiteAsset","tags":["Sites Assets"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/asset_id"}],"put":{"description":"Update Site Asset","operationId":"updateSiteAsset","tags":["Sites Assets"]}}}}},"beacons":{"specs":{"get":{"description":"Get Site Beacons","operationId":"getSiteBeacons","tags":["Sites Beacons"]},"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"Create Site Beacon","operationId":"createSiteBeacon","tags":["Sites Beacons"]}},"paths":{"{beacon_id}":{"specs":{"delete":{"description":"Delete Site Beacon","operationId":"deleteSiteBeacons","tags":["Sites Beacons"]},"get":{"description":"Get Site Beacon Details","operationId":"getSiteBeacon","tags":["Sites Beacons"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/beacon_id"}],"put":{"description":"Update Site Beacon","operationId":"updateSiteBeacons","tags":["Sites Beacons"]}}}}},"clients":{"paths":{"count":{"specs":{"get":{"description":"Count by Distinct Attributes of Clients","operationId":"countSiteByDistinctAttributesOfClients","parameters":[{"example":"hostname","in":"query","name":"distinct","required":true,"schema":{"default":"device","enum":["ssid","ap","ip","vlan","hostname","os","model","device"],"type":"string"}},{"in":"query","name":"ssid","schema":{"type":"string"}},{"in":"query","name":"ap","schema":{"type":"string"}},{"$ref":"#/components/parameters/ip"},{"in":"query","name":"vlan","schema":{"type":"string"}},{"in":"query","name":"hostname","schema":{"type":"string"}},{"in":"query","name":"os","schema":{"type":"string"}},{"in":"query","name":"model","schema":{"type":"string"}},{"in":"query","name":"device","schema":{"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Clients"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"disconnect":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"To unauthorize multiple clients","operationId":"disconnectSiteMultipleClients","tags":["Sites Clients"]}}},"events":{"paths":{"count":{"specs":{"get":{"description":"Count by Distinct Attributes of Client-Events","operationId":"countSiteByDistinctAttributesOfClientsEvents","parameters":[{"description":"type / proto / band / channel / wlan_id / ssid","example":"type","in":"query","name":"distinct","schema":{"enum":["type","proto","band","channel","wlan_id","ssid"],"type":"string"}},{"description":"event type, e.g. MARVIS_EVENT_CLIENT_FBT_FAILURE","in":"query","name":"type","schema":{"type":"string"}},{"description":"for assoc/disassoc events","in":"query","name":"reason_code","schema":{"type":"integer"}},{"description":"SSID Name","in":"query","name":"ssid","schema":{"type":"string"}},{"description":"AP MAC","in":"query","name":"ap","schema":{"type":"string"}},{"description":"802.11 standard","in":"query","name":"proto","schema":{"enum":["b","g","n","ac","ax","a"],"type":"string"}},{"description":"24 / 5","in":"query","name":"band","schema":{"enum":["24","5"],"type":"string"}},{"description":"wlan_id","in":"query","name":"wlan_id","schema":{"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Clients"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"search":{"specs":{"get":{"description":"Get Site Clients Events","operationId":"searchSiteClientEvents","parameters":[{"description":"event type, e.g. MARVIS_EVENT_CLIENT_FBT_FAILURE","in":"query","name":"type","schema":{"type":"string"}},{"description":"for assoc/disassoc events","in":"query","name":"reason_code","schema":{"type":"integer"}},{"description":"SSID Name","in":"query","name":"ssid","schema":{"type":"string"}},{"description":"AP MAC","in":"query","name":"ap","schema":{"type":"string"}},{"description":"802.11 standard","in":"query","name":"proto","schema":{"enum":["b","g","n","ac","ax","a"],"type":"string"}},{"description":"24 / 5","in":"query","name":"band","schema":{"enum":["24","5"],"type":"string"}},{"description":"wlan_id","in":"query","name":"wlan_id","schema":{"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Clients"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}}}},"search":{"specs":{"get":{"description":"Search Wireless Clients\\n\\n**NOTE**: fuzzy logic can be used with ‘*’, supported filters: mac, hostname, device, os, model. E.g. /clients/search?device=Mac*&hostname=jerry","operationId":"searchSiteClients","parameters":[{"description":"partial / full MAC address","in":"query","name":"mac","schema":{"type":"string"}},{"$ref":"#/components/parameters/ip"},{"description":"partial / full hostname","in":"query","name":"hostname","schema":{"type":"string"}},{"description":"device type, e.g. Mac, Nvidia, iPhone","in":"query","name":"device","schema":{"type":"string"}},{"description":"os, e.g. Sierra, Yosemite, Windows 10","in":"query","name":"os","schema":{"type":"string"}},{"description":"model, e.g. “MBP 15 late 2013”, 6, 6s, “8+ GSM”","in":"query","name":"model","schema":{"type":"string"}},{"description":"AP mac where the client has connected to","in":"query","name":"ap","schema":{"type":"string"}},{"in":"query","name":"ssid","schema":{"type":"string"}},{"description":"partial / full MAC address, hostname, username or ip","in":"query","name":"text","schema":{"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Clients"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"sessions":{"paths":{"count":{"specs":{"get":{"description":"Count by Distinct Attributes of Client Sessions","operationId":"countSiteByDistinctAttributesOfClientSessions","parameters":[{"in":"query","name":"distinct","schema":{"default":"mac","enum":["ssid","wlan_id","ap","mac","client_family","client_manufacture","client_model","client_os"],"type":"string"}},{"description":"AP MAC","in":"query","name":"ap","schema":{"type":"string"}},{"description":"24 /5","in":"query","name":"band","schema":{"type":"string"}},{"description":"E.g. “Mac”, “iPhone”, “Apple watch”","in":"query","name":"client_family","schema":{"type":"string"}},{"description":"E.g. “Apple”","in":"query","name":"client_manufacture","schema":{"type":"string"}},{"description":"E.g. “8+”, “XS”","in":"query","name":"client_model","schema":{"type":"string"}},{"description":"E.g. “Mojave”, “Windows 10”, “Linux”","in":"query","name":"client_os","schema":{"type":"string"}},{"description":"SSID","in":"query","name":"ssid","schema":{"type":"string"}},{"description":"wlan_id","in":"query","name":"wlan_id","schema":{"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Clients"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"search":{"specs":{"get":{"description":"Search Client Sessions","operationId":"searchSiteClientSessions","parameters":[{"description":"AP MAC","in":"query","name":"ap","schema":{"type":"string"}},{"description":"24 /5","in":"query","name":"band","schema":{"type":"string"}},{"description":"E.g. “Mac”, “iPhone”, “Apple watch”","in":"query","name":"client_family","schema":{"type":"string"}},{"description":"E.g. “Apple”","in":"query","name":"client_manufacture","schema":{"type":"string"}},{"description":"E.g. “8+”, “XS”","in":"query","name":"client_model","schema":{"type":"string"}},{"description":"E.g. “Mojave”, “Windows 10”, “Linux”","in":"query","name":"client_os","schema":{"type":"string"}},{"description":"SSID","in":"query","name":"ssid","schema":{"type":"string"}},{"description":"wlan_id","in":"query","name":"wlan_id","schema":{"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Clients"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}}}},"unauthorize":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"This unauthorize clients (if they are guest) and disconnect them. From the guest’s perspective, they will see the splash page again and go through the flow (e.g. Terms of Use) again.","operationId":"unauthorizeSiteMultipleClients","tags":["Sites Clients"]}}},"{client_mac}":{"paths":{"disconnect":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/client_mac"}],"post":{"description":"This disconnect a client (and it’s likely to connect back)","operationId":"disconnectSiteClient","tags":["Sites Clients"]}}},"events":{"specs":{"get":{"description":"Get the list of events for a specific client","operationId":"getSiteEventsForClient","parameters":[{"description":"e.g. MARVIS_EVENT_CLIENT_DHCP_STUCK","in":"query","name":"type","schema":{"enum":["b","g","n"],"type":"string"}},{"description":"a / b / g / n / ac / ax","in":"query","name":"proto","schema":{"enum":["a","b","g","n","ac","ax"],"type":"string"}},{"description":"24 / 5","in":"query","name":"band","schema":{"type":"string"}},{"in":"query","name":"channel","schema":{"type":"string"}},{"in":"query","name":"wlan_id","schema":{"type":"string"}},{"in":"query","name":"ssid","schema":{"type":"string"}},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Clients"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/client_mac"}]}},"unauthorize":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/client_mac"}],"post":{"description":"This unauthorize a client (if it’s a guest) and disconnect it. From the guest’s perspective, s/he will see the splash page again and go through the flow (e.g. Terms of Use) again.","operationId":"unauthorizeSiteClient","tags":["Sites Clients"]}}}}}}},"devices":{"specs":{"get":{"description":"Get list of devices on the site.","operationId":"getSiteDevices","parameters":[{"description":"device type","in":"query","name":"type","schema":{"default":"ap","enum":["ap","switch","gateway"],"type":"string"}},{"$ref":"#/components/parameters/name"},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"}],"tags":["Sites Devices"]},"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"Create a device","operationId":"createSiteDevice","tags":["Sites Devices"]}},"paths":{"ap_channels":{"specs":{"get":{"description":"Get a list of allowed channels (per channel width)","operationId":"getSiteDeviceRadioChannels","parameters":[{"description":"country code for the site (for AP config generation), in two-character","example":"US","in":"query","name":"country_code","schema":{"type":"string"}}],"tags":["Sites Devices"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"config_history":{"paths":{"count":{"specs":{"get":{"description":"Counts the number of entries in device config history for distinct field with given filters","operationId":"countSiteDeviceConfigHistory","parameters":[{"in":"query","name":"distinct","schema":{"type":"string"}},{"in":"query","name":"ap","schema":{"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Devices"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"search":{"specs":{"get":{"description":"Search for entries in device config history","operationId":"searchSiteDeviceConfigHistory","parameters":[{"description":"AP Mac Address","in":"query","name":"ap","schema":{"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Devices"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}}}},"count":{"specs":{"get":{"description":"Counts the number of entries in ap events history for distinct field with given filters","operationId":"countSiteDevices","parameters":[{"in":"query","name":"distinct","schema":{"default":"model","enum":["model","version","map_id","hostname","mxtunnel_status","mxedge_id","lldp_system_name","lldp_system_desc","lldp_port_id","lldp_mgmt_addr"],"type":"string"}},{"in":"query","name":"hostname","schema":{"type":"string"}},{"in":"query","name":"model","schema":{"type":"string"}},{"in":"query","name":"mac","schema":{"type":"string"}},{"in":"query","name":"version","schema":{"type":"string"}},{"in":"query","name":"mxtunnel_status","schema":{"type":"string"}},{"in":"query","name":"mxedge_id","schema":{"type":"string"}},{"in":"query","name":"lldp_system_name","schema":{"type":"string"}},{"in":"query","name":"lldp_system_desc","schema":{"type":"string"}},{"in":"query","name":"lldp_port_id","schema":{"type":"string"}},{"in":"query","name":"lldp_mgmt_addr","schema":{"type":"string"}},{"in":"query","name":"map_id","schema":{"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Devices"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"events":{"paths":{"count":{"specs":{"get":{"description":"Counts the number of entries in ap events history for distinct field with given filters","operationId":"countSiteDeviceEvents","parameters":[{"in":"query","name":"distinct","schema":{"default":"model","enum":["model","type","type_code","mac"],"type":"string"}},{"in":"query","name":"model","schema":{"type":"string"}},{"in":"query","name":"type","schema":{"type":"string"}},{"in":"query","name":"type_code","schema":{"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Devices"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"search":{"specs":{"get":{"description":"Search AP Events","operationId":"searchSiteDeviceEvents","parameters":[{"in":"query","name":"model","schema":{"type":"string"}},{"in":"query","name":"type","schema":{"type":"string"}},{"in":"query","name":"type_code","schema":{"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Devices"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}}}},"export":{"specs":{"get":{"tags":["Sites Devices"],"operationId":"exportSiteDevices","description":"To download the exported device information"},"parameters":[{"in":"path","name":"site_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}}]}},"import":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"tags":["Sites Devices"],"operationId":"importSiteDevices","description":"Import Information for Multiple Devices\\n\\nCSV format:\\n```csv\\nmac,name,map_id,x,y,height,orientation,labels,band_24.power,band_24.bandwidth,band_24.channel,band_24.disabled,band_5.power,band_5.bandwidth,band_5.channel,band_5.disabled,band_6.power,band_6.bandwidth,band_6.channel,band_6.disabled\\n5c5b53010101,\\"AP 1\\",845a23bf-bed9-e43c-4c86-6fa474be7ae5,30,10,2.3,45,\\"guest, campus, vip\\",1,20,0,false,0,40,0,false,17,80,0,false\\n```"}}},"last_config":{"paths":{"count":{"specs":{"get":{"description":"Counts the number of entries in device config history for distinct field with given filters","operationId":"countSiteDeviceLastConfig","parameters":[{"in":"query","name":"distinct","schema":{"default":"ap","enum":["ap","version","name","site_id"],"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Devices"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"search":{"specs":{"get":{"description":"Search Device Last Configs","operationId":"searchSiteDeviceLastConfigs","parameters":[{"in":"query","name":"ap","schema":{"type":"string"}},{"in":"query","name":"version","schema":{"type":"string"}},{"in":"query","name":"name","schema":{"type":"string"}},{"in":"query","name":"site_id","schema":{"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Devices"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}}}},"reprovision":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"To force all APs to reprovision itself again. ","operationId":"reprovisionSiteAllAps","tags":["Sites Devices"]}}},"reset_radio_config":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"Reset all APs in the Site to use RRM","operationId":"resetSiteAllApsToUseRrm","tags":["Sites Devices"]}}},"restart":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"Note that only the devices that are connected will be restarted.","operationId":"multiRestartSiteDevices","tags":["Sites Devices"]}}},"search":{"specs":{"get":{"description":"Search Device","operationId":"searchSiteDevices","parameters":[{"description":"partial / full hostname","in":"query","name":"hostname","schema":{"type":"string"}},{"description":"device type","in":"query","name":"type","schema":{"default":"ap","enum":["ap","switch","gateway"],"type":"string"}},{"description":"device model","in":"query","name":"model","schema":{"type":"string"}},{"description":"device MAC","in":"query","name":"mac","schema":{"type":"string"}},{"description":"version","in":"query","name":"version","schema":{"type":"string"}},{"$ref":"#/components/parameters/ip"},{"description":"MxTunnel status, up / down","in":"query","name":"mxtunnel_status","schema":{"enum":["up","down"],"type":"string"}},{"description":"Mist Edge id, if AP is connecting to a Mist Edge","in":"query","name":"mxedge_id","schema":{"format":"uuid","type":"string"}},{"description":"LLDP system name","in":"query","name":"lldp_system_name","schema":{"type":"string"}},{"description":"LLDP system description","in":"query","name":"lldp_system_desc","schema":{"type":"string"}},{"description":"LLDP port id","in":"query","name":"lldp_port_id","schema":{"type":"string"}},{"description":"LLDP management ip address","in":"query","name":"lldp_mgmt_addr","schema":{"type":"string"}},{"description":"Channel of band_24","in":"query","name":"band_24_channel","schema":{"type":"integer"}},{"description":"Channel of band_5","in":"query","name":"band_5_channel","schema":{"type":"integer"}},{"description":"Channel of band_6","in":"query","name":"band_6_channel","schema":{"type":"integer"}},{"description":"Port speed of eth0","in":"query","name":"eth0_port_speed","schema":{"type":"integer"}},{"description":"sort options","in":"query","name":"sort","schema":{"default":"timestamp","enum":["timestamp","mac","model","sku"],"type":"string"}},{"description":"sort options in reverse order","in":"query","name":"desc-sort","schema":{"enum":["timestamp","mac","model","sku"],"type":"string"}},{"description":"whether to return device stats","in":"query","name":"stats","schema":{"default":false,"type":"boolean"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Devices"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"upgrade":{"specs":{"get":{"description":"Get all upgrades for site","operationId":"getSiteDevicesUpgrade","tags":["Sites Devices"]},"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"Upgrade Multiple Device\\n\\n**Note**: this call doesn’t guarantee the devices to be upgraded right away (they may be offline)","operationId":"multiUpgradeSiteDevices","tags":["Sites Devices"]}},"paths":{"{upgrade_id}":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/upgrade_id"}],"get":{"tags":["Sites Devices"],"operationId":"getSiteUpgrade","description":"Get Site Device Upgrade"}},"paths":{"cancel":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/upgrade_id"}],"post":{"description":"Best effort to cancel an upgrade. Devices which are already upgraded wont be touched","operationId":"cancelSiteDeviceUpgrade","tags":["Sites Devices"]}}}}}}},"versions":{"specs":{"get":{"description":"Get Available Device Versions","operationId":"getSiteAvailableDeviceVersions","tags":["Sites Devices"],"parameters":[{"schema":{"type":"string","enum":["ap","switch","gateway"],"default":"ap"},"in":"query","name":"type"}]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"zerioze":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"Zeroize all FIPS APs in the Site","operationId":"zeroizeSiteFipsAllAps","tags":["Sites Devices"]}}},"{device_id}":{"specs":{"delete":{"description":"Delete Site Device","operationId":"deleteSiteDevice","tags":["Sites Devices"]},"get":{"description":"Get Device Configuration","operationId":"getSiteDevice","tags":["Sites Devices"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"}],"put":{"description":"Update Device Configuration","operationId":"updateSiteDevice","tags":["Sites Devices"]}},"paths":{"arp":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"}],"post":{"description":"ARP can be performed on the Device. The output will be available through websocket. As there can be multiple command issued against the same AP at the same time and the output all goes through the same websocket stream, session is introduced for demux.","operationId":"arpFromDevice","tags":["Sites Devices Utilities"]}}},"bounce_port":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"}],"post":{"description":"Port Bounce can be performed from the Switch.The output will be available through websocket. As there can be multiple command issued against the same AP at the same time and the output all goes through the same websocket stream, session is introduced for demux.\\n\\n#### Subscribe to Device Command outputs\\n`WS /api-ws/v1/stream`\\n\\n```json\\n{\\n    \\"subscribe\\": \\"/sites/{site_id}/devices/{device_id}/cmd\\"\\n}\\n```\\n##### Response\\n```json\\n{\\n    \\"event\\": \\"data\\",\\n    \\"channel\\": \\"/sites/4ac1dcf4-9d8b-7211-65c4-057819f0862b/devices/00000000-0000-0000-1000-5c5b350e0060/cmd\\",\\n    \\"data\\": {\\n        \\"session\\": \\"session_id\\",\\n        \\"raw\\": \\"Port bounce complete.\\"\\n    }\\n}\\n```","operationId":"portsBounceFromSwitch","tags":["Sites Devices Utilities"]}}},"cable_test":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"}],"post":{"description":"TDR can be performed from the Switch. The output will be available through websocket. As there can be multiple command issued against the same Switch at the same time and the output all goes through the same websocket stream, session is introduced for demux.\\n\\n#### Subscribe to Device Command outputs\\n`WS /api-ws/v1/stream`\\n\\n```json\\n{\\n    \\"subscribe\\": \\"/sites/{site_id}/devices/{device_id}/cmd\\"\\n}\\n```\\n##### Response\\n```json\\n{\\n    \\"event\\": \\"data\\",\\n    \\"channel\\": \\"/sites/4ac1dcf4-9d8b-7211-65c4-057819f0862b/devices/00000000-0000-0000-1000-5c5b350e0060/cmd\\",\\n    \\"data\\": {\\n        \\"session\\": \\"session_id\\",\\n        \\"raw\\": \\"Interface TDR detail:\\\\nTest status : Test successfully executed  ge-0/0/0\\\\n\\"\\n    }\\n}\\n```","operationId":"cableTestFromSwitch","tags":["Sites Devices Utilities"]}}},"check_radius_server":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"}],"post":{"tags":["Sites Devices Utilities"],"operationId":"startSiteSwitchRadiusSyntheticTest","description":"Ping test from the AP to confirm ‘reachability’ of the Radius server. Utilize Juniper EX switch(to which an AP is connected to) radius test capabilities to get details on the Radius Server ‘availability’."}}},"clear_arp":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"}],"post":{"tags":["Sites Devices SSR"],"operationId":"clearSiteSsrArpCache","description":"Clear the entire ARP cache or a subset if arguments are provided.\\n\\n*Note*: port_id is optional if neither vlan nor ip is specified"}}},"clear_bgp":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"}],"post":{"tags":["Sites Devices SSR"],"operationId":"clearSiteSsrBgpRoutes","description":"Clear routes associated with one or all BGP neighbors"}}},"clear_bpdu_error":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"}],"post":{"description":"Clear bridge protocol data unit (BPDU) error condition caused by the detection of a possible bridging loop from Spanning Tree Protocol (STP) operation that renders the port unoperational.","operationId":"clearBpduErrosFromPortsOnSwitch","tags":["Sites Devices Utilities"]}}},"clear_macs":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"}],"post":{"description":"Clear all learned MAC addresses, including persistent MAC addresses, on a port.","operationId":"clearAllLearnedMacsFromPortOnSwitch","tags":["Sites Devices Utilities"]}}},"config_cmd":{"specs":{"get":{"description":"Get Config CLI Commands\\nFor a brown-field switch deployment where we adopted the switch through Adoption Command, we do not wipe out / overwrite the existing config automatically. Instead, we generate CLI commands that we would have generated. The user can inspect, modify, and incorporate this into their existing config manually.\\n\\nOnce they feel comfortable about the config we generate, they can enable allow_mist_config where we will take full control of their config like a claimed switch","operationId":"getSiteDeviceConfigCmd","tags":["Sites Devices"],"parameters":[{"schema":{"type":"string","default":"false","enum":["true","false"]},"in":"query","name":"sort","description":"Make output cmds sorted (for better readability) or not."}]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"}]}},"ha":{"specs":{"delete":{"description":"Delete HA Cluster","operationId":"deleteSiteDeviceHaCluster","tags":["Sites Devices HA"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"}],"post":{"description":"Create HA Cluster\\nBoth nodes has to be in the same site. We expect the user to configure ha_sync / ha_data port in port_configs already\\n\\n### SRX cabling\\n\\nsee [Chassis Cluster User Guide for SRX Series Devices](https://www.juniper.net/documentation/us/en/software/junos/chassis-cluster-security-devices/topics/concept/chassis-cluster-srx-series-node-interface-understanding.html) Here’s the recommended cabling.\\n\\n#### SRX300\\n\\nFrom ZTP / default state, ge-0/0/0 and ge-0/0/7 (SFP) are default WAN ports and will get DHCP IP. However, ge-0/0/0 becomes OOB/fxp0 after cluster is enabled (i.e. using it for reach Mist is not recommended)\\n\\n1.  form cluster in UI\\n2.  configure ge-0/0/7,ge-1/0/7 for WAN (reth0)\\n3.  configure ge-0/0/2,ge-1/0/2 for ha_data\\n4.  configure ge-0/0/3- for LAN or additional WAN e.g.\\n    \\n\\n``` json\\n{\\n    \\"port_config\\": {\\n        \\"ge-0/0/2,ge-1/0/2\\": {\\n            \\"usage\\": \\"ha_data\\"\\n        },\\n        \\"ge-0/0/7,ge-1/0/7\\": {\\n            \\"usage\\": \\"wan\\",\\n            \\"redundant\\": true,\\n            \\"reth_idx\\": 0,\\n            \\"ip_config\\": {\\"type\\": \\"dhcp\\"}\\n        },\\n    }\\n}\\n\\n```\\n\\n1.  connect ge-0/0/1 back to back for ha_control\\n2.  connect ge-0/0/2 back to back for ha_data\\n3.  connect both ge-0/0/7 to uplink switch to WAN and to reach Mist\\n4.  power up both devices\\n5.  it takes about 30 minutes for the cluster to form\\n    \\n\\n#### SRX320\\n\\nFrom ZTP / default state, ge-0/0/0, ge-0/0/7 (SFP) and cl-1/0/0 (LTE) are default WAN ports and will get DHCP IP. However, ge-0/0/0 becomes OOB/fxp0 after cluster is enabled (i.e. using it for reach Mist is not recommended)\\n\\n##### ZTP via ge-0/0/7\\n\\nSimilar to SRX300\\n\\n##### ZTP via cl-1/0/0 (LTE)\\n\\n1.  form cluster in UI\\n2.  configure cl-1/0/0, cl-3/0/0 as WAN (reth0)\\n3.  configure ge-0/0/2,ge-3/0/2 for ha_data\\n4.  same as above\\n    \\n\\n#### SRX340 / SRX345 / SRX380\\n\\nSRX340/SRX345 has dedicated OOB/fxp0 ports\\n\\n1.  form cluster in UI\\n2.  configure ge-0/0/0,ge-5/0/0 for WAN (reth0)\\n3.  configure ge-0/0/2,ge-5/0/2 for ha_data\\n4.  configure ge-0/0/3- for LAN or additional WAN\\n5.  connect ge-0/0/0 to uplink switch to WAN and to reach Mist\\n6.  connect ge-0/0/1 back-to-back for ha_control\\n7.  connect ge-0/0/2 back-to-back for ha_data (fabric); or for SRX380, xe-0/0/16 if 10G SFP+ is used\\n8.  connect ge-0/0/3- to LAN or additional WANs\\n    \\n\\n#### SRX550\\n\\nge-0/0/0 becomes OOB/fxp0 after cluster is enabled, make suenable oob_ip_config as dhcp to maintain cloud connectivity\\n\\n1.  connect ge-0/0/0 to reach Mist (after cluster is fully up, this port becomes OOB/fxp0)\\n2.  connect ge-0/0/1 back-to-back for ha_control\\n3.  connect ge-0/0/2 back-to-back for ha_data (fabric)\\n4.  connect ge-0/0/3 to WAN (after cluster is up, intended to be used for reth0)\\n5.  connect ge-0/0/4- to LAN or additional WANs\\n    \\n\\n#### SRX1500\\n\\nSRX1500 has, additionally, dedicated HA Control port\\n\\n1.  form cluster in UI\\n2.  configure ge-0/0/0,ge-5/0/0 for WAN (reth0)\\n3.  configure ge-0/0/1,ge-5/0/1 for ha_data\\n4.  configure ge-0/0/2- for LAN or additional WAN\\n5.  connect dedicated ha_control back-to-back\\n6.  connect ge-0/0/0 to uplink switch to WAN and to reach Mist\\n7.  connect ge-0/0/1 back-to-back for ha_data\\n8.  connect ge-0/0/2- to LAN or additional WANs\\n    \\n\\n#### SRX4100\\n\\nSRX4100 has dedicated ha_control and ha_data (fabric) ports\\n\\n1.  connect dedicated ha_control back-to-back\\n2.  connect dedicated ha_data back-to-back\\n3.  connect xe-0/0/0 to WAN to reach Mist\\n4.  connect xe-0/0/1- to LAN or additional WANs\\n    \\n\\n#### VSRX\\n\\nWhen standalone, VSRX has fxp0 as first Network Adapter, then ge-0/0/0-N When clustered, VSRX has fxp0, em0, then ge-0/0/0-N\\n\\n1.  connect net0 (fxp0) to WAN to reach Mist\\n2.  connect net1 back-to-back for ha_control\\n3.  connect net2 (ge-0/0/0) back-to-back for ha_data (fab0/fab1)\\n4.  connect net3 (ge-0/0/1) to WAN, intended to be used for reth0\\n5.  connect net4 (ge-0/0/2) to LAN\\n    \\n\\nSRX340/SRX345 has dedicated OOB/fxp0 ports VSRX has fxp0 as first Network Adapter, then ge-0/0/0-N\\n\\n1.  connect ge-0/0/0 to WAN to reach Mist\\n2.  connect ge-0/0/1 back-to-back for ha_control\\n3.  connect ge-0/0/2 back-to-back for ha_data (fabric); or for SRX380, xe-0/0/16 if 10G SFP+ is used\\n4.  connect ge-0/0/3- to LAN or additional WANs\\n    \\n\\n#### SRX550\\n\\nge-0/0/0 becomes OOB/fxp0 after cluster is enabled, make suenable oob_ip_config as dhcp to maintain cloud connectivity\\n\\n1.  connect ge-0/0/0 to reach Mist (after cluster is fully up, this port becomes OOB/fxp0)\\n2.  connect ge-0/0/1 back-to-back for ha_control\\n3.  connect ge-0/0/2 back-to-back for ha_data (fabric)\\n4.  connect ge-0/0/3 to WAN (after cluster is up, intended to be used for reth0)\\n5.  connect ge-0/0/4- to LAN or additional WANs\\n    \\n\\n#### SRX1500\\n\\nSRX1500 has, additionally, dedicated HA Control port\\n\\n1.  connect dedicated ha_control back-to-back\\n2.  connect ge-0/0/0 to WAN to reach mist\\n3.  connect ge-0/0/1 back-to-back for ha_data\\n4.  connect ge-0/0/2- to LAN or additional WANs\\n    \\n\\n#### SRX4100\\n\\nSRX4100 has dedicated ha_control and ha_data (fabric) ports\\n\\n1.  connect dedicated ha_control back-to-back\\n2.  connect dedicated ha_data back-to-back\\n3.  connect xe-0/0/0 to WAN to reach Mist\\n4.  connect xe-0/0/1- to LAN or additional WANs","operationId":"createSiteDeviceHaCluster","tags":["Sites Devices HA"]},"put":{"description":"Swap nodes on the HA Cluster","operationId":"swapSiteDeviceHaClusterNode","tags":["Sites Devices HA"]}}},"iot":{"specs":{"get":{"description":"Returns the current state of each enabled IoT pin configured as an output.","operationId":"getSiteDeviceIotPort","tags":["Sites Devices"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"}],"put":{"description":"**Note**: For each IoT pin referenced:\\n * The pin must be enabled using the Device `iot_config` API\\n * The pin must support the output direction","operationId":"setSiteDeviceIotPort","tags":["Sites Devices"]}}},"local_port_config":{"specs":{"delete":{"tags":["Sites Devices"],"operationId":"deleteSiteLocalSwitchPortConfig","description":"Sometimes HelpDesk Admin needs to change port configs"},"parameters":[{"in":"path","name":"site_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},{"in":"path","name":"device_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}}],"put":{"tags":["Sites Devices"],"operationId":"updateSiteLocalSwitchPortConfig","description":"Sometimes HelpDesk Admin needs to change port configs"}}},"locate":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"}],"post":{"description":"Locate a Device by blinking it’s LED, it’s a persisted state that has to be stopped by calling Stop Locating API","operationId":"startSiteLocateDevice","tags":["Sites Devices"]}}},"ping":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"}],"post":{"description":"Ping from AP, Switch and SSR\\n\\nPing can be performed from the Device. The output will be available through websocket. As there can be multiple command issued against the same AP at the same time and the output all goes through the same websocket stream, session is introduced for demux.\\n\\n#### Subscribe to Device Command outputs\\n`WS /api-ws/v1/stream`\\n\\n```json\\n{\\n    \\"subscribe\\": \\"/sites/{site_id}/devices/{device_id}/cmd\\"\\n}\\n```\\n##### Response\\n```json\\n{\\n    \\"event\\": \\"data\\",\\n    \\"channel\\": \\"/sites/4ac1dcf4-9d8b-7211-65c4-057819f0862b/devices/00000000-0000-0000-1000-5c5b350e0060/cmd\\",\\n    \\"data\\": {\\n        \\"session\\": \\"session_id\\",\\n        \\"raw\\": \\"64 bytes from 23.211.0.110: seq=8 ttl=58 time=12.323 ms\\\\n\\"\\n    }\\n}\\n```","operationId":"pingFromDevice","tags":["Sites Devices Utilities"]}}},"poll_stats":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"}],"post":{"description":"This API can be used to poll statistics from the Switch proactively once. After it is called, the statistics will be pushed back to the cloud within the statistics interval.","operationId":"pollSiteSwitchStats","tags":["Sites Devices"]}}},"release_dhcp":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"}],"post":{"tags":["Sites Devices SSR"],"operationId":"releaseSiteSsrDhcpLease","description":"Releases an active DHCP lease."}}},"request_ztp_password":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"}],"get":{"tags":["Sites Devices"],"operationId":"getSiteDeviceZtpPassword","description":"In case any issue happens during/after ZTP, the root-password is modified by ZTP but the user-defined password config is not pushed successfully to the device, we could use this API to retrieve the password set by ZTP to unblock the device access.\\n\\nThe response will be empty if the manuf device does not exist or ztp status is not ‘bootstrap-completed’ or ZTP completed more than 7 days ago."}}},"resolve_dns":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"}],"post":{"tags":["Sites Devices SSR"],"operationId":"websocketSessionSiteSsrDns","description":"DNS resolutions are performed on the Device. The output will be available through websocket. As there can be multiple command issued against the same SSR at the same time and the output all goes through the same websocket stream, `session` is used for demux.\\n\\n#### Subscribe to Device Command outputs\\n`WS /api-ws/v1/stream`\\n\\n```json\\n{\\n    \\"subscribe\\": \\"/sites/{site_id}/devices/{device_id}/cmd\\"\\n}\\n```\\n\\n## Response\\n\\n| Router | Hostname | Resolved | Last Resolved | Expiration |\\n| --- | --- | --- | --- | --- |\\n| test-device | xxx.yyy.net | Y | 2022-03-28T03:56:49Z | 2022-03-28T03:57:49Z |\\n"}}},"restart":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"}],"post":{"description":"Restart / Reboot a device","operationId":"restartSiteDevice","tags":["Sites Devices"]}}},"service_ping":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"}],"post":{"description":"Ping from SSR\\n\\nService Ping can be performed from the Device. The output will be available through websocket. As there can be multiple command issued against the same device at the same time and the output all goes through the same websocket stream, session is introduced for demux.\\n\\n#### Subscribe to Device Command outputs\\n`WS /api-ws/v1/stream`\\n\\n```json\\n{\\n    \\"subscribe\\": \\"/sites/{site_id}/devices/{device_id}/cmd\\"\\n}\\n```\\n##### Response\\n```json\\n{\\n    \\"event\\": \\"data\\",\\n    \\"channel\\": \\"/sites/4ac1dcf4-9d8b-7211-65c4-057819f0862b/devices/00000000-0000-0000-1000-5c5b350e0060/cmd\\",\\n    \\"data\\": {\\n        \\"session\\": \\"session_id\\",\\n        \\"raw\\": \\"64 bytes from 23.211.0.110: seq=8 ttl=58 time=12.323 ms\\\\n\\"\\n    }\\n}\\n```","operationId":"servicePingFromDevice","tags":["Sites Devices Utilities"]}}},"snapshot":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"}],"post":{"tags":["Sites Devices Utilities"],"operationId":"createSiteDeviceSnapshot","description":"Create recovery device snapshot (Available on Junos OS EX2300-, EX3400-, EX4400- devices)"}}},"support":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"}],"post":{"description":"Support / Upload device support files\\n\\n#### Info Param\\n**Parameter**|**Type**|**Description** \\n :-------------: |:-------------: |:-------------: \\nprocess|string|Upload 1 file with output of show system processes extensive\\noutbound-ssh|string|Upload 1 file that concatenates all /var/log/outbound-ssh.log* files\\nmessages|string|Upload 1 to 10 /var/log/messages* files\\ncore-dumps|string|Upload all core dump files, if any\\nfull|string|Upload 1 file with output of request support information, 1 file that concatenates all /var/log/outbound-ssh.log files, all core dump files, and the 3 most recent /var/log/messages files","operationId":"uploadSiteDeviceSupportFile","tags":["Sites Devices"]}}},"traceroute":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"}],"post":{"description":"Traceroute can be performed from the Device. The output will be available through websocket. As there can be multiple command issued against the same AP at the same time and the output all goes through the same websocket stream, session is introduced for demux.","operationId":"tracerouteFromDevice","tags":["Sites Devices Utilities"]}}},"unlocate":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"}],"post":{"description":"Stop Locate a Device","operationId":"stopSiteLocateDevice","tags":["Sites Devices"]}}},"upgrade":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"}],"post":{"description":"Device Upgrade","operationId":"upgradeSiteDevice","tags":["Sites Devices"]}}},"vc":{"specs":{"delete":{"description":"When all the member switches of VC are removed and only member ID 0 is left, the cloud would detect this situation and automatically changes the single switch to non-VC role.\\n\\nFor some unexpected cases that the VC is gone and disconncted, the API below could be used to change the state of VC’s switches to be standalone. After it is executed, all the switches will be shown as standalone switches under Inventory.","operationId":"deleteSiteVirtualChassis","tags":["Sites Devices Virtual Chassis"]},"get":{"description":"Get VC Status\\n\\nThe API returns a combined view of the VC status which includes topology and stats_","operationId":"getSiteVirtualChassis","tags":["Sites Devices Virtual Chassis"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"}],"post":{"description":"For models (e.g. EX3400 and up) having dedicated VC ports, it is easier to form a VC by just connecting cables with the dedicated VC ports. Cloud will detect the new VC and update the inventory.\\n\\nIn case that the user would like to choose the dedicated switch as a VC master. Or for EX2300-C-12P and EX2300-C-12T which doesn’t have dedicated VC ports, below are procedures to automate the VC creation:\\n\\n1. Power on the switch that is choosen as the VC master first. And the powering on the other member switches.\\n2. Claim or adopt all these switches under the same organization’s Inventory\\n3. Assign these switches into the same Site\\n4. Invoke vc command on the switch choosen to be the VC master. For EX2300-C-12P, VC ports will be created automatically.\\n5. Connect the cables to the VC ports for these switches\\n6. Wait for the VC to be formed. The Org’s inventory will be updated for the new VC.","operationId":"createSiteVirtualChassis","tags":["Sites Devices Virtual Chassis"]},"put":{"description":"## Add new members\\nFor models (e.g. EX4300 and up) having dedicated VC ports, it is easier to add new member switches into a VC by just connecting cables with the dedicated VC ports. Cloud will detect the new members and update the inventory.\\n\\nFor EX2300 VC, adding new members requires to follow the procedures below:\\n1. Powering on the new member switches and ensuring cables are not connected to any VC ports.\\n2. Claim or adopt all new member switches under the VC’s organization Inventory\\n3. Assign all new member switches to the same Site as the VC\\n4. Invoke vc command to add switches to the VC.\\n5. Connect the cables to the VC ports for these switches\\n6. After a while, the Org’s Inventory shows this new switches has been added into the VC.\\n\\n## Removing member switch\\nTo remove a member switch from the VC, following the procedures below:\\n\\n1. Ensuring the VC is connected to the cloud first\\n2. Unplug the cable from the VC port of the switch\\n3. Waiting for the VC state (vc_state) of this switch is changed to not-present\\n4. Invoke update_vc with remove to remove this switch from the VC\\n5. The Org’s Inventory shows the switch is removed.\\n\\nPlease notice that member ID 0 (fpc0) cannot be removed. When a VC has two switches left, unpluging the cable may result in the situation that fpc0 becomes a line card (LC). When this situation is happened, please re-plug in the cable, wait for both switches becoming present (show virtual-chassis) and then removing the cable again.\\n\\n## Renumber a member switch\\nWhen a member switch doesn’t work properly and needed to be replaced, the renumber API could be used. The following two types of renumber are supported:\\n\\n1. Replace a non-fpc0 member switch\\n2. Replace fpc0. When fpc0 is relaced, PAPI device config and JUNOS config will be both updated.\\n\\nFor renumber to work, the following procedures are needed: \\n1. Ensuring the VC is connected to the cloud and the state of the member switch to be replaced must be non present. \\n2. Adding the new member switch to the VC \\n3. Waiting for the VC state (vc_state) of this VC to be updated to API server \\n4. Invoke vc with renumber to replace the new member switch from fpc X to","operationId":"removeSiteVirtualChassisMember","tags":["Sites Devices Virtual Chassis"]}},"paths":{"vc_port":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"}],"post":{"description":"Set VC port","operationId":"setSiteVcPort","tags":["Sites Devices Virtual Chassis"]}}}}},"{image_name}":{"specs":{"delete":{"description":"Delete image from a device","operationId":"deleteSiteDeviceImage","tags":["Sites Devices"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"},{"$ref":"#/components/parameters/image_name"}],"post":{"description":"Attach up to 3 images to a device","operationId":"addSiteDeviceImage","tags":["Sites Devices"]}}}}}}},"events":{"paths":{"fast_roam":{"specs":{"get":{"description":"Roaming Events data","operationId":"getSiteRoamingEvents","parameters":[{"description":"event type","in":"query","name":"type","schema":{"enum":["success","fail","none"],"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Events"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"interference":{"specs":{"get":{"description":"Get Interference Events","operationId":"getSiteInterferenceEvents","parameters":[{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Events"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"system":{"paths":{"count":{"specs":{"get":{"description":"Count System Events","operationId":"countSiteSystemEvents","parameters":[{"in":"query","name":"distinct","schema":{"default":"type","enum":["type"],"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Events"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"search":{"specs":{"get":{"description":"Search System Events","operationId":"searchSiteSystemEvents","parameters":[{"in":"query","name":"type","schema":{"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Events"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}}}}}},"evpn_topologies":{"specs":{"get":{"description":"Get the existing EVPN topology","operationId":"getSiteEvpnTopologies","tags":["Sites Devices EVPN"]},"parameters":[{"in":"path","name":"site_id","required":true,"schema":{"type":"string"}}],"post":{"description":"While all the `evpn_id` / `downlink_ips` can be specifidd by hand, the easiest way is to call the `build_vpn_topology` API, allowing you to examine the diff, and update it yourself. You can also simply call it with `overwrite=true` which will apply the updates for you.\\n\\n**Notes:**\\n1. You can use `core` / `distribution` / `access` to create a CLOS topology\\n2. You can also use `core` / `distribution` to form a 2-tier EVPN topology where ESI-Lag is configured distribution to connect to access switches\\n3. In a small/medium campus, `collapsed-core` can be used where core switches are the inter-connected to do EVPN\\n4. The API uses a few pre-defined parameters and best-practices to generate the configs. It can be customized by using `evpn_options` in Site Setting / Network Template. (e.g. a different subnet for the underlay)\\n\\n#### Collapsed Core\\nIn a small-medium campus, EVPN can also be enabled only at the core switches (up to 4) by assigning all participating switches with `collapsed-core role`. When there are more than 2 switches, a ring-like topology will be formed.\\n\\n#### ESI-Lag\\nIf the access switchess does not have EVPN support, you can take advantage of EVPN by setting up ESI-Lag on distribution switches\\n\\n#### Leaf / Access / Collapsed-Core\\nFor leaf nodes in a EVPN topology, you’d have to configure the IPs for networks that would participate in EVPN. Optionally, VRFs to isolate traffic from one tenant verus another","operationId":"createSiteEvpnTopology","tags":["Sites Devices EVPN"]}},"paths":{"{evpn_topology_id}":{"specs":{"delete":{"description":"Delete the site EVPN Topology","operationId":"deleteSiteEvpnTopology","tags":["Sites Devices EVPN"]},"get":{"description":"Get One EVPN Topology Detail","operationId":"getSiteEvpnTolopogy","tags":["Sites Devices EVPN"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/evpn_topology_id"}],"put":{"description":"Update the EVPN Topolgy","operationId":"updateSiteEvpnTopology","tags":["Sites Devices EVPN"]}}}}},"guests":{"specs":{"get":{"description":"Get Guest Authorizations","operationId":"getSiteAllGuestAuthorizations","parameters":[{"description":"UUID of single or multiple (Comma separated) WLAN under Site `site_id` (to filter by WLAN)","in":"query","name":"wlan_id","schema":{"type":"string"}}],"tags":["Sites Guests"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]},"paths":{"count":{"specs":{"get":{"description":"Count Authorized Guest","operationId":"countSiteGuestAuthorizations","parameters":[{"example":"auth_method","in":"query","name":"distinct","schema":{"default":"auth_method","enum":["auth_method","ssid","company"],"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Guests"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"search":{"specs":{"get":{"description":"Search Authorized Guest","operationId":"searchSiteGuestAuthorization","parameters":[{"example":"00000000-0000-0000-0000-000000000000","in":"query","name":"wlan_id","schema":{"type":"string"}},{"in":"query","name":"auth_method","schema":{"type":"string"}},{"in":"query","name":"ssid","schema":{"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Guests"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"{guest_mac}":{"specs":{"delete":{"description":"Delete Guest Authorization","operationId":"deleteSiteGuestAuthorization","tags":["Sites Guests"]},"get":{"description":"Get Guest Authorization","operationId":"getSiteGuestAuthorization","tags":["Sites Guests"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/guest_mac"}],"put":{"description":"Update Guest Authorization  ","operationId":"updateSiteGuestAuthorization","tags":["Sites Guests"]}}}}},"insights":{"paths":{"client":{"paths":{"{client_mac}":{"paths":{"{metric}":{"specs":{"get":{"description":"Get Client Insight Metrics\\nSee metrics possibilities at /api/v1/const/insight_metrics","operationId":"getSiteInsightMetricsForClient","parameters":[{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Insights"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/client_mac"},{"$ref":"#/components/parameters/metric"}]}}}}}},"device":{"paths":{"{mac}":{"paths":{"{metric}":{"specs":{"get":{"description":"Get AP Insight Metrics\\nSee metrics possibilities at /api/v1/const/insight_metrics","operationId":"getSiteInsightMetricsForDevice","parameters":[{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Insights"]},"parameters":[{"in":"path","name":"site_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},{"in":"path","name":"metric","required":true,"schema":{"type":"string"}},{"in":"path","name":"mac","required":true,"schema":{"type":"string"}}]}}}}}},"rogues":{"specs":{"get":{"description":"Get Site Rogue/Neighbor APs","operationId":"getSiteRogueAPs","parameters":[{"$ref":"#/components/parameters/rogue_type"},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Insights"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]},"paths":{"clients":{"specs":{"get":{"description":"Get Rogue Clients","operationId":"getSiteRogueClients","parameters":[{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Insights"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}}}},"{metric}":{"specs":{"get":{"description":"Get Site Insight Metrics\\nSee metrics possibilities at /api/v1/const/insight_metrics","operationId":"getSiteInsightMetrics","parameters":[{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Insights"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/metric"}]}}}},"licenses":{"paths":{"usages":{"specs":{"get":{"description":"This shows license usage (i.e. needed) based on the features enabled for the site.","operationId":"getSiteLicenseUsage","tags":["Sites Licenses"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}}}},"location":{"paths":{"coverage":{"specs":{"get":{"description":"Get Beam Coverage Overview","operationId":"getSiteBeamCoverageOverview","parameters":[{"description":"map_id (filter by map_id)","example":"00000000-0000-0000-0000-000000000000","in":"query","name":"map_id","schema":{"type":"string"}},{"in":"query","name":"type","schema":{"default":"sdkclient","enum":["sdkclient","client","asset"],"type":"string"}},{"description":"where the start time will be calculated (with end time is now)","in":"query","name":"duration","schema":{"default":"1h","enum":["1d","5h","1h","30m"],"type":"string"}},{"$ref":"#/components/parameters/resolution"},{"description":"client_type (as filter. optional)","in":"query","name":"client_type","schema":{"type":"string"}},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"}],"tags":["Sites Location"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"ml":{"paths":{"current":{"specs":{"get":{"description":"Get Machine Learning Current Stat\\nFor each VBLE AP, it has ML model parameters (e.g. Path-loss-estimate, Intercept) as well as completion indicators (Level and PercentageComplete). For the completeness, ML takes N sample to finish its first level and use N*0.25 samples to complete each successive level. When a device is moved, the completeness will be reset as it has to re-learn.","operationId":"getSiteMachineLearningCurrentStat","parameters":[{"description":"map_id (as filter, optional)","example":"00000000-0000-0000-0000-000000000000","in":"query","name":"map_id","schema":{"type":"string"}}],"tags":["Sites Location"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"defaults":{"specs":{"get":{"description":"Get Default PLF for Models","operationId":"getSiteDefaultPlfForModels","tags":["Sites Location"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"device":{"paths":{"{device_id}":{"specs":{"delete":{"description":"Clear ML Overwrite for Device","operationId":"clearSiteMlOverwriteForDevice","tags":["Sites Location"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"}],"put":{"description":"Overwrite ML For Device","operationId":"overwriteSiteMlForDevice","tags":["Sites Location"]}}}}},"map":{"paths":{"{map_id}":{"specs":{"delete":{"description":"Clear ML Overwrite for Map","operationId":"clearSiteMlOverwriteForMap","tags":["Sites Location"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/map_id"}],"put":{"description":"Overwrite ML For Map","operationId":"overwriteSiteMlForMap","tags":["Sites Location"]}}}}},"reset":{"paths":{"map":{"paths":{"{map_id}":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/map_id"}],"post":{"description":"Reset ML Stats by Map","operationId":"resetSiteMlStatsByMap","tags":["Sites Location"]}}}}}}},"updates":{"specs":{"get":{"description":"Get Machine Learning Events","operationId":"getSiteMachineLearningEvents","parameters":[{"description":"device_id (as filter, optional)","example":"00000000-0000-0000-0000-000000000000","in":"query","name":"device_id","schema":{"type":"string"}},{"description":"map_id (as filter, optional)","in":"query","name":"map_ip","schema":{"type":"string"}},{"description":"client_type (as filter, optional)","in":"query","name":"client_type","schema":{"type":"string"}},{"description":"instead of start, you can use 1d, 30m, 5h, where the start will be calculated","in":"query","name":"duration","schema":{"type":"string"}},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"in":"query","name":"interval","schema":{"type":"string"}}],"tags":["Sites Location"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}}}}}},"maps":{"specs":{"get":{"description":"Get Site Maps","operationId":"getSiteMaps","tags":["Sites Maps"]},"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"Create Site Map","operationId":"createSiteMap","tags":["Sites Maps"]}},"paths":{"import":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"Import data from files is a multipart POST which has an file, an optional json, and an optional csv, to create floorplan, assign matching inventory to specific site, place ap if name or mac matches\\n\\n# CSV File Format\\n```csv\\nVendor AP name,Mist AP Mac\\nUS Office AP-2 - 5c:5b:35:00:00:02,5c5b35000002\\n``` ","operationId":"importSiteMaps","tags":["Sites Maps"]}}},"{map_id}":{"specs":{"delete":{"description":"Delete Site Map","operationId":"deleteSiteMap","tags":["Sites Maps"]},"get":{"description":"Get Site Map Details","operationId":"getSiteMap","tags":["Sites Maps"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/map_id"}],"put":{"description":"Update Site Map","operationId":"updateSiteMap","tags":["Sites Maps"]}},"paths":{"image":{"specs":{"delete":{"description":"Delete Site Map Image","operationId":"deleteSiteMapImage","tags":["Sites Maps"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/map_id"}],"post":{"description":"Add image map is a multipart POST which has an file (Image) and an optional json parameter","operationId":"addSiteMapImage","tags":["Sites Maps"]}}},"replace":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/map_id"}],"post":{"description":"Replace Map Image\\n\\n\\nThis works like an PUT where the image will be replaced. If transform is provided, all the locations of the objects on the map (AP, Zone, Vbeacon, Beacon) will be transformed as well (relative to the new Map)","operationId":"replaceSiteMapImage","tags":["Sites Maps"]}}},"wayfinding":{"paths":{"import":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/map_id"}],"post":{"description":"This imports the vendor map meta data into the Map JSON. This is required by the SDK and App in order to access/render the vendor Map properly.","operationId":"importSiteWayfinding","tags":["Sites Maps"]}}}}}}}}},"mxedges":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"}],"get":{"tags":["Sites MxEdges"],"operationId":"getSiteMxEdges","description":"Get Site Mist Edges"},"post":{"tags":["Sites MxEdges"],"operationId":"createSiteMxEdge","description":"Create Site Mist Edge"}},"paths":{"{mxedge_id}":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/mxedge_id"}],"get":{"tags":["Sites MxEdges"],"operationId":"getSiteMxEdge","description":"get Site Mist Edge"},"put":{"tags":["Sites MxEdges"],"operationId":"updateSiteMxEdge","description":"Update Site Mist Edge settings"},"delete":{"tags":["Sites MxEdges"],"operationId":"deleteSiteMxEdge","description":"Delete Site Mist Edge"}},"paths":{"support":{"specs":{"parameters":[{"schema":{"type":"string"},"name":"site_id","in":"path","required":true},{"schema":{"type":"string"},"name":"mxedge_id","in":"path","required":true}],"post":{"tags":["Sites MxEdges"],"operationId":"uploadSiteMxEdgeSupportFiles","description":"Support / Upload Mist Edge support files"}}}}}}},"mxtunnels":{"paths":{"{mxtunnel_id}":{"paths":{"preempt_aps":{"specs":{"parameters":[{"in":"path","name":"site_id","required":true,"schema":{"type":"string"}},{"in":"path","name":"mxtunnel_id","required":true,"schema":{"type":"string"}}],"post":{"description":"To preempt AP’s which are not connected to preferred peer to the preferred peer","operationId":"preemptSitesMxTunnel","tags":["Sites MxTunnels"]}}}}}}},"pcaps":{"specs":{"get":{"description":"Get a list of captures","operationId":"getSitePacketCaptures","parameters":[{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"},{"description":"optional client mac filter","in":"query","name":"client_mac","schema":{"type":"string"}}],"tags":["Sites Pcaps"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]},"paths":{"capture":{"specs":{"delete":{"description":"Stop current capture","operationId":"stopSitePacketCapture","tags":["Sites Pcaps"]},"get":{"description":"Get Capturing status","operationId":"getSiteCapturingStatus","tags":["Sites Pcaps"]},"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"Initiate a Packet Capture\\n\\nThe output will be available through websocket. As there can be multiple command issued against the same AP at the same time and the output all goes through the same websocket stream, session is introduced for demux.\\n\\n#### Subscribe to Device Command outputs\\n`WS /api-ws/v1/stream`\\n\\n```json\\n{\\n    subscribe: \\"/sites/{site_id}/pcaps\\"\\n}\\n```\\n#### Response (Wireless/RadioTap)\\n```json\\n{\\n    \\"event\\": \\"data\\"\\n    \\"channel\\": \\"/sites/:site_id/pcaps\\"\\n    \\"data\\": {\\n         \\"capture_id\\": \\"6b1be4fb-b239-44d9-9d3b-cb1ff3af1721\\",\\n     \\"lost_messages\\": 0\\n         \\"pcap_dict\\": {\\n             \\"channel_frequency\\": 2412,\\n             \\"channel\\": \\"1\\",\\n             \\"datarate\\": \\"1.0 Mbps\\",\\n             \\"rssi\\": -75, \\n             \\"dst\\": \\"78:bd:bc:ca:0b:0a\\",\\n             \\"src\\": \\"18:b8:1f:4c:91:c0\\",\\n             \\"bssid\\": \\"18:b8:1f:4c:91:c0\\",\\n             \\"frame_type\\": \\"Management\\", \\n             \\"frame_subtype\\": \\"Probe Response\\", \\n         \\"proto\\": \\"802.11\\", \\n             \\"ap_mac\\": \\"d4:20:b0:81:99:2e\\", \\n             \\"direction\\": \\"tx\\", \\n             \\"timestamp\\": 1652246543, \\n             \\"length\\": 416.0,\\n             \\"info\\": \\"1652246544.467733 1683216786us tsft 1.0 Mb/s 2412 MHz 11g -75dBm signal -82dBm noise antenna 0 Probe Response (ATTKmsWiVS) [1.0* \\n                      2.0* 5.5* 11.0* 18.0 24.0 36.0 54.0 Mbit] CH: 2, PRIVACY\\\\\\\\n\\",\\n         }, \\n        \\"pcap_raw\\": \\"1MOyoQIABAAAAAAAAAAAAP//AAABAAAAEEh7Yh5VBwCgAQAAoAEAAAAAKwBvCADAAQAAAIw7reCS2VNkAAAAABACbAmABLWuAAEAEBgAAwACAABQADoBeL28ygsKGLgfTJHAGLgfTJHAcIZ2WDlBJQAAAGQAERUACkFUVEttc1dpVlMBCIKEi5YkMEhsAwECBwZVUyABCx4gAQAjAhkAKgEEMgQMEhhgMBQBAAAPrAQBAAAPrAQBAAAPrAIMAAsFAQAbAABGBTIIAQAALRqtCR////8AAAAAAAAAAAAAAAAAAAAAAAAAAD0WAggVAAAAAAAAAAAAAAAAAAAAAAAAAH8IBAAIAAAAAEDdkwBQ8gQQSgABEBBEAAECEDsAAQMQRwAQn2481frn3KT+uGod2ERx+RAhAAtBcnJpcywgSW5jLhAjAApCR1cyMTAtNzAwECQACkJHVzIxMC03MDAQQgAKQkdXMjEwLTcwMBBUAAgABgBQ8gQAARARAA5BcnJpcyBXaXJlbGVzcxAIAAIgCBA8AAEBEEkABgA3KgABIN0JABAYAgEQHAAA3RgAUPICAQGEAAOkAAAnpAAAQkNeAGIyLwAzjakr\\\\\\"\\n}\\n```\\n\\n#### vResponse (Wired)\\n```json\\n{\\n    \\"event\\": \\"data\\"\\n    \\"channel\\": \\"/sites/67970e46-4e12-11e6-9188-0242ac110007/pcaps\\"\\n    \\"data\\": {\\n        \\"capture_id\\": \\"f039b1b4-a23e-48b2-906a-0da40524de73\\", \\n        \\"lost_messages\\": 0,\\n        \\"pcap_dict\\": {\\n             \\"dst_mac\\": \\"68:ec:c5:09:2e:87\\",\\n             \\"src_mac\\": \\"8c:3b:ad:e0:47:40\\", \\n             \\"vlan\\": 1, \\n             \\"src_ip\\": \\"34.224.147.117\\", \\n             \\"dst_ip\\": \\"192.168.1.55\\",\\n             \\"dst_port\\": 51635, \\n             \\"src_port\\": 443,\\n             \\"proto\\": \\"TCP\\", \\n             \\"ap_mac\\": \\"d4:20:b0:81:99:2e\\",\\n             \\"direction\\": \\"tx\\", \\n             \\"timestamp\\": 1652247615, \\n             \\"length\\": 159.0, \\n             \\"info\\": \\"1652247616.007409 IP ec2-34-224-147-117.compute-1.amazonaws.com.https > ip-192-168-1-55.ec2.internal.51635: Flags [P.], seq \\n                      2192123968:2192124057, ack 4035166782, win 12, options [nop,nop,TS val 597467050 ecr 740580660], length 89\\\\\\\\n\\",\\n             }, \\n        \\"pcap_raw\\": \\"1MOyoQIABAAAAAAAAAAAAP//AAABAAAAQEx7YhMzAACfAAAAnwAAAGjsxQkuh4w7reBHQIEAAAEIAEUAAI1bLEAAKAZ/CiLgk3XAqAE3AbvJs4KpKEDwg8I+gBgADFf9AAABAQgKI5yfqiwkXTQXAwMAVKY5JopoKQrVEn0/3ld4YntctGEH/rTZuwtCvzSncFw71QJveJi9uxHs57KC8w9Apph3YvXJrmWg7M37+o+YV0KH/xmr626s5Bkhb3QhKOu+NoNEmA==\\\\\\"\\n\\n    }\\n}\\n```\\n\\n#### Stop Response (Wired/Wireless)\\n```json\\n{\\n    \\"event\\": \\"data\\"\\n    \\"channel\\": \\"/sites/67970e46-4e12-11e6-9188-0242ac110007/pcaps\\"\\n    \\"data\\": {\\n      \'capture_id\': \'a2f7374d-6a70-41fd-8a3f-71e42573baaf\', \\n      \\"lost_messages\\": 0,\\n      \'pcap_dict\': null\\n    }\\n}\\n```","operationId":"startSitePacketCapture","tags":["Sites Pcaps"]}}}}},"psks":{"specs":{"get":{"description":"Get Site PSKs","operationId":"getSitePsks","parameters":[{"in":"query","name":"ssid","schema":{"type":"string"}},{"in":"query","name":"role","schema":{"type":"string"}},{"$ref":"#/components/parameters/name"},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"}],"tags":["Sites Psks"]},"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"Create Site PSK","operationId":"createSitePsk","tags":["Sites Psks"]},"put":{"description":"Update multi PSKs","operationId":"updateSitePsks","tags":["Sites Psks"]}},"paths":{"import":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"Import PSK from CSV file or JSON\\n\\n## CSV File Format\\n```csv\\nPSK Import CSV File Format:\\nname,ssid,passphrase,usage,vlan_id,mac\\nCommon,warehouse,foryoureyesonly,single,35,a31425f31278\\nJustin,reception,visible,multi,1002\\n```","operationId":"importSitePsk","tags":["Sites Psks"]}}},"{psk_id}":{"specs":{"delete":{"description":"Delete Site PSK","operationId":"deleteSitePsk","tags":["Sites Psks"]},"get":{"description":"Get Site PSK Details","operationId":"getSitePsk","tags":["Sites Psks"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/psk_id"}],"put":{"description":"Update Site PSK","operationId":"updateSitePsk","tags":["Sites Psks"]}}}}},"rfdiags":{"specs":{"get":{"description":"List RF Glass Recording","operationId":"getSiteSiteRfdiagRecording","parameters":[{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Rfdiags"]},"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"Start RF Glass Recording","operationId":"startSiteRecording","tags":["Sites Rfdiags"]}},"paths":{"{rfdiag_id}":{"specs":{"delete":{"description":"Delete Recording","operationId":"deleteSiteRfdiagRecording","tags":["Sites Rfdiags"]},"get":{"description":"Get RF Diage Recording Details","operationId":"getSiteRfdiagRecording","tags":["Sites Rfdiags"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/rfdiag_id"}],"put":{"description":"Update Recording","operationId":"updateSiteRfdiagRecording","tags":["Sites Rfdiags"]}},"paths":{"download":{"specs":{"get":{"description":"Download Recording\\nDownload raw_events blob","operationId":"downloadSiteRfdiagRecording","tags":["Sites Rfdiags"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/rfdiag_id"}]}},"stop":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/rfdiag_id"}],"post":{"description":"If the recording session is active for the given rfdiag_id, it will finish the recording. duration and end_time will be updated to reflect the correct values.","operationId":"stopSiteRfdiagRecording","tags":["Sites Rfdiags"]}}}}}}},"rogues":{"paths":{"events":{"paths":{"count":{"specs":{"get":{"description":"Count Rogue Events","operationId":"countSiteRogueEvents","parameters":[{"in":"query","name":"distinct","schema":{"default":"bssid","enum":["bssid","ssid","ap","type"],"type":"string"}},{"$ref":"#/components/parameters/rogue_type"},{"description":"ssid of the network detected as threat","in":"query","name":"ssid","schema":{"type":"string"}},{"description":"bssid of the network detected as threat","in":"query","name":"bssid","schema":{"type":"string"}},{"description":"mac of the device that had strongest signal strength for ssid/bssid pair","in":"query","name":"ap_mac","schema":{"type":"string"}},{"description":"channel over which ap_mac heard ssid/bssid pair","in":"query","name":"channel","schema":{"type":"string"}},{"description":"whether the reporting AP see a wireless client (on LAN) connecting to it  ","in":"query","name":"seen_on_lan","schema":{"type":"boolean"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Rogues"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"search":{"specs":{"get":{"description":"Search Rogue Events","operationId":"searchSiteRogueEvents","parameters":[{"$ref":"#/components/parameters/rogue_type"},{"description":"ssid of the network detected as threat","in":"query","name":"ssid","schema":{"type":"string"}},{"description":"bssid of the network detected as threat","in":"query","name":"bssid","schema":{"type":"string"}},{"description":"mac of the device that had strongest signal strength for ssid/bssid pair","in":"query","name":"ap_mac","schema":{"type":"string"}},{"description":"channel over which ap_mac heard ssid/bssid pair","in":"query","name":"channel","schema":{"type":"string"}},{"description":"whether the reporting AP see a wireless client (on LAN) connecting to it  ","in":"query","name":"seen_on_lan","schema":{"type":"boolean"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Rogues"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}}}},"{rogue_bssid}":{"specs":{"get":{"description":"Get Rogue AP Details","operationId":"getSiteRogueAP","parameters":[],"tags":["Sites Rogues"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/rogue_bssid"}]},"paths":{"deauth_clients":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/rogue_bssid"}],"post":{"description":"Send Deauth frame to clients connected to a Rogue AP","operationId":"deauthSiteClientsConnectedToARogue","tags":["Sites Rogues"]}}}}}}},"rrm":{"paths":{"current":{"specs":{"get":{"description":"Get Current Channel Planning","operationId":"getSiteCurrentChannelPlanning","tags":["Sites RRM"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]},"paths":{"devices":{"paths":{"{device_id}":{"paths":{"band":{"paths":{"{band}":{"specs":{"get":{"description":"Get Current RRM Considerations for an AP on a Specific Band","operationId":"getSiteCurrentRrmConsiderationsForAnApOnASpecificBand","tags":["Sites RRM"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"},{"description":"radio band","in":"path","name":"band","required":true,"schema":{"enum":["24","5","6"],"type":"string"}}]}}}}}}}}}},"events":{"specs":{"get":{"description":"Get Site RRM Events","operationId":"getSiteRrmEvents","parameters":[{"in":"query","name":"band","required":true,"schema":{"enum":["24","5","6"],"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites RRM"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"optimize":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"Optimize Site RRM","operationId":"optimizeSiteRrm","tags":["Sites RRM"]}}}}},"rssizones":{"specs":{"get":{"description":"Get RSSI Zone is RSSI-based","operationId":"getSiteRssiZones","tags":["Sites Rssizones"]},"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"Create RSSI Zone","operationId":"createSiteRssiZone","tags":["Sites Rssizones"]}},"paths":{"{rssizone_id}":{"specs":{"delete":{"description":"Delete Site RSSI Zone","operationId":"deleteSiteRssiZone","tags":["Sites Rssizones"]},"get":{"description":"Get Site RSSI Zone details","operationId":"getSiteRssiZone","tags":["Sites Rssizones"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/rssizone_id"}],"put":{"description":"Update Site RSSI Zone","operationId":"updateSiteRssiZone","tags":["Sites Rssizones"]}}}}},"setting":{"specs":{"get":{"description":"Get Site Settings","operationId":"getSiteSetting","tags":["Sites Setting"]},"parameters":[{"$ref":"#/components/parameters/site_id"}],"put":{"description":"Update Site Settings","operationId":"updateSiteSettings","tags":["Sites Setting"]}},"paths":{"blacklist":{"specs":{"delete":{"description":"Delete Site Blacklist Station Clients","operationId":"deleteSiteClientsBlocklist","tags":["Sites Setting"]},"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"This endpoint is to provide list of client macs for annotation blacklist.\\n\\nRetrieve the current clients list `blacklist_url` under Site:Setting","operationId":"createSiteClientsBlocklist","tags":["Sites Setting"]}}},"watched_station":{"specs":{"delete":{"description":"Delete Site Watched Station Clients","operationId":"deleteSiteWatchedStations","tags":["Sites Setting"]},"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"This endpoint is to provide list of client macs for annotation as  watched station.\\n\\nRetrieve the current clients list from  `watched_station_url` under Site:Setting","operationId":"createSiteWatchedStations","tags":["Sites Setting"]}}},"whitelist":{"specs":{"delete":{"description":"Delete Site Whitelist Station Clients","operationId":"deleteSiteClientsAllowlist","tags":["Sites Setting"]},"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"This endpoint is to provide list of client macs for annotation as whitelist.\\n\\nRetrieve the current clients list from `whitelist_url` under Site:Setting","operationId":"createSiteClientsAllowlist","tags":["Sites Setting"]}}}}},"skyatp":{"paths":{"events":{"paths":{"count":{"specs":{"get":{"description":"Count by Distinct Attributes of Skyatp Events (WIP)","operationId":"countSiteByDistringAttributesOfSkyatpEvents","parameters":[{"in":"query","name":"distinct","schema":{"default":"type","enum":["type","mac","device_mac","threat_level"],"type":"string"}},{"description":"event type, e.g. cc, fs, mw","in":"query","name":"type","schema":{"type":"string"}},{"description":"client MAC","in":"query","name":"mac","schema":{"type":"string"}},{"description":"device MAC","in":"query","name":"device_mac","schema":{"type":"string"}},{"description":"threat level","in":"query","name":"threat_level","schema":{"type":"integer"}},{"$ref":"#/components/parameters/ip"},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Skyatp"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"search":{"specs":{"get":{"description":"Search Skyatp Events (WIP)","operationId":"searchSiteSkyatpEvents","parameters":[{"description":"event type, e.g. cc, fs, mw","in":"query","name":"type","schema":{"type":"string"}},{"description":"client MAC","in":"query","name":"mac","schema":{"type":"string"}},{"description":"device MAC","in":"query","name":"device_mac","schema":{"type":"string"}},{"description":"threat level","in":"query","name":"threat_level","schema":{"type":"integer"}},{"$ref":"#/components/parameters/ip"},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Skyatp"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}}}}}},"sle":{"paths":{"site":{"paths":{"{site_id}":{"paths":{"metric":{"paths":{"{metric}":{"paths":{"impacted-aps":{"specs":{"get":{"description":"Get impacted APs optionally filtered by classifier and failure type","operationId":"getSiteSleImpactedAps","parameters":[{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"},{"in":"query","name":"classifier","schema":{"type":"string"}}],"tags":["Sites SLEs"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"description":"values from /api/v1/sites/{site_id}/sle/{scope}/{scope_id}/metrics","in":"path","name":"metric","required":true,"schema":{"type":"string"}}]}}}}}}}}}},"{scope}":{"paths":{"{scope_id}":{"paths":{"metric":{"paths":{"{metric}":{"paths":{"classifier":{"paths":{"{classifier}":{"paths":{"summary":{"specs":{"get":{"description":"Get SLE classifier details","operationId":"getSiteSleClassifierDetails","parameters":[{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites SLEs"]},"parameters":[{"in":"path","name":"site_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},{"in":"path","name":"scope","required":true,"schema":{"enum":["site","ap"],"type":"string"}},{"in":"path","name":"scope_id","required":true,"schema":{"format":"uuid","type":"string"}},{"description":"values from /api/v1/sites/{site_id}/sle/{scope}/{scope_id}/metrics","in":"path","name":"metric","required":true,"schema":{"type":"string"}},{"in":"path","name":"classifier","required":true,"schema":{"type":"string"}}]}}}}}},"histogram":{"specs":{"get":{"description":"Get the histogram for the SLE metric","operationId":"getSiteSleHistogram","parameters":[{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites SLEs"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"in":"path","name":"scope","required":true,"schema":{"enum":["site","ap","client"],"type":"string"}},{"in":"path","name":"scope_id","required":true,"schema":{"type":"string"}},{"description":"values from /api/v1/sites/{site_id}/sle/{scope}/{scope_id}/metrics","in":"path","name":"metric","required":true,"schema":{"type":"string"}}]}},"impact-summary":{"specs":{"get":{"description":" Get impact summary counts optionally filtered by classifier and failure type","operationId":"getSiteSleImpactSummary","parameters":[{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"},{"in":"query","name":"fields","schema":{"enum":["wlan","device_type","device_os","band"],"type":"string"}},{"in":"query","name":"classifier","schema":{"type":"string"}}],"tags":["Sites SLEs"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"in":"path","name":"scope","required":true,"schema":{"enum":["site","ap"],"type":"string"}},{"in":"path","name":"scope_id","required":true,"schema":{"format":"uuid","type":"string"}},{"description":"values from /api/v1/sites/{site_id}/sle/{scope}/{scope_id}/metrics","in":"path","name":"metric","required":true,"schema":{"type":"string"}}]}},"impacted-users":{"specs":{"get":{"description":"Get impacted users optionally filtered by classifier and failure type","operationId":"getSiteSleImpactedClients","parameters":[{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"},{"in":"query","name":"classifier","schema":{"type":"string"}}],"tags":["Sites SLEs"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"in":"path","name":"scope","required":true,"schema":{"enum":["site"],"type":"string"}},{"in":"path","name":"scope_id","required":true,"schema":{"format":"uuid","type":"string"}},{"description":"values from /api/v1/sites/{site_id}/sle/{scope}/{scope_id}/metrics","in":"path","name":"metric","required":true,"schema":{"type":"string"}}]}},"summary":{"specs":{"get":{"description":" Get the summary for the SLE metric","operationId":"getSiteSleSummary","parameters":[{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites SLEs"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"in":"path","name":"scope","required":true,"schema":{"enum":["site","ap","client"],"type":"string"}},{"in":"path","name":"scope_id","required":true,"schema":{"format":"uuid","type":"string"}},{"description":"values from /api/v1/sites/{site_id}/sle/{scope}/{scope_id}/metrics","in":"path","name":"metric","required":true,"schema":{"type":"string"}}]}},"threshold":{"specs":{"get":{"description":"Get the SLE threshold","operationId":"getSiteSleThreshold","tags":["Sites SLEs"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"in":"path","name":"scope","required":true,"schema":{"enum":["site","ap","client"],"type":"string"}},{"in":"path","name":"scope_id","required":true,"schema":{"format":"uuid","type":"string"}},{"description":"values from /api/v1/sites/{site_id}/sle/{scope}/{scope_id}/metrics","in":"path","name":"metric","required":true,"schema":{"type":"string"}}],"post":{"description":"Replace the SLE threshold","operationId":"replaceSiteSleThreshold","tags":["Sites SLEs"]},"put":{"description":"Update the SLE threshold","operationId":"updateSiteSleThreshold","tags":["Sites SLEs"]}}}}}}},"metrics":{"specs":{"get":{"description":"Get the list of metrics for the given scope","operationId":"getSiteSlesMetrics","tags":["Sites SLEs"]},"parameters":[{"in":"path","name":"site_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},{"in":"path","name":"scope","required":true,"schema":{"enum":["site","ap","client"],"type":"string"}},{"in":"path","name":"scope_id","required":true,"schema":{"format":"uuid","type":"string"}}]}}}}}}}},"ssr":{"paths":{"upgrade":{"paths":{"{upgrade_id}":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/upgrade_id"}],"get":{"tags":["Sites Devices SSR"],"operationId":"getSiteSsrUpgrade","description":"Get Specific Site SSR Upgrade"}}}}},"{device_id}":{"paths":{"upgrade":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"}],"post":{"tags":["Sites Devices SSR"],"operationId":"upgradeSiteSsr","description":"Upgrade Site SSR device"}}}}}}},"stats":{"specs":{"get":{"description":"Get Site Stats","operationId":"getSiteStats","tags":["Sites Stats"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]},"paths":{"apps":{"paths":{"count":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"}],"get":{"tags":["Sites Applications"],"operationId":"countSiteApps","description":"Count by Distinct Attributes of Applications","parameters":[{"schema":{"type":"string","enum":["ap","wcid","ssid","wlan_id app","device_mac","src_ip","port_id","app","category","service"]},"in":"query","name":"distinct","description":"Default for wireless devices is `ap`. Default for wired devices is `device_mac`"},{"schema":{"type":"string"},"in":"query","name":"device_mac","description":"MAC of the device"},{"schema":{"type":"string"},"in":"query","name":"app","description":"Application name"},{"schema":{"type":"string"},"in":"query","name":"wired","description":"If a device is wired or wireless. Default is False."}]}}}}},"assets":{"specs":{"get":{"description":"Get Site Assets Stats","operationId":"getSiteAssetsStats","parameters":[{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Stats"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]},"paths":{"asset_id":{"specs":{"get":{"description":"Get Site Asset Details","operationId":"getSiteAssetStats","parameters":[{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Stats"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"count":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"}],"get":{"tags":["Sites Assets"],"operationId":"countSiteAssets","description":"Count Asset by distinct field","parameters":[{"schema":{"type":"string","enum":["mac","map_id","ibeacon_uuid","ibeacon_major","ibeacon_minor","eddystone_uid_namespace","eddystone_uid_instance","eddystone_url","by","name","device_name"],"default":"map_id"},"in":"query","name":"distinct"}]}}},"search":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"}],"get":{"tags":["Sites Assets"],"operationId":"searchSiteAssets","description":"Assets Search","parameters":[{"schema":{"type":"string"},"in":"query","name":"mac"},{"schema":{"type":"string","format":"uuid"},"in":"query","name":"map_id"},{"schema":{"type":"string","format":"uuid"},"in":"query","name":"ibeacon_uuid"},{"schema":{"type":"integer"},"in":"query","name":"ibeacon_major"},{"schema":{"type":"integer"},"in":"query","name":"ibeacon_minor"},{"schema":{"type":"string"},"in":"query","name":"eddystone_uid_namespace"},{"schema":{"type":"string"},"in":"query","name":"eddystone_uid_instance"},{"schema":{"type":"string"},"in":"query","name":"eddystone_url"},{"schema":{"type":"string"},"in":"query","name":"device_name"},{"schema":{"type":"string"},"in":"query","name":"by"},{"schema":{"type":"string"},"in":"query","name":"name"},{"in":"query","name":"ap_mac","schema":{"type":"string"}},{"in":"query","name":"beam","schema":{"type":"string"}},{"in":"query","name":"rssi","schema":{"type":"string"}}]}}}}},"beacons":{"specs":{"get":{"description":"Get Site Beacons Stats","operationId":"getSiteBeaconsStats","parameters":[{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Stats"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"clients":{"paths":{"{client_mac}":{"specs":{"get":{"description":"Get Site Client Stats Details","operationId":"getSiteClientStats","tags":["Sites Stats"],"parameters":[{"schema":{"type":"boolean","default":false},"in":"query","name":"wired"}]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/client_mac"}]}}}},"devices":{"specs":{"get":{"description":"Get Site Devices Stats","operationId":"getSiteDevicesStats","parameters":[{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"},{"in":"query","name":"type","schema":{"default":"ap","enum":["ap","switch","gateways","all"],"type":"string"}},{"in":"query","name":"status","schema":{"default":"all","enum":["all","connected","disconnected"],"type":"string"}}],"tags":["Sites Devices Stats"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]},"paths":{"{device_id}":{"specs":{"get":{"description":"Get Site Device Stats Details","operationId":"getSiteDeviceStats","tags":["Sites Devices Stats"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"}]},"paths":{"clients":{"specs":{"get":{"description":"Get wireless client stat by Device","operationId":"getSiteAllClientsStatsByDevice","tags":["Sites Devices Stats"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/device_id"}]}}}}}},"discovered_assets":{"specs":{"get":{"description":"Get Discovered BLE Assets\\n\\nGet a list of Discovered Assets that doesn’t match any of the Asset / Assetfilters","operationId":"getSiteDiscoveredAssets","parameters":[{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Stats"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"discovered_switch_metrics":{"paths":{"search":{"specs":{"get":{"description":"Search Discovered Switch Metrics","operationId":"searchSiteDiscoveredSwitchesMetrics","parameters":[{"description":"metric scope, optional","in":"query","name":"scope","schema":{"default":"site","enum":["site","switch"],"type":"string"}},{"description":"metric type, inactive_wired_vlans/switch_ap_affinity/poe_compliance/version_compliance, optional","in":"query","name":"type","schema":{"enum":["inactive_wired_vlans","switch_ap_affinity","poe_compliance","version_compliance"],"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Stats"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}}}},"discovered_switches":{"paths":{"count":{"specs":{"get":{"description":"Count Discovered Switches","operationId":"countSiteDiscoveredSwitches","parameters":[{"in":"query","name":"distinct","schema":{"default":"system_name","enum":["system_name","version","model","mgmt_addr"],"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Stats"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"metrics":{"specs":{"get":{"description":"Discovered switches related metrics, lists related switch system names & details if not compliant","operationId":"getSiteDiscoveredSwitchesMetrics","parameters":[{"description":"configurable # ap per switch threshold, default 12","in":"query","name":"threshold","schema":{"type":"string"}},{"description":"system name for switch level metrics, optional","in":"query","name":"system_name","schema":{"type":"string"}}],"tags":["Sites Stats"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"search":{"specs":{"get":{"description":"Search Count Discovered Switches","operationId":"getSiteDiscoveredSwitches","parameters":[{"in":"query","name":"system_name","schema":{"type":"string"}},{"in":"query","name":"mgmt_addr","schema":{"type":"string"}},{"in":"query","name":"model","schema":{"type":"string"}},{"in":"query","name":"version","schema":{"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Stats"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}}}},"filtered_assets":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"}],"get":{"tags":["Sites Assets"],"operationId":"getSiteAssetsOfInterest","description":"Get a list of BLE beacons that matches Asset or AssetFilter","parameters":[{"$ref":"#/components/parameters/duration"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"}]}}},"gateways":{"paths":{"metrics":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"}],"get":{"tags":["Sites Stats"],"operationId":"getSiteGatwayMetrics","description":"Get Site Gateway Metrics"}}}}},"maps":{"paths":{"{map_id}":{"paths":{"clients":{"specs":{"get":{"description":"Get Site Clients Stats By Map","operationId":"getSiteClientsStatsByMap","tags":["Sites Stats"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/map_id"},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}]}},"discovered_assets":{"specs":{"get":{"description":"Get a list of BLE beacons that we discovered (whether they’re defined as assets or not)","operationId":"getSiteDiscoveredAssetByMap","tags":["Sites Stats"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/map_id"}]}},"sdkclients":{"specs":{"get":{"description":"Get SdkClient Stats By Map","operationId":"getSiteSdkStatsByMap","tags":["Sites Stats"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/map_id"}]}},"unconnected_clients":{"specs":{"get":{"description":"Unconnected Client Location","operationId":"getSiteUnconnectedClientStats","tags":["Sites Stats"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/map_id"}]}}}}}},"mxedges":{"specs":{"get":{"description":"Get Site MxEdges Stats","operationId":"getSiteMxEdgesStats","tags":["Sites Devices Stats"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]},"paths":{"{mxedge_id}":{"specs":{"get":{"description":"Get One Site MxEdge Stats","operationId":"getSiteMxEdgeStats","tags":["Sites Devices Stats"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/mxedge_id"}]}}}},"ports":{"paths":{"count":{"specs":{"get":{"description":"Count by Distinct Attributes of Switch/Gateway Ports","operationId":"countSiteByDisctinctAttributesOPorts","parameters":[{"description":"port_id, port_mac, full_duplex, mac, neighbor_macneighbor_port_desc, neighbor_system_name, poe_disabled, poe_mode, poe_on, speed, up","in":"query","name":"distinct","schema":{"default":"mac","enum":["port_id","port_mac","full_duplex","mac","neighbor_mac","neighbor_port_desc","neighbor_system_name","poe_disabled","poe_mode","poe_on","speed","up"],"type":"string"}},{"description":"indicates full or half duplex","in":"query","name":"full_duplex","schema":{"type":"boolean"}},{"description":"device identifier","in":"query","name":"mac","schema":{"type":"string"}},{"description":"Chassis identifier of the chassis type listed","in":"query","name":"neighbor_mac","schema":{"type":"string"}},{"description":"Description supplied by the system on the interface E.g. “GigabitEthernet2/0/39”","in":"query","name":"neighbor_port_desc","schema":{"type":"string"}},{"description":"Name supplied by the system on the interface E.g. neighbor system name E.g. “Kumar-Acc-SW.mist.local”","in":"query","name":"neighbor_system_name","schema":{"type":"string"}},{"description":"is the POE configured not be disabled.","in":"query","name":"poe_disabled","schema":{"type":"boolean"}},{"description":"poe mode depending on class E.g. “802.3at”","in":"query","name":"poe_mode","schema":{"type":"string"}},{"description":"is the device attached to POE","in":"query","name":"poe_on","schema":{"type":"boolean"}},{"description":"interface name","in":"query","name":"port_id","schema":{"type":"string"}},{"description":"interface mac address","in":"query","name":"port_mac","schema":{"type":"string"}},{"description":"Amount of power being used by the interface at the time the command is executed. Unit in watts.","in":"query","name":"power_draw","schema":{"type":"number"}},{"description":"Output packets","in":"query","name":"tx_pkts","schema":{"type":"integer"}},{"description":"Input packets","in":"query","name":"rx_pkts","schema":{"type":"integer"}},{"description":"Input bytes","in":"query","name":"rx_bytes","schema":{"type":"integer"}},{"description":"Output rate","in":"query","name":"tx_bps","schema":{"type":"integer"}},{"description":"Input rate","in":"query","name":"rx_bps","schema":{"type":"integer"}},{"description":"Multicast output packets","in":"query","name":"tx_mcast_pkts","schema":{"type":"integer"}},{"description":"Broadcast output packets","in":"query","name":"tx_bcast_pkts","schema":{"type":"integer"}},{"description":"Multicast input packets","in":"query","name":"rx_mcast_pkts","schema":{"type":"integer"}},{"description":"Broadcast input packets","in":"query","name":"rx_bcast_pkts","schema":{"type":"integer"}},{"description":"port speed","in":"query","name":"speed","schema":{"type":"integer"}},{"description":"if `up`==`true`","in":"query","name":"stp_state","schema":{"enum":["forwarding","blocking","learning","listening","disabled"],"type":"string"}},{"description":"if `up`==`true`","in":"query","name":"stp_role","schema":{"enum":["designated","backup","alternate","root","root-prevented"],"type":"string"}},{"description":"if `up`==`true` && has Authenticator role","in":"query","name":"auth_state","schema":{"enum":["init","authenticated","authenticating","held"],"type":"string"}},{"description":"indicates if interface is up","in":"query","name":"up","schema":{"type":"boolean"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Devices Stats"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"search":{"specs":{"get":{"description":"Search Switch / Gateway Ports","operationId":"searchSiteSwOrGwPorts","parameters":[{"description":"indicates full or half duplex","in":"query","name":"full_duplex","schema":{"type":"boolean"}},{"description":"device identifier","in":"query","name":"mac","schema":{"type":"string"}},{"description":"Chassis identifier of the chassis type listed","in":"query","name":"neighbor_mac","schema":{"type":"string"}},{"description":"Description supplied by the system on the interface E.g. “GigabitEthernet2/0/39”","in":"query","name":"neighbor_port_desc","schema":{"type":"string"}},{"description":"Name supplied by the system on the interface E.g. neighbor system name E.g. “Kumar-Acc-SW.mist.local”","in":"query","name":"neighbor_system_name","schema":{"type":"string"}},{"description":"is the POE configured not be disabled.","in":"query","name":"poe_disabled","schema":{"type":"boolean"}},{"description":"poe mode depending on class E.g. “802.3at”","in":"query","name":"poe_mode","schema":{"type":"string"}},{"description":"is the device attached to POE","in":"query","name":"poe_on","schema":{"type":"boolean"}},{"description":"interface name","in":"query","name":"port_id","schema":{"type":"string"}},{"description":"interface mac address","in":"query","name":"port_mac","schema":{"type":"string"}},{"description":"Amount of power being used by the interface at the time the command is executed. Unit in watts.","in":"query","name":"power_draw","schema":{"type":"number"}},{"description":"Output packets","in":"query","name":"tx_pkts","schema":{"type":"integer"}},{"description":"Input packets","in":"query","name":"rx_pkts","schema":{"type":"integer"}},{"description":"Input bytes","in":"query","name":"rx_bytes","schema":{"type":"integer"}},{"description":"Output rate","in":"query","name":"tx_bps","schema":{"type":"integer"}},{"description":"Input rate","in":"query","name":"rx_bps","schema":{"type":"integer"}},{"description":"Output errors","in":"query","name":"tx_errors","schema":{"type":"integer"}},{"description":"Input errors","in":"query","name":"rx_errors","schema":{"type":"integer"}},{"description":"Multicast output packets","in":"query","name":"tx_mcast_pkts","schema":{"type":"integer"}},{"description":"Broadcast output packets","in":"query","name":"tx_bcast_pkts","schema":{"type":"integer"}},{"description":"Multicast input packets","in":"query","name":"rx_mcast_pkts","schema":{"type":"integer"}},{"description":"Broadcast input packets","in":"query","name":"rx_bcast_pkts","schema":{"type":"integer"}},{"description":"port speed","in":"query","name":"speed","schema":{"type":"integer"}},{"description":"Limit on number of dynamically learned macs","in":"query","name":"mac_limit","schema":{"type":"integer"}},{"description":"Number of mac addresses in the forwarding table","in":"query","name":"mac_count","schema":{"type":"integer"}},{"description":"indicates if interface is up","in":"query","name":"up","schema":{"type":"boolean"}},{"description":"if `up`==`true`","in":"query","name":"stp_state","schema":{"enum":["forwarding","blocking","learning","listening","disabled"],"type":"string"}},{"description":"if `up`==`true`","in":"query","name":"stp_role","schema":{"enum":["designated","backup","alternate","root","root-prevented"],"type":"string"}},{"description":"if `up`==`true` && has Authenticator role","in":"query","name":"auth_state","schema":{"enum":["init","authenticated","authenticating","held"],"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Devices Stats"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}}}},"sdkclients":{"paths":{"{sdkclient_id}":{"specs":{"get":{"description":"Get Detail Stats of a SdkClient","operationId":"getSiteSdkStats","tags":["Sites Stats"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/sdkclient_id"}]}}}},"switch_ports":{"paths":{"count":{"specs":{"get":{"description":"Count by Distinct Attributes of Switch/Gateway Ports","operationId":"countSiteByDisctinctAttributesOfSwitchPorts","parameters":[{"description":"port_id, port_mac, full_duplex, mac, neighbor_macneighbor_port_desc, neighbor_system_name, poe_disabled, poe_mode, poe_on, speed, up","in":"query","name":"distinct","schema":{"default":"mac","enum":["port_id","port_mac","full_duplex","mac","neighbor_mac","neighbor_port_desc","neighbor_system_name","poe_disabled","poe_mode","poe_on","speed","up"],"type":"string"}},{"description":"indicates full or half duplex","in":"query","name":"full_duplex","schema":{"type":"boolean"}},{"description":"device identifier","in":"query","name":"mac","schema":{"type":"string"}},{"description":"Chassis identifier of the chassis type listed","in":"query","name":"neighbor_mac","schema":{"type":"string"}},{"description":"Description supplied by the system on the interface E.g. “GigabitEthernet2/0/39”","in":"query","name":"neighbor_port_desc","schema":{"type":"string"}},{"description":"Name supplied by the system on the interface E.g. neighbor system name E.g. “Kumar-Acc-SW.mist.local”","in":"query","name":"neighbor_system_name","schema":{"type":"string"}},{"description":"is the POE configured not be disabled.","in":"query","name":"poe_disabled","schema":{"type":"boolean"}},{"description":"poe mode depending on class E.g. “802.3at”","in":"query","name":"poe_mode","schema":{"type":"string"}},{"description":"is the device attached to POE","in":"query","name":"poe_on","schema":{"type":"boolean"}},{"description":"interface name","in":"query","name":"port_id","schema":{"type":"string"}},{"description":"interface mac address","in":"query","name":"port_mac","schema":{"type":"string"}},{"description":"Amount of power being used by the interface at the time the command is executed. Unit in watts.","in":"query","name":"power_draw","schema":{"type":"number"}},{"description":"Output packets","in":"query","name":"tx_pkts","schema":{"type":"integer"}},{"description":"Input packets","in":"query","name":"rx_pkts","schema":{"type":"integer"}},{"description":"Input bytes","in":"query","name":"rx_bytes","schema":{"type":"integer"}},{"description":"Output rate","in":"query","name":"tx_bps","schema":{"type":"integer"}},{"description":"Input rate","in":"query","name":"rx_bps","schema":{"type":"integer"}},{"description":"Multicast output packets","in":"query","name":"tx_mcast_pkts","schema":{"type":"integer"}},{"description":"Broadcast output packets","in":"query","name":"tx_bcast_pkts","schema":{"type":"integer"}},{"description":"Multicast input packets","in":"query","name":"rx_mcast_pkts","schema":{"type":"integer"}},{"description":"Broadcast input packets","in":"query","name":"rx_bcast_pkts","schema":{"type":"integer"}},{"description":"port speed","in":"query","name":"speed","schema":{"type":"integer"}},{"description":"if `up`==`true`","in":"query","name":"stp_state","schema":{"enum":["forwarding","blocking","learning","listening","disabled"],"type":"string"}},{"description":"if `up`==`true`","in":"query","name":"stp_role","schema":{"enum":["designated","backup","alternate","root","root-prevented"],"type":"string"}},{"description":"if `up`==`true`","in":"query","name":"auth_state","schema":{"enum":["init","authenticated","authenticating","held"],"type":"string"}},{"description":"indicates if interface is up","in":"query","name":"up","schema":{"type":"boolean"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Devices Stats"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"search":{"specs":{"get":{"description":"Search Switch / Gateway Ports","operationId":"searchSiteSwitchPorts","parameters":[{"description":"indicates full or half duplex","in":"query","name":"full_duplex","schema":{"type":"boolean"}},{"description":"device identifier","in":"query","name":"mac","schema":{"type":"string"}},{"description":"Chassis identifier of the chassis type listed","in":"query","name":"neighbor_mac","schema":{"type":"string"}},{"description":"Description supplied by the system on the interface E.g. “GigabitEthernet2/0/39”","in":"query","name":"neighbor_port_desc","schema":{"type":"string"}},{"description":"Name supplied by the system on the interface E.g. neighbor system name E.g. “Kumar-Acc-SW.mist.local”","in":"query","name":"neighbor_system_name","schema":{"type":"string"}},{"description":"is the POE configured not be disabled.","in":"query","name":"poe_disabled","schema":{"type":"boolean"}},{"description":"poe mode depending on class E.g. “802.3at”","in":"query","name":"poe_mode","schema":{"type":"string"}},{"description":"is the device attached to POE","in":"query","name":"poe_on","schema":{"type":"boolean"}},{"description":"interface name","in":"query","name":"port_id","schema":{"type":"string"}},{"description":"interface mac address","in":"query","name":"port_mac","schema":{"type":"string"}},{"description":"Amount of power being used by the interface at the time the command is executed. Unit in watts.","in":"query","name":"power_draw","schema":{"type":"number"}},{"description":"Output packets","in":"query","name":"tx_pkts","schema":{"type":"integer"}},{"description":"Input packets","in":"query","name":"rx_pkts","schema":{"type":"integer"}},{"description":"Input bytes","in":"query","name":"rx_bytes","schema":{"type":"integer"}},{"description":"Output rate","in":"query","name":"tx_bps","schema":{"type":"integer"}},{"description":"Input rate","in":"query","name":"rx_bps","schema":{"type":"integer"}},{"description":"Multicast output packets","in":"query","name":"tx_mcast_pkts","schema":{"type":"integer"}},{"description":"Broadcast output packets","in":"query","name":"tx_bcast_pkts","schema":{"type":"integer"}},{"description":"Multicast input packets","in":"query","name":"rx_mcast_pkts","schema":{"type":"integer"}},{"description":"Broadcast input packets","in":"query","name":"rx_bcast_pkts","schema":{"type":"integer"}},{"description":"port speed","in":"query","name":"speed","schema":{"type":"integer"}},{"description":"if `up`==`true`","in":"query","name":"stp_state","schema":{"enum":["forwarding","blocking","learning","listening","disabled"],"type":"string"}},{"description":"if `up`==`true`","in":"query","name":"stp_role","schema":{"enum":["designated","backup","alternate","root","root-prevented"],"type":"string"}},{"description":"if `up`==`true` && has Authenticator role","in":"query","name":"auth_state","schema":{"enum":["init","authenticated","authenticating","held"],"type":"string"}},{"description":"indicates if interface is up","in":"query","name":"up","schema":{"type":"boolean"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Devices Stats"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}}}},"wxrules":{"specs":{"get":{"description":"Get Wxlan Rule usage","operationId":"getSiteWxRulesUsage","tags":["Sites Stats"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"zones":{"specs":{"get":{"description":"Get Zones Stats","operationId":"getSiteZonesStats","parameters":[{"example":"00000000-0000-0000-0000-000000000000","in":"query","name":"map_id","schema":{"type":"string"}}],"tags":["Sites Stats"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"{zone_type}":{"paths":{"{zone_id}":{"specs":{"get":{"description":"Get Detail Zone Stats","operationId":"getSiteZoneStats","tags":["Sites Stats"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/zone_type"},{"$ref":"#/components/parameters/zone_id"}]}}}}}},"subscriptions":{"specs":{"delete":{"description":"Unsubscribe to Site Alarms","operationId":"UnsubscribeSite","tags":["Sites Subscriptions"]},"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"Subscribe to Site Alarms","operationId":"SubscribeSite","tags":["Sites Subscriptions"]}}},"uisettings":{"specs":{"get":{"description":"CURD site UI settings","operationId":"getSiteCurdSettings","tags":["Sites UI Settings"]},"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"CURD site UI settings","operationId":"createSiteCurdSettings","tags":["Sites UI Settings"]}},"paths":{"derived":{"specs":{"get":{"description":"Get both site UI settings(for_site=true) and org UI settings (for_site=false)","operationId":"getSiteDerivedCurdSetting","tags":["Sites UI Settings"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"{uisetting_id}":{"specs":{"delete":{"description":"CURD site UI settings","operationId":"deleteSiteCurdSetting","tags":["Sites UI Settings"]},"get":{"description":"CURD site UI settings","operationId":"getSiteCurdSetting","tags":["Sites UI Settings"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/uisetting_id"}],"post":{"description":"CURD site UI settings","operationId":"updateSiteCurdSetting","tags":["Sites UI Settings"]}}}}},"vbeacons":{"specs":{"get":{"description":"Get Site Virtual Beacons","operationId":"getSiteVBeacons","tags":["Sites vBeacons"]},"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"Create Virtual Beacon","operationId":"createSiteVBeacon","tags":["Sites vBeacons"]}},"paths":{"{vbeacon_id}":{"specs":{"delete":{"description":"Delete Site Virtual Beacon","operationId":"deleteSiteVBeacon","tags":["Sites vBeacons"]},"get":{"description":"Get Site Virtual Beacon Details","operationId":"getSiteVBeacon","tags":["Sites vBeacons"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/vbeacon_id"}],"put":{"description":"Update Site Virtual Beacon","operationId":"updateSiteVBeacon","tags":["Sites vBeacons"]}}}}},"webhooks":{"specs":{"get":{"description":"Get Site Webhooks","operationId":"getSiteWebhooks","tags":["Sites Webhooks"]},"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"Create Site Webhook","operationId":"createSiteWebhook","tags":["Sites Webhooks"]}},"paths":{"{webhook_id}":{"specs":{"delete":{"description":"Delete Site Webhook","operationId":"deleteSiteWebhook","tags":["Sites Webhooks"]},"get":{"description":"Get Site Webhook Details","operationId":"getSiteWebhook","tags":["Sites Webhooks"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/webhook_id"}],"put":{"description":"Update Site Webhook","operationId":"updateSiteWebhook","tags":["Sites Webhooks"]}},"paths":{"ping":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/webhook_id"}],"post":{"description":"send a Ping event to the webhook","operationId":"pingSiteWebhook","tags":["Sites Webhooks"]}}}}}}},"wired_clients":{"paths":{"count":{"specs":{"get":{"description":"Count by Distinct Attributes of Clients","operationId":"countSiteWiredClients","parameters":[{"in":"query","name":"distinct","schema":{"default":"mac","enum":["port_id","vlan","mac"],"type":"string"}},{"description":"client mac","in":"query","name":"mac","schema":{"type":"string"}},{"description":"device mac","in":"query","name":"device_mac","schema":{"type":"string"}},{"description":"port id","in":"query","name":"port_id","schema":{"type":"string"}},{"description":"vlan","in":"query","name":"vlan","schema":{"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Wired Clients"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"search":{"specs":{"get":{"description":"Search Wired Clients","operationId":"searchSiteWiredClients","parameters":[{"description":"client mac","in":"query","name":"mac","schema":{"type":"string"}},{"$ref":"#/components/parameters/ip"},{"description":"device mac","in":"query","name":"device_mac","schema":{"type":"string"}},{"description":"port id","in":"query","name":"port_id","schema":{"type":"string"}},{"description":"vlan","in":"query","name":"vlan","schema":{"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Wired Clients"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}}}},"wlans":{"specs":{"get":{"description":"Get Site WLANs","operationId":"getSiteWlans","tags":["Sites Wlans"]},"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"Create Site WLAN","operationId":"createSiteWlan","tags":["Sites Wlans"]}},"paths":{"derived":{"specs":{"get":{"description":"Get Wlans Derived","operationId":"getSiteWlanDerived","parameters":[{"description":"whether to resolve SITE_VARS","example":true,"in":"query","name":"resolve","schema":{"default":false,"type":"boolean"}}],"tags":["Sites Wlans"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"{wlan_id}":{"specs":{"delete":{"description":"Delete Site WLAN","operationId":"deleteSiteWlan","tags":["Sites Wlans"]},"get":{"description":"Get Site WLAN","operationId":"getSiteWlan","tags":["Sites Wlans"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/wlan_id"}],"put":{"description":"Update Site WLAN","operationId":"updateSiteWlan","tags":["Sites Wlans"]}},"paths":{"portal_image":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/wlan_id"}],"post":{"description":"Wlan Portal Image Upload","operationId":"uploadSiteWlanPortalImage","tags":["Sites Wlans"]}}},"portal_template":{"specs":{"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/wlan_id"}],"put":{"description":"Update a Portal Template","operationId":"updateSiteWlanPortalTemplate","tags":["Sites Wlans"]}}}}}}},"wxrules":{"specs":{"get":{"description":"Get Site WxLan Rules","operationId":"getSiteWxRules","tags":["Sites WxRules"]},"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"Create Site WxLan Rule","operationId":"createSiteWxRule","tags":["Sites WxRules"]}},"paths":{"derived":{"specs":{"get":{"description":"Get Site WxLan Rule Derived","operationId":"getSiteWxRulesDerived","tags":["Sites WxRules"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"{wxrules_id}":{"specs":{"delete":{"description":"Delete Site WxLan Rule","operationId":"deleteSiteWxRule","tags":["Sites WxRules"]},"get":{"description":"Get Site WxLan Rule Details","operationId":"getSiteWxRule","tags":["Sites WxRules"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/wxrules_id"}],"put":{"description":"Update Site WxLan Rule","operationId":"updateSiteWxRule","tags":["Sites WxRules"]}}}}},"wxtags":{"specs":{"get":{"description":"Get Site WxTags","operationId":"getSiteWxTags","tags":["Sites WxTags"]},"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"Create Site WxTag","operationId":"createSiteWxTag","tags":["Sites WxTags"]}},"paths":{"apps":{"specs":{"get":{"description":"Get Application List","operationId":"getSiteApplicationList","tags":["Sites WxTags"]},"parameters":[{"$ref":"#/components/parameters/site_id"}]}},"{wxtag_id}":{"specs":{"delete":{"description":"Delete Site WxTag","operationId":"deleteSiteWxTag","tags":["Sites WxTags"]},"get":{"description":"Get Site WxTag Details","operationId":"getSiteWxTag","tags":["Sites WxTags"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/wxtag_id"}],"put":{"description":"Update Site WxTag","operationId":"updateSiteWxTag","tags":["Sites WxTags"]}},"paths":{"clients":{"specs":{"get":{"description":"Get Current Matching Clients of a WXLAN Tag","operationId":"getSiteCurrentMatchingClientsOfAWxTag","tags":["Sites WxTags"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/wxtag_id"}]}}}}}},"wxtunnels":{"specs":{"get":{"description":"Get Site WxLan Tunnels","operationId":"getSiteWxTunnels","tags":["Sites WxTunnels"]},"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"Create Site WxLan Tunnel","operationId":"createSiteWxTunnel","tags":["Sites WxTunnels"]}},"paths":{"{wxtunnel_id}":{"specs":{"delete":{"description":"Delete Site WxLan Tunnel","operationId":"deleteSiteWxTunnel","tags":["Sites WxTunnels"]},"get":{"description":"Get Site WxLan tunnel Details","operationId":"getSiteWxTunnel","tags":["Sites WxTunnels"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/wxtunnel_id"}],"put":{"description":"Update Site WxLan Tunnel","operationId":"updateSiteWxTunnel","tags":["Sites WxTunnels"]}}}}},"zones":{"specs":{"get":{"description":"Get Site Zones","operationId":"getSiteZones","tags":["Sites Zones"]},"parameters":[{"$ref":"#/components/parameters/site_id"}],"post":{"description":"Create Site Zone ","operationId":"createSiteZone","tags":["Sites Zones"]}},"paths":{"{zone_id}":{"specs":{"delete":{"description":"Delete Site Zone","operationId":"deleteSiteZone","tags":["Sites Zones"]},"get":{"description":"Get Site Zone Details","operationId":"getSiteZone","tags":["Sites Zones"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/zone_id"}],"put":{"description":"Update Site Zone","operationId":"updateSiteZone","tags":["Sites Zones"]}}}}},"{zone_type}":{"paths":{"count":{"specs":{"get":{"description":"Count Site Zone Sessions","operationId":"countSiteZoneSessions","parameters":[{"example":"scope_id","in":"query","name":"distinct","schema":{"default":"scope_id","enum":["user_type","user","scope_id","scope"],"type":"string"}},{"description":"user type","in":"query","name":"user_type","schema":{"default":"client","enum":["client","sdkclient","asset"],"type":"string"}},{"description":"client MAC / Asset MAC / SDK UUID","in":"query","name":"user","schema":{"type":"string"}},{"description":"if `scope`==`map`/`zone`/`rssizone`, the scope id","in":"query","name":"scope_id","schema":{"type":"string"}},{"description":"scope","in":"query","name":"scope","schema":{"default":"site","enum":["site","map","zone","rssizone"],"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Zones"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/zone_type"}]}},"visits":{"paths":{"search":{"specs":{"get":{"description":"Search Zone Sessions","operationId":"searchSiteZoneSessions","parameters":[{"description":"user type, client (default) / sdkclient / asset","in":"query","name":"user_type","schema":{"default":"client","enum":["client","sdkclient","asset"],"type":"string"}},{"description":"client MAC / Asset MAC / SDK UUID","in":"query","name":"user","schema":{"type":"string"}},{"description":"if `scope`==`map`/`zone`/`rssizone`, the scope id","in":"query","name":"scope_id","schema":{"type":"string"}},{"description":"scope","in":"query","name":"scope","schema":{"default":"site","enum":["site","map","zone","rssizone"],"type":"string"}},{"$ref":"#/components/parameters/page"},{"$ref":"#/components/parameters/limit"},{"$ref":"#/components/parameters/start"},{"$ref":"#/components/parameters/end"},{"$ref":"#/components/parameters/duration"}],"tags":["Sites Zones"]},"parameters":[{"$ref":"#/components/parameters/site_id"},{"$ref":"#/components/parameters/zone_type"}]}}}}}}}}}},"utils":{"paths":{"test_twilio":{"specs":{"post":{"description":"Allows validation of twilio setup\\nIn case of success, a text message confirming successful setup should be received. In case of error, twilio error code and message are returned.","operationId":"testSiteWlanTwilioSetup","tags":["Sites"]}}}}}}}}},"sites":{"paths":{"{site_id}":{"paths":{"devices":{"paths":{"{device_mac}":{"paths":{"synthetic_test":{"specs":{"parameters":[{"in":"path","name":"site_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},{"in":"path","name":"device_mac","required":true,"schema":{"example":"0000000000ab","pattern":"^[0-9a-fA-F]{12}$","type":"string"}}],"post":{"tags":["Sites Devices Utilities"],"operationId":"startSiteDeviceSyntheticTest","description":"start Site Device Synthetic Test"},"get":{"tags":["Sites Devices Utilities"],"operationId":"getSiteDeviceSyntheticTest","description":"get Site Device Synthetic Test result"}}}}}}}}}}},"webhook_example":{"paths":{"_alarm_":{"specs":{"post":{"description":"Webhook sample for `alarm` topic\\n\\n**Note**: The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages","operationId":"alarms","tags":["Webhook Samples"]},"parameters":[]}},"_asset_raw_":{"specs":{"post":{"description":"Webhook sample for `asset_raw` topic\\n\\n**Note**: The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages\\n","operationId":"assetRaw","tags":["Webhook Samples"]},"parameters":[]}},"_audit_":{"specs":{"post":{"description":"Webhook sample for `audit` topic\\n\\n**Note**: The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages\\n","operationId":"audits","tags":["Webhook Samples"]},"parameters":[]}},"_client_join_":{"specs":{"post":{"description":"Webhook sample for `client_join` topic\\n\\n**Note**: The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages\\n","operationId":"clientJoin","tags":["Webhook Samples"]},"parameters":[]}},"_client_sessions_":{"specs":{"post":{"description":"Webhook sample for `client_sessions` topic\\n\\n**Note**: The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages\\n","operationId":"clientSessions","tags":["Webhook Samples"]},"parameters":[]}},"_device_events_":{"specs":{"post":{"description":"Webhook sample for `device_events` topic\\n\\n**Note**: The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages\\n","operationId":"deviceEvents","tags":["Webhook Samples"]},"parameters":[]}},"_device_updowns_":{"specs":{"post":{"description":"Webhook sample for `device_updowns` topic\\n\\n**Note**: The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages\\n","operationId":"deviceUpDown","tags":["Webhook Samples"]},"parameters":[]}},"_location_":{"specs":{"post":{"description":"Webhook sample for `location` topic\\n\\n**Note**: The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages\\n","operationId":"location","tags":["Webhook Samples"]},"parameters":[]}},"_occupancy_alerts_":{"specs":{"post":{"description":"Webhook sample for `occupancy_alerts` topic\\n\\n**Note**: The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages\\n","operationId":"occupancyAlerts","tags":["Webhook Samples"]},"parameters":[]}},"_ping_":{"specs":{"post":{"description":"Webhook sample for `ping` topic\\n\\n**Note**: The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages\\n","operationId":"ping","tags":["Webhook Samples"]},"parameters":[]}},"_sdkclient_scan_data":{"specs":{"parameters":[],"post":{"description":"Webhook sample for `sdkclient_scan_data` topic\\n\\n**Note**: The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages\\n","operationId":"sdkclientScanData","tags":["Webhook Samples"]}}},"_zone_":{"specs":{"post":{"description":"Webhook sample for `zone` topic\\n\\n**Note**: The server host will be your own server FQDN where the Mist Cloud is sending the webhook messages\\n","operationId":"zone","tags":["Webhook Samples"]},"parameters":[]}}}}},"components":{"parameters":{"admin_id":{"in":"path","name":"admin_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"alarm_id":{"in":"path","name":"alarm_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"alarmtemplate_id":{"in":"path","name":"alarmtemplate_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"apitoken_id":{"in":"path","name":"apitoken_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"aptemplate_id":{"in":"path","name":"aptemplate_id","required":true,"schema":{"format":"uuid","type":"string"}},"asset_id":{"in":"path","name":"asset_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"assetfilter_id":{"in":"path","name":"assetfilter_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"beacon_id":{"in":"path","name":"beacon_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"client_mac":{"in":"path","name":"client_mac","required":true,"schema":{"example":"0000000000ab","pattern":"^[0-9a-fA-F]{12}$","type":"string"}},"country_code":{"description":"country code, in two-character","in":"query","name":"country_code","required":true,"schema":{"example":"US","pattern":"^[a-zA-Z]{2}$","type":"string"}},"device_id":{"in":"path","name":"device_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"device_mac":{"in":"path","name":"device_mac","required":true,"schema":{"example":"0000000000ab","pattern":"^[0-9a-fA-F]{12}$","type":"string"}},"deviceprofile_id":{"in":"path","name":"deviceprofile_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"duration":{"in":"query","name":"duration","required":false,"schema":{"default":"1d","enum":["1d","1h","10m"],"type":"string"}},"end":{"in":"query","name":"end","schema":{"default":0,"minimum":0,"type":"integer"}},"evpn_topology_id":{"in":"path","name":"evpn_topology_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"gatewaytemplate_id":{"in":"path","name":"gatewaytemplate_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"guest_mac":{"in":"path","name":"guest_mac","required":true,"schema":{"example":"0000000000ab","pattern":"^[0-9a-fA-F]{12}$","type":"string"}},"image_name":{"in":"path","name":"image_name","required":true,"schema":{"type":"string"}},"invite_id":{"in":"path","name":"invite_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"ip":{"in":"query","name":"ip address","required":false,"schema":{"format":"ipv4","type":"string","example":"192.168.1.1"}},"limit":{"in":"query","name":"limit","required":false,"schema":{"default":100,"minimum":0,"type":"integer"}},"map_id":{"in":"path","name":"map_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"metric":{"in":"path","name":"metric","required":true,"schema":{"type":"string"}},"msp_id":{"in":"path","name":"msp_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"mxcluster_id":{"in":"path","name":"mxcluster_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"mxedge_id":{"in":"path","name":"mxedge_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"mxtunnel_id":{"in":"path","name":"mxtunnel_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"nacrule_id":{"in":"path","name":"nacrule_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"nactag_id":{"in":"path","name":"nactag_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"name":{"in":"query","name":"name","required":false,"schema":{"default":"","type":"string"}},"network_id":{"in":"path","name":"network_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"networktemplate_id":{"in":"path","name":"networktemplate_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"org_id":{"in":"path","name":"org_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"orggroup_id":{"in":"path","name":"orggroup_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"page":{"in":"query","name":"page","required":false,"schema":{"default":1,"minimum":1,"type":"integer"}},"psk_id":{"description":"PSK ID","in":"path","name":"psk_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"psk_id_query":{"description":"PSK ID","in":"query","name":"psk_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"psk_name":{"description":"PSK name","in":"query","name":"psk_name","required":true,"schema":{"default":"","type":"string"}},"pskportal_id":{"in":"path","name":"pskportal_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"q":{"description":"search string","in":"query","name":"q","required":true,"schema":{"default":"","example":"search","type":"string"}},"resolution":{"in":"query","name":"resolution","required":true,"schema":{"default":"default","enum":["default","fine"],"type":"string"}},"rfdiag_id":{"in":"path","name":"rfdiag_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"rftemplate_id":{"in":"path","name":"rftemplate_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"rogue_bssid":{"in":"path","name":"rogue_bssid","required":true,"schema":{"example":"0000000000ab","pattern":"^[0-9a-fA-F]{12}$","type":"string"}},"rogue_type":{"in":"query","name":"type","schema":{"enum":["honeypot","lan","others","spoof"],"type":"string"}},"rssizone_id":{"in":"path","name":"rssizone_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"sdkclient_id":{"in":"path","name":"sdkclient_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"sdkinvite_id":{"in":"path","name":"sdkinvite_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"sdktemplate_id":{"in":"path","name":"sdktemplate_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"secpolicy_id":{"in":"path","name":"secpolicy_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"secret":{"in":"path","name":"secret","required":true,"schema":{"type":"string"}},"service_id":{"in":"path","name":"service_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"servicepolicy_id":{"in":"path","name":"servicepolicy_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"site_id":{"in":"path","name":"site_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"site_name":{"in":"path","name":"site_name","required":true,"schema":{"type":"string"}},"sitegroup_id":{"in":"path","name":"sitegroup_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"sso_id":{"in":"path","name":"sso_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"ssorole_id":{"in":"path","name":"ssorole_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"start":{"in":"query","name":"start","schema":{"default":0,"minimum":0,"type":"integer"}},"template_id":{"in":"path","name":"template_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"ticket_id":{"in":"path","name":"ticket_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"token":{"in":"path","name":"token","required":true,"schema":{"type":"string"}},"uisetting_id":{"in":"path","name":"uisetting_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"upgrade_id":{"in":"path","name":"upgrade_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"vbeacon_id":{"in":"path","name":"vbeacon_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"vpn_id":{"in":"path","name":"vpn_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"webhook_id":{"in":"path","name":"webhook_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"wlan_id":{"in":"path","name":"wlan_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"wxrules_id":{"in":"path","name":"wxrules_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"wxtag_id":{"in":"path","name":"wxtag_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"wxtunnel_id":{"in":"path","name":"wxtunnel_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"zone_id":{"in":"path","name":"zone_id","required":true,"schema":{"example":"000000ab-00ab-00ab-00ab-0000000000ab","format":"uuid","type":"string"}},"zone_type":{"in":"path","name":"zone_type","required":true,"schema":{"enum":["zones","rssizones"],"type":"string"}}}}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map