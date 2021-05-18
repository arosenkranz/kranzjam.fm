import querystring from 'querystring';

const getAccessToken = async (code: string | string[]) => {
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
