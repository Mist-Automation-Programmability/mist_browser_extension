import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit {

  display: string = "api"

  private readonly labels: { [key: string]: string } = {
    api: 'API',
    account: 'Accounts',
    tools: 'Tools',
    settings: 'Settings',
    about: 'About',
  }

  constructor(private _theme: ThemeService) { }

  ngOnInit(): void {
    this._theme.init()
  }

  get tabLabel(): string {
    return this.labels[this.display] || 'API'
  }

  show(app: string): void {
    this.display = app
  }
}
