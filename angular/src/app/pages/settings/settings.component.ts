import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { BrowserService } from "../../services/browser.service";
import { ThemeService, ThemePref } from "../../services/theme.service";

@Component({
    selector: 'app-settings',
    templateUrl: 'settings.component.html',
    styleUrls: [
        'settings.component.scss',
    ],
    standalone: false
})
export class SettingsComponent implements OnInit {
  experimentalMessage: boolean = false;
  warningMessage: string = "";
  view: string = "";
  theme: ThemePref = 'system';
  id_links: boolean = false;
  ts_human: boolean = false;
  copy_json: boolean = false;
  dark_manage: boolean = false;
  private pendingSetting: string | null = null;

  constructor(
    private _cd: ChangeDetectorRef,
    private _browser: BrowserService,
    private _theme: ThemeService
  ) { }

  ngOnInit() {
    this.theme = this._theme.get();
    this._browser.getStorage("id_links", (result) => {
      this.id_links = !!result && result.id_links == "true";
    })
    this._browser.getStorage("ts_human", (result) => {
      this.ts_human = !!result && result.ts_human == "true";
    })
    this._browser.getStorage("copy_json", (result) => {
      this.copy_json = !!result && result.copy_json == "true";
    })
    this._browser.getStorage("dark_manage", (result) => {
      this.dark_manage = !!result && result.dark_manage == "true";
    })
  }

  setTheme(pref: ThemePref): void {
    this.theme = pref;
    this._theme.set(pref);
  }

  onToggleIdLinks(): void {
    this.id_links = !this.id_links;
    if (this.id_links) {
      this.requestExperimental("id_links",
        "It may not work as expected and may impact your browser performance, especially on Mist API pages with a large number of entries.");
    } else {
      this._browser.setStorage("id_links", "false");
    }
  }

  onToggleTimestamps(): void {
    this.ts_human = !this.ts_human;
    this._browser.setStorage("ts_human", this.ts_human ? "true" : "false");
  }

  onToggleCopyJson(): void {
    this.copy_json = !this.copy_json;
    this._browser.setStorage("copy_json", this.copy_json ? "true" : "false");
  }

  onToggleDarkManage(): void {
    this.dark_manage = !this.dark_manage;
    this._browser.setStorage("dark_manage", this.dark_manage ? "true" : "false");
  }

  private requestExperimental(key: string, message: string): void {
    this.pendingSetting = key;
    this.view = "warning";
    this.experimentalMessage = true;
    this.warningMessage = message;
    this._cd.detectChanges();
  }

  warningConfirm(): void {
    if (this.pendingSetting) {
      this._browser.setStorage(this.pendingSetting, "true");
      if (this.pendingSetting === "id_links") this.id_links = true;
    }
    this.view = "";
    this.experimentalMessage = false;
    this.pendingSetting = null;
    this._cd.detectChanges();
  }

  warningCancel(): void {
    if (this.pendingSetting === "id_links") this.id_links = false;
    if (this.pendingSetting) this._browser.setStorage(this.pendingSetting, "false");
    this.view = "";
    this.experimentalMessage = false;
    this.pendingSetting = null;
    this._cd.detectChanges();
  }
}
