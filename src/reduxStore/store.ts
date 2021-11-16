import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {authReducer} from 'features/auth/redux/authSlice';
import {pushReducer} from 'features/push/redux/pushSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['accessToken'],
};

export const reducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  push: pushReducer,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type Store = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
