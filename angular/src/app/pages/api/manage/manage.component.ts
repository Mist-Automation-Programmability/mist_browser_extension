import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { BrowserService } from "../../../services/browser.service";
export interface linkElement {
  url: string,
  name: string
}
export interface actionElement {
  action: string,
  name: string
}

@Component({
  selector: 'app-api-manage',
  templateUrl: 'manage.component.html',
  styleUrls: [
    '../api.component.scss',
    '../../../scss/button.component.scss',
    '../../../scss/popup.component.scss',
    '../../../scss/notice.component.scss'
  ]
})
export class ApiManageComponent implements OnInit {

  eventZtpPassword: Subject<boolean> = new Subject<boolean>();
  action: string = "";

  message: string;
  mist_url: string = "";

  quick_links: linkElement[] = []
  quick_actions: actionElement[] = []

  msp_id: string | undefined = undefined;
  org_id: string | undefined = undefined;
  site_id: string | undefined = undefined;
  obj_id: string | undefined = undefined;
  missing_fields: string[] = [];
  obj_name: string = "";
  focused: string | undefined = "";
  tabUrl: string;
  constructor(
    private _cd: ChangeDetectorRef,
    private _browser: BrowserService
  ) { }



  hosts = [
    "manage.mist.com",
    "integration.mist.com",
    "manage.eu.mist.com",
    "manage.gc1.mist.com",
    "manage.gc2.mist.com",
    "manage.gc3.mist.com",
    "manage.ac2.mist.com",
    "manage.ac5.mist.com",
    "manage.ac99.mist.com",
    "manage.us.mist-federal.com"
  ]

  external_links: { [index: string]: string } = {
    doc: "https://doc.mist-lab.fr",
    postman: "https://documenter.getpostman.com/view/224925/SzYgQufe",
    mist: "https://api.mist.com/api/v1/docs"
  }

