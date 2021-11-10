export type SignInParams = {
  username: string;
  password: string;
};

export type SignInResponseData = {
  accessToken: string;
  refreshToken: string;
};

export type RefreshTokenParams = {
  accessToken: string;
};

export type RefreshTokenResponseData = {
  accessToken: string;
  refreshToken: string;
};
