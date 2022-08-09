import { group } from '@angular/animations';
import { escapeIdentifier } from '@angular/compiler/src/output/abstract_emitter';
import { Component, Inject, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TAB_URL } from '../../../providers/tab-url.provider';

export interface linkElement {
  url: string,
  name: string
}

@Component({
  selector: 'app-api-manage',
  templateUrl: 'manage.component.html',
  styleUrls: ['../api.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApiManageComponent implements OnInit {
  message: string;
  mist_url: string = "";

  quick_links: linkElement[] = []

  org_id: string = "";
  site_id: string = "";
  obj_id: string = "";
  obj_name: string = "";
  focused: string = "";

  constructor(
    @Inject(TAB_URL) readonly tabUrl: string,
    private _cd: ChangeDetectorRef
  ) { }


  hosts = [
    "manage.mist.com",
    "integration.mist.com",
    "manage.eu.mist.com",
    "manage.gc1.mist.com",
    "manage.gc2.mist.com",
    "manage.ac2.mist.com",
  ]

  external_links = {
    doc: "https://doc.mist-lab.fr",
    postman: "https://documenter.getpostman.com/view/224925/SzYgQufe",
    mist: "https://api.mist.com/api/v1/docs"
  }

  ngOnInit() {
    this.generateApiUrl()
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
    const site_common_objs = ["ap", "gateway", "switch", "assets", "wlan", "tags", "psk", "tunnels", "clients", "sdkclients", "wiredclients", "wxlan", "security", "switchconfig", "pcap"]
    const org_common_re = /https:\/\/(manage|integration)\.(?<host>[a-z0-9.]*(mist|mistsys)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!(?<obj>[a-z]+)\/?((?<detail>detail|site|admin|edgedetail|clusterdetail|new|view|template|rfTemplate)\/)?([0-9]\/)?((?<obj_id>[0-9a-z_-]*))/yis;
    const org_common_objs = ["orgtags", "misttunnels", "templates", "switchtemplate", "gatewaytemplates", "hubs", "deviceprofiles", "org", "orgpsk", "configuration", "auditlogs", "apinventory", "adminconfig", "subscription", "edge", "vpns", "template", "rftemplates", "services", "networks", "applicationpolicy", "nactags", "naccertificates", "nacpolicy", "nacidentityproviders", "onboardingworkflow"]
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
    } else if (sle) {
      this.sleUrl(sle);
    } else if (insights) {
      this.insightsUrl(insights);
    } else if (alarm) {
      this.alarmUrl(alarm);
    } else if (evpn) {
      this.evpnUrl(evpn);
    } else if (site_wlan_template) {
      this.siteWlanTemplateUrl(site_wlan_template);
    } else if (events) {
      this.eventsUrl(events);
    } else if (floorplans) {
      this.floorplansUrl(floorplans);
    } else if (site_common && site_common["groups"] && site_common_objs.includes(site_common["groups"]["obj"].toLowerCase())) {
      this.commonSiteUrl(site_common);
    } else if (org_common && org_common["groups"] && org_common_objs.includes(org_common["groups"]["obj"].toLowerCase())) {
      this.commonOrgUrl(org_common);
    } else if (base) {
      this.baseUrl(base);
    }
    this._cd.detectChanges()
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  // API URL
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////


  ////////////////////// MAC 
  getMac(uuid: string): string {
    const splitted_uuid = uuid.split("-");
    return splitted_uuid[splitted_uuid.length - 1];
  }

  setName(obj_name: string, detail: string) {
    obj_name = obj_name.toLowerCase();
    if (detail && detail != "new") {
      this.obj_name = obj_name
    } else {
      if (obj_name.includes("switch")) {
        this.obj_name = obj_name.replace("switch", "switches");
      } else if (obj_name.includes("policy")) {
        this.obj_name = obj_name.replace("policy", "policies");
      } else {
        this.obj_name = obj_name + "s";
      }
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// COMMON ORG FUNCTIONS
  forgeOrgObject(obj_name: string, host: string, detail: string, extra_param: string = null): void {
    let url = "";
    if (detail && detail != "new") {
      // set QUICK LINK
      url = "https://api." + host + "/api/v1/orgs/" + this.org_id + "/" + obj_name + "/" + this.obj_id;
      this.quick_links.push({ url: url, name: this.obj_name });
    } else {
      // set QUICK LINK
      this.obj_id = null;
      url = "https://api." + host + "/api/v1/orgs/" + this.org_id + "/" + obj_name;
      if (extra_param) url += "?" + extra_param;
      this.quick_links.push({ url: url, name: this.obj_name });
    }
  }

  forgeOrgObjectStats(obj_name: string, host: string, detail: string, extra_param: string = null): void {
    let url = "";
    if (detail && detail != "new") {
      // set QUICK LINK
      url = "https://api." + host + "/api/v1/orgs/" + this.org_id + "/stats/" + obj_name + "/" + this.obj_id;
      if (extra_param) url += "?" + extra_param;
      this.quick_links.push({ url: url, name: this.obj_name + " STATS" });
    }
  }


  forgeOrgObjectEvents(obj_name: string, host: string, detail: string, extra_param: string = null): void {
    let url = "";
    if (detail && detail != "new") {
      // MAC
      const mac = this.getMac(this.obj_id);
      // set QUICK LINK
      url = "https://api." + host + "/api/v1/orgs/" + this.org_id + "/" + obj_name + "/events/search?limit=1000&mac=" + mac;
      if (!extra_param) {
        url += "&duration=1d";
      } else {
        url += "&" + extra_param;
      }
      this.quick_links.push({ url: url, name: this.obj_name + " EVENTS" });
    } else {
      url = "https://api." + host + "/api/v1/orgs/" + this.org_id + "/" + obj_name + "/events/search?limit=1000&device_type=" + obj_name;
      if (!extra_param) {
        url += "&duration=1d";
      } else {
        url += "&" + extra_param;
      }
      this.quick_links.push({ url: url, name: this.obj_name + " EVENTS" });
    }
  }

  forgeOrgNacIdp(host: string): void {    
    if (this.obj_id) {
      this.quick_links.push(
        { name: "NAC IDP", url:  "https://api." + host + "/api/v1/orgs/" + this.org_id + "/ssos/" + this.obj_id },
        { name: "NAC IDP Metadata", url:  "https://api." + host + "/api/v1/orgs/" + this.org_id + "/ssos/" + this.obj_id + "/metadata"},
        { name: "DOWNLOAD NAC IDP Metadata", url:  "https://api." + host + "/api/v1/orgs/" + this.org_id + "/ssos/" + this.obj_id + "/metadata.xml"},
        { name: "NAC IDP Latest failures", url:  "https://api." + host + "/api/v1/orgs/" + this.org_id + "/ssos/" + this.obj_id + "/failures"}
        );
    } else {
      this.quick_links.push(
        { name: "ORG SSOS", url:  "https://api." + host + "/api/v1/orgs/" + this.org_id + "/ssos" }
      )
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// COMMON SITE FUNCTIONS
  forgeSiteObject(obj_name: string, host: string, detail: string, extra_param: string = null): void {
    let url = "";
    if (detail && detail != "new") {
      // set QUICK LINK
      url = "https://api." + host + "/api/v1/sites/" + this.site_id + "/" + obj_name + "/" + this.obj_id;
      this.quick_links.push({ url: url, name: this.obj_name });
      if (["switch", "gateway"].includes(this.obj_name)) {
        this.quick_links.push({ url: url + "/config_cmd", name: this.obj_name + " CMDS" });
      }
    } else {
      // set QUICK LINK
      url = "https://api." + host + "/api/v1/sites/" + this.site_id + "/" + obj_name;
      if (extra_param) url += "?" + extra_param;
      this.quick_links.push({ url: url, name: this.obj_name });
    }
  }

  forgeSiteObjectSearch(obj_name: string, host: string, detail: string, extra_param: string = null): void {
    let url = "";
    if (detail && detail != "new") {
      // set QUICK LINK
      url = "https://api." + host + "/api/v1/sites/" + this.site_id + "/" + obj_name + "/search?mac=" + this.obj_id;
      this.quick_links.push({ url: url, name: this.obj_name });
    } else {
      // set QUICK LINK
      url = "https://api." + host + "/api/v1/sites/" + this.site_id + "/" + obj_name + "/search";
      if (extra_param) url += "?" + extra_param;
      this.quick_links.push({ url: url, name: this.obj_name });
    }
  }

  forgeSiteObjectStats(obj_name: string, host: string, detail: string, extra_param: string = null): void {
    let url = "";
    if (detail && detail != "new") {
      // set QUICK LINK
      url = "https://api." + host + "/api/v1/sites/" + this.site_id + "/stats/" + obj_name + "/" + this.obj_id;
      if (extra_param) url += "?" + extra_param;
      this.quick_links.push({ url: url, name: this.obj_name + " STATS" });
    } else {
      // set QUICK LINK
      url = "https://api." + host + "/api/v1/sites/" + this.site_id + "/stats/" + obj_name;
      if (extra_param) url += "?" + extra_param;
      this.quick_links.push({ url: url, name: this.obj_name + " STATS" });
    }
  }

  forgeSiteObjectEvents(obj_name: string, device_type: string, host: string, detail: string, extra_param: string = null): void {
    let url = "";
    if (detail && detail != "new") {
      // MAC
      const mac = this.getMac(this.obj_id);
      // set QUICK LINK
      url = "https://api." + host + "/api/v1/sites/" + this.site_id + "/" + obj_name + "/events/search?limit=1000&mac=" + mac;
      if (!extra_param) {
        url += "&duration=1d";
      } else {
        url += "&" + extra_param;
      }
      this.quick_links.push({ url: url, name: this.obj_name + " EVENTS" })
    } else {
      url = "https://api." + host + "/api/v1/sites/" + this.site_id + "/" + obj_name + "/events/search?limit=1000";
      if (device_type) {
        url += "&device_type=" + device_type;
      }
      if (!extra_param) {
        url += "&duration=1d";
      } else {
        url += "&" + extra_param;
      }
      this.quick_links.push({ url: url, name: this.obj_name + " EVENTS" });
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// SITE SECURITY FUNCTION
  forgeSiteSecurity(host: string): void {
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
    })
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// SITE SWITCH CONF FUNCTION
  forgeSiteSwitchConfig(host: string): void {
    this.quick_links.push({
      url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/setting/derived",
      name: "switchconfig"
    })
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// SITE DEVICE LAST CONFIG FUNCTION
  forgeSiteApLastConfig(detail, host: string, device_type: string): void {
    if (detail) {
      const mac = this.getMac(this.obj_id)
      if (device_type == "ap" && mac) {
        this.quick_links.push({
          url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/devices/last_config/search?" + device_type + "=" + mac,
          name: "Last Config"
        })
      }
    }
  }
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// ORG OBJ FUNCTION
  forgeOrg(host: string) {
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
    })
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// SITE ASSETS FUNCTION

  forgeAsset(host: string, mac: string): void {
    this.quick_links.push({
      url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/zones/visits/search?duration=1d&interval=3600&user_type=asset&scope=zone&user=" + mac,
      name: "asset zones visits"
    })
  }

  forgeSiteAssetStats(obj_name: string, host: string, detail: string, extra_param: string = null): void {
    let url = "";
    if (detail && detail != "new") {
      // set QUICK LINK
      url = "https://api." + host + "/api/v1/sites/" + this.site_id + "/stats/" + obj_name + "/" + this.obj_id;
      if (extra_param) url += "?" + extra_param;
      this.quick_links.push({ url: url, name: this.obj_name + " STATS" });
    } else {
      // set QUICK LINK
      url = "https://api." + host + "/api/v1/sites/" + this.site_id + "/stats/assets";
      if (extra_param) url += "?" + extra_param;
      this.quick_links.push({ url: url, name: "ASSETS STATS" });

      url = "https://api." + host + "/api/v1/sites/" + this.site_id + "/stats/discovered_assets";
      if (extra_param) url += "?" + extra_param;
      this.quick_links.push({ url: url, name: "DISCOVERED ASSETS STATS" });
    }
  }
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// SITE OBJ FUNCTION
  forgeSite(host: string, detail: string, extra_params: string = null): void {
    if (extra_params) {
      extra_params = "?" + extra_params;
    } else {
      extra_params = "";
    }
    if (detail == "site") {
      this.site_id = this.obj_id
      this.obj_id = null
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
      })
    } else {
      this.obj_id = null;
      this.quick_links.push({
        url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/sites",
        name: "sites"
      }, {
        url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/sites/search",
        name: "site configs"
      }, {
        url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/sitegroups",
        name: "site groups"
      })
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// MIST EDGE FUNCTION
  forgeEdge(host: string, detail: string): void {
    if (detail == "edgedetail") {
      this.obj_name = "mxedge";
      this.forgeOrgObject("mxedges", host, detail);
      this.forgeOrgObjectStats("mxedges", host, detail);
      this.forgeSiteObjectEvents("mxedges", "mxedge", host, detail);
    } else if (detail == "clusterdetail") {
      this.obj_name = "mxcluster";
      this.forgeOrgObject("mxclusters", host, detail);
    } else {
      this.quick_links.push({
        url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/mxedges",
        name: "mxedges"
      }, {
        url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/mxclusters",
        name: "mxclusters"
      })
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// HUB PROFILE FUNCTION
  forgeHubProfile(host: string, detail: string): void {
    if (detail == "detail") {
      this.obj_name = "hubprofile";
      this.forgeOrgObject("deviceprofiles", host, detail);
    } else {
      this.quick_links.push({
        url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/deviceprofiles?type=gateway",
        name: "hubprofiles"
      })
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// DISCOVERED SWITCHES FUNCTION
  forgeSiteDiscoveredSwitchUrl(host: string, mac: string = null): void {
    if (mac) {
      this.quick_links.push({
        url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/stats/discovered_switches/search?system_name=" + mac,
        name: "discovered switch"
      })
    } else if (!this.obj_id) {
      this.quick_links.push({
        url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/stats/discovered_switches/search",
        name: "discovered switches"
      })
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// ORG SLE FUNCTION
  forgeOrgSlehUrl(host: string, scope: string, sle: string, worstsle: string = null, extra_params: string = null): void {
    /*
    host: mist.com, eu.mist.com, gc1.mist.com
    scope: wifi, wire, wan
    */
    if (!worstsle || worstsle == "-") worstsle = sle;
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
  forgeSlehUrl(host: string, scope: string, site_id: string, scope_id: string, sles: string[], extra_params: string = null): void {
    /*
    host: mist.com, eu.mist.com, gc1.mist.com
    scope: wifi, wire, wan
    */
    sles.forEach(sle => {
      this.quick_links.push({
        url: "https://api." + host + "/api/v1/sites/" + site_id + "/sle/" + scope + "/" + scope_id + "/metric/" + sle + "/summary-trend?" + extra_params,
        name: sle + " " + scope + " SLE"
      });
    })
  }
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// BASE URL FUNCTION DISPATCHER

  baseUrl(res: RegExpExecArray): void {
    this.org_id = res.groups.org_id;
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// ORG WLANS FUNCTION DISPATCHER FOR SITE URLS
  siteWlanTemplateUrl(res: RegExpExecArray): void {
    this.org_id = res.groups.org_id;
    this.site_id = res.groups.site_id;
    this.obj_id = res.groups.wlan_id;

    this.quick_links.push(
      {
        url: "https://api." + res.groups.host + "/api/v1/orgs/" + this.org_id + "/wlans/" + res.groups.wlan_id,
        name: "Org Wlan in use"
      }, {
      url: "https://api." + res.groups.host + "/api/v1/orgs/" + this.org_id + "/templates/" + res.groups.template_id,
      name: "Org Config Template in use"
    });
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// COMMON URL FUNCTION DISPATCHER FOR SITE URLS
  commonSiteUrl(res: RegExpExecArray): void {
    this.org_id = res.groups.org_id;
    let extra_params = null
    const uuid_re = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/
    if (res.groups.host && res.groups.org_id && res.groups.obj) {
      this.obj_id = res.groups.obj_id;
      this.site_id = res.groups.site_id;
      switch (res.groups.obj.toLowerCase()) {
        // SITE
        case "ap":
        case "gateway":
          this.setName(res.groups.obj, res.groups.detail);
          if (!res.groups.details) extra_params = "type=" + res.groups.obj;
          this.forgeSiteObject("devices", res.groups.host, res.groups.detail, extra_params);
          this.forgeSiteObjectStats("devices", res.groups.host, res.groups.detail, extra_params);
          this.forgeSiteObjectEvents("devices", res.groups.obj, res.groups.host, res.groups.detail);
          this.forgeSiteApLastConfig(res.groups.detail, res.groups.host, res.groups.obj);
          break;
        case "switch":
          if (["list", "topology", "location"].includes(this.obj_id)) this.obj_id = null;
          const is_uuid = uuid_re.test(this.obj_id);
          if (this.obj_id && !is_uuid) {
            this.obj_name = "discoveredswitch";
            this.setName("discoveredswitch", "detail");
            this.forgeSiteDiscoveredSwitchUrl(res.groups.host, this.obj_id);
          } else {
            this.setName(res.groups.obj, res.groups.detail);
            if (!res.groups.details) extra_params = "type=" + res.groups.obj;
            this.forgeSiteObject("devices", res.groups.host, res.groups.detail, extra_params);
            this.forgeSiteObjectStats("devices", res.groups.host, res.groups.detail, extra_params);
            this.forgeSiteObjectEvents("devices", res.groups.obj, res.groups.host, res.groups.detail);
            this.forgeSiteDiscoveredSwitchUrl(res.groups.host);
          }
          break;
        case "assets":
          // need to retrieve the asset ID to generate the detail request
          if (!res.groups.detail) {
            this.setName(res.groups.obj.substr(0, res.groups.obj.length - 1), res.groups.detail);
            this.forgeSiteObject(res.groups.obj, res.groups.host, res.groups.detail);
            this.forgeSiteAssetStats(res.groups.obj, res.groups.host, res.groups.detail);
          } else {
            this.forgeAsset(res.groups.host, this.org_id)
          }
          break;
        case "wlan":
          this.setName(res.groups.obj, res.groups.detail);
          this.forgeSiteObject("wlans", res.groups.host, res.groups.detail);
          break;
        case "tags":
          this.setName("wxtag", res.groups.detail);
          this.forgeSiteObject("wxtags", res.groups.host, res.groups.detail);
          break;
        case "psk":
          this.setName(res.groups.obj, res.groups.detail);
          this.forgeSiteObject("psks", res.groups.host, res.groups.detail);
          break;
        // case "siteedge":
        //   this.forgeSiteObject(res.groups, "mxedges", null);
        //    this.forgeSiteObjectStats(res.groups, "mxedges", null);
        //   break;
        case "tunnels":
          this.setName("wxtunnel", res.groups.detail);
          this.forgeSiteObject("wxtunnels", res.groups.host, res.groups.detail);
          this.forgeSiteObjectStats("wxtunnels", res.groups.host, res.groups.detail);
          break;
        case "clients":
        case "sdkclients":
          this.setName(res.groups.obj.substr(0, res.groups.obj.length - 1), res.groups.detail);
          this.forgeSiteObjectSearch(res.groups.obj, res.groups.host, res.groups.detail);
          this.forgeSiteObjectStats(res.groups.obj, res.groups.host, res.groups.detail);
          break;
        case "wiredclients":
          this.setName(res.groups.obj.substr(0, res.groups.obj.length - 1), res.groups.detail);
          this.forgeSiteObjectSearch("wired_clients", res.groups.host, res.groups.detail);
          break;
        case "wxlan":
          this.setName("wxrule", res.groups.detail);
          this.forgeSiteObject("wxrules", res.groups.host, res.groups.detail);
          this.forgeSiteObjectStats("wxrules", res.groups.host, res.groups.detail,);
          break;
        case "security":
          this.forgeSiteSecurity(res.groups.host)
          break;
        case "switchconfig":
          this.setName("switchconfig", res.groups.detail);
          this.forgeSiteSwitchConfig(res.groups.host);
          break;
        case "pcap":
          this.setName(res.groups.obj, res.groups.detail);
          this.forgeSiteObject("pcaps", res.groups.host, res.groups.detail);
          break;
      }
    }
  }
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// COMMON URL FUNCTION DISPATCHER FOR ORG URLS
  commonOrgUrl(res: RegExpExecArray): void {
    this.org_id = res.groups.org_id;
    let extra_params = null
    const uuid_re = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/
    if (res.groups.host && res.groups.org_id && res.groups.obj) {
      this.obj_id = res.groups.obj_id;
      switch (res.groups.obj.toLowerCase()) {
        // ORG
        case "org":
          this.obj_id = null;
          this.setName("org", res.groups.detail);
          this.forgeOrg(res.groups.host);
          break;
        case "configuration":
          this.setName("site", res.groups.detail);
          this.forgeSite(res.groups.host, res.groups.detail);
          break;
        case "orgtags":
          this.setName("wxtag", res.groups.detail);
          this.forgeOrgObject("wxtags", res.groups.host, res.groups.detail);
          break;
        case "orgpsk":
          this.setName("org psk", res.groups.detail);
          this.forgeOrgObject("psks", res.groups.host, res.groups.detail);
          break;
        case "misttunnels":
          this.setName("mxtunnel", res.groups.detail);
          this.forgeOrgObject("mxtunnels", res.groups.host, res.groups.detail);
          break;
        case "switchtemplate":
          this.setName(res.groups.obj, res.groups.detail);
          this.forgeOrgObject("networktemplates", res.groups.host, res.groups.detail);
          break;
        case "templates":
          this.setName(res.groups.obj.substr(0, res.groups.obj.length - 1), res.groups.detail);
          this.forgeOrgObject(res.groups.obj, res.groups.host, res.groups.detail);
          this.obj_name = "org wlans";
          this.forgeOrgObject("wlans", res.groups.host, undefined);
          break;
        case "auditlogs":
          this.setName(res.groups.obj.substr(0, res.groups.obj.length - 1), res.groups.detail);
          this.forgeOrgObject("logs", res.groups.host, res.groups.detail);
          break;
        case "apinventory":
          this.obj_name = "APs inventory";
          this.forgeOrgObject("inventory", res.groups.host, res.groups.detail, "type=ap");
          this.obj_name = "Switches inventory";
          this.forgeOrgObject("inventory", res.groups.host, res.groups.detail, "type=switch");
          this.obj_name = "Gateways inventory";
          this.forgeOrgObject("inventory", res.groups.host, res.groups.detail, "type=gateway");
          break;
        case "adminconfig":
          this.setName("admin", res.groups.detail);
          this.forgeOrgObject("admins", res.groups.host, res.groups.detail);
          break;

        case "subscription":
          this.setName(res.groups.obj, res.groups.detail);
          this.forgeOrgObject("licenses", res.groups.host, res.groups.detail);
          break;
        case "edge":
          this.setName("mxedge", res.groups.detail);
          this.forgeEdge(res.groups.host, res.groups.detail)
          break;
        case "hubs":
          this.setName("hubprofile", res.groups.detail);
          this.forgeHubProfile(res.groups.host, res.groups.detail)
          break;
        case "services":
        case "rftemplates":
        case "vpns":
        case "deviceprofiles":
        case "gatewaytemplates":
        case "networks":
          this.setName(res.groups.obj.substr(0, res.groups.obj.length - 1), res.groups.detail);
          this.forgeOrgObject(res.groups.obj.toLowerCase(), res.groups.host, res.groups.detail);
          break;
        case "applicationpolicy":
          this.setName("servicepolicy", res.groups.details);
          this.forgeOrgObject("servicepolicies", res.groups.host, res.groups.detail);
          break;
        case "nactags":
          this.setName("NAC Tag", res.groups.detail);
          this.forgeOrgObject(res.groups.obj.toLowerCase(), res.groups.host, res.groups.detail);
          break;
        case "naccertificates":
          this.setName("NAC Certificates", res.groups.detail);
          this.quick_links.push({
            url: "https://api." + res.groups.host + "/api/v1/orgs/" + this.org_id + "/setting",
            name: "org setting"
          }
          )
          break;
        case "nacpolicy":
          this.setName("NAC Policy", res.groups.detail);
          this.forgeOrgObject("nacrules", res.groups.host, res.groups.detail);
          break;
        case "nacidentityproviders":
          console.log(res.groups)
          this.setName("NAC IDP", res.groups.detail);
          this.forgeOrgNacIdp(res.groups.host);
          break;
        case "onboardingworkflow":
          this.setName("Psk Portal", res.groups.detail);
          this.forgeOrgObject("pskportals", res.groups.host, res.groups.detail);
          break;

      }
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// ALARM URL FUNCTION DISPATCHER
  alarmUrl(res: RegExpExecArray): void {
    this.org_id = res.groups.org_id;
    let extra_params = "";
    let severity_array = [];
    let scope = "";
    let scope_id = "";
    if (res.groups.scope == "org") {
      scope = "orgs";
      scope_id = res.groups.org_id;
    } else {
      if (res.groups.site_id) {
        this.site_id = res.groups.site_id;
      } else {
        this.site_id = res.groups.uuid;
      }
      scope = "sites";
      scope_id = this.site_id;
    }
    if (res.groups.start && res.groups.stop) {
      extra_params = "start=" + res.groups.start + "&end=" + res.groups.stop;
    }
    if (res.groups.show_crit && res.groups.show_crit == "true") severity_array.push("critical")
    if (res.groups.show_warn && res.groups.show_warn == "true") severity_array.push("warn")
    if (res.groups.show_info && res.groups.show_info == "true") severity_array.push("info")
    if (severity_array.length > 0) extra_params += "&severity=" + severity_array.join(",")
    else extra_params += "&severity=none"

    if (res.groups.group && res.groups.group != "any%20type") extra_params += "&group=" + res.groups.group;

    if (res.groups.show_ack && res.groups.show_ack == "false") extra_params += "&acked=false";

    this.quick_links.push({
      url: "https://api." + res.groups.host + "/api/v1/" + scope + "/" + scope_id + "/alarms/search?" + extra_params,
      name: scope + " Alarms"
    }, {
      url: "https://api." + res.groups.host + "/api/v1/" + scope + "/" + scope_id + "/alarms/count?" + extra_params,
      name: scope + " Alarms count"
    }, {
      url: "https://api." + res.groups.host + "/api/v1/orgs/" + this.org_id + "/alarmtemplates",
      name: " Alarms Templates"
    }, {
      url: "https://api." + res.groups.host + "/api/v1/const/alarm_defs",
      name: " Alarms Definitions"
    });
  }
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// EVPN URL FUNCTION DISPATCHER
  evpnUrl(res: RegExpExecArray): void {
    this.org_id = res.groups.org_id;
    this.site_id = res.groups.site_id;
    let extra_params = "";
    if (res.groups.topology_id) {
      this.obj_id = res.groups.topology_id;
      this.quick_links.push({
        url: "https://api." + res.groups.host + "/api/v1/sites/" + this.site_id + "/evpn_topologies/" + this.obj_id,
        name: "EVPN Topology"
      })
    } else {
      this.quick_links.push({
        url: "https://api." + res.groups.host + "/api/v1/sites/" + this.site_id + "/evpn_topologies",
        name: "Site EVPN Topologies"
      })
    }

  }
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// EVENTS URL FUNCTION DISPATCHER
  eventsUrl(res: RegExpExecArray): void {
    this.org_id = res.groups.org_id;
    let extra_params = "";
    if (res.groups.site_id) {
      this.site_id = res.groups.site_id;
    } else {
      this.site_id = res.groups.uuid;
    }

    if (res.groups.start && res.groups.stop) {
      extra_params = "start=" + res.groups.start + "&end=" + res.groups.stop;
    }

    this.quick_links.push({
      url: "https://api." + res.groups.host + "/api/v1/sites/" + this.site_id + "/insights/marvis?" + extra_params,
      name: "Site Events"
    })
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// EVENTS URL FUNCTION DISPATCHER
  floorplansUrl(res: RegExpExecArray): void {
    this.org_id = res.groups.org_id;
    if (res.groups.site_id) {
      this.site_id = res.groups.site_id;
      this.obj_id = res.groups.uuid;
    } else {
      this.site_id = res.groups.uuid;
    }

    this.setName("floor plan", res.groups.detail);
    this.forgeSiteObject("maps", res.groups.host, res.groups.detail);
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// INSIGHTS URL FUNCTION DISPATCHER
  insightsUrl(res: RegExpExecArray): void {
    this.org_id = res.groups.org_id;
    this.site_id = res.groups.site_id;
    this.obj_id = res.groups.obj_id;
    let extra_params = null;
    if (res.groups.start && res.groups.stop) {
      extra_params = "start=" + res.groups.start + "&end=" + res.groups.stop;
    }
    if (res.groups.host && res.groups.org_id) {
      switch (res.groups.obj) {
        case "device":
          this.setName("ap", "insights");
          this.forgeSiteObject("devices", res.groups.host, "detail");
          this.forgeSiteObjectStats("devices", res.groups.host, "detail", extra_params);
          this.forgeSiteObjectEvents("devices", "ap", res.groups.host, "detail", extra_params);
          this.forgeSiteApLastConfig(res.groups.detail, res.groups.host, 'ap');
          break;
        case "client":
          this.setName("client", "insights");
          this.forgeSiteObjectSearch("clients", res.groups.host, "detail");
          this.forgeSiteObjectStats("clients", res.groups.host, "detail", extra_params);
          this.forgeSiteObjectEvents("clients", null, res.groups.host, "detail", extra_params);
          break;
        case "juniperSwitch":
          this.setName("switch", "insights");
          this.forgeSiteObject("devices", res.groups.host, "detail");
          this.forgeSiteObjectStats("devices", res.groups.host, "detail", extra_params);
          this.forgeSiteObjectEvents("devices", "switch", res.groups.host, "detail", extra_params);
          break;
        case "juniperGateway":
          this.setName("gateway", "insights");
          this.forgeSiteObject("devices", res.groups.host, "detail");
          this.forgeSiteObjectStats("devices", res.groups.host, "detail", extra_params);
          this.forgeSiteObjectEvents("devices", "gateway", res.groups.host, "detail", extra_params);
          break;
        case "wiredClient":
          this.setName("wired client", "insights");
          this.forgeSiteObjectSearch("wired_clients", res.groups.host, "detail", extra_params);
          this.forgeSiteObjectEvents("wired_clients", null, res.groups.host, "detail", extra_params);
          break;
        case "edge":
          this.setName("mxedge", "insights");
          this.forgeOrgObject("mxedges", res.groups.host, "detail");
          this.forgeOrgObjectStats("mxedges", res.groups.host, "detail", extra_params);
          this.forgeOrgObjectEvents("mxedges", res.groups.host, "detail", extra_params);
          break;
        case "site":
        case undefined:
          this.setName("site", "insights");
          this.forgeSite(res.groups.host, "site", extra_params);
          break;
      }
    }
  }


  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// ORG SLE URL FUNCTION DISPATCHER

  orgSleUrl(res: RegExpExecArray): void {
    this.org_id = res.groups.org_id;
    let extra_params = null;
    if (res.groups.start && res.groups.stop) {
      extra_params = "start=" + res.groups.start + "&end=" + res.groups.stop;
    }
    if (res.groups.host && res.groups.org_id) {
      switch (res.groups.scope) {
        case "siteComparison":
          this.forgeOrgSlehUrl(res.groups.host, "wifi", res.groups.sle, res.groups.worstsle, extra_params);
          break;
        case "wiredSiteComparison":
          this.forgeOrgSlehUrl(res.groups.host, "wired", res.groups.sle, res.groups.worstsle, extra_params);
          break;
        case "wanSiteComparison":
          this.forgeOrgSlehUrl(res.groups.host, "wan", res.groups.sle, res.groups.worstsle, extra_params);
          break;
      }
    }
  }
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// SLE URL FUNCTION DISPATCHER

  sleUrl(res: RegExpExecArray): void {
    this.org_id = res.groups.org_id;
    this.site_id = res.groups.site_id;
    let extra_params = null;
    let scope = "";
    if (res.groups.scope != "site") {
      this.setName(res.groups.scope, "sle");
      this.obj_id = res.groups.scope_id;
    }
    if (res.groups.scope == "juniperSwitch") {
      scope = "switch";
    } else if (res.groups.scope == "juniperGateway") {
      scope = "gateway";
    } else if (res.groups.scope == "device") {
      scope = "ap";
    } else {
      scope = res.groups.scope;
    }
    if (res.groups.start && res.groups.stop) {
      extra_params = "start=" + res.groups.start + "&end=" + res.groups.stop;
    }
    if (res.groups.host && res.groups.org_id) {
      let sles: string[] = []
      switch (res.groups.detail) {
        case "serviceLevels":
          sles = [
            "time-to-connect",
            "failed-to-connect",
            "roaming",
            "throughput",
            "coverage",
            "capacity",
            "ap-availability"
          ]
          break;
        case "wiredServiceLevels":
          sles = [
            "switch-stc",
            "switch-health",
            "switch-throughput"
          ]
          break;
        case "wanServiceLevels":
          sles = [
            "gateway-health",
            "wan-link-health",
            "application-health"
          ]
          break;
      }
      this.forgeSlehUrl(res.groups.host, scope, res.groups.site_id, res.groups.scope_id, sles, extra_params)
    }
  }


  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  // OTHER FUNCTIONS
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////

  // open a new tab with the url passed in parameter
  openApiTab(url: string) {
    chrome.tabs.create({ url: url });
  }

  // open a new tab 
  openTab(target: string) {
    if (target in this.external_links) {
      chrome.tabs.create({ url: this.external_links[target] });
    }
  }

  // copy the id (org_id, site_id, ...) into the clipboard
  copyId(inputElement: HTMLInputElement): void {
    this.focused = inputElement.id;
    inputElement.select();
    document.execCommand('copy');
    setTimeout(() => {
      this.focused = "";
      this._cd.detectChanges()
    }, 100);
    inputElement.setSelectionRange(0, 0);
  }


}
