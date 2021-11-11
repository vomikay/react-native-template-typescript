import React, {Fragment} from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {
  authReducer,
  refreshToken,
  signIn,
  signOut,
} from 'features/auth/redux/authSlice';
import {RootState, store} from 'redux/store';
import {render} from 'core/utils/tests';

const server = setupServer(
  rest.post('http://localhost:3000/api/auth/signIn', (_req, res, ctx) => {
    return res(
      ctx.json({
        accessToken: 'dummy-access-token',
        refreshToken: 'dummy-refresh-token',
      }),
    );
  }),

  rest.post('http://localhost:3000/api/auth/refresh', (_req, res, ctx) => {
    return res(
      ctx.json({
        accessToken: 'refreshed-dummy-access-token',
        refreshToken: 'refreshed-dummy-refresh-token',
      }),
    );
  }),
);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test('should return the initial state', () => {
  expect(authReducer(undefined, {type: 'unknown'})).toEqual({
    accessToken: null,
    refreshToken: null,
  });
});

test('should remove the auth tokens on sing out', () => {
  const previousState: ReturnType<typeof authReducer> = {
    accessToken: 'dummy-access-token',
    refreshToken: 'dummy-refresh-token',
  };

  expect(authReducer(previousState, signOut())).toEqual({
    accessToken: null,
    refreshToken: null,
  });
});

test('should return the auth tokens on sign in', async () => {
  render(<Fragment />, {store});

  await store.dispatch(signIn({username: 'username', password: 'password'}));

  expect(store.getState().auth).toEqual({
    accessToken: 'dummy-access-token',
    refreshToken: 'dummy-refresh-token',
  });
});

test('should return the auth tokens on refresh token', async () => {
  const preloadedState: RootState = {
    auth: {
      accessToken: 'dummy-access-token',
      refreshToken: 'dummy-refresh-token',
    },
  };

  render(<Fragment />, {preloadedState, store});

  await store.dispatch(
    refreshToken({
      refreshToken: 'dummy-refresh-token',
    }),
  );

  expect(store.getState().auth).toEqual({
    accessToken: 'refreshed-dummy-access-token',
    refreshToken: 'refreshed-dummy-refresh-token',
  });
});
