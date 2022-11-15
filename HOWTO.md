# PREREQUISITES
from the `angular` folder, install dependencies with `npm install`

# RUN/DEBUG
from thge `/angular` folder:
* build the angular app in debug mode with `npm start` 
* start the npx debugger with `npx web-ext run -s ./dist` (Firefox) or `npx web-ext run -t chromium -s ./dist --browser-console` (chromium) 

# BUILD
from the `/angular/src` folder:
* build the angular app in production mode with `npm run build:prod`
* build the extension with npx: `npx web-ext build -s ../dist -o`
the extension is located in `/angular/src/web-ext-artifacts`

