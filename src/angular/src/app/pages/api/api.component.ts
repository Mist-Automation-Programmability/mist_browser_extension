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


  ////////////
  // API URL
  ////////////
  forgeOrg(groups: { [key: string]: string; }, obj: string, extra_param: string): void {
    let url = "";
    if (groups.detail) {
      // set IDS
      this.obj_id = groups.uuid_1;
      // set QUICK LINK
      url = "https://api." + groups.host + "/api/v1/orgs/" + groups.org_id + "/" + obj + "/" + groups.uuid_1;
      this.quick_links.push({ url: url, name: this.obj_name })
    } else {
      // set QUICK LINK
      url = "https://api." + groups.host + "/api/v1/orgs/" + groups.org_id + "/" + obj;
      if (extra_param) url += "?" + extra_param
      if (this.obj_name == "switch") {
        this.obj_name = "switches"
      } else {
        this.obj_name += "s"
      }
      this.quick_links.push({ url: url, name: this.obj_name})
    }
  }
  forgeOrgStats(groups: { [key: string]: string; }, obj: string, extra_param: string): void {
    let url = "";
    if (groups.detail && groups.detail != "new") {
      // set IDS
      this.obj_id = groups.uuid_1;
      // set QUICK LINK
      url = "https://api." + groups.host + "/api/v1/orgs/" + groups.org_id + "/stats/" + obj + "/" + groups.uuid_1;
      this.quick_links.push({ url: url, name: this.obj_name + " STATS" })
    }
  }
  forgeSite(groups: { [key: string]: string; }, obj: string, extra_param: string): void {
    let url = "";
    if (groups.detail && groups.detail != "new") {
      // set IDS
      this.obj_id = groups.uuid_1;
      this.site_id = groups.uuid_2;
      // set QUICK LINK
      url = "https://api." + groups.host + "/api/v1/sites/" + groups.uuid_2 + "/" + obj + "/" + groups.uuid_1;
      this.quick_links.push({ url: url, name: this.obj_name })
      if (this.obj_name == "switch") {
        this.quick_links.push({ url: url + "/config_cmd", name: this.obj_name + " CMDS" })
      }
    } else {
      // set IDS
      this.site_id = groups.uuid_1;
      // set QUICK LINK
      url = "https://api." + groups.host + "/api/v1/sites/" + groups.uuid_1 + "/" + obj;
      if (extra_param) url += "?" + extra_param      
      if (this.obj_name == "switch") {
        this.obj_name = "switches"
      } else {
        this.obj_name += "s"
      }
      this.quick_links.push({ url: url, name: this.obj_name})
    }
  }
  forgeSiteStats(groups: { [key: string]: string; }, obj: string, extra_param: string): void {
    let url = "";
    if (groups.detail && groups.detail != "new") {
      // set IDS
      this.obj_id = groups.uuid_1;
      this.site_id = groups.uuid_2;
      // set QUICK LINK
      url = "https://api." + groups.host + "/api/v1/sites/" + groups.uuid_2 + "/stats/" + obj + "/" + groups.uuid_1;
      this.quick_links.push({ url: url, name: this.obj_name + " STATS" })
    } else {
      // set IDS
      this.site_id = groups.uuid_1;
      // set QUICK LINK
      url = "https://api." + groups.host + "/api/v1/sites/" + groups.uuid_1 + "/stats/" + obj;
      if (extra_param) url += "?" + extra_param
      this.quick_links.push({ url: url, name: this.obj_name + " STATS" })
    }
  }

  forgeDeviceEvents(groups: { [key: string]: string; }, obj: string, extra_param: string): void {
    let url = "";
    if (groups.detail && groups.detail != "new") {
    // MAC
    const splitted_uuid = groups.uuid_1.split("-")
    const mac = splitted_uuid[splitted_uuid.length - 1]
    // set QUICK LINK
    url = "https://api." + groups.host + "/api/v1/sites/" + groups.uuid_2 + "/devices/events/search?limit=1000&device_type=switch&duration=1d&mac=" + mac
    this.quick_links.push({ url: url, name: this.obj_name + " EVENTS" })
  } else {
    url = "https://api." + groups.host + "/api/v1/sites/" + groups.uuid_1 + "/devices/events/search?limit=1000&device_type=switch&duration=1d&device_type=" + obj
    this.quick_links.push({ url: url, name: this.obj_name + " EVENTS" })
    }
  }


  generateApiUrl() {
    const re = /https:\/\/manage\.(?<host>[a-z0-1.]*mist\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!(?<obj>[a-z]+)\/?(?<detail>detail|template|site|rfTemplate|admin|edgedetail|clusterdetail|new)?\/?([0-9])*?\/?(?<uuid_1>[0-9a-f-]*)?\/?(?<uuid_2>[0-9a-f-]*)?/gi;
    let res = re.exec(this.tabUrl);
    if (res) {
      this.org_id = res.groups.org_id;
      if (res.groups.host && res.groups.org_id && res.groups.obj) {
        switch (res.groups.obj.toLowerCase()) {
          // SITE
          case "ap":
          case "switch":
          case "gateway":
            this.obj_name = res.groups.obj;
            this.forgeSite(res.groups, "devices", "type=" + res.groups.obj);
            this.forgeSiteStats(res.groups, "devices", "type=" + res.groups.obj);
            this.forgeDeviceEvents(res.groups, "devices", "type=" + res.groups.obj);
            break;
          case "assets":
            this.obj_name = res.groups.obj.substr(0, res.groups.obj.length - 1);
            this.forgeSite(res.groups, res.groups.obj, null);
            this.forgeSiteStats(res.groups, res.groups.obj, null);
            break;
          case "wlan":
            this.obj_name = res.groups.obj;
            this.forgeSite(res.groups, "wlans", null);
            break;
          case "tags":
            this.obj_name = "wxtag";
            this.forgeSite(res.groups, "wxtags", null);
            break;
          case "psk":
            this.obj_name = res.groups.obj;
            this.forgeSite(res.groups, "psks", null);
            break;
          // case "siteedge":
          //   this.forgeSite(res.groups, "mxedges", null);
          //    this.forgeSiteStats(res.groups, "mxedges", null);
          //   break;
          case "tunnels":
            this.obj_name = "wxtunnel";
            this.forgeSite(res.groups, "wxtunnels", null);
            this.forgeSiteStats(res.groups, "wxtunnels", null);
            break;
          case "clients":
          case "sdkclients":
            this.obj_name = res.groups.obj.substr(0, res.groups.obj.length - 1);
            this.forgeSiteStats(res.groups, res.groups.obj, null);
            break;
          case "wxlan":
            this.obj_name = "wxrule";
            this.forgeSite(res.groups, "wxrules", null);
            this.forgeSiteStats(res.groups, "wxrules", null);
            break;
          // case "security":
          //   this.forgeSite(res.groups, "wxrules", null);
          //   this.forgeSiteStats(res.groups, "wxrules", null);
          //   break;
          case "switchconfig":
            this.quick_links.push({
              url: "https://api." + res.groups.host + "/api/v1/sites/" + res.groups.uuid_1 + "/setting/derived",
              name: "switchconfig"
            })
            break;
          case "pcap":
            this.obj_name = res.groups.obj.substr(0, res.groups.obj.length - 1);
            this.forgeSite(res.groups, "pcaps", null);
            break;
          // ORG
          case "orgtags":
            this.obj_name = "wxtag";
            this.forgeOrg(res.groups, "wxtags", null);
            break;
          case "misttunnels":
            this.obj_name = "mxtunnel";
            this.forgeOrg(res.groups, "mxtunnels", null);
            break;
          case "switchtemplate":
            this.obj_name = res.groups.obj;
            this.forgeOrg(res.groups, "networktemplates", null);
            break;
          case "deviceprofiles":
            this.obj_name = res.groups.obj.substr(0, res.groups.obj.length - 1);
            this.forgeOrg(res.groups, "deviceprofiles", null);
            break;
          case "org":
            this.quick_links.push({
              url : "https://api." + res.groups.host + "/api/v1/orgs/" + res.groups.org_id + "/setting",
              name: "org setting"
            },{
              url : "https://api." + res.groups.host + "/api/v1/orgs/" + res.groups.org_id + "/stats",
              name: "org stats"
            })
            break;
          case "configuration":
            this.obj_name = "site"
            this.quick_links.push({
              url:  "https://api." + res.groups.host + "/api/v1/sites/" + res.groups.uuid_1,
              name: "site info"
            },{
              url:  "https://api." + res.groups.host + "/api/v1/sites/" + res.groups.uuid_1 + "/setting",
              name: "site setting"
            },{
              url:  "https://api." + res.groups.host + "/api/v1/sites/" + res.groups.uuid_1 + "/stats",
              name: "site stats"
            })
            break;
          case "rftemplates":
          case "templates":
            this.obj_name = res.groups.obj.substr(0, res.groups.obj.length - 1);
            this.forgeOrg(res.groups, res.groups.obj, null);
            break;
          case "apinventory":
            this.obj_name = "inventory";
            this.forgeOrg(res.groups, "inventory", null);
            break;
          case "adminconfig":
            this.obj_name = "admin";
            this.forgeOrg(res.groups, "admins", null);
            break;
          case "auditLogs":
            this.obj_name = res.groups.obj.substr(0, res.groups.obj.length - 1);
            this.forgeOrg(res.groups, "logs", null);
            break;
          case "subscription":
            this.obj_name = res.groups.obj
            this.forgeOrg(res.groups, "licenses", null);
            break;
          case "edge":
            if (res.groups.detail == "edgedetail") {
              this.obj_name = "mxedge";
              this.forgeOrg(res.groups, "mxedges", null);
              this.forgeOrgStats(res.groups, "mxedges", null);
            } else if (res.groups.detail == "clusterdetail") {
              this.obj_name = "mxcluster";
              this.forgeOrg(res.groups, "mxclusters", null);
            } else {
              this.quick_links.push({
                url:  "https://api." + res.groups.host + "/api/v1/orgs/" + res.groups.org_id + "/mxedges",
                name: "mxedges"
              },{
                url:  "https://api." + res.groups.host + "/api/v1/orgs/" + res.groups.org_id + "/mxclusters",                
                name: "mxclusters"
              })
            }
            break;
        }
      }
    }
    this._cd.detectChanges()
  }

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
