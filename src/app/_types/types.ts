export interface ICallOauthApi {
  (clientId: string, clientSecret: string, redirectUri: string, accessCode: string): Promise<string | void>;
} 