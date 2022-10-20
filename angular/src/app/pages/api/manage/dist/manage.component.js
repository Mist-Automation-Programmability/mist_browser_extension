"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApiManageComponent = void 0;
var core_1 = require("@angular/core");
var ApiManageComponent = /** @class */ (function () {
    function ApiManageComponent(_cd, _browser) {
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
    ApiManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._browser.getUrl.then(function (tabUrl) {
            _this.tabUrl = tabUrl;
            _this.generateApiUrl();
        });
    };
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    // API URL ENTRYPOINT
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    // API URL ENTRYPOINT
    ApiManageComponent.prototype.generateApiUrl = function () {
        var orgsle_re = /https:\/\/(manage|integration)\.(?<host>[a-z0-9.]*(mist|mistsys)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!dashboard\/(?<scope>siteComparison|wiredSiteComparison|wanSiteComparison)\/(?<sle>[a-z-]*)\/(?<worstsle>[a-z-]*)\/([a-z-_]*)\/(?<period>[0-9a-z-]*)\/(?<start>[0-9]*)\/(?<stop>[0-9]*)/iys;
        var sle_re = /https:\/\/(manage|integration)\.(?<host>[a-z0-9.]*(mist|mistsys)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!dashboard\/(?<detail>serviceLevels|wiredserviceLevels|wanserviceLevels)\/(?<scope>[a-z-]*)\/(?<scope_id>[a-f0-9-]*)\/(?<period>[0-9a-z-]*)\/(?<start>[0-9]*)\/(?<stop>[0-9]*)\/(?<site_id>[a-f0-9-]*)/iys;
        var insights_re = /https:\/\/(manage|integration)\.(?<host>[a-z0-9.]*(mist|mistsys)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!dashboard\/insights\/((?<obj>[a-z]+)\/)?((?<obj_id>[a-z0-9-]+)\/)?((?<period>[a-z0-9]+)\/)?((?<start>[0-9]*)\/)?((?<stop>[0-9]*)\/)?(?<site_id>[0-9a-f-]*)?/iys;
        var alarm_re = /https:\/\/(manage|integration)\.(?<host>[a-z0-9.]*(mist|mistsys)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!alerts\/?(?<scope>org|site)?\/?(?<uuid>[0-9a-z-]*)\/?(?<period>[0-9a-z]*)?\/?(?<start>[0-9]*)?\/?(?<stop>[0-9]*)?\/?(?<show_ack>true|false)?\/?(?<group>[a-z%0-9]*)?\/?(?<show_crit>true|false)?\/?(?<show_warn>true|false)?\/?(?<show_info>true|false)?\/?(?<site_id>[0-9a-z-]*)?/iys;
        var events_re = /https:\/\/(manage|integration)\.(?<host>[a-z0-9.]*(mist|mistsys)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!marvis\/?(?<scope>org|site)?\/?(?<period>[0-9a-z]*)?\/?(?<start>[0-9]*)?\/?(?<stop>[0-9]*)?\/?(?<site_id>[0-9a-z-]*)?/iys;
        var floorplans_re = /https:\/\/(manage|integration)\.(?<host>[a-z0-9.]*mist\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!cliLocation\/(?<detail>view|config|validationPath|wayfinding)?\/?(?<uuid>[0-9a-f-]*)\/?(floorplan|beaconsAndZones)?\/?(?<site_id>[0-9a-f-]*)?/iys;
        var evpn_re = /https:\/\/(manage|integration)\.(?<host>[a-z0-9.]*(mist|mistsys)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!evpn\/site\/?([0-9]\/)?(?<site_id>[0-9a-z_-]*)?(\/(?<topology_id>[0-9a-f-]*))?/yis;
        var site_wlan_template_re = /https:\/\/(manage|integration)\.(?<host>[a-z0-9.]*(mist|mistsys)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!wlan\/orgWlanDetail\/(?<template_id>[0-9a-z_-]*)\/(?<wlan_id>[0-9a-f-]*)\/(?<site_id>[0-9a-f-]*)/is;
        var site_common_re = /https:\/\/(manage|integration)\.(?<host>[a-z0-9.]*(mist|mistsys)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!(?<obj>[a-z]+)\/?((?<detail>detail|site|admin|edgedetail|clusterdetail|new|view)\/)?([0-9]\/)?((?<obj_id>[0-9a-z_-]*)\/)?(?<site_id>[0-9a-f-]*)?/yis;
        var site_common_objs = ["ap", "gateway", "switch", "assets", "wlan", "tags", "psk", "tunnels", "clients", "sdkclients", "wiredclients", "wxlan", "security", "switchconfig", "pcap", "siteedge"];
        var org_common_re = /https:\/\/(manage|integration)\.(?<host>[a-z0-9.]*(mist|mistsys)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!(?<obj>[a-z]+)\/?((?<detail>detail|site|admin|edgedetail|clusterdetail|new|view|template|rfTemplate)\/)?([0-9]\/)?((?<obj_id>[0-9a-z_-]*))/yis;
        var org_common_objs = ["orgtags", "misttunnels", "templates", "switchtemplate", "gatewaytemplates", "hubs", "deviceprofiles", "org", "orgpsk", "configuration", "auditlogs", "apinventory", "adminconfig", "subscription", "edge", "vpns", "template", "rftemplates", "services", "networks", "applicationpolicy", "nactags", "naccertificates", "nacpolicy", "nacidentityproviders", "onboardingworkflow"];
        var base_re = /https:\/\/(manage|integration)\.(?<host>[a-z0-9.]*(mist|mistsys)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!/yis;
        var orgsle = orgsle_re.exec(this.tabUrl);
        var sle = sle_re.exec(this.tabUrl);
        var insights = insights_re.exec(this.tabUrl);
        var alarm = alarm_re.exec(this.tabUrl);
        var evpn = evpn_re.exec(this.tabUrl);
        var site_wlan_template = site_wlan_template_re.exec(this.tabUrl);
        var events = events_re.exec(this.tabUrl);
        var floorplans = floorplans_re.exec(this.tabUrl);
        var site_common = site_common_re.exec(this.tabUrl);
        var org_common = org_common_re.exec(this.tabUrl);
        var base = base_re.exec(this.tabUrl);
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
    };
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    // API URL
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// MAC 
    ApiManageComponent.prototype.getMac = function (uuid) {
        var splitted_uuid = uuid.split("-");
        return splitted_uuid[splitted_uuid.length - 1];
    };
    ApiManageComponent.prototype.setName = function (obj_name, detail) {
        if (obj_name === void 0) { obj_name = ""; }
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
    };
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// COMMON ORG FUNCTIONS
    ApiManageComponent.prototype.forgeOrgObject = function (obj_name, host, detail, extra_param) {
        if (extra_param === void 0) { extra_param = undefined; }
        var url = "";
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
    };
    ApiManageComponent.prototype.forgeOrgObjectStats = function (obj_name, host, detail, extra_param) {
        if (extra_param === void 0) { extra_param = undefined; }
        var url = "";
        if (detail && detail != "new") {
            // set QUICK LINK
            url = "https://api." + host + "/api/v1/orgs/" + this.org_id + "/stats/" + obj_name + "/" + this.obj_id;
            if (extra_param)
                url += "?" + extra_param;
            this.quick_links.push({ url: url, name: this.obj_name + " STATS" });
        }
    };
    ApiManageComponent.prototype.forgeOrgObjectEvents = function (obj_name, host, detail, extra_param) {
        if (extra_param === void 0) { extra_param = undefined; }
        var url = "";
        if (detail && detail != "new" && this.obj_id) {
            // MAC
            var mac = this.getMac(this.obj_id);
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
    };
    ApiManageComponent.prototype.forgeOrgNacIdp = function (host) {
        if (this.obj_id) {
            this.quick_links.push({ name: "NAC IDP", url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/ssos/" + this.obj_id }, { name: "NAC IDP Metadata", url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/ssos/" + this.obj_id + "/metadata" }, { name: "DOWNLOAD NAC IDP Metadata", url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/ssos/" + this.obj_id + "/metadata.xml" }, { name: "NAC IDP Latest failures", url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/ssos/" + this.obj_id + "/failures" });
        }
        else {
            this.quick_links.push({ name: "ORG SSOS", url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/ssos" });
        }
    };
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// COMMON SITE FUNCTIONS
    ApiManageComponent.prototype.forgeSiteObject = function (obj_name, host, detail, extra_param) {
        if (extra_param === void 0) { extra_param = undefined; }
        var url = "";
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
    };
    ApiManageComponent.prototype.forgeSiteObjectSearch = function (obj_name, host, detail, extra_param) {
        if (extra_param === void 0) { extra_param = undefined; }
        var url = "";
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
    };
    ApiManageComponent.prototype.forgeSiteObjectStats = function (obj_name, host, detail, extra_param) {
        if (extra_param === void 0) { extra_param = undefined; }
        var url = "";
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
    };
    ApiManageComponent.prototype.forgeSiteObjectEvents = function (obj_name, device_type, host, detail, extra_param) {
        if (extra_param === void 0) { extra_param = undefined; }
        var url = "";
        if (detail && detail != "new" && this.obj_id) {
            // MAC
            var mac = this.getMac(this.obj_id);
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
    };
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// SITE SECURITY FUNCTION
    ApiManageComponent.prototype.forgeSiteSecurity = function (host) {
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
    };
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// SITE SWITCH CONF FUNCTION
    ApiManageComponent.prototype.forgeSiteSwitchConfig = function (host) {
        this.quick_links.push({
            url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/setting/derived",
            name: "switchconfig"
        });
    };
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// SITE DEVICE LAST CONFIG FUNCTION
    ApiManageComponent.prototype.forgeSiteApLastConfig = function (detail, host, device_type) {
        if (detail && this.obj_id) {
            var mac = this.getMac(this.obj_id);
            if (device_type == "ap" && mac) {
                this.quick_links.push({
                    url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/devices/last_config/search?" + device_type + "=" + mac,
                    name: "Last Config"
                });
            }
        }
    };
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// ORG OBJ FUNCTION
    ApiManageComponent.prototype.forgeOrg = function (host) {
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
    };
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// SITE ASSETS FUNCTION
    ApiManageComponent.prototype.forgeAsset = function (host, mac) {
        if (mac)
            this.quick_links.push({
                url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/zones/visits/search?duration=1d&interval=3600&user_type=asset&scope=zone&user=" + mac,
                name: "asset zones visits"
            });
    };
    ApiManageComponent.prototype.forgeSiteAssetStats = function (obj_name, host, detail, extra_param) {
        if (extra_param === void 0) { extra_param = undefined; }
        var url = "";
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
    };
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// SITE OBJ FUNCTION
    ApiManageComponent.prototype.forgeSite = function (host, detail, extra_params) {
        if (extra_params === void 0) { extra_params = undefined; }
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
    };
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// MIST EDGE FUNCTION
    ApiManageComponent.prototype.forgeEdge = function (host, detail) {
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
    };
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// HUB PROFILE FUNCTION
    ApiManageComponent.prototype.forgeHubProfile = function (host, detail) {
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
    };
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// DISCOVERED SWITCHES FUNCTION
    ApiManageComponent.prototype.forgeSiteDiscoveredSwitchUrl = function (host, mac) {
        if (mac === void 0) { mac = undefined; }
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
    };
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// ORG SLE FUNCTION
    ApiManageComponent.prototype.forgeOrgSlehUrl = function (host, scope, sle, worstsle, extra_params) {
        if (worstsle === void 0) { worstsle = undefined; }
        if (extra_params === void 0) { extra_params = undefined; }
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
    };
    ////////////////////////////////////////////////////////////////////////////////////
    //////////////////////  SLE FUNCTION
    ApiManageComponent.prototype.forgeSlehUrl = function (host, scope, site_id, scope_id, sles, extra_params) {
        var _this = this;
        if (extra_params === void 0) { extra_params = null; }
        /*
        host: mist.com, eu.mist.com, gc1.mist.com
        scope: wifi, wire, wan
        */
        sles.forEach(function (sle) {
            _this.quick_links.push({
                url: "https://api." + host + "/api/v1/sites/" + site_id + "/sle/" + scope + "/" + scope_id + "/metric/" + sle + "/summary-trend?" + extra_params,
                name: sle + " " + scope + " SLE"
            });
        });
    };
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// BASE URL FUNCTION DISPATCHER
    ApiManageComponent.prototype.baseUrl = function (res) {
        var _a;
        this.org_id = (_a = res === null || res === void 0 ? void 0 : res.groups) === null || _a === void 0 ? void 0 : _a.org_id;
    };
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// ORG WLANS FUNCTION DISPATCHER FOR SITE URLS
    ApiManageComponent.prototype.siteWlanTemplateUrl = function (res) {
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
    };
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// COMMON URL FUNCTION DISPATCHER FOR SITE URLS
    ApiManageComponent.prototype.commonSiteUrl = function (res) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62;
        this.org_id = (_a = res === null || res === void 0 ? void 0 : res.groups) === null || _a === void 0 ? void 0 : _a.org_id;
        var extra_params = undefined;
        var uuid_re = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;
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
    };
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// COMMON URL FUNCTION DISPATCHER FOR ORG URLS
    ApiManageComponent.prototype.commonOrgUrl = function (res) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53;
        this.org_id = (_a = res === null || res === void 0 ? void 0 : res.groups) === null || _a === void 0 ? void 0 : _a.org_id;
        var extra_params = undefined;
        var uuid_re = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;
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
    };
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// ALARM URL FUNCTION DISPATCHER
    ApiManageComponent.prototype.alarmUrl = function (res) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
        this.org_id = (_a = res === null || res === void 0 ? void 0 : res.groups) === null || _a === void 0 ? void 0 : _a.org_id;
        var extra_params = "";
        var severity_array = [];
        var scope = "";
        var scope_id = undefined;
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
    };
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// EVPN URL FUNCTION DISPATCHER
    ApiManageComponent.prototype.evpnUrl = function (res) {
        var _a, _b, _c, _d, _e, _f;
        this.org_id = (_a = res === null || res === void 0 ? void 0 : res.groups) === null || _a === void 0 ? void 0 : _a.org_id;
        this.site_id = (_b = res === null || res === void 0 ? void 0 : res.groups) === null || _b === void 0 ? void 0 : _b.site_id;
        var extra_params = "";
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
    };
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// EVENTS URL FUNCTION DISPATCHER
    ApiManageComponent.prototype.eventsUrl = function (res) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        this.org_id = (_a = res === null || res === void 0 ? void 0 : res.groups) === null || _a === void 0 ? void 0 : _a.org_id;
        var extra_params = "";
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
    };
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// EVENTS URL FUNCTION DISPATCHER
    ApiManageComponent.prototype.floorplansUrl = function (res) {
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
    };
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// INSIGHTS URL FUNCTION DISPATCHER
    ApiManageComponent.prototype.insightsUrl = function (res) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
        this.org_id = (_a = res === null || res === void 0 ? void 0 : res.groups) === null || _a === void 0 ? void 0 : _a.org_id;
        this.site_id = (_b = res === null || res === void 0 ? void 0 : res.groups) === null || _b === void 0 ? void 0 : _b.site_id;
        this.obj_id = (_c = res === null || res === void 0 ? void 0 : res.groups) === null || _c === void 0 ? void 0 : _c.obj_id;
        var extra_params = undefined;
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
    };
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// ORG SLE URL FUNCTION DISPATCHER
    ApiManageComponent.prototype.orgSleUrl = function (res) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        this.org_id = (_a = res === null || res === void 0 ? void 0 : res.groups) === null || _a === void 0 ? void 0 : _a.org_id;
        var extra_params = undefined;
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
    };
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////// SLE URL FUNCTION DISPATCHER
    ApiManageComponent.prototype.sleUrl = function (res) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        this.org_id = (_a = res === null || res === void 0 ? void 0 : res.groups) === null || _a === void 0 ? void 0 : _a.org_id;
        this.site_id = (_b = res === null || res === void 0 ? void 0 : res.groups) === null || _b === void 0 ? void 0 : _b.site_id;
        var extra_params = null;
        var scope = "";
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
            var sles = [];
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
    };
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    // OTHER FUNCTIONS
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    // open a new tab with the url passed in parameter
    ApiManageComponent.prototype.openApiTab = function (url) {
        this._browser.tabOpen(url);
    };
    // open a new tab 
    ApiManageComponent.prototype.openTab = function (target) {
        if (target in this.external_links) {
            this._browser.tabOpen(this.external_links[target]);
        }
    };
    // copy the id (org_id, site_id, ...) into the clipboard
    ApiManageComponent.prototype.copyId = function (inputElement) {
        var _this = this;
        this.focused = inputElement.id;
        inputElement.select();
        document.execCommand('copy');
        setTimeout(function () {
            _this.focused = "";
            _this._cd.detectChanges();
        }, 100);
        inputElement.setSelectionRange(0, 0);
    };
    ApiManageComponent = __decorate([
        core_1.Component({
            selector: 'app-api-manage',
            templateUrl: 'manage.component.html',
            styleUrls: ['../api.component.scss']
        })
    ], ApiManageComponent);
    return ApiManageComponent;
}());
exports.ApiManageComponent = ApiManageComponent;
