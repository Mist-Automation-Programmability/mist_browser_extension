import { Component, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrowserService } from "../../../services/browser.service"

export interface TokenUsageElement {
  requests: number,
  request_limit: number,
  request_percentage: number,
  cloud: string,
  host: string,
}

@Component({
    selector: 'app-tools-token-usage',
    templateUrl: 'usage.component.html',
    styleUrls: [
        '../../../scss/popup.component.scss',
        '../../../scss/button.component.scss',
        '../../../scss/input.component.scss',
        '../../../scss/progress.component.scss',
        '../token.component.scss',
        'usage.component.scss',
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class TokenUsageComponent implements OnInit {

  //@Input() domain: string;
  @Output() closePopup = new EventEmitter<string>();
  focused: string = "";
  constructor(
    private _cd: ChangeDetectorRef,
    private _http: HttpClient,
    private _browser: BrowserService
  ) { }

  usage: TokenUsageElement = {
    requests: -1,
    request_limit: -1,
    request_percentage: 0,
    cloud: "",
    host: "",
  };
  working: boolean = false;
  invalid: boolean = false;
  check_index: number = 0;
  check_total: number = 0;
  api_token: string = "";

  ngOnInit() {
    this.invalid = false;
    this.check_index = 0;
    this.api_token = "";
    this._cd.detectChanges()
  }

  check_usage() {
    const api_hosts = this._browser.getHostApi()
    this.working = true;
    this.invalid = false;
    this.check_index = 0;
    this.check_total = api_hosts.length;
    this.check_cloud_usage(api_hosts);
  }

  private check_cloud_usage(api_hosts): void {
    this._cd.detectChanges()
    if (this.check_index < api_hosts.length) {
      this._http.get(
        "https://" + api_hosts[this.check_index] + "/api/v1/self/usage",
        { headers: { "Authorization": "Token " + this.api_token }, observe: 'response' }
      ).subscribe({
        next: data => {
          if (data.status == 200) {
            this.set_success(api_hosts[this.check_index], data);
          } else if (data.status == 429) {
            this.set_failure(api_hosts[this.check_index]);
          } else {
            this.check_index += 1;
            this.check_cloud_usage(api_hosts);
          }
        }, error: err => {
          if (err.status == 429) {
            this.set_failure(api_hosts[this.check_index]);
          } else {
            this.check_index += 1;
            this.check_cloud_usage(api_hosts);
          }
        }
      })
    } else {
      this.working = false;
      this.invalid = true;
      this._cd.detectChanges();
    }
  }

  private set_success(api_host: string, data): void {
    this.usage.requests = data.body["requests"];
    this.usage.request_limit = data.body["request_limit"];
    this.usage.request_percentage = (this.usage.requests / this.usage.request_limit) * 100;
    this.usage.cloud = this._browser.getCloud(api_host);
    this.usage.host = api_host;
    this.working = false;
    this._cd.detectChanges();
  }
  private set_failure(api_host: string) {
    this.usage.requests = 5000;
    this.usage.request_limit = 5000;
    this.usage.request_percentage = 100;
    this.usage.cloud = this._browser.getCloud(api_host);
    this.usage.host = api_host;
    this.working = false;
    this._cd.detectChanges();
  }

  token_updated() {
    this.invalid = false;
  }

  close(): void {
    this.api_token = "";
    this.closePopup.emit()
  }

}
