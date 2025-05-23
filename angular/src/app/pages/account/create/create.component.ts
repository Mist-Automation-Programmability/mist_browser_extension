import { Component, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrowserService, SessionElement } from "../../../services/browser.service"

export interface TokenElement {
  id: string | undefined,
  name: string,
  last_used: number | undefined,
  created_time: number,
  key: string,
}

// export interface SessionElement {
//   domain: string,
//   csrftoken: string,
//   email: string,
// }

@Component({
  selector: 'app-account-create',
  templateUrl: 'create.component.html',
  styleUrls: [
    '../../../scss/popup.component.scss',
    '../../../scss/input.component.scss',
    '../../../scss/button.component.scss',
    '../../../scss/textarea.component.scss',
    'create.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountCreateComponent implements OnInit {

  //@Input() domain: string;
  @Input() sessionEvent: Observable<SessionElement>;
  @Input() eventCreateToken: Observable<boolean>;
  @Output() closeCreateToken = new EventEmitter<string>();
  session: SessionElement;
  focused: string = "";
  constructor(
    private _cd: ChangeDetectorRef,
    private _http: HttpClient,
    private _browser: BrowserService,
  ) { }

  token_name: string = "";
  token: TokenElement;
  do_create: boolean = false;

  ngOnInit() {
    this.eventCreateToken.subscribe(status => this.do_create = status)
    this.sessionEvent.subscribe(session => {
      this.session = session;
      this.token_name = "";
      this.token = {
        id: undefined,
        last_used: undefined,
        created_time: 0,
        key: "",
        name: ""
      }
    })
  }

  ////////////
  // SESSIONS
  ////////////
  createToken(): void {
    if (this.do_create) {
      let url = "https://" + this.session.api_host + "/api/v1/self/apitokens";
      this._http
        .post<TokenElement>(url, { name: this.token_name }, { headers: { "X-CSRFTOKEN": this.session.csrftoken } })
        .subscribe({
          next: (data) => {
            this.token = data;
            this.session.requests += 1;
            this._cd.detectChanges();
          },
          error: (e) => {
            this.createTokenBackup(url);
          }
        })
    }
  }

  private createTokenBackup(url: string): void {
    this._browser.setStorage("post", JSON.stringify({ url: url, payload: { name: this.token_name }, ts: Date.now() }));
    setTimeout(() => {
      this._browser.tabOpen(url);
    }, 10);
  }


  close(): void {
    this.closeCreateToken.emit()
  }

  //
  copyToken(inputElement: HTMLTextAreaElement): void {
    this.focused = inputElement.id;
    this._cd.detectChanges()
    inputElement.select();
    document.execCommand('copy');
    setTimeout(() => {
      this.focused = "";
      this._cd.detectChanges()
    }, 150);
    inputElement.setSelectionRange(0, 0);
  }

}
