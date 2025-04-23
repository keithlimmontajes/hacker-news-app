import {TamaguiProvider} from '@tamagui/core';
import {Provider} from 'react-redux';
import config from './themes';
import store from './stores/store';
import RootNavigation from './navigations';

export default () => {
  return (
    <Provider store={store}>
      <TamaguiProvider config={config}>
        <RootNavigation />
      </TamaguiProvider>
    </Provider>
  );
};
