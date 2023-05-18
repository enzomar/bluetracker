

### Setup
```bash
npm install
npm i -g eas-cli
npx expo prebuild
```

### Android 
#### Simulator
```bash
npx expo run:android
```

#### Device
```bash
npx expo start
```

### IOS

```bash
eas build --profile development --platform ios
```


### Build
```bash
eas build -p android --clear-cache
```


### AAB to APKS
eas build -p android --profile preview

bundletool build-apks --bundle=application-1a0195d1-1279-44a3-a428-acc3dea30920.aab --output=bluetracker.apks
bundletool extract-apks --apks=bluetracker.apks --device-spec=device.json --output-dir=bluetracker

$ANDROID_HOME/platform-tools/adb devices
$ANDROID_HOME/platform-tools/adb install android/app/build/outputs/apk/debug/app-debug.apk


adb -s 5856423841563398 logcat



