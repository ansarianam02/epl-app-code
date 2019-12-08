#!/usr/bin/python
import os
import subprocess


os.system("cordova build --release android");
os.system("jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ./my-release-key.jks platforms/android/build/outputs/apk/android-release-unsigned.apk BIGCITY");
os.system("./zipalign -v 4 'platforms/android/build/outputs/apk/android-release-unsigned.apk' eplApp.apk");

#subprocess.call("date");
#os.system("ls -il");

#cordova build ios --device cd platforms/ios/build/device /usr/bin/xcrun -sdk iphoneos PackageApplication "$(pwd)/$PROJECT_NAME.app" -o "$(pwd)/$PROJECT_NAME.ipa"