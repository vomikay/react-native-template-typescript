import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from 'navigation/RootStack';
import React from 'react';

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
