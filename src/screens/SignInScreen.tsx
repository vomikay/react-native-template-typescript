import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigation/RootStack';
import {Routes} from 'navigation/Routes';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {fValue, spacing} from 'core/utils/ui';

type Props = NativeStackScreenProps<RootStackParamList, Routes.SignIn>;

export const SignInScreen = ({navigation}: Props): JSX.Element => {
  const handleSignInButtonPress = () => {
    navigation.navigate(Routes.Home);
  };

  return (
    <View style={styles.root}>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" />
      <TouchableOpacity style={styles.button} onPress={handleSignInButtonPress}>
        <Text style={styles.buttonText}>Войти</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: spacing(2),
  },
  input: {
    marginBottom: spacing(2),
    borderRadius: spacing(0.5),
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: spacing(1),
    backgroundColor: '#fff',
  },
  button: {
    borderRadius: spacing(0.5),
    paddingHorizontal: spacing(2),
    paddingVertical: spacing(1),
    backgroundColor: '#000',
    textAlign: 'center',
    fontSize: fValue(24),
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: fValue(16),
  },
});
