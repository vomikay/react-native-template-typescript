import {client} from 'core/services/api';
import {getAccessToken} from 'features/auth/redux/selectors';
import {Store} from 'reduxStore/store';

export const setupAuthInterceptors = (store: Store) => {
  const {getState} = store;

  client.interceptors.request.use(config => {
    const accessToken = getAccessToken(getState());

    if (config.headers && accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
      config.headers['X-Access-Token'] = accessToken;
    }
  });
};
