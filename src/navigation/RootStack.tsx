import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from 'navigation/Routes';
import {SignInScreen} from 'screens/SignInScreen';
import {HomeScreen} from 'screens/HomeScreen';
import {useAppSelector} from 'reduxStore/hooks';
import {getAccessToken} from 'features/auth/redux/selectors';
import {SignOutButton} from 'features/auth/components/SignOutButton';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  [Routes.SignIn]: undefined;
  [Routes.Home]: undefined;
};

export const RootStack = (): JSX.Element => {
  const isSignedIn = Boolean(useAppSelector(getAccessToken));

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
