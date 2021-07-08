import { group } from '@angular/animations';
import { Component, Inject, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TAB_URL } from '../../providers/tab-url.provider';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export interface linkElement {
  url: string,
  name: string
}

@Component({
  selector: 'app-api',
  templateUrl: 'api.component.html',
  styleUrls: ['api.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApiComponent implements OnInit {
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
    private _cd: ChangeDetectorRef,
    private _http: HttpClient
  ) { }


  hosts = [
    "manage.mist.com",
    "integration.mist.com",
    "manage.eu.mist.com",
    "manage.gc1.mist.com"
  ]

  ngOnInit() {
    this.generateApiUrl()
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
    if (detail && detail != "new") {
      this.obj_name = obj_name
    } else {
      if (["switch"].includes(obj_name)) {
        this.obj_name = "switches";
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
      url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/insights/rogues?limit=100&duration=1d&type=honeypot",
      name: "honeypot aps"
    }, {
      url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/insights/rogues?limit=100&duration=1d&type=rogue",
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
  forgeSiteApLastConfig(host: string, device_type: string): void {
    const mac = this.getMac(this.obj_id)
    if (device_type == "ap" && mac) {
      this.quick_links.push({
        url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/devices/last_config/search?" + device_type + "=" + mac,
        name: "Last Config"
      })
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
  forgeSite(host: string, extra_params: string = null): void {
    this.obj_name = "site"
    if (extra_params) {
      extra_params = "?" + extra_params;
    } else {
      extra_params = "";
    }
    this.quick_links.push({
      url: "https://api." + host + "/api/v1/sites/" + this.site_id,
      name: "site info"
    }, {
      url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/setting",
      name: "site setting"
    }, {
      url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/stats" + extra_params,
      name: "site stats"
    }, {
      url: "https://api." + host + "/api/v1/sites/" + this.site_id + "/devices/events/search" + extra_params,
      name: "site devices events"
    })
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
  ////////////////////// COMMON URL FUNCTION DISPATCHER
  commonUrl(res: RegExpExecArray): void {
    this.org_id = res.groups.org_id;
    let extra_params = null
    const uuid_re = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/
    console.log(res.groups)
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
          this.forgeSiteApLastConfig(res.groups.host, res.groups.obj);
          break;
        case "switch":
          const is_uuid = uuid_re.test(this.obj_id)
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
          this.setName(res.groups.obj.substr(0, res.groups.obj.length - 1), res.groups.detail);
          this.forgeSiteObject("pcaps", res.groups.host, res.groups.detail);
          break;
        // ORG
        case "orgtags":
          this.setName("wxtag", res.groups.detail);
          this.forgeOrgObject("wxtags", res.groups.host, res.groups.detail);
          break;
        case "misttunnels":
          this.setName("mxtunnel", res.groups.detail);
          this.forgeOrgObject("mxtunnels", res.groups.host, res.groups.detail);
          break;
        case "switchtemplate":
          this.setName(res.groups.obj, res.groups.detail);
          this.forgeOrgObject("networktemplates", res.groups.host, res.groups.detail);
          break;
        case "deviceprofiles":
          this.setName(res.groups.obj.substr(0, res.groups.obj.length - 1), res.groups.detail);
          this.forgeOrgObject("deviceprofiles", res.groups.host, res.groups.detail);
          break;
        case "org":
          this.setName("org", res.groups.detail);
          this.forgeOrg(res.groups.host);
          break;
        case "configuration":
          this.setName("site", res.groups.detail);
          this.forgeSite(res.groups.host, this.obj_id);
          break;
        case "rftemplates":
        case "templates":
          this.setName(res.groups.obj.substr(0, res.groups.obj.length - 1), res.groups.detail);
          this.forgeOrgObject(res.groups.obj, res.groups.host, res.groups.detail);
          break;
        case "auditlogs":
          this.setName(res.groups.obj.substr(0, res.groups.obj.length - 1), res.groups.detail);
          this.forgeOrgObject("logs", res.groups.host, res.groups.detail);
          break;
        case "apinventory":
          this.obj_name = "inventory";
          this.forgeOrgObject("inventory", res.groups.host, res.groups.detail);
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
      }
    }
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
          this.forgeSiteApLastConfig(res.groups.host, 'ap');
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
          this.forgeSite(res.groups.host, extra_params);
          break;
      }
    }
  }


  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// ORG SLE URL FUNCTION DISPATCHER

  orgSleUrl(res: RegExpExecArray): void {
    console.log(res)
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
    console.log(res)
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
    }else {
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
            "wan-link-health"
          ]
          break;
      }
      this.forgeSlehUrl(res.groups.host, scope, res.groups.site_id, res.groups.scope_id, sles, extra_params)
    }
  }
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  // API URL ENTRYPOINT

  generateApiUrl() {
    const orgsle_re = /https:\/\/manage\.(?<host>[a-z0-1.]*mist\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!dashboard\/(?<scope>siteComparison|wiredSiteComparison|wanSiteComparison)\/(?<sle>[a-z-]*)\/(?<worstsle>[a-z-]*)\/([a-z-_]*)\/(?<period>[0-9a-z-]*)\/(?<start>[0-9]*)\/(?<stop>[0-9]*)/iys;
    const sle_re = /https:\/\/manage\.(?<host>[a-z0-1.]*mist\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!dashboard\/(?<detail>serviceLevels|wiredserviceLevels|wanserviceLevels)\/(?<scope>[a-z-]*)\/(?<scope_id>[a-f0-9-]*)\/(?<period>[0-9a-z-]*)\/(?<start>[0-9]*)\/(?<stop>[0-9]*)\/(?<site_id>[a-f0-9-]*)/iys;
    const insights_re = /https:\/\/(manage|integration)\.(?<host>[a-z0-1.]*mist\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!dashboard\/insights\/((?<obj>[a-z]+)\/)?((?<obj_id>[a-z0-9-]+)\/)((?<period>[a-z0-9]+)\/)?((?<start>[0-9]*)\/)?((?<stop>[0-9]*)\/)?(?<site_id>[0-9a-f-]*)?/iys;
    const common_re = /https:\/\/(manage|integration)\.(?<host>[a-z0-1.]*mist\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!(?<obj>[a-z]+)\/?((?<detail>detail|template|site|rfTemplate|admin|edgedetail|clusterdetail|new|view)\/)?([0-9]\/)?((?<obj_id>[0-9a-z_-]*)\/)?(?<site_id>[0-9a-f-]*)?/yis;

    const orgsle = orgsle_re.exec(this.tabUrl);
    const sle = sle_re.exec(this.tabUrl);
    const insights = insights_re.exec(this.tabUrl);
    const common = common_re.exec(this.tabUrl);
    if (orgsle) {
      this.orgSleUrl(orgsle);
    } else if (sle) {
      this.sleUrl(sle);
    } else if (insights) {
      this.insightsUrl(insights);
    } else if (common) {
      this.commonUrl(common);
    }

    this._cd.detectChanges()
  }


  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  // OTHER FUNCTIONS
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  openApiTab(url: string) {
    chrome.tabs.create({ url: url });
  }

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

  openTab(target: string) {
    let dest_url = ""
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
    }
    if (dest_url) {
      chrome.tabs.create({ url: dest_url });
    }
  }
}
