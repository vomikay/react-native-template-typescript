import {client} from 'core/services/api';
import {
  RefreshTokenParams,
  RefreshTokenResponseData,
  SignInParams,
  SignInResponseData,
} from 'features/auth/types';

class AuthRepository {
  public signIn = async (params: SignInParams) => {
    const response = await client.post<SignInResponseData>(
      '/auth/signIn',
      params,
    );
    return response.data;
  };

  public refreshAccessToken = async (params: RefreshTokenParams) => {
    const response = await client.post<RefreshTokenResponseData>(
      '/auth/refresh',
      params,
    );
    return response.data;
  };
}

export const authRepository = Object.freeze(new AuthRepository());
