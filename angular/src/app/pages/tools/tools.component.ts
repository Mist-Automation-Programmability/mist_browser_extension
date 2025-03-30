import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { BrowserService } from "../../services/browser.service";

@Component({
  selector: 'app-tools',
  templateUrl: 'tools.component.html',
  styleUrls: [
    'tools.component.scss',
    '../../scss/button.component.scss',
    '../../scss/popup.component.scss',
    '../../scss/container.component.scss'
  ]
})
export class ToolsComponent implements OnInit {
  eventTokenInfo: Subject<boolean> = new Subject<boolean>()
  eventTokenUsage: Subject<boolean> = new Subject<boolean>()
  view: string = "";
  constructor(
    private _cd: ChangeDetectorRef,
    private _http: HttpClient,
    private _browser: BrowserService
  ) { }

  ngOnInit() {
  }


  openPopup(view:string): void {
    this.view = view;
    switch(view){
      case "token-info":
        this.eventTokenInfo.next(true)
        break;
      case "token-usage":
        this.eventTokenUsage.next(true)
        break;
    }
    this._cd.detectChanges();
  }

  closePopup(view:string): void {
    this.view = "";
    switch(view){
      case "token-info":
        this.eventTokenInfo.next(false)
        break;
      case "token-usage":
        this.eventTokenUsage.next(false)
        break;
    }
    this._cd.detectChanges();
  }

}
