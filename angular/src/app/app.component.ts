import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {

  display: string = "api"

  private readonly labels: { [key: string]: string } = {
    api: 'API',
    account: 'Accounts',
    tools: 'Tools',
    about: 'About',
  }

  get tabLabel(): string {
    return this.labels[this.display] || 'API'
  }

  show(app: string): void {
    this.display = app
  }
}
