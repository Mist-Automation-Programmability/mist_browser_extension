"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApiDjangoComponent = void 0;
var core_1 = require("@angular/core");
var api_structure = require('../../../../assets/api.json');
var ApiDjangoComponent = /** @class */ (function () {
    function ApiDjangoComponent(_cd, _browser) {
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
            "delete": undefined
        };
    }
    ApiDjangoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hosts = this._browser.getHostApi();
        this._browser.getUrl.then(function (tabUrl) {
            _this.tabUrl = tabUrl.split("?");
            var path = _this.tabUrl[0].split("/");
            var query = _this.tabUrl[1];
            var path_part = path.splice(3, path.length);
            _this.processPath(path_part, query);
        });
    };
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    // PÄTH FUNCTIONS
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ApiDjangoComponent.prototype.processPath = function (path_part, query) {
        var _this = this;
        var tmp = api_structure;
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
                var data = { name: "", value: "", description: "", schema: undefined };
                if ("in" in spec && spec["in"] == "query")
                    data = spec;
                else if ("$ref" in spec && spec["$ref"]) {
                    var ref_parts = spec["$ref"].split("/");
                    data = api_structure[ref_parts[1]][ref_parts[2]][ref_parts[3]];
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
        this._browser.tabUpdate(url);
    };
    // open a new tab with the url passed in parameter
    ApiDjangoComponent.prototype.openApiTab = function (url) {
        this._browser.tabOpen(url);
    };
    ApiDjangoComponent.prototype.openDoc = function (operation) {
        this._browser.tabOpenDoc(operation);
    };
    ApiDjangoComponent = __decorate([
        core_1.Component({
            selector: 'app-api-django',
            templateUrl: 'django.component.html',
            styleUrls: ['api.django.component.scss', '../api.component.scss', '../../../app.component.scss']
        })
    ], ApiDjangoComponent);
    return ApiDjangoComponent;
}());
exports.ApiDjangoComponent = ApiDjangoComponent;
