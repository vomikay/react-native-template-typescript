import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from 'navigation/Routes';
import {SignInScreen} from 'screens/SignInScreen';
import {HomeScreen} from 'screens/HomeScreen';
import {useAppDispatch, useAppSelector} from 'reduxStore/hooks';
import {getAccessToken} from 'features/auth/redux/selectors';
import {SignOutButton} from 'features/auth/components/SignOutButton';
import {usePushNotificationsToken} from 'features/push/hooks/usePushNotificationsToken';
import {sendPushToken} from 'features/push/redux/pushSlice';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  [Routes.SignIn]: undefined;
  [Routes.Home]: undefined;
};

export const RootStack = (): JSX.Element => {
  const isSignedIn = Boolean(useAppSelector(getAccessToken));

  // It is recommended you fetch and update the token each time the application boots in-case it has changed.
  const dispatch = useAppDispatch();
  const pushToken = usePushNotificationsToken();

  useEffect(() => {
    if (isSignedIn && pushToken) {
      dispatch(sendPushToken({pushToken}));
    }
  }, [dispatch, isSignedIn, pushToken]);

  return (
    <Stack.Navigator>
      {isSignedIn ? (
        <>
          <Stack.Screen
            name={Routes.Home}
            component={HomeScreen}
            options={{
              headerRight: () => <SignOutButton />,
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name={Routes.SignIn}
            component={SignInScreen}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
