export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      token: string;
      accessToken: string;
    }
  }
}
