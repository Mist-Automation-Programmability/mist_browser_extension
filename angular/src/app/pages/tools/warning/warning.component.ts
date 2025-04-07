import { Component, Output, Input, ChangeDetectionStrategy, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-tools-warning',
  templateUrl: 'warning.component.html',
  styleUrls: [
    '../../../scss/popup.component.scss',
    '../../../scss/button.component.scss',
    'warning.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
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