  ngOnInit() {
    this._browser.getUrl
    .then(tabUrl => {
      this.tabUrl = tabUrl;
      this.generateApiUrl()
    })
    .error(error => { console.log(error) })
    .catch(error => { console.log(error) })
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  // API URL ENTRYPOINT
  ////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  // API URL ENTRYPOINT
  generateApiUrl() {
    const orgsle_re = /https:\/\/(manage|integration|manage-staging)\.(?<host>[a-z0-9.]*(mist|mistsys|mist-federal)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!dashboard\/(?<scope>siteComparison|wiredSiteComparison|wanSiteComparison)\/(?<sle>[a-z-]*)\/(?<worstsle>[a-z-]*)\/([a-z-_]*)\/(?<period>[0-9a-z-]*)\/(?<start>[0-9]*)\/(?<stop>[0-9]*)/iys;
    const sle_details_re = /https:\/\/(manage|integration|manage-staging)\.(?<host>[a-z0-9.]*(mist|mistsys|mist-federal)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!dashboard\/(?<detail>serviceLevels|wiredserviceLevels|wanServiceLevels|juniperGateway)\/page2\/(stats|timeline)\/[a-zA-Z-]+\/[a-zA-Z-]+\/(?<scope>site|device|client|juniperSwitch|juniperGateway)\/(?<scope_id>[a-f0-9-]*)\/(?<sle_name>[a-z-]*)\/(?<sle_sub_1>[a-zA-Z-]+)\/(?<sle_sub_2>[a-zA-Z-]+)(\/(?<period>[0-9a-z]*))?(\/(?<start>[0-9]*))?(\/(?<stop>[0-9]*))?\/(?<site_id>[a-f0-9-]*)/iys;
    const sle_re = /https:\/\/(manage|integration|manage-staging)\.(?<host>[a-z0-9.]*(mist|mistsys|mist-federal)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!dashboard\/(?<detail>serviceLevels|wiredserviceLevels|wanServiceLevels|juniperGateway)(\/(?<scope>site|device|client|juniperSwitch|juniperGateway))?(\/(?<scope_id>[a-f0-9-]*))?(\/(?<period>[0-9a-z-]*))?(\/(?<start>[0-9]*))?(\/(?<stop>[0-9]*))?\/(?<site_id>[a-f0-9-]*)/iys;
    const insights_re = /https:\/\/(manage|integration|manage-staging)\.(?<host>[a-z0-9.]*(mist|mistsys|mist-federal)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!dashboard\/insights\/((?<obj>[a-z]+)\/)?((?<obj_id>[a-z0-9-]+)\/)?((?<period>[a-z0-9]+)\/)?((?<start>[0-9]*)\/)?((?<stop>[0-9]*)\/)?(?<site_id>[0-9a-f-]*)?/iys;
    const alarm_re = /https:\/\/(manage|integration|manage-staging)\.(?<host>[a-z0-9.]*(mist|mistsys|mist-federal)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!alerts\/?(?<scope>org|site)?\/?(?<uuid>[0-9a-z-]*)\/?(?<period>[0-9a-z]*)?\/?(?<start>[0-9]*)?\/?(?<stop>[0-9]*)?\/?(?<show_ack>true|false)?\/?(?<group>[a-z%0-9]*)?\/?(?<show_crit>true|false)?\/?(?<show_warn>true|false)?\/?(?<show_info>true|false)?\/?(?<site_id>[0-9a-z-]*)?/iys;
    const events_re = /https:\/\/(manage|integration|manage-staging)\.(?<host>[a-z0-9.]*(mist|mistsys|mist-federal)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!marvis\/?(?<scope>org|site)?\/?(?<period>[0-9a-z]*)?\/?(?<start>[0-9]*)?\/?(?<stop>[0-9]*)?\/?(?<site_id>[0-9a-z-]*)?/iys;
    const floorplans_re = /https:\/\/(manage|integration|manage-staging)\.(?<host>[a-z0-9.]*(mist|mistsys|mist-federal)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!cliLocation\/(?<detail>view|config|validationPath|wayfinding)?\/?(?<uuid>[0-9a-f-]*)\/?(floorplan|beaconsAndZones)?\/?(?<site_id>[0-9a-f-]*)?/iys;
    const site_evpn_re = /https:\/\/(manage|integration|manage-staging)\.(?<host>[a-z0-9.]*(mist|mistsys|mist-federal)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!evpn\/site\/?([0-9]\/)?(?<site_id>[0-9a-z_-]*)?(\/(?<topology_id>[0-9a-f-]*))?/yis;
    const site_wlan_template_re = /https:\/\/(manage|integration|manage-staging)\.(?<host>[a-z0-9.]*(mist|mistsys|mist-federal)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!wlan\/orgWlanDetail\/(?<template_id>[0-9a-z_-]*)\/(?<wlan_id>[0-9a-f-]*)\/(?<site_id>[0-9a-f-]*)/is;
    const site_common_re = /https:\/\/(manage|integration|manage-staging)\.(?<host>[a-z0-9.]*(mist|mistsys|mist-federal)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!(?<obj>[a-z]+)\/?((?<detail>detail|site|admin|edgedetail|clusterdetail|new|view)\/)?([0-9]\/)?((?<obj_id>[0-9a-z_-]*)\/)?(?<site_id>[0-9a-f-]*)?/yis;
    const site_common_objs = ["ap", "gateway", "switch", "assets", "wlan", "tags", "psk", "tunnels", "clients", "guestclients", "sdkclients", "wiredclients", "wxlan", "security", "switchconfig", "pcap", "siteedge", "cellularedges"]
    const org_evpn_re = /https:\/\/(manage|integration|manage-staging)\.(?<host>[a-z0-9.]*(mist|mistsys|mist-federal)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!evpn\/org(\/(?<topology_id>[0-9a-f-]*))?/yis;
    const org_common_re = /https:\/\/(manage|integration|manage-staging)\.(?<host>[a-z0-9.]*(mist|mistsys|mist-federal)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!(?<obj>[a-zA-Z]+)\/?((?<detail>detail|site|admin|edgedetail|clusterdetail|new|view|template|rfTemplate)\/)?([0-9]\/)?(?<obj_id>[0-9a-z_-]*)\??(?<query_params>[0-9a-z_=&-]*)?/yis;
    const org_common_objs = ["orgtags", "misttunnels", "templates", "switchtemplate", "gatewaytemplates", "hubs", "deviceprofiles", "org", "orgpsk", "configuration", "auditlogs", "apinventory", "adminconfig", "subscription", "edge", "vpns", "template", "rftemplates", "services", "networks", "applicationpolicy", "authpolicylabels", "naccertificates", "nacpolicy", "nacidentityproviders", "onboardingworkflow", "sdk", "premiumanalytics", "private5g", "securityevents", "nacclients"];
    const base_re = /https:\/\/(manage|integration|manage-staging)\.(?<host>[a-z0-9.]*(mist|mistsys|mist-federal)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!/yis;
    const msp_re = /https:\/\/(manage|integration|manage-staging)\.(?<host>[a-z0-9.]*(mist|mistsys|mist-federal)\.com)\/msp\/\?msp_id=(?<msp_id>[0-9a-f-]*)#!(?<obj>orgs|admins|auditLogs|mspInfo|labels)\/?(?<detail>aiops|details|detail|invite)?\/?(?<obj_id>[0-9a-z_-]*)/yis;;

    var regexp_result;

    if (regexp_result = orgsle_re.exec(this.tabUrl)) {
      this.orgSleUrl(regexp_result);
    } else if (regexp_result = sle_details_re.exec(this.tabUrl)) {
      this.sleDetailsUrl(regexp_result);
    } else if ((regexp_result = sle_re.exec(this.tabUrl))) {
      this.sleUrl(regexp_result);
    } else if (regexp_result = insights_re.exec(this.tabUrl)) {
      this.insightsUrl(regexp_result);
    } else if (regexp_result = alarm_re.exec(this.tabUrl)) {
      this.alarmUrl(regexp_result);
    } else if (regexp_result = site_evpn_re.exec(this.tabUrl)) {
      this.siteEvpnUrl(regexp_result);
    } else if (regexp_result = org_evpn_re.exec(this.tabUrl)) {
      this.orgEvpnUrl(regexp_result);
    } else if (regexp_result = site_wlan_template_re.exec(this.tabUrl)) {
      this.siteWlanTemplateUrl(regexp_result);
    } else if (regexp_result = events_re.exec(this.tabUrl)) {
      this.eventsUrl(regexp_result);
    } else if (regexp_result = floorplans_re.exec(this.tabUrl)) {
      this.floorplansUrl(regexp_result);
    } else if ((regexp_result = site_common_re.exec(this.tabUrl)) && regexp_result["groups"] && site_common_objs.includes(regexp_result["groups"]["obj"].toLowerCase())) {
      this.commonSiteUrl(regexp_result);
    } else if ((regexp_result = org_common_re.exec(this.tabUrl)) && regexp_result["groups"] && org_common_objs.includes(regexp_result["groups"]["obj"].toLowerCase())) {
      this.commonOrgUrl(regexp_result);
    } else if (regexp_result = base_re.exec(this.tabUrl)) {
      this.baseUrl(regexp_result);
    } else if (regexp_result = msp_re.exec(this.tabUrl)) {
      this.commonMspUrl(regexp_result);
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

  setName(obj_name: string = "", detail: string | undefined) {
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
  forgeOrgObject(obj_name: string, host: string, detail: string | undefined, extra_param: string | undefined = undefined): void {
    let url = "";
    if (detail && detail != "new") {
      // set QUICK LINK
      url = "https://api." + host + "/api/v1/orgs/" + this.org_id + "/" + obj_name + "/" + this.obj_id;
      this.quick_links.push({ url: url, name: this.obj_name });
    } else {
      // set QUICK LINK
      this.obj_id = undefined;
      url = "https://api." + host + "/api/v1/orgs/" + this.org_id + "/" + obj_name;
      if (extra_param) url += "?" + extra_param;
      this.quick_links.push({ url: url, name: this.obj_name });
    }
  }

  forgeOrgObjectStats(obj_name: string, host: string, detail: string, extra_param: string | undefined = undefined): void {
    let url = "";
    if (detail && detail != "new") {
      // set QUICK LINK
      url = "https://api." + host + "/api/v1/orgs/" + this.org_id + "/stats/" + obj_name + "/" + this.obj_id;
      if (extra_param) url += "?" + extra_param;
      this.quick_links.push({ url: url, name: this.obj_name + " STATS" });
    }
  }


  forgeOrgObjectEvents(obj_name: string, host: string, detail: string, extra_param: string | undefined = undefined): void {
    let url = "";
    if (detail && detail != "new" && this.obj_id) {
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
        { name: "NAC IDP", url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/ssos/" + this.obj_id },
        { name: "NAC IDP Metadata", url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/ssos/" + this.obj_id + "/metadata" },
        { name: "DOWNLOAD NAC IDP Metadata", url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/ssos/" + this.obj_id + "/metadata.xml" },
        { name: "NAC IDP Latest failures", url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/ssos/" + this.obj_id + "/failures" }
      );
    } else {
      this.quick_links.push(
        { name: "ORG SSOS", url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/ssos" }
      )
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// COMMON SITE FUNCTIONS
  forgeSiteObject(obj_name: string, host: string | undefined, detail: string | undefined, extra_param: string | undefined = undefined): void {
    let url = "";
    if (detail && detail != "new") {
      // set QUICK LINK
      url = "https://api." + host + "/api/v1/sites/" + this.site_id + "/" + obj_name + "/" + this.obj_id;
      this.quick_links.push({ url: url, name: this.obj_name });
      if (["switch", "gateway"].includes(this.obj_name)) {
        this.quick_links.push({ url: url + "/config_cmd", name: this.obj_name + " CMDS" });
        this.quick_actions.push({ action: "ztp_password", name: this.obj_name + " ZTP PASSWORD" });
      }
    } else {
      // set QUICK LINK
      url = "https://api." + host + "/api/v1/sites/" + this.site_id + "/" + obj_name;
      if (extra_param) url += "?" + extra_param;
      this.quick_links.push({ url: url, name: this.obj_name });
    }
  }

  forgeSiteOtherDevices(host: string | undefined, detail: string | undefined, extra_param: string | undefined = undefined): void {
    let url = "";
    if (detail) {
      this.quick_links.push({
        url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/stats/otherdevices/" + this.obj_id,
        name: "Other Device Stats"
      });
      this.quick_links.push({
        url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/otherdevices/events/search?mac=" + this.obj_id,
        name: "Other Device Events"
      });
    } else {
      this.quick_links.push({
        url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/otherdevices/events/search",
        name: "Other Devices Events"
      });
    }
  }

  forgeSiteObjectSearch(obj_name: string, host: string, detail: string | null, extra_param: string | undefined = undefined): void {
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

  forgeSiteObjectStats(obj_name: string, host: string, detail: string, extra_param: string | undefined = undefined): void {
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

  forgeSiteObjectEvents(obj_name: string, device_type: string | undefined, host: string, detail: string, extra_param: string | undefined = undefined): void {
    let url = "";
    if (detail && detail != "new" && this.obj_id) {
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
  ////////////////////// NAC POLICIES FUNCTION
  forgeNacPolicies(host: string): void {
    this.quick_links.push({
      url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/nac_clients/search",
      name: "NAC Events"
    }, {
      url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/nac_clients/count",
      name: "NAC Events Count"
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
  forgeSiteApLastConfig(detail: string | undefined, host: string, device_type: string): void {
    if (detail && this.obj_id) {
      const mac = this.getMac(this.obj_id)
      if (device_type == "ap" && mac) {
        this.quick_links.push({
          url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/devices/last_config/search?" + device_type + "=" + mac,
          name: "Last Config"
        })
      }
    }
  }
  forgeSiteDeviceSyntheticTest(detail: string | undefined, host: string, device_type:string): void {
    if (detail && this.obj_id) {
    const mac = this.getMac(this.obj_id)
    if (mac) {
      this.quick_links.push({
        url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/synthetic_test/search?mac=" + mac,
        name: "Marvis Minis Test Results"
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
    }, {
      url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/apitokens",
      name: "org apitokens"
    }, {
      url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/vars/search",
      name: "org variables"
    })
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// SITE ASSETS FUNCTION

  forgeAsset(host: string, mac: string | undefined): void {
    if (mac) this.quick_links.push({
      url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/zones/visits/search?duration=1d&interval=3600&user_type=asset&scope=zone&user=" + mac,
      name: "asset zones visits"
    })
  }

  forgeSiteAssetStats(obj_name: string, host: string, detail: string, extra_param: string | undefined = undefined): void {
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
  forgeSite(host: string, detail: string, extra_params: string | undefined = undefined): void {
    if (extra_params) {
      extra_params = "?" + extra_params;
    } else {
      extra_params = "";
    }
    if (detail == "site") {
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
        name: "site device events"
      }, {
        url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/clients/events/search" + extra_params,
        name: "site client events"
      })
    } else {
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
      }, {
        url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/mxtunnels",
        name: "mxtunnels"
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
      }),
        this.quick_links.push({
          url: "https://api." + host + "/api/v1/orgs/" + this.org_id + "/vpns",
          name: "Org VPNs"
        })
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// DISCOVERED SWITCHES FUNCTION
  forgeSiteDiscoveredSwitchUrl(host: string, mac: string | undefined = undefined): void {
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
  forgeOrgSlehUrl(host: string, scope: string, sle: string, worstsle: string | undefined = undefined, extra_params: string | undefined = undefined): void {
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
  //////////////////////  SLE DETAILS FUNCTION
  forgeSleDetailshUrl(host: string, scope: string | undefined, site_id: string, scope_id: string, sle: string, impacted_entities: string[] = [], extra_params: string | null = null): void {
    /*
    host: mist.com, eu.mist.com, gc1.mist.com
    scope: wifi, wire, wan
    */
    this.quick_links.push(
      {
        url: "https://api." + host + "/api/v1/sites/" + site_id + "/sle/" + scope + "/" + scope_id + "/metric/" + sle + "/threshold",
        name: sle + " threshold"
      },
      {
        url: "https://api." + host + "/api/v1/sites/" + site_id + "/sle/" + scope + "/" + scope_id + "/metric/" + sle + "/summary?" + extra_params,
        name: sle + " summary"
      },
      {
        url: "https://api." + host + "/api/v1/sites/" + site_id + "/sle/" + scope + "/" + scope_id + "/metric/" + sle + "/histogram?" + extra_params,
        name: sle + " histogram"
      },
      {
        url: "https://api." + host + "/api/v1/sites/" + site_id + "/sle/" + scope + "/" + scope_id + "/metric/" + sle + "/impact-summary?" + extra_params,
        name: sle + " impact summary"
      },
    );
    impacted_entities.forEach(entity => {
      this.quick_links.push({
        url: "https://api." + host + "/api/v1/sites/" + site_id + "/sle/" + scope + "/" + scope_id + "/metric/" + sle + "/impacted-" + entity + "?" + extra_params,
        name: "impacted " + entity
      });
    })

  }
  ////////////////////////////////////////////////////////////////////////////////////
  //////////////////////  SLE FUNCTION
  forgeSlehUrl(host: string, scope: string | undefined, site_id: string, scope_id: string, sles: string[], extra_params: string | null = null): void {
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
    this.org_id = res?.groups?.org_id;
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// ORG WLANS FUNCTION DISPATCHER FOR SITE URLS
  siteWlanTemplateUrl(res: RegExpExecArray): void {
    this.org_id = res?.groups?.org_id;
    this.site_id = res?.groups?.site_id;
    this.obj_id = res?.groups?.wlan_id;

    this.quick_links.push(
      {
        url: "https://api." + res?.groups?.host + "/api/v1/orgs/" + this.org_id + "/wlans/" + res?.groups?.wlan_id,
        name: "Org Wlan in use"
      }, {
      url: "https://api." + res?.groups?.host + "/api/v1/orgs/" + this.org_id + "/templates/" + res?.groups?.template_id,
      name: "Org Config Template in use"
    });
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// COMMON URL FUNCTION DISPATCHER FOR SITE URLS
  commonSiteUrl(res: RegExpExecArray): void {
    this.org_id = res?.groups?.org_id;
    let extra_params: string | undefined = undefined;
    const uuid_re = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/
    if (res?.groups?.host && res?.groups?.org_id && res?.groups?.obj) {
      this.obj_id = res?.groups?.obj_id;
      this.site_id = res?.groups?.site_id;
      switch (res?.groups?.obj.toLowerCase()) {
        // SITE
        case "ap":
        case "gateway":
          this.setName(res?.groups?.obj, res?.groups?.detail);
          if (!res?.groups?.details) extra_params = "type=" + res?.groups?.obj;
          this.forgeSiteObject("devices", res?.groups?.host, res?.groups?.detail, extra_params);
          this.forgeSiteObjectStats("devices", res?.groups?.host, res?.groups?.detail, extra_params);
          this.forgeSiteObjectEvents("devices", res?.groups?.obj, res?.groups?.host, res?.groups?.detail);
          this.forgeSiteApLastConfig(res?.groups?.detail, res?.groups?.host, res?.groups?.obj);
          this.forgeSiteDeviceSyntheticTest(res?.groups?.detail, res?.groups?.host, res?.groups?.obj);
          break;
        case "switch":
          if (["list", "topology", "location"].includes(this.obj_id)) this.obj_id = undefined;
          var is_uuid = false;
          if (this.obj_id) is_uuid = uuid_re.test(this.obj_id);
          if (this.obj_id && !is_uuid) {
            this.obj_name = "discoveredswitch";
            this.setName("discoveredswitch", "detail");
            this.forgeSiteDiscoveredSwitchUrl(res?.groups?.host, this.obj_id);
          } else {
            this.setName(res?.groups?.obj, res?.groups?.detail);
            if (!res?.groups?.details) extra_params = "type=" + res?.groups?.obj;
            this.forgeSiteObject("devices", res?.groups?.host, res?.groups?.detail, extra_params);
            this.forgeSiteObjectStats("devices", res?.groups?.host, res?.groups?.detail, extra_params);
            this.forgeSiteObjectEvents("devices", res?.groups?.obj, res?.groups?.host, res?.groups?.detail);
            this.forgeSiteDiscoveredSwitchUrl(res?.groups?.host);
            this.forgeSiteDeviceSyntheticTest(res?.groups?.detail, res?.groups?.host, res?.groups?.obj);
          }
          break;
        case "assets":
          // need to retrieve the asset ID to generate the detail request
          if (!res?.groups?.detail) {
            this.setName(res?.groups?.obj.substr(0, res?.groups?.obj.length - 1), res?.groups?.detail);
            this.forgeSiteObject(res?.groups?.obj, res?.groups?.host, res?.groups?.detail);
            this.forgeSiteAssetStats(res?.groups?.obj, res?.groups?.host, res?.groups?.detail);
          } else {
            this.forgeAsset(res?.groups?.host, this.obj_id)
          }
          break;
        case "wlan":
          this.setName(res?.groups?.obj, res?.groups?.detail);
          this.forgeSiteObject("wlans", res?.groups?.host, res?.groups?.detail);
          break;
        case "tags":
          this.setName("wxtag", res?.groups?.detail);
          this.forgeSiteObject("wxtags", res?.groups?.host, res?.groups?.detail);
          break;
        case "psk":
          this.setName(res?.groups?.obj, res?.groups?.detail);
          this.forgeSiteObject("psks", res?.groups?.host, res?.groups?.detail);
          break;
        case "siteedge":
          //   // NOT ALWAYS ABLE TO GET SITE ID FROM URL
          this.setName("mxedge", res?.groups?.detail);
          if (res?.groups?.detail && !this.obj_id) {
            this.obj_id = this.site_id;
            this.site_id = undefined;
            this.missing_fields.push("site_id")
          } else if (!res?.groups?.detail && !this.site_id) this.missing_fields.push("site_id")
          if (this.missing_fields.length == 0) {
            this.forgeSiteObject("mxedges", res?.groups?.host, res?.groups?.detail);
            this.forgeSiteObjectStats("mxedges", res?.groups?.host, res?.groups?.detail);
          }
          break;
        case "tunnels":
          this.setName("wxtunnel", res?.groups?.detail);
          this.forgeSiteObject("wxtunnels", res?.groups?.host, res?.groups?.detail);
          this.forgeSiteObjectStats("wxtunnels", res?.groups?.host, res?.groups?.detail);
          break;
        case "clients":
        case "sdkclients":
          this.setName(res?.groups?.obj.substr(0, res?.groups?.obj.length - 1), res?.groups?.detail);
          this.forgeSiteObjectSearch(res?.groups?.obj, res?.groups?.host, res?.groups?.detail);
          this.forgeSiteObjectStats(res?.groups?.obj, res?.groups?.host, res?.groups?.detail);
          break;
        case "guestclients":
          this.setName(res?.groups?.obj.substr(0, res?.groups?.obj.length - 1), res?.groups?.detail);
          this.forgeSiteObjectSearch("guests", res?.groups?.host, null);
          break;
        case "wiredclients":
          this.setName(res?.groups?.obj.substr(0, res?.groups?.obj.length - 1), res?.groups?.detail);
          this.forgeSiteObjectSearch("wired_clients", res?.groups?.host, res?.groups?.detail);
          break;
        case "wxlan":
          this.setName("wxrule", res?.groups?.detail);
          this.forgeSiteObject("wxrules", res?.groups?.host, res?.groups?.detail);
          this.forgeSiteObjectStats("wxrules", res?.groups?.host, res?.groups?.detail,);
          break;
        case "security":
          this.forgeSiteSecurity(res?.groups?.host)
          break;
        case "switchconfig":
          this.setName("switchconfig", res?.groups?.detail);
          this.forgeSiteSwitchConfig(res?.groups?.host);
          break;
        case "pcap":
          this.setName(res?.groups?.obj, res?.groups?.detail);
          this.forgeSiteObject("pcaps", res?.groups?.host, res?.groups?.detail);
          break;
        case "cellularedges":
          this.setName("other device", res?.groups?.detail);
          this.forgeSiteOtherDevices(res?.groups?.host, res?.groups?.detail);
          break;

      }
    }
  }
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// COMMON URL FUNCTION DISPATCHER FOR ORG URLS
  process_time_interval(end: number | null, timeInterval: string): string | null {
    switch (timeInterval) {
      case "today":
      case "thisWeek":
      case "60m":
      case "24h":
      case "7d":
        end = Math.round(Date.now() / 1000);
        break;
      case "yesterday":
        let d = new Date();
        d.setHours(0);
        d.setMinutes(0)
        d.setSeconds(0);
        d.setMilliseconds(0);
        end = d.getTime() / 1000;
        break;
    }
    if (end) return end.toString();
    else return null;
  }

  process_query_params(res: RegExpExecArray): RegExpExecArray {
    let query_params = res?.groups?.query_params;
    let end, timeInterval;
    if (query_params) {
      query_params.split("&").forEach(param => {
        let key = param.split("=")[0];
        let value = param.split("=")[1];
        switch (key) {
          case "site":
            res.groups["site_id"] = value;
            break;
          case "start":
            res.groups["start"] = value;
            break;
          case "end":
            end = value;
            break;
          case "timeInterval":
            timeInterval = value;
            break;
          default:
            res.groups[key] = value;
            break;
        }
        res.groups[key] = value;
      })
      if (timeInterval) 
        res.groups["end"] = this.process_time_interval(end, timeInterval);
    }

    return res;
  }

  commonOrgUrl(res: RegExpExecArray): void {
    res = this.process_query_params(res);
    this.org_id = res?.groups?.org_id;
    const uuid_re = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/
    if (res?.groups?.host && res?.groups?.org_id && res?.groups?.obj) {
      this.obj_id = res?.groups?.obj_id;
      switch (res?.groups?.obj.toLowerCase()) {
        // ORG
        case "nacclients":
          this.orgNacUrl(res);
          break;
        case "org":
          this.obj_id = undefined;
          this.setName("org", res?.groups?.detail);
          this.forgeOrg(res?.groups?.host);
          break;
        case "configuration":
          var detail: string | undefined;
          if (res.groups?.obj_id) {
            this.site_id = this.obj_id;
            this.obj_id = undefined;
            detail = "site";
          } else {
            this.site_id = undefined;
            this.obj_id = undefined;
          }
          this.setName("site", detail);
          this.forgeSite(res?.groups?.host, detail);
          break;
        case "orgtags":
          this.setName("wxtag", res?.groups?.detail);
          this.forgeOrgObject("wxtags", res?.groups?.host, res?.groups?.detail);
          break;
        case "orgpsk":
          this.setName("org psk", res?.groups?.detail);
          this.forgeOrgObject("psks", res?.groups?.host, res?.groups?.detail);
          break;
        case "switchtemplate":
          this.setName(res?.groups?.obj, res?.groups?.detail);
          this.forgeOrgObject("networktemplates", res?.groups?.host, res?.groups?.detail);
          break;
        case "templates":
          this.setName(res?.groups?.obj.substr(0, res?.groups?.obj.length - 1), res?.groups?.detail);
          this.forgeOrgObject(res?.groups?.obj, res?.groups?.host, res?.groups?.detail);
          this.obj_name = "org wlans";
          this.forgeOrgObject("wlans", res?.groups?.host, undefined);
          break;
        case "auditlogs":
          this.setName(res?.groups?.obj.substr(0, res?.groups?.obj.length - 1), res?.groups?.detail);
          this.forgeOrgObject("logs", res?.groups?.host, res?.groups?.detail);
          break;
        case "apinventory":
          this.obj_name = "APs inventory";
          this.forgeOrgObject("inventory", res?.groups?.host, res?.groups?.detail, "type=ap");
          this.obj_name = "Switches inventory";
          this.forgeOrgObject("inventory", res?.groups?.host, res?.groups?.detail, "type=switch");
          this.obj_name = "Gateways inventory";
          this.forgeOrgObject("inventory", res?.groups?.host, res?.groups?.detail, "type=gateway");
          break;
        case "adminconfig":
          this.setName("admin", res?.groups?.detail);
          this.forgeOrgObject("admins", res?.groups?.host, res?.groups?.detail);
          break;

        case "subscription":
          this.setName(res?.groups?.obj, res?.groups?.detail);
          this.forgeOrgObject("licenses", res?.groups?.host, res?.groups?.detail);
          break;
        case "edge":
          this.setName("mxedge", res?.groups?.detail);
          this.forgeEdge(res?.groups?.host, res?.groups?.detail)
          break;
        case "hubs":
          this.setName("hubprofile", res?.groups?.detail);
          this.forgeHubProfile(res?.groups?.host, res?.groups?.detail)
          break;
        case "services":
        case "rftemplates":
        case "vpns":
        case "deviceprofiles":
        case "gatewaytemplates":
        case "networks":
          this.setName(res?.groups?.obj.substr(0, res?.groups?.obj.length - 1), res?.groups?.detail);
          this.forgeOrgObject(res?.groups?.obj.toLowerCase(), res?.groups?.host, res?.groups?.detail);
          break;
        case "applicationpolicy":
          this.setName("servicepolicy", res?.groups?.details);
          this.forgeOrgObject("servicepolicies", res?.groups?.host, res?.groups?.detail);
          break;
        case "authpolicylabels":
          this.setName("NAC Tag", res?.groups?.detail);
          this.forgeOrgObject("nactags", res?.groups?.host, res?.groups?.detail);
          break;
        case "naccertificates":
          this.setName("NAC Certificates", res?.groups?.detail);
          this.quick_links.push({
            url: "https://api." + res?.groups?.host + "/api/v1/orgs/" + this.org_id + "/setting",
            name: "org setting"
          })
          break;
        case "nacpolicy":
          this.setName("NAC Policy", res?.groups?.detail);
          this.forgeOrgObject("nacrules", res?.groups?.host, res?.groups?.detail);
          this.forgeNacPolicies(res?.groups?.host);
          break;
        case "nacidentityproviders":
          this.setName("NAC IDP", res?.groups?.detail);
          this.forgeOrgNacIdp(res?.groups?.host);
          break;
        case "onboardingworkflow":
          this.setName("Psk Portal", res?.groups?.detail);
          this.forgeOrgObject("pskportals", res?.groups?.host, res?.groups?.detail);
          break;
        case "sdk":
          this.setName("sdk client", res?.groups?.detail);
          this.forgeOrgObject("sdkinvites", res?.groups?.host, res?.groups?.detail);
          break;
        case "premiumanalytics":
          this.setName("Premium Analytics Dashboards", res?.groups?.detail);
          this.quick_links.push({
            url: "https://api." + res?.groups?.host + "/api/v1/orgs/" + this.org_id + "/pma/dashboards",
            name: "PMA Dashboards"
          })
          break;
        case "securityevents":
          this.setName("Secutiry Events", res?.groups?.detail);
          this.quick_links.push({
            url: "https://api." + res?.groups?.host + "/api/v1/orgs/" + this.org_id + "/security/events/search?type=idp_attack_event",
            name: "IDP Events"
          },
            {
              url: "https://api." + res?.groups?.host + "/api/v1/orgs/" + this.org_id + "/security/events/search?type=ewf_event",
              name: "URL Filtering Events"
            })
          break;
      }
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// ALARM URL FUNCTION DISPATCHER
  alarmUrl(res: RegExpExecArray): void {
    this.org_id = res?.groups?.org_id;
    let extra_params = "";
    let severity_array: string[] = [];
    let scope = "";
    let scope_id: string | undefined = undefined;
    if (res?.groups?.scope == "org") {
      scope = "orgs";
      scope_id = res?.groups?.org_id;
    } else {
      if (res?.groups?.site_id) {
        this.site_id = res?.groups?.site_id;
      } else {
        this.site_id = res?.groups?.uuid;
      }
      scope = "sites";
      scope_id = this.site_id;
    }
    if (res?.groups?.start && res?.groups?.stop) {
      extra_params = "start=" + res?.groups?.start + "&end=" + res?.groups?.stop;
    }
    if (res?.groups?.show_crit && res?.groups?.show_crit == "true") severity_array.push("critical")
    if (res?.groups?.show_warn && res?.groups?.show_warn == "true") severity_array.push("warn")
    if (res?.groups?.show_info && res?.groups?.show_info == "true") severity_array.push("info")
    if (severity_array.length > 0) extra_params += "&severity=" + severity_array.join(",")
    else extra_params += "&severity=none"

    if (res?.groups?.group && res?.groups?.group != "any%20type") extra_params += "&group=" + res?.groups?.group;

    if (res?.groups?.show_ack && res?.groups?.show_ack == "false") extra_params += "&acked=false";

    this.quick_links.push({
      url: "https://api." + res?.groups?.host + "/api/v1/" + scope + "/" + scope_id + "/alarms/search?" + extra_params,
      name: scope + " Alarms"
    }, {
      url: "https://api." + res?.groups?.host + "/api/v1/" + scope + "/" + scope_id + "/alarms/count?" + extra_params,
      name: scope + " Alarms count"
    }, {
      url: "https://api." + res?.groups?.host + "/api/v1/orgs/" + this.org_id + "/alarmtemplates",
      name: " Alarms Templates"
    }, {
      url: "https://api." + res?.groups?.host + "/api/v1/const/alarm_defs",
      name: " Alarms Definitions"
    });
  }
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// EVPN URL FUNCTION DISPATCHER
  siteEvpnUrl(res: RegExpExecArray): void {
    this.org_id = res?.groups?.org_id;
    this.site_id = res?.groups?.site_id;
    let extra_params = "";
    if (res?.groups?.topology_id) {
      this.obj_id = res?.groups?.topology_id;
      this.quick_links.push({
        url: "https://api." + res?.groups?.host + "/api/v1/sites/" + this.site_id + "/evpn_topologies/" + this.obj_id,
        name: "Site EVPN Topology"
      })
    } else {
      this.quick_links.push({
        url: "https://api." + res?.groups?.host + "/api/v1/sites/" + this.site_id + "/evpn_topologies",
        name: "Site EVPN Topologies"
      }, {
        url: "https://api." + res?.groups?.host + "/api/v1/orgs/" + this.org_id + "/evpn_topologies",
        name: "Org EVPN Topologies"
      })
    }
  }

  orgNacUrl(res: RegExpExecArray): void {
    this.org_id = res?.groups?.org_id;
    this.site_id = res?.groups?.site_id;
    let query_params = [];
    let query_params_string = "";
    if (res?.groups?.start) query_params.push("start="+ res?.groups?.start);
    if (res?.groups?.end) query_params.push("end=" + res?.groups?.end);
    if (query_params) query_params_string = "?" + query_params.join("&");
    if (this.site_id) {
      this.quick_links.push({
        url: "https://api." + res?.groups?.host + "/api/v1/sites/" + this.site_id + "/nac_clients/search" + query_params_string,
        name: "Site NAC Clients"
      })
      this.quick_links.push({
        url: "https://api." + res?.groups?.host + "/api/v1/sites/" + this.site_id + "/nac_clients/events/search" + query_params_string,
        name: "Site NAC Clients Events"
      })
    } else {
      this.quick_links.push({
        url: "https://api." + res?.groups?.host + "/api/v1/orgs/" + this.org_id + "/nac_clients/search" + query_params_string,
        name: "Org NAC Clients"
      })
      this.quick_links.push({
        url: "https://api." + res?.groups?.host + "/api/v1/orgs/" + this.org_id + "/nac_clients/events/search" + query_params_string,
        name: "Org NAC Clients Events"
      })
    }
  }
  orgEvpnUrl(res: RegExpExecArray): void {
    this.org_id = res?.groups?.org_id;
    let extra_params = "";
    if (res?.groups?.topology_id) {
      this.obj_id = res?.groups?.topology_id;
      this.quick_links.push({
        url: "https://api." + res?.groups?.host + "/api/v1/orgs/" + this.org_id + "/evpn_topologies/" + this.obj_id,
        name: "Org EVPN Topology"
      })
    } else {
      this.quick_links.push({
        url: "https://api." + res?.groups?.host + "/api/v1/orgs/" + this.org_id + "/evpn_topologies",
        name: "Org EVPN Topologies"
      })
    }
  }
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// EVENTS URL FUNCTION DISPATCHER
  eventsUrl(res: RegExpExecArray): void {
    this.org_id = res?.groups?.org_id;
    let extra_params = "";
    if (res?.groups?.site_id) {
      this.site_id = res?.groups?.site_id;
    } else {
      this.site_id = res?.groups?.uuid;
    }

    if (res?.groups?.start && res?.groups?.stop) {
      extra_params = "start=" + res?.groups?.start + "&end=" + res?.groups?.stop;
    }

    this.quick_links.push({
      url: "https://api." + res?.groups?.host + "/api/v1/sites/" + this.site_id + "/insights/marvis?" + extra_params,
      name: "Site Events"
    })
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// EVENTS URL FUNCTION DISPATCHER
  floorplansUrl(res: RegExpExecArray): void {
    this.org_id = res?.groups?.org_id;
    if (res?.groups?.site_id) {
      this.site_id = res?.groups?.site_id;
      this.obj_id = res?.groups?.uuid;
    } else {
      this.site_id = res?.groups?.uuid;
    }

    this.setName("floor plan", res?.groups?.detail);
    this.forgeSiteObject("maps", res?.groups?.host, res?.groups?.detail);
    if (this.obj_id) {
      this.quick_links.push({
        url: "https://api." + res?.groups?.host + "/api/v1/sites/" + this.site_id + "/maps/" + this.obj_id + "/auto_placement",
        name: "Auto Placement Status"
      })
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// INSIGHTS URL FUNCTION DISPATCHER
  insightsUrl(res: RegExpExecArray): void {
    this.org_id = res?.groups?.org_id;
    this.site_id = res?.groups?.site_id;
    this.obj_id = res?.groups?.obj_id;
    if (this.site_id == this.obj_id) this.obj_id = undefined
    let extra_params: string | undefined = undefined;
    if (res?.groups?.start && res?.groups?.stop) {
      extra_params = "start=" + res?.groups?.start + "&end=" + res?.groups?.stop;
    }
    if (res?.groups?.host && res?.groups?.org_id) {
      switch (res?.groups?.obj) {
        case "device":
          this.setName("ap", "insights");
          this.forgeSiteObject("devices", res?.groups?.host, "detail");
          this.forgeSiteObjectStats("devices", res?.groups?.host, "detail", extra_params);
          this.forgeSiteObjectEvents("devices", "ap", res?.groups?.host, "detail", extra_params);
          this.forgeSiteApLastConfig(res?.groups?.detail, res?.groups?.host, 'ap');
          break;
        case "client":
          this.setName("client", "insights");
          this.forgeSiteObjectSearch("clients", res?.groups?.host, "detail");
          this.forgeSiteObjectStats("clients", res?.groups?.host, "detail", extra_params);
          this.forgeSiteObjectEvents("clients", undefined, res?.groups?.host, "detail", extra_params);
          break;
        case "juniperSwitch":
          this.setName("switch", "insights");
          this.forgeSiteObject("devices", res?.groups?.host, "detail");
          this.forgeSiteObjectStats("devices", res?.groups?.host, "detail", extra_params);
          this.forgeSiteObjectEvents("devices", "switch", res?.groups?.host, "detail", extra_params);
          break;
        case "juniperGateway":
          this.setName("gateway", "insights");
          this.forgeSiteObject("devices", res?.groups?.host, "detail");
          this.forgeSiteObjectStats("devices", res?.groups?.host, "detail", extra_params);
          this.forgeSiteObjectEvents("devices", "gateway", res?.groups?.host, "detail", extra_params);
          break;
        case "wiredClient":
          this.setName("wired client", "insights");
          this.forgeSiteObjectSearch("wired_clients", res?.groups?.host, "detail", extra_params);
          this.forgeSiteObjectEvents("wired_clients", undefined, res?.groups?.host, "detail", extra_params);
          break;
        case "edge":
          this.setName("mxedge", "insights");
          this.forgeOrgObject("mxedges", res?.groups?.host, "detail");
          this.forgeOrgObjectStats("mxedges", res?.groups?.host, "detail", extra_params);
          this.forgeOrgObjectEvents("mxedges", res?.groups?.host, "detail", extra_params);
          break;
        case "site":
        case undefined:
          this.setName("site", "insights");
          this.forgeSite(res?.groups?.host, "site", extra_params);
          break;
      }
    }
  }


  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// ORG SLE URL FUNCTION DISPATCHER

  orgSleUrl(res: RegExpExecArray): void {
    this.org_id = res?.groups?.org_id;
    let extra_params: string | undefined = undefined;
    if (res?.groups?.start && res?.groups?.stop) {
      extra_params = "start=" + res?.groups?.start + "&end=" + res?.groups?.stop;
    }
    if (res?.groups?.host && res?.groups?.org_id) {
      switch (res?.groups?.scope) {
        case "siteComparison":
          this.forgeOrgSlehUrl(res?.groups?.host, "wifi", res?.groups?.sle, res?.groups?.worstsle, extra_params);
          break;
        case "wiredSiteComparison":
          this.forgeOrgSlehUrl(res?.groups?.host, "wired", res?.groups?.sle, res?.groups?.worstsle, extra_params);
          break;
        case "wanSiteComparison":
          this.forgeOrgSlehUrl(res?.groups?.host, "wan", res?.groups?.sle, res?.groups?.worstsle, extra_params);
          break;
      }
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// SLE URL FUNCTION DISPATCHER

  sleUrl(res: RegExpExecArray): void {
    this.org_id = res?.groups?.org_id;
    this.site_id = res?.groups?.site_id;
    let extra_params: string | null = null;
    let scope: string | undefined = "";
    if (res?.groups?.scope != "site") {
      this.setName(res?.groups?.scope, "sle");
      this.obj_id = res?.groups?.scope_id;
    }
    if (res?.groups?.scope == "juniperSwitch") scope = "switch";
    else if (res?.groups?.scope == "juniperGateway") scope = "gateway";
    else if (res?.groups?.scope == "device") scope = "ap";
    else if (res?.groups?.scope) scope = res?.groups?.scope;
    else if (res.groups && this.site_id) {
      scope = "site";
      res.groups.scope_id = this.site_id;
    }

    if (res?.groups?.start && res?.groups?.stop) {
      extra_params = "start=" + res?.groups?.start + "&end=" + res?.groups?.stop;
    }
    if (res?.groups?.host && res?.groups?.org_id) {
      let sles: string[] = []
      switch (res?.groups?.detail) {
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
      this.forgeSlehUrl(res?.groups?.host, scope, res?.groups?.site_id, res?.groups?.scope_id, sles, extra_params)
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// SLE DETAILS URL FUNCTION DISPATCHER
  // <host>[a-z0-9.]*(mist|mistsys|mist-federal)\.com)
  // <org_id>[0-9a-f-]*
  // <detail>serviceLevels|wiredserviceLevels|wanServiceLevels|juniperGateway
  // <scope>site|device|client|juniperSwitch|juniperGateway
  // <scope_id>[a-f0-9-]*
  // <sle_name>[a-z-]*
  // <sle_sub_1>[a-zA-Z-]+
  // <sle_sub_2>[a-zA-Z-]+
  // <period>[0-9a-z]*
  // <start>[0-9]*
  // <stop>[0-9]*
  // <site_id>[a-f0-9-]*


  sleDetailsUrl(res: RegExpExecArray): void {
    this.org_id = res?.groups?.org_id;
    this.site_id = res?.groups?.site_id;
    let extra_params: string | null = null;
    let scope: string | undefined = "";
    if (res?.groups?.scope != "site") {
      this.setName(res?.groups?.scope, "sle");
      this.obj_id = res?.groups?.scope_id;
    }
    if (res?.groups?.scope == "juniperSwitch") {
      scope = "switch";
    } else if (res?.groups?.scope == "juniperGateway") {
      scope = "gateway";
    } else if (res?.groups?.scope == "device") {
      scope = "ap";
    } else {
      scope = res?.groups?.scope;
    }
    if (res?.groups?.start && res?.groups?.stop) {
      extra_params = "start=" + res?.groups?.start + "&end=" + res?.groups?.stop;
    }
    if (res?.groups?.host && res?.groups?.org_id) {
      let impacted_entities: string[] = []
      switch (res?.groups?.sle_name) {
        // wireless
        case "time-to-connect":
        case "failed-to-connect":
        case "roaming":
        case "throughput":
        case "coverage":
        case "capacity":
          impacted_entities = ["users", "aps"];
          break;
        case "ap-availability":
          impacted_entities = ["aps"];
          break;
        // wired
        case "switch-throughput":
          impacted_entities = ["clients", "switches", "interfaces"];
          break;
        case "switch-stc":
          impacted_entities = ["clients", "vlan", "switches", "interfaces"];
          break;
        case "switch-health":
          impacted_entities = ["switches", "chassis"];
          break;
        // wan
        case "gateway-health":
          impacted_entities = ["gateways", "chassis"];
          break;
        case "wan-link-health":
          impacted_entities = ["clients", "peer-paths", "gateways", "interfaces"];
          break;
        case "application-health":
          impacted_entities = ["clients", "applications", "gateways", "interfaces"];
          break;
      }
      this.forgeSleDetailshUrl(res?.groups?.host, scope, res?.groups?.site_id, res?.groups?.scope_id, res?.groups?.sle_name, impacted_entities, extra_params)
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// COMMON URL FUNCTION DISPATCHER FOR SITE URLS
  commonMspUrl(res: RegExpExecArray): void {
    this.msp_id = res?.groups?.msp_id;
    if (res?.groups?.host && res?.groups?.msp_id && res?.groups?.obj) {
      this.obj_id = res?.groups?.obj_id;
      switch (res?.groups?.obj.toLowerCase()) {
        case "orgs":
          if (res?.groups?.detail == "aiops") {
            this.quick_links.push(
              {
                url: "https://api." + res?.groups?.host + "/api/v1/msps/" + this.msp_id + "/insights/orgs-sle?sle=wifi&duration=1w&limit=100",
                name: "Wi-FI SLEs"
              },
              {
                url: "https://api." + res?.groups?.host + "/api/v1/msps/" + this.msp_id + "/insights/orgs-sle?sle=wired&duration=1w&limit=100",
                name: "Wired SLEs"
              },
              {
                url: "https://api." + res?.groups?.host + "/api/v1/msps/" + this.msp_id + "/insights/orgs-sle?sle=wan&duration=1w&limit=100",
                name: "WAN SLEs"
              },
              {
                url: "https://api." + res?.groups?.host + "/api/v1/msps/" + this.msp_id + "/suggestion/count",
                name: "MSP MARVIS ACTIONS"
              },
              //   {
              //   url: "https://api." + res?.groups?.host + "/api/v1/msps/" + this.msp_id + "/tickets/count?status=open&distinct=org_id&duration=1w",
              //   name: "Orgs Tickets Count"
              // }
            )

          } else {
            this.quick_links.push({
              url: "https://api." + res?.groups?.host + "/api/v1/msps/" + this.msp_id,
              name: "MSP INFO"
            },
              {
                url: "https://api." + res?.groups?.host + "/api/v1/msps/" + this.msp_id + "/licenses",
                name: "MSP LICENSES"
              },
              {
                url: "https://api." + res?.groups?.host + "/api/v1/msps/" + this.msp_id + "/orggroups",
                name: "MSP Orgs Groups"
              },
              {
                url: "https://api." + res?.groups?.host + "/api/v1/msps/" + this.msp_id + "/orgs",
                name: "MSP Orgs List"
              },
              {
                url: "https://api." + res?.groups?.host + "/api/v1/msps/" + this.msp_id + "/orgs/search?limit=1000",
                name: "MSP Orgs Details"
              }
            )
          }
          break;
        case "admins":
          if (res?.groups?.obj_id) {
            this.obj_name = "admin";
            this.obj_id = res?.groups?.obj_id;
          }
          this.quick_links.push(
            {
              url: "https://api." + res?.groups?.host + "/api/v1/msps/" + this.msp_id + "/admins",
              name: "MSP Admins"
            }
          )
          break;
        case "auditlogs":
          this.quick_links.push(
            {
              url: "https://api." + res?.groups?.host + "/api/v1/msps/" + this.msp_id + "/logs?duration=1d&limit=100",
              name: "MSP Audit Logs"
            }
          )
          break;
        case "mspinfo":
          this.quick_links.push(
            {
              url: "https://api." + res?.groups?.host + "/api/v1/msps/" + this.msp_id,
              name: "MSP INFO"
            },
            {
              url: "https://api." + res?.groups?.host + "/api/v1/msps/" + this.msp_id + "/licenses",
              name: "MSP LICENSES"
            },
            {
              url: "https://api." + res?.groups?.host + "/api/v1/msps/" + this.msp_id + "/ssos",
              name: "MSP SSOS"
            },
            {
              url: "https://api." + res?.groups?.host + "/api/v1/msps/" + this.msp_id + "/ssoroles",
              name: "MSP SSO ROLES"
            }, {
            url: "https://api." + res?.groups?.host + "/api/v1/msps/" + this.msp_id + "/orggroups",
            name: "MSP Orgs Groups"
          },
            {
              url: "https://api." + res?.groups?.host + "/api/v1/msps/" + this.msp_id + "/orgs",
              name: "MSP Orgs List"
            },
          )
          break;
        case "labels":
          if (res?.groups?.obj_id) {
            this.obj_name = "msp ORGGROUP";
            this.obj_id = res?.groups?.obj_id;
            this.quick_links.push(
              {
                url: "https://api." + res?.groups?.host + "/api/v1/msps/" + this.msp_id + "/orggroups/" + this.obj_id,
                name: "MSP ORGGROUP"
              }
            )
          } else {
            this.quick_links.push(
              {
                url: "https://api." + res?.groups?.host + "/api/v1/msps/" + this.msp_id + "/orggroups",
                name: "MSP ORGGROUPS"
              }
            )
          }

      }
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  // OTHER FUNCTIONS
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////

  // open a new tab with the url passed in parameter
  openApiTab(url: string) {
    this._browser.tabOpen(url);
  }

  openActionTab(action: string) {
    this.action = action;
    if (this.action == "ztp_password") this.eventZtpPassword.next(true);

  }
  closeActionTab(): void {
    this.action = "";
    this.eventZtpPassword.next(false);
    this._cd.detectChanges();
  }

  // open a new tab 
  openTab(target: string) {
    if (target in this.external_links) {
      this._browser.tabOpen(this.external_links[target]);
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
