import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from 'navigation/RootStack';
import {Provider} from 'react-redux';
import {store} from 'redux/store';
import {setupAuthInterceptors} from 'features/auth/setupAuthInterceptors';
import {ToastOutline} from 'core/utils/toast';

setupAuthInterceptors(store);

const App = (): JSX.Element => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </Provider>
      <ToastOutline />
    </>
  );
};

export default App;
