import { Quote, QuoteResponse } from "@/types";
import axios, { AxiosResponse } from "axios";
import { NextApiRequest } from "next";
import { resourceLimits } from "worker_threads";

export const getClientUrl = (): string => {
  return process.env.HOSTED_URL
    ? `https://${process.env.HOSTED_URL}`
    : "http://localhost:3000/";
};

export const getApiUrl = (): string => {
  return process.env.VERCEL_URL ? process.env.VERCEL_URL : process.env.API_URL!;
};

export const getSpotifyRedirectUrl = (): string => {
  return process.env.HOSTED_URL
    ? `https://${process.env.HOSTED_URL}/api/spotify/authorize`
    : "http://localhost:3000/api/spotify/authorize";
};

export const getSpotifyRedirectUri = (
  clientID: string,
  scopes: string[],
  redirectUri: string,
  showDialog: boolean
) => {
  return (
    "https://accounts.spotify.com/authorize?response_type=code" +
    `&client_id=${clientID}` +
    `&scope=${scopes.join("%20")}` +
    "&show_dialog=" +
    Boolean(showDialog) +
    `&redirect_uri=${redirectUri}`
  );
};

export const getStravaRedirectUrl = (): string => {
  return process.env.HOSTED_URL
    ? `https://${process.env.HOSTED_URL}/api/strava/authorize`
    : "http://localhost:3000/api/strava/authorize";
};

export const getStravaRedirectUri = (
  clientID: string,
  scopes: string[],
  redirectUri: string
) => {
  return (
    "https://www.strava.com/oauth/authorize?response_type=code" +
    `&client_id=${clientID}` +
    `&scope=${scopes.join(",")}` +
    `&redirect_uri=${redirectUri}`
  );
};

export const getTwitterRedirectUrl = (): string => {
  return process.env.HOSTED_URL
    ? `https://${process.env.HOSTED_URL}/api/twitter/authorize`
    : "http://127.0.0.1:3000/api/twitter/authorize";
};

export const getTwitterRedirectUri = (
  clientID: string,
  codeChallengeKey: string
) => {
  return (
    "https://twitter.com/i/oauth2/authorize?response_type=code" +
    `&client_id=${clientID}` +
    `&redirect_uri=${encodeURIComponent(getTwitterRedirectUrl())}` +
    `&code_challenge=${codeChallengeKey}&code_challenge_method=plain` +
    `&scope=tweet.read%20offline.access%20users.read&state=state`
  );
};



export const getAllQuotes = async (): Promise<Quote[]> => {
    try {
        const res = await axios.get(`https://localhost:7160/api/DataEntry`);
        return res.data;
    } catch (e) {
        console.error(e);
        throw e;
    }
}



export const createQuote = async (dataEntry: Quote) => {
  try {
        const res = await axios.post(`https://localhost:7160/api/DataEntry`,dataEntry,
        {
          headers: {'Content-Type': 'application/json'}  
        });
  } catch (error) {
    throw new Error(error as string);
  }
};


export const updateQuote = async (dataEntry: Quote) => {
  try {
        await axios.put(`https://localhost:7160/api/DataEntry/${dataEntry.id}`, dataEntry);
  } catch (error) {
    console.error(error);
    throw new Error(error as string);
  }
};
