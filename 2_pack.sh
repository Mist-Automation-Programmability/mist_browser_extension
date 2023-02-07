echo "##########################################"
echo "Building Extension"
cd ./angular
npm run build:prod
npx web-ext build -s ./dist -o
cd ./web-ext-artifacts/
echo "##########################################"
echo "Unpacking ZIP"
rm -rf mist_extension
FILE=`ls | grep .zip | sort | tail -n1`
unzip $FILE -d mist_extension 
echo "##########################################"
echo "Chrome packing..."
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --pack-extension=./mist_extension --pack-extension-key=mist_extension.pem
echo "##########################################"
echo "Updating Firefox source"
cd mist_browser_extension
rm build.sh
rm chrome_ext_convert.py
rm gep_api_struct.sh
rm pack.sh
git pull
cd ..
rm mist_browser_extension.tar.gz
tar czvf mist_browser_extension.tar.gz mist_browser_extension
