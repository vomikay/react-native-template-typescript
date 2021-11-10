import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {fValue, spacing} from 'core/utils/ui';
import {Controller, useForm} from 'react-hook-form';
import {useAppDispatch} from 'redux/hooks';
import {signIn} from 'features/auth/redux/authSlice';
import {Toast} from 'core/utils/toast';

type FormData = {
  username: string;
  password: string;
};

export const SignInScreen = (): JSX.Element => {
  const {formState, control, handleSubmit} = useForm<FormData>({
    mode: 'onChange',
  });

  const disabled = !formState.isValid;

  const dispatch = useAppDispatch();

  const onSubmit = async (data: FormData) => {
    const resultAction = await dispatch(signIn(data));

    if (signIn.rejected.match(resultAction)) {
      Toast.error({
        title: 'Authentication Error',
        message: "Connection to the server can't be made",
      });
    }
  };

  return (
    <View style={styles.root}>
      <Controller
        control={control}
        defaultValue=""
        name="username"
        rules={{required: true}}
        render={({field: {value, onChange, onBlur}}) => (
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        control={control}
        defaultValue=""
        name="password"
        rules={{required: true}}
        render={({field: {value, onChange, onBlur}}) => (
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
      />
      <TouchableOpacity
        style={[styles.button, disabled && styles.disabledButton]}
        onPress={handleSubmit(onSubmit)}
        disabled={disabled}>
        <Text style={styles.buttonText}>Sign In</Text>
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
  disabledButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: fValue(16),
  },
});
