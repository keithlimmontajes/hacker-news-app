import React from 'react';
import {render} from '@testing-library/react-native';
import ItemList from '../src/components/ItemList';
import {Provider} from 'react-redux';
import store from '../src/stores/store';
import {NavigationContainer} from '@react-navigation/native';
import {TamaguiProvider} from 'tamagui';
import config from '../src/themes';
import {ThemeProvider} from '@tamagui/core';

describe('ItemListComponent', () => {
  it('Should work as expected', () => {
    const all = render(
      <Provider store={store}>
        <ThemeProvider defaultTheme="light">
          <NavigationContainer>
            <TamaguiProvider config={config}>
              <ItemList
                item={{
                  id: '',
                  title: '',
                  url: '',
                  time: undefined,
                  score: '',
                  by: '',
                }}
              />
            </TamaguiProvider>
          </NavigationContainer>
        </ThemeProvider>
      </Provider>,
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
