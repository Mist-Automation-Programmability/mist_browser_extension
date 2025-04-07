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
  eventWarning: Subject<boolean> = new Subject<boolean>()
  experimentalMessage: boolean = false;
  warningMessage: string = "";
  view: string = "";
  id_links: boolean = false;
  constructor(
    private _cd: ChangeDetectorRef,
    private _browser: BrowserService
  ) { }

  ngOnInit() {
    this._browser.getStorage("id_links", (result) => {
      if (result == "true") this.id_links = true;
      else this.id_links = false;
    })
  }

  changeIdLinks(): void {
    if (this.id_links) {
      this.view = "warning";
      this.experimentalMessage = true;
      this.warningMessage = "It may not work as expected and may impact your browser performance, especially on Mist API pages with a large number of entries.";
      this.eventWarning.next(true);
      this._cd.detectChanges();
      //this._browser.setStorage("id_links", "true")
    } else this._browser.setStorage("id_links", "false");
  }

  warningConfirm(): void {
    this.view = "";
    this.experimentalMessage = false;
    this._browser.setStorage("id_links", "true");
    this.id_links = true;
    this.eventWarning.next(false);
    this._cd.detectChanges();
  }
  warningCancel(): void {
    this.view = "";
    this.experimentalMessage = false;
    this._browser.setStorage("id_links", "false");
    this.id_links = false;
    this.eventWarning.next(false);
    this._cd.detectChanges();
  }

  openPopup(view: string): void {
    this.view = view;
    switch (view) {
      case "token-info":
        this.eventTokenInfo.next(true)
        break;
      case "token-usage":
        this.eventTokenUsage.next(true)
        break;
    }
    this._cd.detectChanges();
  }

  closePopup(view: string): void {
    this.view = "";
    switch (view) {
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
