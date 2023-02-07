#!/bin/sh
cd ./angular

###### UPDATE VERSION NUMBER
if [ "$1" ]
then
    jq ".version = \"$1\"" ./package.json > ./package.json
    jq ".version = \"$1\"" ./src/manifest.json > ./src/manifest.json
fi


###### BUILD PACKAGE
npm run build:prod
npx web-ext build -s ./dist -o


###### UPDATE LIVE VERSION
VERSION=`cat ./package.json | jq ".version" | grep -o "[0-9.]*"`
cd ./web-ext-artifacts
rm -rf mist_extension
unzip mist_extension-$VERSION.zip -d mist_extension
cd ..


###### BACK TO SCRIPT LOCATION
cd ../..
