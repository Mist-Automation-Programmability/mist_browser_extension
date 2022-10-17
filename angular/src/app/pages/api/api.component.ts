import { Component, Inject, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TAB_URL } from '../../providers/tab-url.provider';


@Component({
  selector: 'app-api',
  templateUrl: 'api.component.html',
  styleUrls: ['api.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApiComponent implements OnInit {

  constructor(
    @Inject(TAB_URL) readonly tabUrl: string,
    private _cd: ChangeDetectorRef,
  ) { }

  display: string;

  hosts_manage = [
    "integration.mistsys.com",
    "manage.mist.com",
    "integration.mist.com",
    "manage.eu.mist.com",
    "manage.gc1.mist.com",
    "manage.gc2.mist.com",
    "manage.ac2.mist.com"
  ]
  hosts_api = [
    "api.mist.com",
    "api.eu.mist.com",
    "api.gc1.mist.com",
    "api.gc2.mist.com",
    "api.ac2.mist.com"
  ]

  ngOnInit() {
    let host = this.tabUrl.split("/")[2]
    if (this.hosts_manage.indexOf(host) > -1) this.display = "manage"
    else if (this.hosts_api.indexOf(host) > -1 && this.tabUrl.indexOf("/api/v1/docs") < 0) this.display = "django"
  }

  openTab() {
    chrome.tabs.create({ url: "https://github.com/tmunzer/mist_chrome_extension/issues/new" })
  }
}
