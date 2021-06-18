import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface linkElement {
  url: string,
  name: string
}

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.scss']
})
export class AboutComponent implements OnInit {

  private github_release_url: string = "https://api.github.com/repos/tmunzer/mist_chrome_extension/releases/latest";
  github_repo_url: string = "https://github.com/tmunzer/mist_chrome_extension";
  current_version: string;
  last_version: string;
  up_to_date: boolean;
  download_url: string;
  html_url: string;
  constructor(private _http: HttpClient) { }

  ngOnInit(){
    this.current_version = chrome.runtime.getManifest().version;
  }


  checkNewRelease(): void {
    this._http.get<any>(this.github_release_url).subscribe(data => {
      this.last_version = data.name;
      if (this.current_version < this.last_version) {
        this.up_to_date = false;
        this.html_url = data.html_url;
        data.assets.forEach(element => {
          if (element.name == "extension-build.zip") {
            this.download_url = element.browser_download_url;
          }
        })
      } else {
        this.up_to_date = true;
      }
    })
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
      case "html_url":
        dest_url = this.html_url;
        break;
      case "download_url":
        dest_url = this.download_url;
        break;
      case "github":
        dest_url = this.github_repo_url;
        break;
    }
    if (dest_url) {
      chrome.tabs.create({ url: dest_url });
    }
  }
}
