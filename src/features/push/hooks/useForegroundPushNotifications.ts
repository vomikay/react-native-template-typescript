import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
import {useEffect} from 'react';

export const useForegroundPushNotifications = () => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      await notifee.displayNotification({
        title: remoteMessage.notification?.title,
        body: remoteMessage.notification?.body,
        android: {channelId: 'default'},
      });

      console.log('Foreground push notification arrived', remoteMessage);
    });

    return unsubscribe;
  }, []);
};
