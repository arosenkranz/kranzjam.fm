import querystring from 'querystring';

type Primitive = string | number | boolean | null;
type JSONObject = { [k: string]: JSONValue };
type JSONArray = JSONValue[];
type JSONValue = Primitive | JSONObject | JSONArray;

export const getAccessToken = async (
  code: string | string[]
): Promise<JSONValue> => {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      code,
      redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
      grant_type: 'authorization_code',
      client_id: process.env.SPOTIFY_CLIENT_ID,
      client_secret: process.env.SPOTIFY_CLIENT_SECRET,
    }),
  });

  return response.json();
};

export const getRefreshToken = async (
  refreshToken: string | string[]
): Promise<JSONValue> => {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  });

  return response.json();
};
