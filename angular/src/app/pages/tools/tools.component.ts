import { Component, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-tools',
    templateUrl: 'tools.component.html',
    styleUrls: [
        'tools.component.scss',
    ],
    standalone: false
})
export class ToolsComponent {
  eventTokenInfo: Subject<boolean> = new Subject<boolean>()
  eventTokenUsage: Subject<boolean> = new Subject<boolean>()
  view: string = "";

  constructor(
    private _cd: ChangeDetectorRef,
  ) { }

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
