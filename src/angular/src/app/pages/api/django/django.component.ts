import { group } from '@angular/animations';
import { Component, Inject, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TAB_URL } from '../../../providers/tab-url.provider';
import api_structure from './../../../../assets/api.json';

export interface linkElement {
  url: string,
  name: string
}

@Component({
  selector: 'app-api-django',
  templateUrl: 'django.component.html',
  styleUrls: ['api.django.component.scss', '../api.component.scss', '../../../app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApiDjangoComponent implements OnInit {
  message: string;
  mist_url: string = "";

  quick_links: linkElement[] = []

  scope: string;
  scope_id: string;
  path_params = [];
  query_params = [];
  docs = {
    "get": null,
    "post": null,
    "put": null,
    "delete": null,
  }
  constructor(
    @Inject(TAB_URL) readonly tabUrl: string,
    private _cd: ChangeDetectorRef
  ) { }


  hosts = [
    "api.mist.com",
    "api.eu.mist.com",
    "api.gc1.mist.com",
    "api.gc2.mist.com",
    "api.ac2.mist.com"
  ]

  doc_link = "https://doc.mist-lab.fr";

  ngOnInit() {
    const url = this.tabUrl.split("?");
    const path = url[0].split("/");
    const query = url[1];
    let path_part = path.splice(3, path.length)
    this.processPath(path_part, query);
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
  processQuery(query: string, specs) {
    let query_key_value = {}
    if (query) {
      const query_parts = query.split("&")
      query_parts.forEach(part => {
        const splitted_part = part.split("=")
        query_key_value[splitted_part[0]] = splitted_part[1]
      })
    }
    if (specs) {
      specs.forEach(spec => {
        let data = {}
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
    let query = []
    this.query_params.forEach(param => {
      if (param.value != undefined) query.push(param.name + "=" + param.value)
    })
    if (query.length > 0) url = url + "?" + query.join("&")
    chrome.tabs.update(undefined, { url: url });
  }

  // open a new tab with the url passed in parameter
  openApiTab(url: string) {
    chrome.tabs.create({ url: url });
  }


  openDoc(operation: string) {
    chrome.tabs.create({ url: this.doc_link + "/#operation/" + operation })
  }

}
