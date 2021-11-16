import SplashScreen from 'react-native-splash-screen';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from 'navigation/RootStack';
import {Provider} from 'react-redux';
import {persistor, store} from 'reduxStore/store';
import {setupAuthInterceptors} from 'features/auth/setupAuthInterceptors';
import {ToastOutline} from 'core/utils/toast';
import {useRequestPushPermissions} from 'features/push/hooks/useRequestPushPermissions';
import {useForegroundPushNotifications} from 'features/push/hooks/useForegroundPushNotifications';
import {PersistGate} from 'redux-persist/integration/react';

// Create the notification channel for Android devices.
// Don't forget to change the messaging_android_notification_channel_id in the firebase.json.
notifee.createChannel({id: 'default', name: 'Default', sound: 'default'});

setupAuthInterceptors(store);

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Background push notification arrived', remoteMessage);
});

const App = (): JSX.Element => {
  useRequestPushPermissions();
  useForegroundPushNotifications();

  useEffect(() => SplashScreen.hide(), []);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </PersistGate>
      </Provider>
      <ToastOutline />
    </>
  );
};

export default App;
