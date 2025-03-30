import { Component, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrowserService } from "../../../services/browser.service"

export interface TokenUsageElement {
  requests: number,
  request_limit: number,
  request_percentage: number,
}

// export interface SessionElement {
//   domain: string,
//   csrftoken: string,
//   email: string,
// }

@Component({
  selector: 'app-tools-token-usage',
  templateUrl: 'usage.component.html',
  styleUrls: [
    'usage.component.scss',
    '../../../scss/popup.component.scss',
    '../../../scss/button.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TokenUsageComponent implements OnInit {

  //@Input() domain: string;
  @Input() eventCreateToken: Observable<boolean>;
  @Output() closeManageTokens = new EventEmitter<string>();
  focused: string = "";
  constructor(
    private _cd: ChangeDetectorRef,
    private _http: HttpClient,
    private _browser: BrowserService
  ) { }

  usage: TokenUsageElement = {
    requests: -1,
    request_limit: -1,
    request_percentage: 0
  };
  api_token: string = "";

  ngOnInit() {
  }

  check_usage() {
    const api_hosts = this._browser.getHostApi()
    this.check_cloud_usage(api_hosts);
  }

  private check_cloud_usage(api_hosts, index = 0): void {
    if (index < api_hosts.length) {
      this._http.get(
        "https://" + api_hosts[index] + "/api/v1/self/usage",
        { headers: { "Authorization": "Token " + this.api_token }, observe: 'response' }
      ).subscribe(data => {
        if (data.status == 200) {
          this.usage.requests = data.body["requests"];
          this.usage.request_limit = data.body["request_limit"];
          this.usage.request_percentage = (this.usage.requests / this.usage.request_limit) * 100;
          this._cd.detectChanges()
        } else if (data.status == 429) {
          this.usage.requests = 5000;
          this.usage.request_limit = 5000;
          this.usage.request_percentage = 100;
          this._cd.detectChanges()
        } else {
          this.check_cloud_usage(api_hosts, index + 1);
        }
      }, err => {
        this.check_cloud_usage(api_hosts, index + 1);
      })
    }
  }

  close(): void {
    this.api_token = "";
    this.closeManageTokens.emit()
  }

}
