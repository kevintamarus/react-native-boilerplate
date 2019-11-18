## Setting up the React Native app on your local machine

1.  Go to https://facebook.github.io/react-native/docs/getting-started, click on "Building Projects with Native Code" tab, then, in "Target OS", click on either iOS or Android tab to follow instructions to set up your React Native environment for both platforms.

2.  open up a terminal, `npm install -g react-native-cli`(depending on your admin settings, you might need to run `sudo npm install -g react native-cli` instead) to install React Native's command line utility.

3.  clone the this repo, then CD(change directory) into this project, run: `npm install`.

4. CD in the ios folder, run `sudo gem install cocoapods`, then run `pod install`

## Running your project on iOS Simulator or Android Emulator

For iOS: run `react-native run-ios`

For Android: make sure you have your Andriod Emulator open, either in Android Studio or GenyMotion, then run `react-native run-android`

## Setting up 

## React Navigation documentation and dependencies

https://reactnavigation.org/docs/en/getting-started.html

`react-navigation`
`react-native-gesture-handler`
`react-native-reanimated`
`react-native-screens`

### Optional libraries

`react-navigation-stack`
