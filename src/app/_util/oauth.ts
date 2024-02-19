import QueryString from "qs";
import axios from "axios";
import { ICallOauthApi } from "../_types/types";

interface IGetAccessCode {
  (clientId: string, clientSecret: string): void;
}

export const getAccessCode: IGetAccessCode = (clientId, redirectUri) => {
  const authUrl = `https://api.instagram.com/oauth/authorize/?client_id=${clientId}&redirect_uri=${redirectUri}/token&response_type=code&scope=user_profile`;
  window.location.href = authUrl;
}


export const getAccessToken: ICallOauthApi = async (clientId, clientSecret, redirectUri, accessCode) => {
  try {
    const response = await axios.post('https://api.instagram.com/oauth/access_token', QueryString.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'authorization_code',
      redirect_uri: redirectUri,
      code: accessCode
    }), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
}