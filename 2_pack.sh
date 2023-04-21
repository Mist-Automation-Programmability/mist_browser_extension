echo "##########################################"
echo "Building Extension"
cd ./angular
npm run build:prod
npx web-ext build -s ./dist -o
cd ./web-ext-artifacts/
echo "##########################################"
echo "FINDING LAST VERSION"
MAX_X=0
MAX_Y=0
MAX_Z=0
for FILE in `ls | grep .zip`
do 
    VERSION=`echo $FILE | sed -e "s/\.zip//" | cut -d- -f2`
    X=`echo $VERSION | cut -d. -f1`
    Y=`echo $VERSION | cut -d. -f2`
    Z=`echo $VERSION | cut -d. -f3`
    if [ $X -gt $MAX_X ]
    then
        MAX_X=$X
        MAX_Y=$Y
        MAX_Z=$Z
    elif [ $X -eq $MAX_X ] && [ $Y -gt $MAX_Y ]
    then
        MAX_X=$X
        MAX_Y=$Y
        MAX_Z=$Z
    elif [ $X -eq $MAX_X ] && [ $Y -eq $MAX_Y ] && [ $Z -gt $MAX_Z ]
    then
        MAX_X=$X
        MAX_Y=$Y
        MAX_Z=$Z
    fi
done
VERSION="mist_extension-$MAX_X.$MAX_Y.$MAX_Z"
echo $VERSION

echo "##########################################"
echo "Unpacking ZIP"
rm -rf mist_extension
ZIP="$VERSION.zip"
unzip $ZIP -d mist_extension 
echo "##########################################"
echo "Chrome packing..."
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --pack-extension=./mist_extension --pack-extension-key=mist_extension.pem
echo "##########################################"
echo "Updating Firefox source"
tar czvf mist_browser_extension.tar.gz mist_extension
