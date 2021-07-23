# rnPaperDemo
# If you already have react native evironment
1. Clone the repo
2. Change directory int the project
3. run `npm i`
4. run `cd ios && pod install && cd -`
5. run `react-native run-ios` or `react-native run-android`

# If you don't have React native Environment setup
1.check documentation
https://reactnative.dev/docs/environment-setup

2.Install homebrew

https://brew.sh/

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

Paste above command to run in terminal

3.Node & Watchman

brew install node
brew install watchman

4.Install Xcode
From app store-it takes more time to install.

Command Line Tools#
You will also need to install the Xcode Command Line Tools. Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.


Open project folder from xocde.

Running your React Native application#

$ react-native init newproject --version X.XX.X

Step 1: Start Metro#
First, you will need to start Metro, the JavaScript bundler that ships with React Native. Metro "takes in an entry file and various options, and returns a single JavaScript file that includes all your code and its dependencies."—Metro Docs
To start Metro, run npx react-native start inside your React Native project folder:
npx react-native start
Copy
react-native start starts Metro Bundler.
If you use the Yarn package manager, you can use yarn instead of npx when running React Native commands inside an existing project.
If you're familiar with web development, Metro is a lot like webpack—for React Native apps. Unlike Kotlin or Java, JavaScript isn't compiled—and neither is React Native. Bundling isn't the same as compiling, but it can help improve startup performance and translate some platform-specific JavaScript into more widely supported JavaScript.
Step 2: Start your application#
Let Metro Bundler run in its own terminal. Open a new terminal inside your React Native project folder. Run the following:
npx react-native run-ios
Copy

To install Vector Icons


Step 1: Install react-native-element:
npm install react-native-elements --save
Steps 2: Install react-native-vector-icons Install from npm
npm install react-native-vector-icons --save
https://reactnative.dev/docs/linking-libraries-ios(for manual linking)

​​Automatic linking#
Step 1#
Install a library with native dependencies:
npm install <library-with-native-dependencies> --save
Copy
Note: --save or --save-dev flag is very important for this step. React Native will link your libs based on dependencies and devDependencies in your package.json file.
Step 2#
Link your native dependencies:
npx react-native link
Copy
Done! All libraries with native dependencies should be successfully linked to your iOS/Android project.

npx react-native init rnPaperDemo
                                                          


React Native android install

Please add this in bash profile
```
export ANDROID_HOME=$HOME/Library/Android/sdk 
export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```



projectpath>cd ios && pod install && cd ..  

npx react-native link react-native-camera to link any libraries
