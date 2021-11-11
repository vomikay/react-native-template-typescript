export type SignInRequestData = {
  username: string;
  password: string;
};

export type SignInResponseData = {
  accessToken: string;
  refreshToken: string;
};

export type RefreshTokenRequestData = {
  refreshToken: string;
};

export type RefreshTokenResponseData = {
  accessToken: string;
  refreshToken: string;
};
