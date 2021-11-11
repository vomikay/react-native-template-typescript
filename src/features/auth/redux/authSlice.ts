import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RefreshTokenParams, SignInParams} from 'features/auth/types';
import {authRepository} from 'features/auth/repository';

const name = 'auth' as const;

export const signIn = createAsyncThunk(
  `${name}/signIn`,
  async (params: SignInParams) => authRepository.signIn(params),
);

export const refreshToken = createAsyncThunk(
  `${name}/refreshToken`,
  (params: RefreshTokenParams) => authRepository.refreshAccessToken(params),
);

type State = {
  accessToken: string | null;
  refreshToken: string | null;
};

const initialState: State = {
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name,
  initialState,
  reducers: {
    signOut: state => {
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    });
    builder.addCase(refreshToken.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    });
  },
});

export const {signOut} = authSlice.actions;

export const authReducer = authSlice.reducer;
