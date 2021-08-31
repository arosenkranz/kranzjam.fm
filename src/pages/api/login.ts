import type { NextApiRequest, NextApiResponse } from 'next';
import { generateRandomString } from '@utils/generate-string';
import { setTokenCookie } from '@utils/cookie';

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  const state = generateRandomString(16);
  setTokenCookie(res, state);

  const scope =
    req.query.scope ||
    'user-read-private user-read-email user-read-playback-state user-modify-playback-state user-read-currently-playing streaming app-remote-control playlist-read-collaborative playlist-modify-public playlist-read-private playlist-modify-private user-library-modify user-library-read user-top-read user-read-playback-position user-read-recently-played user-follow-read user-follow-modify';

  res.redirect(
    `https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.SPOTIFY_CLIENT_ID}&scope=${scope}&redirect_uri=${process.env.SPOTIFY_REDIRECT_URI}&state=${state}`
  );
};

export default handler;
