import { Component, Output, Input, ChangeDetectionStrategy, EventEmitter, OnInit } from '@angular/core';


@Component({
    selector: 'app-tools-warning',
    templateUrl: 'warning.component.html',
    styleUrls: [
        'warning.component.scss',
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ToolsWarningComponent implements OnInit {

  @Input() experimentalMessage: boolean = false;
  @Input() warningMessage: string;
  @Output() warningConfirm = new EventEmitter<string>();
  @Output() warningCancel = new EventEmitter<string>();
  constructor(
  ) { }

  ngOnInit() {
  }


  confirm(): void {
    this.warningConfirm.emit();
  }
  cancel(): void {
    this.warningCancel.emit();
  }


}
