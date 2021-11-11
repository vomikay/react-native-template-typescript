import {signOut} from 'features/auth/redux/authSlice';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useAppDispatch} from 'redux/hooks';

export const SignOutButton = () => {
  const dispatch = useAppDispatch();

  const handlePress = () => {
    dispatch(signOut());
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text>Sign Out</Text>
    </TouchableOpacity>
  );
};
