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
  styleUrls: [
    'api.django.component.scss',
    '../api.component.scss',
    '../../../scss/button.component.scss',
    '../../../scss/notice.component.scss'
  ]
})
export class ApiDjangoComponent implements OnInit {
  message: string;
  mist_url: string = "";

  quick_links: linkElement[] = []

  scope: string;
  scope_id: string;
  objects = [];
  focused: string | undefined = "";
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


  hosts: string[]
  tabUrl: string;

  ngOnInit() {
    this.hosts = this._browser.getHostApi()
    this._browser.getUrl.then(tabUrl => {
      this.tabUrl = tabUrl;
      const url = this.tabUrl.split("?");
      const path = url[0].split("/");
      const query = url[1];
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

    this.djangoUrl();
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  // REGEXP FUNCTIONS
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////  
  setName(obj_name) {
    obj_name = obj_name.toUpperCase();
      if (obj_name == "evpn_topologies") {
        return "evpn_topology"
      } else if (obj_name.substr(obj_name.length-3, obj_name.length) == "IES") {
        return obj_name.substr(obj_name.length-3, obj_name.length) + "Y";
      } else if (obj_name.substr(obj_name.length-1, obj_name.length) == "S") {
        return obj_name.slice(0, obj_name.length-1);
      }
  }

  djangoUrl(): void {
    const default_re = /(?<obj_type>[^/]*)\/(?<obj_id>[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/gm;
    this.objects = [];
    for (var res_re; res_re = default_re.exec(this.tabUrl); null){
      var obj_name = res_re?.groups?.obj_type;
      var obj_id = res_re?.groups?.obj_id;
      if (obj_name && obj_id){
      this.objects.push({
        name: this.setName(obj_name),
        id: obj_id
      })
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
