import React, {Fragment} from 'react';
import Config from 'react-native-config';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {authReducer, signIn, signOut} from 'features/auth/redux/authSlice';
import {store} from 'reduxStore/store';
import {render} from 'core/utils/tests';

const server = setupServer(
  rest.post(`${Config.API_URL}/auth/signIn`, (req, res, ctx) => {
    return res(ctx.json({accessToken: 'dummy-access-token'}));
  }),
);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test('should return the initial state', () => {
  expect(authReducer(undefined, {type: 'unknown'})).toEqual({
    accessToken: null,
  });
});

test('should remove the auth tokens on sing out', () => {
  const previousState: ReturnType<typeof authReducer> = {
    accessToken: 'dummy-access-token',
  };

  expect(authReducer(previousState, signOut())).toEqual({
    accessToken: null,
  });
});

test('should return the auth tokens on sign in', async () => {
  render(<Fragment />, {store});

  await store.dispatch(
    signIn({
      username: 'username',
      password: 'password',
    }),
  );

  expect(store.getState().auth).toEqual({
    accessToken: 'dummy-access-token',
  });
});
