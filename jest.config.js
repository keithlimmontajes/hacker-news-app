module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
      '|@react-native' +
      '|@reduxjs/toolkit' +
      '|react-redux' +
      '|@react-navigation' +
      '|react-native-autoheight-webview' +
      ')/)',
  ],
  collectCoverage: true,
  coverageDirectory: './coverage',
  coverageReporters: ['html', 'text', 'lcov'],
  coveragePathIgnorePatterns: ['/node_modules/', '/__tests__/', '/mocks/'],
  reporters: [
    'default',
    [
      'jest-html-reporter',
      {
        pageTitle: 'Test Report',
        outputPath: './reports/test-report.html',
        includeFailureMsg: true,
        includeSuiteFailure: true,
      },
    ],
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@reduxjs/toolkit|react-redux|@react-navigation)/)',
  ],
  moduleNameMapper: {
    "@tamagui/core": "@tamagui/core/native-test"
  },
  testEnvironmentOptions: {
    customExportConditions: ['react-native'],
},
};
