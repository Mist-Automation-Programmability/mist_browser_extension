import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BrowserService } from "../../services/browser.service";


@Component({
  selector: 'app-api',
  templateUrl: 'api.component.html',
  styleUrls: [
    'api.component.scss',
    '../../scss/button.component.scss',
    '../../scss/notice.component.scss'
  ],
  //changeDetection: ChangeDetectionStrategy.OnPush
})

export class ApiComponent implements OnInit {

  constructor(
    private _browser: BrowserService
  ) { }

  display: string;

  hosts_manage: string[];
  hosts_api: string[];
  tabUrl: string;

  ngOnInit() {
    this.hosts_manage = this._browser.getHostManage();
    this.hosts_api = this._browser.getHostApi();
    this._browser.getUrl
      .then(tabUrl => {
        this.tabUrl = tabUrl;
        let host = tabUrl.split("/")[2];

        if (host.includes("ai.juniper.net")) {
          this.display = "juniper-manage";
        } else {
          if (this.hosts_manage.includes(host)) this.display = "manage";
          else if (this.hosts_api.includes(host) && tabUrl.indexOf("/api/v1/docs") < 0) this.display = "django";
        }
      })
      .catch(error => { console.log(error) })
  }

  openTab(): void {
    this._browser.issueOpen();
  }

}
