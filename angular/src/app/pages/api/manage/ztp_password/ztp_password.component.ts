import { Component, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrowserService, SessionElement } from "../../../../services/browser.service"

export interface ZtpResponseElement {
  root_password: string
}

@Component({
  selector: 'app-ztp-password',
  templateUrl: 'ztp_password.component.html',
  styleUrls: [
    '../../../../scss/popup.component.scss',
    '../../../../scss/button.component.scss',
    '../../../../scss/textarea.component.scss',
    'ztp_password.component.scss',
    ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZtpPasswordComponent implements OnInit {

  //@Input() domain: string;
  @Output() closeActionTab = new EventEmitter<string>();
  @Input() eventZtpPassword: Observable<boolean>;
  @Input() device_type: string;
  @Input() device_id: string;
  @Input() site_id: string;
  focused: string = "";
  constructor(
    private _cd: ChangeDetectorRef,
    private _http: HttpClient,
    private _browser: BrowserService
  ) { }

  session: SessionElement;
  request_done: boolean = false;  
  response_empty: boolean = false;
  is_working: boolean = false;
  ztp_password: ZtpResponseElement = { root_password: "" };
  ztp_color: string = "white";

  ngOnInit() {
    this._browser.getUrl
      .then(tabUrl => {
        let domain: string = "." + tabUrl.replace("https://", "").split("/")[0].split(".").slice(1).join(".");
        this.eventZtpPassword.subscribe(do_retrieve => {
          if (do_retrieve && !this.request_done) {
            this.ztp_password_init();
            this._browser.getCookies(() => {
              this._browser.sessions.subscribe(sessions => {
                sessions.forEach(s => {
                  if (s.domain == domain) {
                    this.session = s;
                    this.retrieve_ztp_pasword();
                  }
                })
              });
            })
          }
        });
      })
     // .error(error => { console.log(error) })
      .catch(error => { console.log(error) })

  }

  ////////////
  // SESSIONS
  ////////////
  retrieve_ztp_pasword(): void {
    if (this.site_id && this.device_id) {
      let url = "https://api" + this.session.domain + "/api/v1/sites/" + this.site_id + "/devices/" + this.device_id + "/request_ztp_password";
      this._http.post(url, {}, { headers: { "X-CSRFTOKEN": this.session.csrftoken } }).subscribe((resp: ZtpResponseElement) => {        
        if (resp.root_password == ""){
          this.ztp_password_failed();
        } else {
          this.ztp_password_success(resp);
        }        
      })
    }
  }

  ztp_password_init(): void{
    this.request_done = false;
    this.response_empty = false;
    this.is_working = true;
    this.ztp_color = "white";
    this.ztp_password.root_password = "Retrieving ZTP Password from Mist... Please wait..."
        this._cd.detectChanges();
  }

  ztp_password_failed(): void{
    this.request_done = true;
    this.response_empty = true;
    this.is_working = false;
    this.ztp_color = ""
    this.ztp_password.root_password = "No ZTP Password generated by Mist";
    this._cd.detectChanges();
  }

  ztp_password_success(ztp_password: ZtpResponseElement):void{
    this.request_done = true;
    this.response_empty = false;
    this.is_working = false;
    this.ztp_color = "white";
    this.ztp_password = ztp_password;
    this._cd.detectChanges();
  }

  close(): void {
    this.closeActionTab.emit();
  }

  //
  copyPassword(inputElement: HTMLTextAreaElement): void {
    this.focused = inputElement.id;
    this._cd.detectChanges();
    inputElement.select();
    document.execCommand('copy');
    setTimeout(() => {
      this.focused = "";
      this._cd.detectChanges();
    }, 100);
    inputElement.setSelectionRange(0, 0);
  }

}
