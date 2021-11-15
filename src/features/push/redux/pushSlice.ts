import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {pushRepository} from 'features/push/repository';
import {SendPushTokenRequestData} from 'features/push/types';

const name = 'push' as const;

export const sendPushToken = createAsyncThunk(
  `${name}/sendPushToken`,
  (params: SendPushTokenRequestData) => pushRepository.sendPushToken(params),
);

type State = {
  pushToken: string | null;
};

const initialState: State = {
  pushToken: null,
};

const authSlice = createSlice({
  name,
  initialState,
  reducers: {
    savePushToken: (state, action: PayloadAction<{pushToken: string}>) => {
      state.pushToken = action.payload.pushToken;
    },
  },
});

export const {savePushToken} = authSlice.actions;

export const pushReducer = authSlice.reducer;
