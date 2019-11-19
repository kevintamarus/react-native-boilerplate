## XCode version

Use Xcode 11 (on macs, Catalina OS will need to be installed). Alternatively, if you don't want to upgrade your OS, you will have to use Xcode 10

## Setting up the React Native app on your local machine

1. Go to https://facebook.github.io/react-native/docs/getting-started, click on the "React Native CLI Quickstart" tab, then, in "Development OS" tabs, click on either iOS or Android tab to follow instructions to set up your React Native environment for both platforms.

2. Open up a terminal, `npm install -g react-native-cli`(depending on your admin settings, you might need to run `sudo npm install -g react native-cli` instead) to install React Native's command line utility.

3. Clone the this repo, then CD(change directory) into this project, run: `npm install`.

4. CD in the ios folder, run `sudo gem install cocoapods`, then run `pod install`


## Running your project on iOS Simulator or Android Emulator

For iOS: run `react-native run-ios`

For Android: make sure you have your Andriod Emulator open, either in Android Studio or GenyMotion, then run `react-native run-android`


## Setting up MS App Center

https://docs.microsoft.com/en-us/appcenter/sdk/getting-started/react-native

### iOS

follow instructions for the App Center docs for React Native 0.60.  You'll have to sign the app in xcode and change the bundle identifier to a unique

Before commiting your changes after you created a `AppCenter-Config.plist` file, add `AppCenter-Config.plist` into your `XCode` section of `.gitignore` so you won't commit the App Center secret key

### Android

follow instructions for the App Center docs for React Native 0.60.

Before commiting your changes after you created a `appcenter-config.json` file, add `assets` into your `Android/IntelliJ` section of `.gitignore` so you won't commit the App Center secret key

## React Native third-party libraries

### Icons:

`react-native-vector-icons`, https://github.com/oblador/react-native-vector-icons

`react-native-svg`, https://github.com/react-native-community/react-native-svg (for converting custom svgs to use on mobile)

### CSS Component Libraries: 

`react-native-elements`, https://react-native-elements.github.io/react-native-elements/docs/getting_started.html

`native-base`, https://nativebase.io/

### Camera:
`react-native-camera`, https://github.com/react-native-community/react-native-camera

`react-native-image-picker`, https://github.com/react-native-community/react-native-image-picker

`react-native-image-crop-picker`, https://github.com/ivpusic/react-native-image-crop-picker

Keep in mind, you cannot test the camera on the iOS Simulator, you will need to run your build on a real device to test (Android Emulators are able to use your machine's camera to test)

### Input Keyboard Scrollview library:

`react-native-input-scroll-view`, https://github.com/baijunjie/react-native-input-scroll-view

This library is not quite as mature, but it takes care of scrollview offsets nicely if you run into input and keyboard view problems/discrepancies


## React Navigation documentation and dependencies

https://reactnavigation.org/docs/en/getting-started.html

for React Native version 0.60 or higher, linking is automatic

### Libraries and Dependencies

`react-navigation`
`react-native-gesture-handler`
`react-native-reanimated`
`react-native-screens`

### Optional libraries

`react-navigation-stack`
`react-navigation-tabs`