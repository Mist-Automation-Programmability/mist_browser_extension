# Mist Chrome Extension
Chrome extension to get easier access to Mist APIs and Mist API Tokens.
 
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
* Europe 01 (manage.eu.mist.com)

## API Tab
### When on the Mist Dashboard
* Quick access to the Mist IDs (org_id, site_id and object_id) from the current Mist dashboard page
* Direct access to the Mist API Pages (Django) from the current Mist dashboard page

<div>
<img src="https://github.com/tmunzer/mist_chrome_extension/raw/main/._readme/img/api.png" width="50%">
</div>

### When on a Django Page
* Lists all the available query parameters
* Allows to easily customize the query parameters
* Direct access to the Online API Documentation for the current API Call (GET/POST/PUT/DELETE)

<div>
<img src="https://github.com/tmunzer/mist_chrome_extension/raw/main/._readme/img/django.png" width="50%">
</div>

## Account Tab

* List all the current valid Mist session in the web browser for manage.mist.com, manage.eu.mist.com, manage.gc1.mist.com
<div>
<img src="https://github.com/tmunzer/mist_chrome_extension/raw/main/._readme/img/accounts_list.png" width="40%">
</div>


* Manage User API Token (list / delete / create)

<div>
<img src="https://github.com/tmunzer/mist_chrome_extension/raw/main/._readme/img/accounts_create.png" width="40%">
<img src="https://github.com/tmunzer/mist_chrome_extension/raw/main/._readme/img/accounts_manage.png" width="40%">
</div>


* Manage Org API Token (list / delete / create)

<div>
<img src="https://github.com/tmunzer/mist_chrome_extension/raw/main/._readme/img/accounts_org_create.png" width="40%">
<img src="https://github.com/tmunzer/mist_chrome_extension/raw/main/._readme/img/accounts_org_manage.png" width="40%">
</div>

## About Tab
* Quick access to the Mist API documentation (Mist official documentation, Postman documentation, OpenAPI documentation)
* Version check from the extension to know if a new version is available, and download new versions directly from the extension
<div>
<img src="https://github.com/tmunzer/mist_chrome_extension/raw/main/._readme/img/about.png" width="40%">
</div>


# Installation
This extension is not yet available on the [Chrome Web Store](https://chrome.google.com/), but it is possible to install it in Chrome / Chromium (Edge, Brave, Sidekick, ...) web browsers. To do so:
1. Download the file `extension-build.zip` from the [latest release](https://github.com/tmunzer/mist_chrome_extension/releases)
2. Unzip the downloaded archive
3. Go to the web browser Extensions Page: <a href="chrome://extensions" target="_blank">chrome://extensions</a> 
4. Enable the **Developper Mode**

<img src="https://github.com/tmunzer/mist_chrome_extension/raw/main/._readme/img/dev_mode.png" width="80%">

5. Click **Load Unpacked** and select the unzipped folder

<img src="https://github.com/tmunzer/mist_chrome_extension/raw/main/._readme/img/load_unpacked.png" width="40%">

6. The extension is ready to use!


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

