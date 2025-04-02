import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { BrowserService } from "../../services/browser.service";

@Component({
  selector: 'app-tools',
  templateUrl: 'tools.component.html',
  styleUrls: [
    '../../scss/button.component.scss',
    '../../scss/popup.component.scss',
    '../../scss/container.component.scss',
    '../../scss/checkbox.component.scss',
    'tools.component.scss',
  ]
})
export class ToolsComponent implements OnInit {
  eventTokenInfo: Subject<boolean> = new Subject<boolean>()
  eventTokenUsage: Subject<boolean> = new Subject<boolean>()
  view: string = "";
  id_links:boolean = false;
  constructor(
    private _cd: ChangeDetectorRef,
        private _browser: BrowserService
  ) { }

  ngOnInit() {
    this._browser.getStorage("id_links", (result)=>{
      if (result == "true") this.id_links = true;
      else this.id_links = false;
    })
  }

  changeIdLinks():void{
    console.log(this.id_links)
    if (this.id_links) this._browser.setStorage("id_links", "true");
    else this._browser.setStorage("id_links", "false");
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
