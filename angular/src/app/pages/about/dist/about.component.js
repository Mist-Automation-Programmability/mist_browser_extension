"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AboutComponent = void 0;
var core_1 = require("@angular/core");
var AboutComponent = /** @class */ (function () {
    function AboutComponent(_http) {
        this._http = _http;
        this.github_release_url = "https://api.github.com/repos/tmunzer/mist_chrome_extension/releases/latest";
        this.github_repo_url = "https://github.com/tmunzer/mist_chrome_extension";
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.current_version = chrome.runtime.getManifest().version;
    };
    AboutComponent.prototype.checkNewRelease = function () {
        var _this = this;
        this.up_to_date = undefined;
        this.download_url = undefined;
        this.error_happened = undefined;
        this.error_message = undefined;
        this._http.get(this.github_release_url).subscribe(function (data) {
            _this.last_version = data.name;
            console.log(_this.current_version, _this.last_version);
            console.log(_this.current_version < _this.last_version);
            if (_this.current_version < _this.last_version) {
                _this.up_to_date = false;
                _this.html_url = data.html_url;
                data.assets.forEach(function (element) {
                    if (element.name == "extension-build.zip") {
                        _this.download_url = element.browser_download_url;
                    }
                });
            }
            else {
                _this.up_to_date = true;
            }
        }, function (error) {
            _this.error_happened = true;
            _this.error_message = "unable to fetch data from the server";
            console.log(error);
        });
    };
    AboutComponent.prototype.openTab = function (target) {
        var dest_url = "";
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
            chrome.tabs.create({ url: dest_url });
        }
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'app-about',
            templateUrl: 'about.component.html',
            styleUrls: ['about.component.scss']
        })
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
