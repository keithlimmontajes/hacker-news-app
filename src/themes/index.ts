import {createTamagui} from '@tamagui/core';
import {defaultConfig} from '@tamagui/config/v4';

const customThemes = {
  ...defaultConfig.themes,
  light: {
    ...defaultConfig.themes.light,
    background: '#F4F4EB',
    mainColor: '#FB651E',
    borderGray: '#E9E9E9',
  },
  dark: {
    ...defaultConfig.themes.dark,
    background: '#F4F4EB',
    mainColor: '#FB651E',
    borderGray: '#E9E9E9',
  },
  radius: {
    0: 0,
    1: 4,
    2: 8,
    4: 16,
  },
};

const config = createTamagui({
  ...defaultConfig,
  themes: customThemes,
  themeClassNameOnRoot: true,
});

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppTamaguiConfig {}
}

export type AppTamaguiConfig = typeof config;
export default config;
