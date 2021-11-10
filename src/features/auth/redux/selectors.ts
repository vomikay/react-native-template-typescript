import {RootState} from 'redux/store';
import {createSelector} from 'reselect';

const selfSelector = (state: RootState) => state.auth;

export const getAccessToken = createSelector(
  selfSelector,
  state => state.accessToken,
);

export const getRefreshToken = createSelector(
  selfSelector,
  state => state.refreshToken,
);
