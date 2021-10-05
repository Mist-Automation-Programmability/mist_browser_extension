import { group } from '@angular/animations';
import { Component, Inject, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TAB_URL } from '../../../providers/tab-url.provider';
import api_structure from './api.json';

export interface linkElement {
  url: string,
  name: string
}

@Component({
  selector: 'app-api-django',
  templateUrl: 'django.component.html',
  styleUrls: ['api.django.component.scss', '../api.component.scss'],
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
    "api.gc1.mist.com"
  ]

  doc_link = "https://doc.mist-lab.fr";

  ngOnInit() {
    const url = this.tabUrl.split("?");
    const path = url[0].split("/");
    const query = url[1];
    let path_part = path.splice(3, path.length)
    this.processPath(path_part)
  }


  processPath(path_part: string[]) {
    let tmp = api_structure;
    console.log(tmp)
    path_part.forEach(next_path => {
      console.log(next_path, tmp)
      if ("paths" in tmp && next_path in tmp.paths) {
        tmp = tmp.paths[next_path]

      } else if ("paths" in tmp) {
        let data;
        for (let [key, val] of Object.entries(tmp.paths)) {
          if (key.indexOf("{") == 0 && key.indexOf("}") == key.length - 1) {
            data = val;
          }
        }
        console.log(data)
        if (data) tmp = data;
        else console.error("Not able to find the right entry for " + path_part.join("/"))

      } else {
        console.error("Not able to find the right entry for " + path_part.join("/"))
      }
    })


    if ("specs" in tmp) {
      ["get", "post", "put", "delete"].forEach(method => {
        if (tmp["specs"][method])
          this.docs[method] = {
            operationId: tmp["specs"][method]["operationId"]
          }
      })
      console.log(this.docs)
    }
    console.log(tmp["specs"])
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


  openDoc(operation: string) {
    chrome.tabs.create({ url: this.doc_link + "/#operation/" + operation })
  }

}
