import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
//import { TAB_URL } from './app/providers/tab-url.provider';
// import { browser } from 'webextension-polyfill';


// browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
//   if (environment.production) {
//     enableProdMode();
//   }

//   const { url: tabUrl } = [...tabs].pop();

//   // provides the current Tab ID so you can send messages to the content page
//   platformBrowserDynamic([{ provide: TAB_URL, useValue: tabUrl }])
//     .bootstrapModule(AppModule)
//     .catch(error => console.error(error));
// });

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(error => console.error(error));