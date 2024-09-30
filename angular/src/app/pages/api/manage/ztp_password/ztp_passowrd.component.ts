import { Component, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrowserService, SessionElement } from "../../../../services/browser.service"

export interface ZtpResponseElement {
  root_password: string
}

@Component({
  selector: 'app-ztp-password',
  templateUrl: 'ztp_passowrd.component.html',
  styleUrls: ['ztp_password.component.scss', '../../../../scss/button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZtpPassowrdComponent implements OnInit {

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
  ztp_password_retrieved: boolean = false;
  ztp_password: ZtpResponseElement = { root_password: "" };
  is_working: boolean = false;

  ngOnInit() {
    this._browser.getUrl
      .then(tabUrl => {
        let domain: string = "." + tabUrl.replace("https://", "").split("/")[0].split(".").slice(1).join(".");
        this.eventZtpPassword.subscribe(do_retrieve => {
          if (do_retrieve && !this.ztp_password_retrieved) {
            this.is_working = true;
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
        this.ztp_password_retrieved = true
        this.ztp_password = resp;
        this.is_working = false;
        this._cd.detectChanges();
      })
    }
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
