import { Component, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionElement } from "../../../services/browser.service"

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
  selector: 'app-tools-token-info',
  templateUrl: 'info.component.html',
  styleUrls: [
    'info.component.scss', 
    '../../../scss/button.component.scss',
    '../../../scss/popup.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TokenInfoComponent implements OnInit {

  //@Input() domain: string;
  @Input() sessionEvent: Observable<SessionElement>;
  @Input() eventCreateToken: Observable<boolean>;
  @Output() closeManageTokens = new EventEmitter<string>();
  session: SessionElement;
  focused: string = "";
  constructor(
    private _cd: ChangeDetectorRef,
    private _http: HttpClient
  ) { }

  api_token:string = "";

  ngOnInit() {
  
  }

 

  close(): void {
    this.closeManageTokens.emit()
  }

}
