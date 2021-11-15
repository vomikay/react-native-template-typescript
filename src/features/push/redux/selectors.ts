import {RootState} from 'reduxStore/store';
import {createSelector} from 'reselect';

const getPushState = (state: RootState) => state.push;

export const getPushToken = createSelector(
  getPushState,
  state => state.pushToken,
);
