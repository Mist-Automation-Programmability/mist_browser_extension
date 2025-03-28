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
  selector: 'app-api-juniper-manage',
  templateUrl: '../manage/manage.component.html',
  styleUrls: [
    '../api.component.scss',
    '../../../scss/button.component.scss',
    '../../../scss/popup.component.scss',
    '../../../scss/notice.component.scss'
  ]
})
export class ApiJuniperManageComponent implements OnInit {

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
    "dc.ai.juniper.net",
    "dc.stage.ai.juniper.net",
    "jsi.ai.juniper.net",
    "jsi.stage.ai.juniper.net",
    "routing.ai.juniper.net",
    "routing.stage.ai.juniper.net",
  ]


  ngOnInit() {
    this._browser.getUrl
      .then(tabUrl => {
        this.tabUrl = tabUrl;
        this.generateApiUrl()
      })
      //   .error(error => { console.log(error) })
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
    const orgsle_re = /https:\/\/(?<host>(dc|jsi|routing)(\.stage)?\.ai\.juniper\.net)\/+admin\/\?org_id=(?<org_id>[0-9a-f-]{36})#!dashboard\/(?<scope>routingSiteComparison)\/(?<sle>[a-z-]*)\/(?<worstsle>[a-z-]*)\/([a-z-_]*)\/(?<period>[0-9a-z-]*)\/(?<start>[0-9]*)\/(?<stop>[0-9]*)/iys;
    const sle_details_re = /https:\/\/(?<host>(dc|jsi|routing)(\.stage)?\.ai\.juniper\.net)\/+admin\/\?org_id=(?<org_id>[0-9a-f-]{36})#!dashboard\/(?<detail>routingServiceLevels)\/page2\/(stats|timeline|dist|affected)\/[a-zA-Z-]+\/[a-zA-Z-]+\/(?<scope>site|juniperRouter)\/(?<scope_id>[a-f0-9-]*)\/(?<sle_name>[a-z-]*)\/(?<sle_sub_1>[a-zA-Z-]+)\/(?<sle_sub_2>[a-zA-Z-]+)(\/(?<period>[0-9a-z]*))?(\/(?<start>[0-9]*))?(\/(?<stop>[0-9]*))?\/(?<site_id>[a-f0-9-]*)/iys;
    const sle_re = /https:\/\/(?<host>(dc|jsi|routing)(\.stage)?\.ai\.juniper\.net)\/+admin\/\?org_id=(?<org_id>[0-9a-f-]{36})#!dashboard\/(?<detail>routingServiceLevels)(\/(?<scope>site|juniperRouter))?(\/(?<scope_id>[a-f0-9-]*))?(\/(?<period>[0-9a-z-]*))?(\/(?<start>[0-9]*))?(\/(?<stop>[0-9]*))?\/(?<site_id>[a-f0-9-]*)/iys;
    const insights_re = /https:\/\/(?<host>(dc|jsi|routing)(\.stage)?\.ai\.juniper\.net)\/+admin\/\?org_id=(?<org_id>[0-9a-f-]{36})#!dashboard\/insights\/((?<obj>[a-z]+)\/)?((?<obj_id>[a-z0-9-]+)\/)?((?<period>[a-z0-9]+)\/)?((?<start>[0-9]*)\/)?((?<stop>[0-9]*)\/)?(?<site_id>[0-9a-f-]{36})?/iys;
    const alarm_re = /https:\/\/(?<host>(dc|jsi|routing)(\.stage)?\.ai\.juniper\.net)\/+admin\/\?org_id=(?<org_id>[0-9a-f-]{36})#!alerts\/?(?<scope>org|site)?\/?(?<uuid>[0-9a-z-]*)\/?(?<period>[0-9a-z]*)?\/?(?<start>[0-9]*)?\/?(?<stop>[0-9]*)?\/?(?<show_ack>true|false)?\/?(?<group>[a-z%0-9]*)?\/?(?<show_crit>true|false)?\/?(?<show_warn>true|false)?\/?(?<show_info>true|false)?\/?(?<site_id>[0-9a-z-]*)?/iys;
    const events_re = /https:\/\/(?<host>(dc|jsi|routing)(\.stage)?\.ai\.juniper\.net)\/+admin\/\?org_id=(?<org_id>[0-9a-f-]{36})#!marvis\/?(?<scope>org|site)?\/?(?<period>[0-9a-z]*)?\/?(?<start>[0-9]*)?\/?(?<stop>[0-9]*)?\/?(?<site_id>[0-9a-z-]*)?/iys;
    const common_re = /https:\/\/(?<host>(dc|jsi|routing)(\.stage)?\.ai\.juniper\.net)\/+admin\/\?org_id=(?<org_id>[0-9a-f-]{36})#!(?<obj>[a-zA-Z]+)\/?((?<detail>detail|site|admin|new|view)\/)?([0-9]\/)?(?<obj_id>[0-9a-z_-]*)?(\/(?<site_id>[0-9a-f-]{36}))?(\?(?<query_params>[0-9a-z_=&-]*))?/yis;
    const site_common_objs = ["routers"]
    const org_common_objs = ["org", "configuration", "auditlogs", "apinventory", "adminconfig", "subscription"];
    const base_re = /https:\/\/(?<host>(dc|jsi|routing)(\.stage)?\.ai\.juniper\.net)\/+admin\/\?org_id=(?<org_id>[0-9a-f-]{36})#!/yis;

    var regexp_result: RegExpExecArray;
    
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
    } else if (regexp_result = events_re.exec(this.tabUrl)) {
      this.eventsUrl(regexp_result);
    } else if ((regexp_result = common_re.exec(this.tabUrl)) && regexp_result["groups"]) {
      if (site_common_objs.includes(regexp_result["groups"]["obj"].toLowerCase())) {
        this.commonSiteUrl(regexp_result);
      } else if (regexp_result["groups"] && org_common_objs.includes(regexp_result["groups"]["obj"].toLowerCase())) {
        this.commonOrgUrl(regexp_result);
      } else {
        this.baseUrl(regexp_result);
      }
    } else if (regexp_result = base_re.exec(this.tabUrl)) {
      this.baseUrl(regexp_result);
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
      url = "https://" + host + "/api/v1/orgs/" + this.org_id + "/" + obj_name + "/" + this.obj_id;
      this.quick_links.push({ url: url, name: this.obj_name });
    } else {
      // set QUICK LINK
      this.obj_id = undefined;
      url = "https://" + host + "/api/v1/orgs/" + this.org_id + "/" + obj_name;
      if (extra_param) url += "?" + extra_param;
      this.quick_links.push({ url: url, name: this.obj_name });
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// COMMON SITE FUNCTIONS
  forgeSiteObject(obj_name: string, host: string | undefined, detail: string | undefined, extra_param: string | undefined = undefined): void {
    let url = "";
    if (detail && detail != "new") {
      // set QUICK LINK
      url = "https://" + host + "/api/v1/sites/" + this.site_id + "/" + obj_name + "/" + this.obj_id;
      this.quick_links.push({ url: url, name: this.obj_name });
      if (["switch", "gateway"].includes(this.obj_name)) {
        this.quick_links.push({ url: url + "/config_cmd", name: this.obj_name + " CMDS" });
        this.quick_actions.push({ action: "ztp_password", name: this.obj_name + " ZTP PASSWORD" });
      }
    } else {
      // set QUICK LINK
      url = "https://" + host + "/api/v1/sites/" + this.site_id + "/" + obj_name;
      if (extra_param) url += "?" + extra_param;
      this.quick_links.push({ url: url, name: this.obj_name });
    }
  }

  forgeSiteObjectStatsSearch(obj_name: string, host: string, extra_param: string | undefined = undefined): void {
    let url = "";
    url = "https://" + host + "/api/v1/sites/" + this.site_id + "/stats/" + obj_name + "/search";
    if (extra_param) url += "?" + extra_param;
    this.quick_links.push({ url: url, name: obj_name.replace(/_/g, " ") + " STATS" });
  }

  forgeSiteObjectStats(obj_name: string, host: string, detail: string, extra_param: string | undefined = undefined): void {
    let url = "";
    if (detail && detail != "new") {
      // set QUICK LINK
      url = "https://" + host + "/api/v1/sites/" + this.site_id + "/stats/" + obj_name + "/" + this.obj_id;
      if (extra_param) url += "?" + extra_param;
      this.quick_links.push({ url: url, name: this.obj_name + " STATS" });
    } else {
      // set QUICK LINK
      url = "https://" + host + "/api/v1/sites/" + this.site_id + "/stats/" + obj_name;
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
      url = "https://" + host + "/api/v1/sites/" + this.site_id + "/" + obj_name + "/events/search?limit=1000&mac=" + mac;
      if (!extra_param) {
        url += "&duration=1d";
      } else {
        url += "&" + extra_param;
      }
      this.quick_links.push({ url: url, name: this.obj_name + " EVENTS" })
    } else {
      url = "https://" + host + "/api/v1/sites/" + this.site_id + "/" + obj_name + "/events/search?limit=1000";
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
  ////////////////////// ORG OBJ FUNCTION
  forgeOrg(host: string) {
    this.quick_links.push({
      url: "https://" + host + "/api/v1/orgs/" + this.org_id + "/setting",
      name: "org setting"
    }, {
      url: "https://" + host + "/api/v1/orgs/" + this.org_id + "/stats",
      name: "org stats"
    }, {
      url: "https://" + host + "/api/v1/orgs/" + this.org_id + "/ssos",
      name: "org ssos"
    }, {
      url: "https://" + host + "/api/v1/orgs/" + this.org_id + "/ssoroles",
      name: "org sso roles"
    }, {
      url: "https://" + host + "/api/v1/orgs/" + this.org_id + "/webhooks",
      name: "org webhooks"
    }, {
      url: "https://" + host + "/api/v1/orgs/" + this.org_id + "/apitokens",
      name: "org apitokens"
    })
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
        url: "https://" + host + "/api/v1/sites/" + this.site_id,
        name: "site info"
      }, {
        url: "https://" + host + "/api/v1/sites/" + this.site_id + "/setting",
        name: "site setting"
      }, {
        url: "https://" + host + "/api/v1/sites/" + this.site_id + "/webhooks",
        name: "site webhooks"
      }, {
        url: "https://" + host + "/api/v1/sites/" + this.site_id + "/stats" + extra_params,
        name: "site stats"
      }, {
        url: "https://" + host + "/api/v1/sites/" + this.site_id + "/devices/events/search" + extra_params,
        name: "site device events"
      }, {
        url: "https://" + host + "/api/v1/sites/" + this.site_id + "/clients/events/search" + extra_params,
        name: "site client events"
      })
    } else {
      this.obj_id = undefined;
      this.quick_links.push({
        url: "https://" + host + "/api/v1/orgs/" + this.org_id + "/sites",
        name: "sites"
      }, {
        url: "https://" + host + "/api/v1/orgs/" + this.org_id + "/sites/search",
        name: "site configs"
      }, {
        url: "https://" + host + "/api/v1/orgs/" + this.org_id + "/sitegroups",
        name: "site groups"
      })
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////// ORG SLE FUNCTION
  forgeOrgSlehUrl(host: string, scope: string, sle: string, worstsle: string | undefined = undefined, extra_params: string | undefined = undefined): void {
    /*
    scope: wifi, wire, wan
    */
    if (!worstsle || worstsle == "-") worstsle = sle;
    this.quick_links.push({
      url: "https://" + host + "/api/v1/orgs/" + this.org_id + "/insights/sites-sle?sle=" + scope + "&" + extra_params,
      name: scope + " Org SLEs"
    }, {
      url: "https://" + host + "/api/v1/orgs/" + this.org_id + "/insights/worst-sites-by-sle?sle=" + worstsle + "&" + extra_params,
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
    let fields: string;
    if (sle == "router-throughput") {
      fields = "fields=router%2Cinterface";
    } else {
      fields = "fields=router";
    }
    this.quick_links.push(
      {
        url: "https://" + host + "/api/v1/sites/" + site_id + "/sle/" + scope + "/" + scope_id + "/metric/" + sle + "/threshold",
        name: sle + " threshold"
      },
      {
        url: "https://" + host + "/api/v1/sites/" + site_id + "/sle/" + scope + "/" + scope_id + "/metric/" + sle + "/summary?" + extra_params,
        name: sle + " summary"
      },
      {
        url: "https://" + host + "/api/v1/sites/" + site_id + "/sle/" + scope + "/" + scope_id + "/metric/" + sle + "/histogram?" + extra_params,
        name: sle + " histogram"
      },
      {
        url: "https://" + host + "/api/v1/sites/" + site_id + "/sle/" + scope + "/" + scope_id + "/metric/" + sle + "/impact-summary?" + extra_params + "&" + fields,
        name: sle + " impact summary"
      },
    );
    impacted_entities.forEach(entity => {
      this.quick_links.push({
        url: "https://" + host + "/api/v1/sites/" + site_id + "/sle/" + scope + "/" + scope_id + "/metric/" + sle + "/impacted-" + entity + "?" + extra_params,
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
        url: "https://" + host + "/api/v1/sites/" + site_id + "/sle/" + scope + "/" + scope_id + "/metric/" + sle + "/summary-trend?" + extra_params,
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
  ////////////////////// COMMON URL FUNCTION DISPATCHER FOR SITE URLS
  commonSiteUrl(res: RegExpExecArray): void {
    this.org_id = res?.groups?.org_id;
    let extra_params: string | undefined = undefined;
    const uuid_re = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/
    if (res?.groups?.host && res?.groups?.org_id && res?.groups?.obj) {
      if (!res?.groups?.detail && res?.groups?.obj_id) {
        this.site_id = res?.groups?.obj_id;
      } else {
        this.site_id = res?.groups?.site_id;
        this.obj_id = res?.groups?.obj_id;
      }
      switch (res?.groups?.obj.toLowerCase()) {
        // SITE
        case "routers":
          let obj = "router";
          this.setName("router", res?.groups?.detail);
          if (this.obj_id) {
            extra_params = "mac=" + this.obj_id.split("-")[4];
          }
          this.forgeSiteObject("devices", res?.groups?.host, res?.groups?.detail, extra_params);
          this.forgeSiteObjectEvents("devices", obj, res?.groups?.host, res?.groups?.detail);
          this.forgeSiteObjectStats("devices", res?.groups?.host, res?.groups?.detail, extra_params);
          this.forgeSiteObjectStatsSearch("ports", res?.groups?.host, extra_params);
          this.forgeSiteObjectStatsSearch("bgp_peers", res?.groups?.host, extra_params);

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


  inventory_dc(res:RegExpExecArray): void {
    this.obj_id = null
    this.obj_name = "inventory";
    this.quick_links.push(
      {
      url: "https://" + res?.groups?.host + "/api/v1/orgs/" + this.org_id + "/datacenter-edges",
      name: "Datacenters"
    },
      {
      url: "https://" + res?.groups?.host + "/api/v1/orgs/" + this.org_id + "/inventory",
      name: "Inventory"
    },
      {
      url: "https://" + res?.groups?.host + "/api/v1/orgs/" + this.org_id + "/jsi/inventory",
      name: "JSI Inventory"
    },
  )
  }

  commonOrgUrl(res: RegExpExecArray): void {
    res = this.process_query_params(res);
    this.org_id = res?.groups?.org_id;
    const uuid_re = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/
    if (res?.groups?.host && res?.groups?.org_id && res?.groups?.obj) {
      this.obj_id = res?.groups?.obj_id;
      switch (res?.groups?.obj.toLowerCase()) {
        // ORG
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
        case "auditlogs":
          this.setName(res?.groups?.obj.substr(0, res?.groups?.obj.length - 1), res?.groups?.detail);
          this.forgeOrgObject("logs", res?.groups?.host, res?.groups?.detail);
          break;
        case "apinventory":
          this.obj_id = null;
          var host = res?.groups?.host;
          if (host.startsWith("dc")){
            this.inventory_dc(res);
          } else {
            this.obj_name = "inventory";
            this.quick_links.push(
              {
              url: "https://" + res?.groups?.host + "/api/v1/orgs/" + this.org_id + "/inventory",
              name: "Inventory"
            },
              {
              url: "https://" + res?.groups?.host + "/api/v1/orgs/" + this.org_id + "/jsi/inventory",
              name: "JSI Inventory"
            },
              {
              url: "https://" + res?.groups?.host + "/api/v1/orgs/" + this.org_id + "/ocdevices/outbound_ssh_cmd",
              name: "Adopt CMDS"
            },
          )
          }
          break;
        case "adminconfig":
          this.setName("admin", res?.groups?.detail);
          this.forgeOrgObject("admins", res?.groups?.host, res?.groups?.detail);
          break;
        case "subscription":
          this.setName(res?.groups?.obj, res?.groups?.detail);
          this.forgeOrgObject("licenses", res?.groups?.host, res?.groups?.detail);
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
    
      if (res?.groups?.site_id) {
        this.site_id = res?.groups?.site_id;
      } else {
        this.site_id = res?.groups?.uuid;
      }

    if (this.site_id){
      scope = "sites";
      scope_id = this.site_id;
    } else {
      scope = "orgs";
      scope_id = res?.groups?.org_id;
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
      url: "https://" + res?.groups?.host + "/api/v1/" + scope + "/" + scope_id + "/alarms/search?" + extra_params,
      name: scope + " Alarms"
    }, {
      url: "https://" + res?.groups?.host + "/api/v1/" + scope + "/" + scope_id + "/alarms/count?" + extra_params,
      name: scope + " Alarms count"
    }, {
      url: "https://" + res?.groups?.host + "/api/v1/orgs/" + this.org_id + "/alarmtemplates",
      name: " Alarms Templates"
    }, {
      url: "https://" + res?.groups?.host + "/api/v1/const/alarm_defs",
      name: " Alarms Definitions"
    });
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
      url: "https://" + res?.groups?.host + "/api/v1/sites/" + this.site_id + "/insights/marvis?" + extra_params,
      name: "Site Events"
    })
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
        case "routingSiteComparison":
          this.forgeOrgSlehUrl(res?.groups?.host, "routing", res?.groups?.sle, res?.groups?.worstsle, extra_params);
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
    if (res?.groups?.scope == "juniperRouter") scope = "router";
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
        case "routingServiceLevels":
          sles = [
            "router-health",
            "router-throughput",
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
    if (res?.groups?.scope == "juniperRouter") {
      scope = "router";
    } else {
      scope = res?.groups?.scope;
    }
    if (res?.groups?.start && res?.groups?.stop) {
      extra_params = "start=" + res?.groups?.start + "&end=" + res?.groups?.stop;
    }
    if (res?.groups?.host && res?.groups?.org_id) {
      let impacted_entities: string[] = []
      switch (res?.groups?.sle_name) {
        case "router-throughput":
          impacted_entities = ["routers", "interfaces"];
          break;
        case "router-health":
          impacted_entities = ["routers"];
          break;
      }
      this.forgeSleDetailshUrl(res?.groups?.host, scope, res?.groups?.site_id, res?.groups?.scope_id, res?.groups?.sle_name, impacted_entities, extra_params)
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
