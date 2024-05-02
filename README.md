# Mist Browser Extension
Browser extension to get easier access to Mist APIs and Mist API Tokens. 
Supported on Firefox, Chrome / Chromium-based Web browsers.
 
* [Features](#features)
* [Installation](#installation)
* [Build instruction](#buildinstruction)

## MIT LICENSE
 
Copyright (c) 2021 Thomas Munzer

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the  Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


# Features
## Supported Mist Clouds:
* Global 01 (manage.mist.com)
* Global 02 (manage.gc1.mist.com)
* Global 03 (manage.ac2.mist.com)
* Global 04 (manage.gc2.mist.com)
* EMEA 01 (manage.eu.mist.com)
* EMEA 02 (manage.gc3.mist.com)
* APAC 01 (manage.ac5.mist.com)
* US GOV Cloud (manage.us.mist-federal.com)

## API Tab
### When on the Mist Dashboard
* Quick access to the Mist IDs (org_id, site_id and object_id) from the current Mist dashboard page
* Direct access to the Mist API Pages (Django) from the current Mist dashboard page

<div>
<img src="https://github.com/Mist-Automation-Programmability/mist_browser_extension/raw/main/._readme/img/api.png" width="50%">
</div>

### When on a Django Page
* Lists all the available query parameters
* Allows to easily customize the query parameters
* Direct access to the Online API Documentation for the current API Call (GET/POST/PUT/DELETE)

<div>
<img src="https://github.com/Mist-Automation-Programmability/mist_browser_extension/raw/main/._readme/img/django.png" width="50%">
</div>

## Account Tab

* List all the current valid Mist session in the web browser for manage.mist.com, manage.eu.mist.com, manage.gc1.mist.com, ...
<div>
<img src="https://github.com/Mist-Automation-Programmability/mist_browser_extension/raw/main/._readme/img/accounts_list.png" width="40%">
</div>


* Manage User API Token (list / delete / create)

<div>
<img src="https://github.com/Mist-Automation-Programmability/mist_browser_extension/raw/main/._readme/img/accounts_create.png" width="40%">
<img src="https://github.com/Mist-Automation-Programmability/mist_browser_extension/raw/main/._readme/img/accounts_manage.png" width="40%">
</div>


* Manage Org API Token (list / delete / create)

<div>
<img src="https://github.com/Mist-Automation-Programmability/mist_browser_extension/raw/main/._readme/img/accounts_org_create.png" width="40%">
<img src="https://github.com/Mist-Automation-Programmability/mist_browser_extension/raw/main/._readme/img/accounts_org_manage.png" width="40%">
</div>

## About Tab
* Quick access to the Mist API documentation (Mist official documentation, Postman documentation, OpenAPI documentation)
* Version check from the extension to know if a new version is available, and download new versions directly from the extension
<div>
<img src="https://github.com/Mist-Automation-Programmability/mist_browser_extension/raw/main/._readme/img/about.png" width="40%">
</div>


# Installation
This extension is not yet available on the [Chrome Web Store](https://chrome.google.com/) or the [Firefox Extension Store](https://addons.mozilla.org/en-US/firefox/extensions/), but it is possible to install it in Chrome / Chromium (Edge, Brave, Sidekick, ...) and Firefox web browsers.

### Chrome / Chromium
1. Download the file `mist_extension-X.Y.Z.zip` from the [latest release](https://github.com/Mist-Automation-Programmability/mist_browser_extension/releases)
2. Unzip the downloaded archive
3. Go to the web browser Extensions Page: <a href="chrome://extensions" target="_blank">chrome://extensions</a> 
4. Enable the **Developer Mode**

<img src="https://github.com/Mist-Automation-Programmability/mist_browser_extension/raw/main/._readme/img/dev_mode.png" width="80%">

5. Click **Load Unpacked** and select the unzipped folder

<img src="https://github.com/Mist-Automation-Programmability/mist_browser_extension/raw/main/._readme/img/load_unpacked.png" width="40%">

6. The extension is ready to use!

### Firefox
1. Download the file `mist_extension-X.Y.Z.xpi` from the [latest release](https://github.com/Mist-Automation-Programmability/mist_browser_extension/releases)
2. Go to `about:addons` url from Firefox
<img src="https://github.com/Mist-Automation-Programmability/mist_browser_extension/raw/main/._readme/img/firefox_1.png" width="30%">

3. Click on the "Settings" button, then "Install Add-on From Files..."
<img src="https://github.com/Mist-Automation-Programmability/mist_browser_extension/raw/main/._readme/img/firefox_2.png" width="50%">

4. Select the `mist_extension-X.Y.Z.xpi`file

# Build Instruction
This extension has been build on Mac OS 12.6.1, with 
* Node 19.0.1
* NPM 8.19.2
* Python 3.8.5

## PREREQUISITES
From the `angular` folder, install dependencies with `npm install`

# RUN/DEBUG
from thge `/angular/` folder:
* build the angular app in debug mode with `npm start` 
* start the npx debugger with `npx web-ext run -s ./dist` (Firefox) or `npx web-ext run -t chromium -s ./dist --browser-console` (chromium) 

# BUILD
from the `/angular/` folder:
* build the angular app in production mode with `npm run build:prod`
* build the extension with npx: `npx web-ext build -s ./dist -o`
the extension is located in `/angular/web-ext-artifacts`

