import messaging from '@react-native-firebase/messaging';
import {savePushToken} from 'features/push/redux/pushSlice';
import {getPushToken} from 'features/push/redux/selectors';
import {useCallback, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'reduxStore/hooks';

export const usePushNotificationsToken = () => {
  const dispatch = useAppDispatch();

  const onTokenReceive = useCallback(
    (pushToken: string) => {
      dispatch(savePushToken({pushToken}));
      console.log('Push Notifications Token:', pushToken);
    },
    [dispatch],
  );

  useEffect(() => {
    (async () => {
      const token = await messaging().getToken();
      onTokenReceive(token);
      messaging().onTokenRefresh(onTokenReceive);
    })();
  }, [onTokenReceive]);

  return useAppSelector(getPushToken);
};
