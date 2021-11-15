import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {SignInRequestData} from 'features/auth/types';
import {authRepository} from 'features/auth/repository';

const name = 'auth' as const;

export const signIn = createAsyncThunk(
  `${name}/signIn`,
  async (params: SignInRequestData) => authRepository.signIn(params),
);

type State = {
  accessToken: string | null;
};

const initialState: State = {
  accessToken: null,
};

const authSlice = createSlice({
  name,
  initialState,
  reducers: {
    signOut: state => {
      state.accessToken = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
    });
  },
});

export const {signOut} = authSlice.actions;

export const authReducer = authSlice.reducer;
