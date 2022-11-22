#!/bin/sh
if [ "$1" ]
then
    jq ".version = \"$1\"" ./angular/package.json > ./angular/package.json
    jq ".version = \"$1\"" ./angular/src/manifest.json > ./angular/src/manifest.json
fi

cd ./angular
npm run build:prod
npx web-ext build -s ./dist -o
cd ../..
