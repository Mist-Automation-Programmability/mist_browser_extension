import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BrowserService } from "../../services/browser.service";


@Component({
  selector: 'app-api',
  templateUrl: 'api.component.html',
  styleUrls: ['api.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})

export class ApiComponent implements OnInit {

  constructor(
    private _broswer: BrowserService
  ) { }

  display: string;

  hosts_manage:string[];
  hosts_api:string[];
  tabUrl:string;

  ngOnInit() {
    this.hosts_manage = this._broswer.getHostManage();
    this.hosts_api = this._broswer.getHostApi();
    this._broswer.getUrl.then(tabUrl => {
      this.tabUrl=tabUrl;
      let host = tabUrl.split("/")[2];    
      if (this.hosts_manage.includes(host)) this.display = "manage";
      else if (this.hosts_api.includes(host) && tabUrl.indexOf("/api/v1/docs") < 0) this.display = "django";
    })
  }

  openTab():void {
    this._broswer.issueOpen();
  }

}
