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
exports.ApiDjangoComponent = void 0;
var core_1 = require("@angular/core");
var tab_url_provider_1 = require("../../../providers/tab-url.provider");
var api_json_1 = require("./../../../../assets/api.json");
var ApiDjangoComponent = /** @class */ (function () {
    function ApiDjangoComponent(tabUrl, _cd) {
        this.tabUrl = tabUrl;
        this._cd = _cd;
        this.mist_url = "";
        this.quick_links = [];
        this.path_params = [];
        this.query_params = [];
        this.docs = {
            "get": null,
            "post": null,
            "put": null,
            "delete": null
        };
        this.hosts = [
            "api.mist.com",
            "api.eu.mist.com",
            "api.gc1.mist.com",
            "api.gc2.mist.com",
            "api.ac2.mist.com"
        ];
        this.doc_link = "https://doc.mist-lab.fr";
    }
    ApiDjangoComponent.prototype.ngOnInit = function () {
        var url = this.tabUrl.split("?");
        var path = url[0].split("/");
        var query = url[1];
        var path_part = path.splice(3, path.length);
        this.processPath(path_part, query);
    };
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    // PÄTH FUNCTIONS
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ApiDjangoComponent.prototype.processPath = function (path_part, query) {
        var _this = this;
        var tmp = api_json_1["default"];
        path_part.forEach(function (next_path) {
            if ("paths" in tmp && next_path in tmp.paths) {
                tmp = tmp.paths[next_path];
            }
            else if ("paths" in tmp) {
                var data = void 0;
                for (var _i = 0, _a = Object.entries(tmp.paths); _i < _a.length; _i++) {
                    var _b = _a[_i], key = _b[0], val = _b[1];
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
            ["get", "post", "put", "delete"].forEach(function (method) {
                if (tmp["specs"][method]) {
                    _this.docs[method] = {
                        operationId: tmp["specs"][method]["operationId"]
                    };
                }
            });
            if (this.docs["get"]) {
                this.processQuery(query, tmp["specs"]["get"]["parameters"]);
            }
        }
    };
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    // QUERY FUNCTIONS
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ApiDjangoComponent.prototype.processQuery = function (query, specs) {
        var _this = this;
        var query_key_value = {};
        if (query) {
            var query_parts = query.split("&");
            query_parts.forEach(function (part) {
                var splitted_part = part.split("=");
                query_key_value[splitted_part[0]] = splitted_part[1];
            });
        }
        if (specs) {
            specs.forEach(function (spec) {
                var data = {};
                if ("in" in spec && spec["in"] == "query")
                    data = spec;
                else if ("$ref" in spec && spec["$ref"]) {
                    var ref_parts = spec["$ref"].split("/");
                    data = api_json_1["default"][ref_parts[1]][ref_parts[2]][ref_parts[3]];
                }
                data["value"] = query_key_value[data["name"]];
                _this.query_params.push(data);
            });
        }
    };
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    // OTHER FUNCTIONS
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ApiDjangoComponent.prototype.updateUrl = function () {
        var url = this.tabUrl.split("?")[0];
        var query = [];
        this.query_params.forEach(function (param) {
            if (param.value != undefined)
                query.push(param.name + "=" + param.value);
        });
        if (query.length > 0)
            url = url + "?" + query.join("&");
        chrome.tabs.update(undefined, { url: url });
    };
    // open a new tab with the url passed in parameter
    ApiDjangoComponent.prototype.openApiTab = function (url) {
        chrome.tabs.create({ url: url });
    };
    ApiDjangoComponent.prototype.openDoc = function (operation) {
        chrome.tabs.create({ url: this.doc_link + "/#operation/" + operation });
    };
    ApiDjangoComponent = __decorate([
        core_1.Component({
            selector: 'app-api-django',
            templateUrl: 'django.component.html',
            styleUrls: ['api.django.component.scss', '../api.component.scss', '../../../app.component.scss'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __param(0, core_1.Inject(tab_url_provider_1.TAB_URL))
    ], ApiDjangoComponent);
    return ApiDjangoComponent;
}());
exports.ApiDjangoComponent = ApiDjangoComponent;
