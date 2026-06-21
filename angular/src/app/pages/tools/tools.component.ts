import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { BrowserService } from "../../services/browser.service";

@Component({
    selector: 'app-tools',
    templateUrl: 'tools.component.html',
    styleUrls: [
        'tools.component.scss',
    ],
    standalone: false
})
export class ToolsComponent implements OnInit {
  eventTokenInfo: Subject<boolean> = new Subject<boolean>()
  eventTokenUsage: Subject<boolean> = new Subject<boolean>()
  eventWarning: Subject<boolean> = new Subject<boolean>()
  experimentalMessage: boolean = false;
  warningMessage: string = "";
  view: string = "";
  id_links: boolean = false;
  ts_human: boolean = false;
  copy_json: boolean = false;
  private pendingSetting: string | null = null;

  constructor(
    private _cd: ChangeDetectorRef,
    private _browser: BrowserService
  ) { }

  ngOnInit() {
    this._browser.getStorage("id_links", (result) => {
      console.log(result)
      if (result && result.id_links == "true") this.id_links = true;
      else this.id_links = false;
    })
    this._browser.getStorage("ts_human", (result) => {
      this.ts_human = !!result && result.ts_human == "true";
    })
    this._browser.getStorage("copy_json", (result) => {
      this.copy_json = !!result && result.copy_json == "true";
    })
  }

  onToggleIdLinks(): void {
    this.id_links = !this.id_links;
    this.changeIdLinks();
  }

  changeIdLinks(): void {
    if (this.id_links) {
      this.requestExperimental("id_links",
        "It may not work as expected and may impact your browser performance, especially on Mist API pages with a large number of entries.");
    } else {
      this._browser.setStorage("id_links", "false");
    }
  }

  onToggleTimestamps(): void {
    this.ts_human = !this.ts_human;
    if (this.ts_human) {
      this.requestExperimental("ts_human",
        "It may impact your browser performance on Mist API pages with a large number of entries.");
    } else {
      this._browser.setStorage("ts_human", "false");
    }
  }

  onToggleCopyJson(): void {
    this.copy_json = !this.copy_json;
    this._browser.setStorage("copy_json", this.copy_json ? "true" : "false");
  }

  private requestExperimental(key: string, message: string): void {
    this.pendingSetting = key;
    this.view = "warning";
    this.experimentalMessage = true;
    this.warningMessage = message;
    this.eventWarning.next(true);
    this._cd.detectChanges();
  }

  warningConfirm(): void {
    if (this.pendingSetting) {
      this._browser.setStorage(this.pendingSetting, "true");
      if (this.pendingSetting === "id_links") this.id_links = true;
      if (this.pendingSetting === "ts_human") this.ts_human = true;
    }
    this.view = "";
    this.experimentalMessage = false;
    this.pendingSetting = null;
    this.eventWarning.next(false);
    this._cd.detectChanges();
  }

  warningCancel(): void {
    if (this.pendingSetting === "id_links") this.id_links = false;
    if (this.pendingSetting === "ts_human") this.ts_human = false;
    if (this.pendingSetting) this._browser.setStorage(this.pendingSetting, "false");
    this.view = "";
    this.experimentalMessage = false;
    this.pendingSetting = null;
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
