// /** @type {import('@jest/types').Config.InitialOptions} */
// module.exports = {
//   rootDir: '..',
//   testMatch: ['<rootDir>/e2e/**/*.test.js'],
//   testTimeout: 120000,
//   maxWorkers: 1,
//   globalSetup: 'detox/runners/jest/globalSetup',
//   globalTeardown: 'detox/runners/jest/globalTeardown',
//   reporters: ['detox/runners/jest/reporter'],
//   testEnvironment: 'detox/runners/jest/testEnvironment',
//   verbose: true,
// };


/** detox.config.js */
module.exports = {
  rootDir: '..',
  testMatch: ['<rootDir>/e2e/**/*.test.js'],
  testTimeout: 120000,
  maxWorkers: 1,
  globalSetup: 'detox/runners/jest/globalSetup',
  globalTeardown: 'detox/runners/jest/globalTeardown',
  reporters: ['detox/runners/jest/reporter'],
  testEnvironment: 'detox/runners/jest/testEnvironment',
  verbose: true,
  // testRunner: 'jest',
  runnerConfig: 'e2e/config.json',
  specs: 'e2e',
  apps: {
    'ios.debug': {
      type: 'ios.app',
      binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/MyProject.app',
      build: 'xcodebuild -workspace ios/YourApp.xcworkspace -scheme MyProject -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build',
    },
    'android.debug': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      build: 'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug',
    },
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: { type: 'iPhone 15 Pro' }, // change to your emulator's name
    },
    emulator: {
      type: 'android.emulator',
      device: { avdName: 'android-34' }, // change to your emulator's name
    },
  },
  configurations: {
    'ios.sim.debug': {
      device: 'simulator',
      app: 'ios.debug',
    },
    'android.emu.debug': {
      device: 'emulator',
      app: 'android.debug',
    },
  },
}
