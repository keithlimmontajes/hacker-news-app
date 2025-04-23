import React from 'react';
import {render} from '@testing-library/react-native';
import Card from '../src/components/Card';
import {Provider} from 'react-redux';
import store from '../src/stores/store';
import {NavigationContainer} from '@react-navigation/native';
import {TamaguiProvider} from 'tamagui';
import config from '../src/themes';
import {ThemeProvider, View} from '@tamagui/core';

describe('CardComponent', () => {
  it('Should work as expected', () => {
    const all = render(
      <Provider store={store}>
        <ThemeProvider defaultTheme="light">
          <NavigationContainer>
            <TamaguiProvider config={config}>
              <Card>
                <View />
              </Card>
            </TamaguiProvider>
          </NavigationContainer>
        </ThemeProvider>
      </Provider>,
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
