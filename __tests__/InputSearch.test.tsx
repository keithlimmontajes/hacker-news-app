import React from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {TamaguiProvider} from 'tamagui';
import {ThemeProvider} from '@tamagui/core';

import store from '../src/stores/store';
import config from '../src/themes';
import InputSearch from '../src/components/InputSearch';

jest.mock('../tamagui.config', () => ({
    __esModule: true,
    default: {
      tokens: {},
      themes: {},
      config: {},
    },
  }))

describe('InputSearchComponent', () => {
  it('Should work as expected', () => {
    const all = render(
      <Provider store={store}>
        <ThemeProvider defaultTheme="light">
          <NavigationContainer>
            <TamaguiProvider config={config}>
              <InputSearch />
            </TamaguiProvider>
          </NavigationContainer>
        </ThemeProvider>
      </Provider>,
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
