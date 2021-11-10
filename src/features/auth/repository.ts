import {client} from 'core/services/api';
import {RefreshTokenParams, SignInParams} from 'features/auth/types';

class AuthRepository {
  public signIn = async (params: SignInParams) => {
    const response = await client.post('/auth', params);
    return response.data;
  };

  public refreshAccessToken = async (params: RefreshTokenParams) => {
    const response = await client.post('/auth/refresh', params);
    return response.data;
  };
}

export const authRepository = Object.freeze(new AuthRepository());
