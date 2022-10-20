import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { BrowserService } from "../../../services/browser.service";
const api_structure = require('../../../../assets/api.json');

export interface linkElement {
  url: string,
  name: string
}
interface QueryparamsInterface {
  name: string,
  value: string,
  description: string,
  schema: any
}

@Component({
  selector: 'app-api-django',
  templateUrl: 'django.component.html',
  styleUrls: ['api.django.component.scss', '../api.component.scss', '../../../app.component.scss']
})
export class ApiDjangoComponent implements OnInit {
  message: string;
  mist_url: string = "";

  quick_links: linkElement[] = []

  scope: string;
  scope_id: string;
  path_params = [];
  query_params: QueryparamsInterface[] = [];
  docs = {
    "get": undefined,
    "post": undefined,
    "put": undefined,
    "delete": undefined,
  }
  constructor(
    private _cd: ChangeDetectorRef,
    private _browser: BrowserService
  ) { }


  hosts:string[]
  tabUrl:string;

  ngOnInit() {
    this.hosts = this._browser.getHostApi()
    this._browser.getUrl.then(tabUrl => {
      this.tabUrl = tabUrl.split("?");
      const path = this.tabUrl[0].split("/");
      const query = this.tabUrl[1];
      let path_part = path.splice(3, path.length)
      this.processPath(path_part, query);
    })
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  // PÄTH FUNCTIONS
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////

  processPath(path_part: string[], query: string) {
    let tmp = api_structure;
    path_part.forEach(next_path => {
      if ("paths" in tmp && next_path in tmp.paths) {
        tmp = tmp.paths[next_path]

      } else if ("paths" in tmp) {
        let data;
        for (let [key, val] of Object.entries(tmp.paths)) {
          if (key.indexOf("{") == 0 && key.indexOf("}") == key.length - 1) {
            data = val;
          }
        }
        if (data) tmp = data;
        else console.error("Not able to find the right entry for " + path_part.join("/"))

      } else {
        console.error("Not able to find the right entry for " + path_part.join("/"))
      }
    })


    if ("specs" in tmp) {
      ["get", "post", "put", "delete"].forEach(method => {
        if (tmp["specs"][method]) {
          this.docs[method] = {
            operationId: tmp["specs"][method]["operationId"]
          }
        }
      })
      if (this.docs["get"]) {
        this.processQuery(query, tmp["specs"]["get"]["parameters"])
      }
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  // QUERY FUNCTIONS
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  processQuery(query: string, specs: any) {
    let query_key_value: any = {}
    if (query) {
      const query_parts = query.split("&")
      query_parts.forEach(part => {
        const splitted_part = part.split("=")
        query_key_value[splitted_part[0]] = splitted_part[1]
      })
    }
    if (specs) {
      specs.forEach((spec: any) => {
        let data: QueryparamsInterface = { name: "", value: "", description: "", schema: undefined };
        if ("in" in spec && spec["in"] == "query") data = spec
        else if ("$ref" in spec && spec["$ref"]) {
          const ref_parts = spec["$ref"].split("/")
          data = api_structure[ref_parts[1]][ref_parts[2]][ref_parts[3]]

        }
        data["value"] = query_key_value[data["name"]]
        this.query_params.push(data)
      })
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  // OTHER FUNCTIONS
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////

  updateUrl() {
    let url = this.tabUrl.split("?")[0]
    let query: string[] = []
    this.query_params.forEach(param => {
      if (param.value != undefined) query.push(param.name + "=" + param.value)
    })
    if (query.length > 0) url = url + "?" + query.join("&")
    this._browser.tabUpdate(url);
  }

  // open a new tab with the url passed in parameter
  openApiTab(url: string) {
    this._browser.tabOpen(url);
  }


  openDoc(operation: string) {
    this._browser.tabOpenDoc(operation)
  }

}
