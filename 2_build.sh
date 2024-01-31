#!/bin/sh
cd ./angular

###### UPDATE VERSION NUMBER
if [ "$1" ]
then
    jq ".version = \"$1\"" ./package.json > ./package.json.new
    mv ./package.json.new ./package.json
    jq ".version = \"$1\"" ./src/manifest_ffx.json > ./src/manifest_ffx.json.new
    mv ./src/manifest_ffx.json.new ./src/manifest_ffx.json
    jq ".version = \"$1\"" ./src/manifest_chrome.json > ./src/manifest_chrome.json.new
    mv ./src/manifest_chrome.json.new ./src/manifest_chrome.json
fi

function build {
    BROWSER=$1
    MANIFEST="manifest_$BROWSER.json"
    echo ""
    echo "---------------------------------------"
    echo "---- $BROWSER"
    echo "---------------------------------------"
    ###### BUILD PACKAGE
    echo "Using $MANIFEST"
    cp ./src/$MANIFEST ./src/manifest.json

    ###### BUILD PACKAGE
    npm run build:prod
    npx web-ext build -s ./dist -o

    ###### UPDATE LIVE VERSION
    VERSION=`cat ./package.json | jq ".version" | grep -o "[0-9.]*"`
    cd ./web-ext-artifacts
    mv mist_extension-$VERSION.zip mist_extension-$BROWSER-$VERSION.zip
    rm -rf mist_extension-$BROWSER
    unzip mist_extension-$BROWSER-$VERSION.zip -d mist_extension-$BROWSER
    cd ..
}

###### BACK TO SCRIPT LOCATION
build "ffx"
build "chrome"
cd ../..
