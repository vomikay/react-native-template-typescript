import {configureStore} from '@reduxjs/toolkit';
import {authReducer} from 'features/auth/redux/authSlice';

export const reducer = {
  auth: authReducer,
};

export const store = configureStore({reducer});

export type Store = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
