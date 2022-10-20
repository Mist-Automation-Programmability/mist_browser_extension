#!/bin/sh

cd ./angular/src
npm run build
npx web-ext build -s ../dist -o
cd ../..