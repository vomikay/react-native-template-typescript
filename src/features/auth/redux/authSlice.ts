import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RefreshTokenParams, SignInParams} from 'features/auth/types';
import {authRepository} from 'features/auth/repository';

type State = {
  accessToken: string | null;
  refreshToken: string | null;
};

const initialState: State = {
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export const signIn = createAsyncThunk(
  `${authSlice.name}/signIn`,
  (params: SignInParams) => authRepository.signIn(params),
);

export const refreshToken = createAsyncThunk(
  `${authSlice.name}/refreshToken`,
  (params: RefreshTokenParams) => authRepository.refreshAccessToken(params),
);

export const authReducer = authSlice.reducer;
