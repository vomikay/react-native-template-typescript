import {configureStore} from '@reduxjs/toolkit';
import {authReducer} from 'features/auth/redux/authSlice';
import {pushReducer} from 'features/push/redux/pushSlice';

export const reducer = {
  auth: authReducer,
  push: pushReducer,
};

export const store = configureStore({reducer});

export type Store = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
