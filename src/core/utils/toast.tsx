import React from 'react';
import NativeToast, {ToastShowParams} from 'react-native-toast-message';

type ToastOptions = Omit<ToastShowParams, 'text1' | 'text2'> & {
  title?: string;
  message?: string;
};

type ToastOptionsWithoutType = Omit<ToastOptions, 'type'>;

const convertToNativeOptions = (options: ToastOptions): ToastShowParams => ({
  ...options,
  text1: options.title,
  text2: options.message,
});

export const Toast = {
  ...NativeToast,

  success: (options: ToastOptionsWithoutType) =>
    NativeToast.show(convertToNativeOptions({type: 'success', ...options})),

  info: (options: ToastOptionsWithoutType) =>
    NativeToast.show(convertToNativeOptions({type: 'info', ...options})),

  error: (options: ToastOptionsWithoutType) =>
    NativeToast.show(convertToNativeOptions({type: 'error', ...options})),

  show: (options: ToastOptions) =>
    NativeToast.show(convertToNativeOptions(options)),
};

export const ToastOutline = (): JSX.Element => (
  <NativeToast position="bottom" bottomOffset={20} />
);
