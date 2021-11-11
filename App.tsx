import SplashScreen from 'react-native-splash-screen';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from 'navigation/RootStack';
import {Provider} from 'react-redux';
import {store} from 'reduxStore/store';
import {setupAuthInterceptors} from 'features/auth/setupAuthInterceptors';
import {ToastOutline} from 'core/utils/toast';

setupAuthInterceptors(store);

const App = (): JSX.Element => {
  useEffect(() => SplashScreen.hide(), []);

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
