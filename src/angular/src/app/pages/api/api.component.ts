import { Component, Inject, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TAB_URL } from '../../providers/tab-url.provider';

@Component({
  selector: 'app-api',
  templateUrl: 'api.component.html',
  styleUrls: ['api.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApiComponent implements OnInit {
  message: string;
  mist_url: string = "";

  api_url_obj: string = "";
  api_url_stats_obj: string = "";

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
  forgeOrg(groups: { [key: string]: string; }, obj: string, extra_param: string): string {
    let url = "";
    this.obj_name = obj.substr(0, obj.length - 1).toUpperCase();
    if (groups.detail) {
      this.obj_id = groups.uuid_1;
      url = "https://api." + groups.host + "/api/v1/orgs/" + groups.org_id + "/" + obj + "/" + groups.uuid_1;
    } else {
      url = "https://api." + groups.host + "/api/v1/orgs/" + groups.org_id + "/" + obj;
      if (extra_param) url += "?" + extra_param
    }
    return url;
  }
  forgeOrgStats(groups: { [key: string]: string; }, obj: string, extra_param: string): string {
    let url = "";
    if (groups.detail && groups.detail != "new") {
      this.obj_id = groups.uuid_1;
      url = "https://api." + groups.host + "/api/v1/orgs/" + groups.org_id + "/stats/" + obj + "/" + groups.uuid_1;
    }
    return url;
  }
  forgeSite(groups: { [key: string]: string; }, obj: string, extra_param: string): string {
    let url = "";
    this.obj_name = obj.substr(0, obj.length - 1).toUpperCase();
    if (groups.detail && groups.detail != "new") {
      this.obj_id = groups.uuid_1;
      this.site_id = groups.uuid_2;
      url = "https://api." + groups.host + "/api/v1/sites/" + groups.uuid_2 + "/" + obj + "/" + groups.uuid_1;
    } else {
      this.site_id = groups.uuid_1;
      url = "https://api." + groups.host + "/api/v1/sites/" + groups.uuid_1 + "/" + obj;
      if (extra_param) url += "?" + extra_param
    }
    return url;
  }
  forgeSiteStats(groups: { [key: string]: string; }, obj: string, extra_param: string): string {
    let url = "";
    this.obj_name = obj.substr(0, obj.length - 1).toUpperCase();
    if (groups.detail && groups.detail != "new") {
      this.obj_id = groups.uuid_1;
      this.site_id = groups.uuid_2;
      url = "https://api." + groups.host + "/api/v1/sites/" + groups.uuid_2 + "/stats/" + obj + "/" + groups.uuid_1;
    } else {
      this.site_id = groups.uuid_1;
      url = "https://api." + groups.host + "/api/v1/sites/" + groups.uuid_1 + "/stats/" + obj;
      if (extra_param) url += "?" + extra_param
    }
    return url;
  }

  generateApiUrl() {
    this.api_url_obj = "";
    this.api_url_stats_obj = "";
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
            this.api_url_obj = this.forgeSite(res.groups, "devices", "type=" + res.groups.obj);
            this.api_url_stats_obj = this.forgeSiteStats(res.groups, "devices", "type=" + res.groups.obj);
            break;
          case "assets":
            this.api_url_obj = this.forgeSite(res.groups, res.groups.obj, null);
            this.api_url_stats_obj = this.forgeSiteStats(res.groups, res.groups.obj, null);
            break;
          case "wlan":
            this.api_url_obj = this.forgeSite(res.groups, "wlans", null);
            break;
          case "tags":
            this.api_url_obj = this.forgeSite(res.groups, "wxtags", null);
            break;
          case "psk":
            this.api_url_obj = this.forgeSite(res.groups, "psks", null);
            break;
          // case "siteedge":
          //   this.api_url_obj = this.forgeSite(res.groups, "mxedges", null);
          //   this.api_url_stats_obj = this.forgeSiteStats(res.groups, "mxedges", null);
          //   break;
          case "tunnels":
            this.api_url_obj = this.forgeSite(res.groups, "wxtunnels", null);
            this.api_url_stats_obj = this.forgeSiteStats(res.groups, "wxtunnels", null);
            break;
          case "clients":
          case "sdkclients":
            this.api_url_stats_obj = this.forgeSiteStats(res.groups, res.groups.obj, null);
            break;
          case "wxlan":
            this.api_url_obj = this.forgeSite(res.groups, "wxrules", null);
            this.api_url_stats_obj = this.forgeSiteStats(res.groups, "wxrules", null);
            break;
          case "security":
            this.api_url_obj = this.forgeSite(res.groups, "wxrules", null);
            this.api_url_stats_obj = this.forgeSiteStats(res.groups, "wxrules", null);
            break;
          case "switchconfig":
            this.api_url_obj = "https://api." + res.groups.host + "/api/v1/sites/" + res.groups.uuid_1 + "/setting"
            break;
          case "pcap":
            this.api_url_obj = this.forgeSite(res.groups, "pcaps", null);
            break;
          // ORG
          case "orgtags":
            this.api_url_obj = this.forgeOrg(res.groups, "wxtags", null);
            break;
          case "misttunnels":
            this.api_url_obj = this.forgeOrg(res.groups, "mxtunnels", null);
            break;
          case "switchtemplate":
            this.api_url_obj = this.forgeOrg(res.groups, "networktemplates", null);
            break;
          case "deviceprofiles":
            this.api_url_obj = this.forgeOrg(res.groups, "deviceprofiles", null);
            break;
          case "org":
            this.api_url_obj = "https://api." + res.groups.host + "/api/v1/orgs/" + res.groups.org_id + "/setting";
            break;
          case "configuration":
            this.api_url_obj = this.forgeOrg(res.groups, "sites", null);
            break;
          case "rftemplates":
          case "templates":
            this.api_url_obj = this.forgeOrg(res.groups, res.groups.obj, null);
            break;
          case "apinventory":
            this.api_url_obj = this.forgeOrg(res.groups, "inventory", null);
            break;
          case "adminconfig":
            this.api_url_obj = this.forgeOrg(res.groups, "admins", null);
            break;
          case "auditLogs":
            this.api_url_obj = this.forgeOrg(res.groups, "logs", null);
            break;
          case "subscription":
            this.api_url_obj = this.forgeOrg(res.groups, "licenses", null);
            break;
          case "edge":
            if (res.groups.detail == "edgedetail") {
              this.api_url_obj = this.forgeOrg(res.groups, "mxedges", null);
              this.api_url_stats_obj = this.forgeOrgStats(res.groups, "mxedges", null);
            } else if (res.groups.detail == "clusterdetail") {
              this.api_url_obj = this.forgeOrg(res.groups, "mxclusters", null);
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
