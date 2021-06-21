import { group } from '@angular/animations';
import { Component, Inject, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TAB_URL } from '../../providers/tab-url.provider';

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
    const splitted_uuid = uuid.split("-")
    return splitted_uuid[splitted_uuid.length - 1]
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// COMMON ORG FUNCTIONS
  forgeOrgObject(obj_name: string, host: string, detail: string, org_id: string, uuid_1: string = null, extra_param: string = null): void {
    let url = "";
    if (detail && detail != "new") {
      // set IDS
      this.obj_id = uuid_1;
      // set QUICK LINK
      url = "https://api." + host + "/api/v1/orgs/" + org_id + "/" + obj_name + "/" + uuid_1;
      this.quick_links.push({ url: url, name: this.obj_name })
    } else {
      // set QUICK LINK
      url = "https://api." + host + "/api/v1/orgs/" + org_id + "/" + obj_name;
      if (extra_param) url += "?" + extra_param
      if (this.obj_name == "switch") {
        this.obj_name = "switches"
      } else {
        this.obj_name += "s"
      }
      this.quick_links.push({ url: url, name: this.obj_name })
    }
  }

  forgeOrgObjectStats(obj_name: string, host: string, detail: string, org_id: string, uuid_1: string = null, extra_param: string = null): void {
    let url = "";
    if (detail && detail != "new") {
      // set IDS
      this.obj_id = uuid_1;
      // set QUICK LINK
      url = "https://api." + host + "/api/v1/orgs/" + org_id + "/stats/" + obj_name + "/" + uuid_1;
      if (extra_param) url += "?" + extra_param
      this.quick_links.push({ url: url, name: this.obj_name + " STATS" })
    }
  }


  forgeOrgObjectEvents(obj_name: string, host: string, detail: string, org_id: string, uuid_1: string = null, extra_param: string = null): void {
    let url = "";
    if (detail && detail != "new") {
      // MAC
      const mac = this.getMac(uuid_1);
      // set QUICK LINK
      url = "https://api." + host + "/api/v1/orgs/" + org_id + "/" + obj_name + "/events/search?limit=1000&mac=" + mac;
      if (!extra_param) {
        url += "&duration=1d"
      } else {
        url += "&" + extra_param
      }
      this.quick_links.push({ url: url, name: this.obj_name + " EVENTS" })
    } else {
      url = "https://api." + host + "/api/v1/orgs/" + org_id + "/" + obj_name + "/events/search?limit=1000&device_type=" + obj_name;
      if (!extra_param) {
        url += "&duration=1d"
      } else {
        url += "&" + extra_param
      }
      this.quick_links.push({ url: url, name: this.obj_name + " EVENTS" })
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// COMMON SITE FUNCTIONS
  forgeSiteObject(obj_name: string, host: string, detail: string, uuid_1: string, uuid_2: string = null, extra_param: string = null): void {
    let url = "";
    if (detail && detail != "new") {
      // set IDS
      this.obj_id = uuid_1;
      this.site_id = uuid_2;
      // set QUICK LINK
      url = "https://api." + host + "/api/v1/sites/" + uuid_2 + "/" + obj_name + "/" + uuid_1;
      this.quick_links.push({ url: url, name: this.obj_name })
      if (this.obj_name == "switch") {
        this.quick_links.push({ url: url + "/config_cmd", name: this.obj_name + " CMDS" })
      }
    } else {
      // set IDS
      this.site_id = uuid_1;
      // set QUICK LINK
      url = "https://api." + host + "/api/v1/sites/" + uuid_1 + "/" + obj_name;
      if (extra_param) url += "?" + extra_param
      if (this.obj_name == "switch") {
        this.obj_name = "switches"
      } else {
        this.obj_name += "s"
      }
      this.quick_links.push({ url: url, name: this.obj_name })
    }
  }

  forgeSiteObjectStats(obj_name: string, host: string, detail: string, uuid_1: string, uuid_2: string = null, extra_param: string = null): void {
    let url = "";
    if (detail && detail != "new") {
      // set IDS
      this.obj_id = uuid_1;
      this.site_id = uuid_2;
      // set QUICK LINK
      url = "https://api." + host + "/api/v1/sites/" + uuid_2 + "/stats/" + obj_name + "/" + uuid_1;
      if (extra_param) url += "?" + extra_param
      this.quick_links.push({ url: url, name: this.obj_name + " STATS" })
    } else {
      // set IDS
      this.site_id = uuid_1;
      // set QUICK LINK
      url = "https://api." + host + "/api/v1/sites/" + uuid_1 + "/stats/" + obj_name;
      if (extra_param) url += "?" + extra_param
      this.quick_links.push({ url: url, name: this.obj_name + " STATS" })
    }
  }

  forgeSiteObjectEvents(obj_name: string, host: string, detail: string, uuid_1: string, uuid_2: string = null, extra_param: string = null): void {
    let url = "";
    if (detail && detail != "new") {
      // MAC
      const mac = this.getMac(uuid_1);
      // set QUICK LINK
      url = "https://api." + host + "/api/v1/sites/" + uuid_2 + "/" + obj_name + "/events/search?limit=1000&mac=" + mac;
      if (!extra_param) {
        url += "&duration=1d"
      } else {
        url += "&" + extra_param
      }
      this.quick_links.push({ url: url, name: this.obj_name + " EVENTS" })
    } else {
      url = "https://api." + host + "/api/v1/sites/" + uuid_1 + "/" + obj_name + "/events/search?limit=1000&device_type=" + obj_name;
      if (!extra_param) {
        url += "&duration=1d"
      } else {
        url += "&" + extra_param
      }
      this.quick_links.push({ url: url, name: this.obj_name + " EVENTS" })
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// SITE SECURITY FUNCTION
  forgeSiteSecurity(host: string, uuid_1: string): void {
    this.site_id = uuid_1;
    this.quick_links.push({
      url: "https://api." + host + "/api/v1/sites/" + uuid_1 + "/rogues/events/search?limit=100&duration=1d",
      name: "rogues events"
    }, {
      url: "https://api." + host + "/api/v1/sites/" + uuid_1 + "/insights/rogues?limit=100&duration=1d&type=honeypot",
      name: "honeypot aps"
    }, {
      url: "https://api." + host + "/api/v1/sites/" + uuid_1 + "/insights/rogues?limit=100&duration=1d&type=rogue",
      name: "rogues aps"
    }, {
      url: "https://api." + host + "/api/v1/sites/" + uuid_1 + "/insights/rogues?limit=100&duration=1d&type=spoof",
      name: "spoof aps"
    }, {
      url: "https://api." + host + "/api/v1/sites/" + uuid_1 + "/insights/rogues?limit=100&duration=1d&type=others",
      name: "others aps"
    }, {
      url: "https://api." + host + "/api/v1/sites/" + uuid_1 + "/insights/rogues/clients?limit=100&duration=1d",
      name: "rogues clients"
    })
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// SITE SWITCH CONF FUNCTION
  forgeSiteSwitchConfig(host: string, uuid_1: string): void {
    this.site_id = uuid_1;
    this.quick_links.push({
      url: "https://api." + host + "/api/v1/sites/" + uuid_1 + "/setting/derived",
      name: "switchconfig"
    })
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
  ////////////////////// SITE OBJ FUNCTION
  forgeSite(host: string, uuid_1: string, extra_params: string = null): void {
    this.site_id = uuid_1;
    this.obj_name = "site"
    if (extra_params) {
      extra_params = "?"+extra_params;
    } else {
      extra_params = "";
    }
    this.quick_links.push({
      url: "https://api." + host + "/api/v1/sites/" + uuid_1,
      name: "site info"
    }, {
      url: "https://api." + host + "/api/v1/sites/" + uuid_1 + "/setting",
      name: "site setting"
    }, {
      url: "https://api." + host + "/api/v1/sites/" + uuid_1 + "/stats" + extra_params,
      name: "site stats"
    }, {
      url: "https://api." + host + "/api/v1/sites/" + uuid_1 + "/devices/events/search" + extra_params,
      name: "site devices events"
    })
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// MIST EDGEFUNCTION
  forgeEdge(host: string, detail: string, uuid_1: string): void {
    if (detail == "edgedetail") {
      this.obj_name = "mxedge";
      this.forgeOrgObject("mxedges", host, detail, this.org_id, uuid_1);
      this.forgeOrgObjectStats("mxedges", host, detail, this.org_id, uuid_1);
      this.forgeSiteObjectEvents("mxedges", host, detail, this.org_id, uuid_1);
    } else if (detail == "clusterdetail") {
      this.obj_name = "mxcluster";
      this.forgeOrgObject("mxclusters", host, detail, this.org_id, uuid_1);
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
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// COMMON URL FUNCTION DISPATCHER
  commonUrl(res: RegExpExecArray): void {
    this.org_id = res.groups.org_id;
    if (res.groups.host && res.groups.org_id && res.groups.obj) {
      switch (res.groups.obj.toLowerCase()) {
        // SITE
        case "ap":
        case "switch":
        case "gateway":
          this.obj_name = res.groups.obj;
          this.forgeSiteObject("devices", res.groups.host, res.groups.detail, res.groups.uuid_1, res.groups.uuid_2, "type=" + res.groups.obj);
          this.forgeSiteObjectStats("devices", res.groups.host, res.groups.detail, res.groups.uuid_1, res.groups.uuid_2, "type=" + res.groups.obj);
          this.forgeSiteObjectEvents("devices", res.groups.host, res.groups.detail, res.groups.uuid_1, res.groups.uuid_2, "type=" + res.groups.obj);
          break;
        case "assets":
          this.obj_name = res.groups.obj.substr(0, res.groups.obj.length - 1);
          this.forgeSiteObject(res.groups.obj, res.groups.host, res.groups.detail, res.groups.uuid_1, res.groups.uuid_2);
          this.forgeSiteObjectStats(res.groups.obj, res.groups.host, res.groups.detail, res.groups.uuid_1, res.groups.uuid_2);
          break;
        case "wlan":
          this.obj_name = res.groups.obj;
          this.forgeSiteObject("wlans", res.groups.host, res.groups.detail, res.groups.uuid_1, res.groups.uuid_2);
          break;
        case "tags":
          this.obj_name = "wxtag";
          this.forgeSiteObject("wxtags", res.groups.host, res.groups.detail, res.groups.uuid_1, res.groups.uuid_2);
          break;
        case "psk":
          this.obj_name = res.groups.obj;
          this.forgeSiteObject("psks", res.groups.host, res.groups.detail, res.groups.uuid_1, res.groups.uuid_2);
          break;
        // case "siteedge":
        //   this.forgeSiteObject(res.groups, "mxedges", null);
        //    this.forgeSiteObjectStats(res.groups, "mxedges", null);
        //   break;
        case "tunnels":
          this.obj_name = "wxtunnel";
          this.forgeSiteObject("wxtunnels", res.groups.host, res.groups.detail, res.groups.uuid_1, res.groups.uuid_2);
          this.forgeSiteObjectStats("wxtunnels", res.groups.host, res.groups.detail, res.groups.uuid_1, res.groups.uuid_2);
          break;
        case "clients":
        case "sdkclients":
          this.obj_name = res.groups.obj.substr(0, res.groups.obj.length - 1);
          this.forgeSiteObjectStats(res.groups.obj, res.groups.host, res.groups.detail, res.groups.uuid_1, res.groups.uuid_2);
          break;
        case "wxlan":
          this.obj_name = "wxrule";
          this.forgeSiteObject("wxrules", res.groups.host, res.groups.detail, res.groups.uuid_1, res.groups.uuid_2);
          this.forgeSiteObjectStats("wxrules", res.groups.host, res.groups.detail, res.groups.uuid_1, res.groups.uuid_2,);
          break;
        case "security":
          this.forgeSiteSecurity(res.groups.host, res.groups.uuid_1)
          break;
        case "switchconfig":
          this.forgeSiteSwitchConfig(res.groups.host, res.groups.uuid_1);
          break;
        case "pcap":
          this.obj_name = res.groups.obj.substr(0, res.groups.obj.length - 1);
          this.forgeSiteObject("pcaps", res.groups.host, res.groups.detail, res.groups.uuid_1, res.groups.uuid_2);
          break;
        // ORG
        case "orgtags":
          this.obj_name = "wxtag";
          this.forgeOrgObject("wxtags", res.groups.host, res.groups.detail, res.groups.org_id, res.groups.uuid_1);
          break;
        case "misttunnels":
          this.obj_name = "mxtunnel";
          this.forgeOrgObject("mxtunnels", res.groups.host, res.groups.detail, res.groups.org_id, res.groups.uuid_1);
          break;
        case "switchtemplate":
          this.obj_name = res.groups.obj;
          this.forgeOrgObject("networktemplates", res.groups.host, res.groups.detail, res.groups.org_id, res.groups.uuid_1);
          break;
        case "deviceprofiles":
          this.obj_name = res.groups.obj.substr(0, res.groups.obj.length - 1);
          this.forgeOrgObject("deviceprofiles", res.groups.host, res.groups.detail, res.groups.org_id, res.groups.uuid_1);
          break;
        case "org":
          this.forgeOrg(res.groups.host);
          break;
        case "configuration":
          this.forgeSite(res.groups.host, res.groups.uuid_1);
          break;
        case "rftemplates":
        case "templates":
          this.obj_name = res.groups.obj.substr(0, res.groups.obj.length - 1);
          this.forgeOrgObject(res.groups.obj, res.groups.host, res.groups.detail, res.groups.org_id, res.groups.uuid_1);
          break;
        case "auditlogs":
          this.obj_name = res.groups.obj.substr(0, res.groups.obj.length - 1);
          this.forgeOrgObject("logs", res.groups.host, res.groups.detail, res.groups.org_id, res.groups.uuid_1);
          break;
        case "apinventory":
          this.obj_name = "inventory";
          this.forgeOrgObject("inventory", res.groups.host, res.groups.detail, res.groups.org_id, res.groups.uuid_1);
          break;
        case "adminconfig":
          this.obj_name = "admin";
          this.forgeOrgObject("admins", res.groups.host, res.groups.detail, res.groups.org_id, res.groups.uuid_1);
          break;

        case "subscription":
          this.obj_name = res.groups.obj
          this.forgeOrgObject("licenses", res.groups.host, res.groups.detail, res.groups.org_id, res.groups.uuid_1);
          break;
        case "edge":
          this.forgeEdge(res.groups.host, res.groups.detail, res.groups.uuid_1)
          break;
      }
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// INSIGHTS URL FUNCTION DISPATCHER
  insightsUrl(res: RegExpExecArray): void {
    console.log(res)
    this.org_id = res.groups.org_id;
    this.site_id = res.groups.site_id;
    this.obj_id = res.groups.obj_id;
    let extra_params = null;
    if (res.groups.start && res.groups.stop) {
      extra_params = "start=" + res.groups.start + "&end=" + res.groups.stop;
    }
    if (res.groups.host && res.groups.org_id ) {
      switch (res.groups.obj) {
        case "device":
          this.obj_name = "ap";
          this.forgeSiteObject("devices", res.groups.host, "detail", res.groups.uuid_1, res.groups.uuid_2);
          this.forgeSiteObjectStats("devices", res.groups.host, "detail", res.groups.uuid_1, res.groups.uuid_2, extra_params);
          this.forgeSiteObjectEvents("devices", res.groups.host, "detail", res.groups.uuid_1, res.groups.uuid_2, extra_params);
          break;
        case "client":
          this.obj_name = "client";
          this.forgeSiteObject("clients", res.groups.host, "detail", res.groups.uuid_1, res.groups.uuid_2);
          this.forgeSiteObjectStats("clients", res.groups.host, "detail", res.groups.uuid_1, res.groups.uuid_2, extra_params);
          this.forgeSiteObjectEvents("clients", res.groups.host, "detail", res.groups.uuid_1, res.groups.uuid_2, extra_params);
          break;
        case "juniperswitch":
          this.obj_name = "switch";
          this.forgeSiteObject("devices", res.groups.host, "detail", res.groups.uuid_1, res.groups.uuid_2);
          this.forgeSiteObjectStats("devices", res.groups.host, "detail", res.groups.uuid_1, res.groups.uuid_2, extra_params);
          this.forgeSiteObjectEvents("devices", res.groups.host, "detail", res.groups.uuid_1, res.groups.uuid_2, extra_params);
          break;
        case "junipergateway":
          this.obj_name = "gateway";
          this.forgeSiteObject("devices", res.groups.host, "detail", res.groups.uuid_1, res.groups.uuid_2);
          this.forgeSiteObjectStats("devices", res.groups.host, "detail", res.groups.uuid_1, res.groups.uuid_2, extra_params);
          this.forgeSiteObjectEvents("devices", res.groups.host, "detail", res.groups.uuid_1, res.groups.uuid_2, extra_params);
          break;
        case "wiredclient":
          this.obj_name = "wired client";
          this.forgeSiteObject("wired_clients", res.groups.host, "detail", res.groups.uuid_1, res.groups.uuid_2);
          this.forgeSiteObjectStats("wired_clients", res.groups.host, "detail", res.groups.uuid_1, res.groups.uuid_2, extra_params);
          this.forgeSiteObjectEvents("wired_clients", res.groups.host, "detail", res.groups.uuid_1, res.groups.uuid_2, extra_params);
          break;
        case "edge":
          this.obj_name = "mxedge";
          this.forgeSiteObject("mxedges", res.groups.host, "detail", res.groups.uuid_1, res.groups.uuid_2);
          this.forgeSiteObjectStats("mxedges", res.groups.host, "detail", res.groups.uuid_1, res.groups.uuid_2, extra_params);
          this.forgeSiteObjectEvents("mxedges", res.groups.host, "detail", res.groups.uuid_1, res.groups.uuid_2, extra_params);
        case "site":
        case undefined:
          this.forgeSite(res.groups.host, res.groups.uuid_1, extra_params);
          break;
      }
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  // API URL ENTRYPOINT
  
  generateApiUrl() {
    const insights_re = /https:\/\/manage\.(?<host>[a-z0-1.]*mist\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!dashboard\/insights\/(?<obj>[a-z]+)?\/?(?<uuid_1>[a-z0-9-]+)\/?(?<period>[a-z0-9]+)?\/?(?<start>[0-9]*)?\/?(?<stop>[0-9]*)?\/?(?<uuid_2>[0-9a-f-]*)?/iys;
    const common_re = /https:\/\/manage\.(?<host>[a-z0-1.]*mist\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!(?<obj>[a-z]+)\/?(?<detail>detail|template|site|rfTemplate|admin|edgedetail|clusterdetail|new)?\/?([0-9])*?\/?(?<uuid_1>[0-9a-f-]*)?\/?(?<uuid_2>[0-9a-f-]*)?/iys;

    const insights = insights_re.exec(this.tabUrl)
    const common = common_re.exec(this.tabUrl)
    if (insights) {
      this.insightsUrl(insights)
    } else if (common) {
      this.commonUrl(common)
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
