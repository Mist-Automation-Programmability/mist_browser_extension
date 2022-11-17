#!/bin/sh
./gen_api_struct.sh
cd ./angular/src
npm run build:prod
npx web-ext build -s ../dist -o
cd ../..
