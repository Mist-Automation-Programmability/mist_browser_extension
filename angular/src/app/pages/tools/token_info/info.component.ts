import { Component, Output, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrowserService } from "../../../services/browser.service"

export interface PrivilegeElement {
  scope: string,
  role: string,
  view: string | null,
  name: string,
  org_name: string | null,
  msp_name: string | null,
  site_id: string | null,
  org_id: string | null,
  msp_id: string | null,
  orggroup_ids: string[] | null,
  sitegroup_ids: string[] | null,
  ui_string: string,
}
export interface TokenInfoElement {
  cloud: string,
  host: string,
  type: string,
  email: string,
  name: string,
  site_count: number,
  org_count: number,
  msp_count: number,
  privileges: PrivilegeElement[],
}

@Component({
  selector: 'app-tools-token-info',
  templateUrl: 'info.component.html',
  styleUrls: [
    '../../../scss/popup.component.scss',
    '../../../scss/button.component.scss',
    '../../../scss/input.component.scss',
    '../token.component.scss',
    'info.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TokenInfoComponent implements OnInit {

  //@Input() domain: string;
  @Output() closePopup = new EventEmitter<string>();
  focused: string = "";
  constructor(
    private _cd: ChangeDetectorRef,
    private _http: HttpClient,
    private _browser: BrowserService
  ) { }

  info: TokenInfoElement = {
    cloud: null,
    host: null,
    type: null,
    email: null,
    name: null,
    site_count: 0,
    org_count: 0,
    msp_count: 0,
    privileges: [],
  }
  working: boolean = false;
  invalid: boolean = false;
  check_index: number = 0;
  check_total: number = 0;
  api_token: string = "";
  success: boolean = false;

  ngOnInit() {
    this.reset();
  }


  check_info() {
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
        "https://" + api_hosts[this.check_index] + "/api/v1/self",
        { headers: { "Authorization": "Token " + this.api_token }, observe: 'response' }
      ).subscribe(data => {
        if (data.status == 200) {
          this.set_success(api_hosts[this.check_index], data);
        } else if (data.status == 429) {
          this.success = false;
        } else {
          this.check_index += 1;
          this.check_cloud_usage(api_hosts);
        }
      }, err => {
        if (err.status == 429) {
          this.success = false;
        } else {
          this.check_index += 1;
          this.check_cloud_usage(api_hosts);
        }
      })
    } else {
      this.working = false;
      this.invalid = true;
      this._cd.detectChanges()
    }
  }

  private set_success(api_host: string, data): void {
    this.info.cloud = this._browser.getCloud(api_host);
    this.info.host = api_host;
    if (data.body.hasOwnProperty("name")) {
      this.info.type = "org";
      this.info.name = data.body["name"];
    } else {
      this.info.type = "user";
      this.info.email = data.body["email"];
      this.info.name = data.body["first_name"] + " " + data.body["last_name"];
    }
    this.set_privileges(data);
    this.working = false;
    this._cd.detectChanges();
    console.log(this.info)
  }
  private set_privileges(data): void {
    this.success = true;
    data.body["privileges"].forEach(p => {
      switch (p.scope) {
        case "msp":
          this.info.msp_count += 1;
          break;
        case "org":
          this.info.org_count += 1;
          break;
        case "site":
          this.info.site_count += 1;
          break;
      }
      var tmp: PrivilegeElement = {
        scope: p.scope,
        role: p.role,
        view: p.view,
        name: p.name,
        org_name: p.org_name,
        msp_name: p.msp_name,
        site_id: p.site_id,
        org_id: p.org_id,
        msp_id: p.msp_id,
        orggroup_ids: p.orggroup_ids,
        sitegroup_ids: p.sitegroup_ids,
        ui_string: p.role + " on " + p.scope + " " + p.name,
      }
      this.info.privileges.push(tmp)
    })
    console.log(this.info)
  }

  private reset() {
    this.invalid = false;
    this.check_index = 0;
    this.api_token = "";
    this.success = false;
    this.info = {
      cloud: null,
      host: null,
      type: null,
      email: null,
      name: null,
      site_count: 0,
      org_count: 0,
      msp_count: 0,
      privileges: [],
    }
    this._cd.detectChanges();
  }

  token_updated() {
    this.invalid = false;
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

  close(): void {
    this.reset();
    this.closePopup.emit();
  }

}
