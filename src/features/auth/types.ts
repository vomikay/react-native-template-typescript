export type SignInRequestData = {
  username: string;
  password: string;
};

export type SignInResponseData = {
  accessToken: string;
  refreshToken: string;
};
