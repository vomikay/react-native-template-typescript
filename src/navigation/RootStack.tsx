import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from 'navigation/Routes';
import {SignInScreen} from 'screens/SignInScreen';
import {HomeScreen} from 'screens/HomeScreen';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  [Routes.SignIn]: undefined;
  [Routes.Home]: undefined;
};

export const RootStack = (): JSX.Element => (
  <Stack.Navigator>
    <Stack.Screen
      name={Routes.SignIn}
      component={SignInScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={Routes.Home}
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);
