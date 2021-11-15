import messaging from '@react-native-firebase/messaging';
import {useEffect} from 'react';

export const useRequestPushPermissions = (
  onAuthorized?: () => void,
  onDenied?: () => void,
) => {
  useEffect(() => {
    (async () => {
      const authStatus = await messaging().requestPermission();

      const isAuthorized =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      isAuthorized ? onAuthorized?.() : onDenied?.();
    })();
  }, [onAuthorized, onDenied]);
};
