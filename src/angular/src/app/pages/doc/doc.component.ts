import { Component } from '@angular/core';

export interface linkElement {
  url: string,
  name: string
}

@Component({
  selector: 'app-doc',
  templateUrl: 'doc.component.html',
  styleUrls: ['doc.component.scss']
})
export class DocComponent  {
 

  openTab(target: string) {
    let dest_url = ""
    switch (target) {
      case "openapi":
        dest_url = "https://doc.mist-lab.fr";
        break;
      case "postman":
        dest_url = "https://documenter.getpostman.com/view/224925/SzYgQufe";
        break;
      case "mist":
        dest_url = "https://api.mist.com/api/v1/docs";
        break;
    }
    if (dest_url) {
      chrome.tabs.create({ url: dest_url });
    }
  }
}
