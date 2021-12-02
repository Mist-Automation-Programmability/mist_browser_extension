import { Component, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TokenElement {
  id: string,
  name: string,
  last_used: number | null,
  created_time: number,
  key: string,
}

export interface SessionElement {
  domain: string,
  csrftoken: string,
  email: string,
}

@Component({
  selector: 'app-account-create',
  templateUrl: 'create.component.html',
  styleUrls: ['create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountCreateComponent {

  //@Input() domain: string;
  @Input() sessionEvent: Observable<SessionElement>;
  @Input() enventCreateToken: Observable<boolean>;
  @Output() closeCreateToken = new EventEmitter<string>();
  session: SessionElement;
  focused: string = "";
  constructor(
    private _cd: ChangeDetectorRef,
    private _http: HttpClient
  ) { }

  token_name:string = "";
  token: TokenElement;
  do_create: boolean = false;

  ngOnInit() {
    this.enventCreateToken.subscribe(status => this.do_create = status)
    this.sessionEvent.subscribe(session => {
      this.session = session;
      this.token_name = "";
      this.token = {
        id: null,
        last_used: null,
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
      let url = "https://api" + this.session.domain + "/api/v1/self/apitokens"
      this._http.post(url, {name: this.token_name}, { headers: { "X-CSRFTOKEN": this.session.csrftoken } }).subscribe((token: TokenElement) => {
        this.token_name = "";
        this.token = token;
        this._cd.detectChanges();
      })
    }
  }

  close(): void {
    this.closeCreateToken.emit()
  }

  //
  copyToken(inputElement: HTMLInputElement): void {
    this.focused = inputElement.id;
    this._cd.detectChanges()
    inputElement.select();
    document.execCommand('copy');
    setTimeout(() => {
      this.focused = "";
      this._cd.detectChanges()
    }, 100);
    inputElement.setSelectionRange(0, 0);
  }

}
