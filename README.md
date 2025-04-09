# Mist Browser Extension

A web browser extension designed to simplify access to Juniper Mist APIs and API Tokens. This extension is supported on Firefox, Chrome, and Chromium-based browsers (e.g., Edge, Brave, Sidekick). It is a valuable tool for Juniper Mist developers and users to explore and utilize Mist APIs efficiently.

> [!IMPORTANT]
> This extension is in the process of being published on the Chrome Web Store, Microsoft Edge Add-ons Store, and Firefox Add-ons Store. Once available, the official store links will be provided below.
> 
> For users of these browsers, it is strongly recommended to install the extension directly from the respective store to ensure automatic updates and the latest features.

> [!TIP]
> For chromium-based web browsers (Ms Edge, Opera, Brave, Vivaldi, Ecosia, ...), the extension can be installed from the Chrome Web Store page

## Store Links:
- [Chrome Web Store](https://chromewebstore.google.com/detail/mist-extension/ejhpdcljeamillfhdihkkmoakanpbplh)


## Table of Contents
- [Features](#features)
  - [Supported Juniper Clouds](#supported-juniper-clouds)
  - [API Tab](#api-tab)
  - [Account Tab](#account-tab)
  - [About Tab](#about-tab)
- [Installation](#installation)
  - [Chrome / Chromium](#chrome--chromium)
  - [Firefox](#firefox)
- [Build Instructions](#build-instructions)
  - [Prerequisites](#prerequisites)
  - [Run/Debug](#rundebug)
  - [Build](#build)

---

## MIT LICENSE
 
Copyright (c) 2021 Thomas Munzer

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the  Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---


## Features

### Supported Juniper Clouds

#### Mist Clouds
- Global 01: `manage.mist.com`
- Global 02: `manage.gc1.mist.com`
- Global 03: `manage.ac2.mist.com`
- Global 04: `manage.gc2.mist.com`
- Global 05: `manage.gc4.mist.com`
- EMEA 01: `manage.eu.mist.com`
- EMEA 02: `manage.gc3.mist.com`
- EMEA 03: `manage.ac6.mist.com`
- APAC 01: `manage.ac5.mist.com`
- US GOV Cloud: `manage.us.mist-federal.com`

#### Juniper AI Clouds
- DC: `dc.ai.juniper.net`
- JSI: `jsi.ai.juniper.net`
- Routing: `routing.ai.juniper.net`

### API Tab

#### When on the Mist Dashboard
- Quick access to Mist IDs (`org_id`, `site_id`, and `object_id`) from the current Mist dashboard page.
- Direct access to Mist API Pages (Django) from the current Mist dashboard page.

<div>
<img src="https://github.com/Mist-Automation-Programmability/mist_browser_extension/raw/main/._readme/img/mist_ui_device.png" width="75%">
</div>
<div>
<img src="https://github.com/Mist-Automation-Programmability/mist_browser_extension/raw/main/._readme/img/mist_ui_sle.png" width="75%">
</div>

#### When on a Django Page
- Lists all available query parameters.
- Allows easy customization of query parameters.
- Direct access to the online API documentation for the current API call (GET/POST/PUT/DELETE).

<div>
<img src="https://github.com/Mist-Automation-Programmability/mist_browser_extension/raw/main/._readme/img/mist_api_device.png" width="75%">
</div>


### Account Tab
- Lists all current valid Mist sessions in the web browser for various Mist clouds (e.g., `manage.mist.com`, `manage.eu.mist.com`, `manage.gc1.mist.com`).
<div>
<img src="https://github.com/Mist-Automation-Programmability/mist_browser_extension/raw/main/._readme/img/ext_account.png" width="25%">
</div>
- Manage User API Tokens (list, delete, create).
<div>
<img src="https://github.com/Mist-Automation-Programmability/mist_browser_extension/raw/main/._readme/img/ext_token_user_create.png" width="25%">
<img src="https://github.com/Mist-Automation-Programmability/mist_browser_extension/raw/main/._readme/img/ext_token_user_list.png" width="25%">
</div>
- Manage Organization API Tokens (list, delete, create).

<div>
<img src="https://github.com/Mist-Automation-Programmability/mist_browser_extension/raw/main/._readme/img/ext_token_org_create.png" width="25%">
<img src="https://github.com/Mist-Automation-Programmability/mist_browser_extension/raw/main/._readme/img/ext_token_org_list.png" width="25%">
</div>


### Tools Tab
- Provides different tools to view API Token information and usage
<div>
<img src="https://github.com/Mist-Automation-Programmability/mist_browser_extension/raw/main/._readme/img/ext_tool_token_info.png" width="25%">
<img src="https://github.com/Mist-Automation-Programmability/mist_browser_extension/raw/main/._readme/img/ext_tool_token_usage.png" width="25%">
</div>

### About Tab
- Quick access to Mist API documentation (official Mist documentation, Postman documentation, OpenAPI documentation).
- Version check to determine if a new version of the extension is available, with the ability to download updates directly from the extension.
<div>
<img src="https://github.com/Mist-Automation-Programmability/mist_browser_extension/raw/main/._readme/img/ext_about.png" width="25%">
</div>
---

## Installation

This extension is not yet available on the [Chrome Web Store](https://chrome.google.com/) or the [Firefox Add-ons Store](https://addons.mozilla.org/en-US/firefox/extensions/). However, you can install it manually in Chrome/Chromium-based browsers and Firefox.

### Chrome / Chromium
1. Download the file `mist_extension-X.Y.Z.zip` from the [latest release](https://github.com/Mist-Automation-Programmability/mist_browser_extension/releases).
2. Unzip the downloaded archive.
3. Open the browser's Extensions Page: <a href="chrome://extensions" target="_blank">chrome://extensions</a> 
4. Enable **Developer Mode**.

<img src="https://github.com/Mist-Automation-Programmability/mist_browser_extension/raw/main/._readme/img/install_dev_mode.png" width="80%">

5. Click **Load Unpacked** and select the unzipped folder.

<img src="https://github.com/Mist-Automation-Programmability/mist_browser_extension/raw/main/._readme/img/install_load_unpacked.png" width="40%">

6. The extension is now ready to use!

### Firefox
1. Download the file `mist_extension-X.Y.Z.xpi` from the [latest release](https://github.com/Mist-Automation-Programmability/mist_browser_extension/releases).
2. Open the `about:addons` page in Firefox.
<img src="https://github.com/Mist-Automation-Programmability/mist_browser_extension/raw/main/._readme/img/install_firefox_1.png" width="50%">

3. Click the "Settings" button and select **Install Add-on From File...**.

<img src="https://github.com/Mist-Automation-Programmability/mist_browser_extension/raw/main/._readme/img/install_firefox_2.png" width="80%">

4. Select the `mist_extension-X.Y.Z.xpi` file.

---

## Build Instructions

This extension was developed on macOS 12.6.1 using:
- Node.js >= 19.0.1
- npm >= 8.19.2
- Python >= 3.8.5

### Prerequisites
From the `angular` folder, install dependencies:
```bash
npm install
```

### Run/Debug
From the `angular` folder:

- Build the Angular app in debug mode:
```bash
npx web-ext run -s ./dist
```

- Start the extension in the browser:
 - For Firefox:
```bash
npx web-ext run -t chromium -s ./dist --browser-console
```
 - For Chromium-based browsers:

### Build
From the `angular` folder:

- Build the Angular app in production mode:
```bash
npm run build:prod
```
- Package the extension:
```bash
npx web-ext build -s ./dist -o
```

The packaged extension will be located in web-ext-artifacts.
