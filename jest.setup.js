import 'react-native-gesture-handler/jestSetup';

// jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));
// jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

jest.mock('@tamagui/core', () => {
    const originalModule = jest.requireActual('@tamagui/core');
    return {
        ...originalModule,
        TamaguiProvider: ({ children }) => <>{children}</>,
    };
});