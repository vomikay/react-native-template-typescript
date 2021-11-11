import {RootState} from 'reduxStore/store';
import {createSelector} from 'reselect';

const getAuthState = (state: RootState) => state.auth;

export const getAccessToken = createSelector(
  getAuthState,
  state => state.accessToken,
);

export const getRefreshToken = createSelector(
  getAuthState,
  state => state.refreshToken,
);
