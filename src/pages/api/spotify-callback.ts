import type { NextApiRequest, NextApiResponse } from 'next';
import { getAccessToken } from '@lib/spotify-auth';
import { getTokenCookie, removeTokenCookie } from '@utils/cookie';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const code = req.query.code || null;
  const state = req.query.state || null;
  const storedState = getTokenCookie(req);

  if (state === null || state !== storedState || !code) {
    res.redirect(`/#error=state_mismatch`);
    return;
  }

  removeTokenCookie(res);

  try {
    const response = await getAccessToken(code);

    res.redirect(
      `/#access_token=${response['access_token']}&refresh_token=${response['refresh_token']}`
    );
  } catch (err) {
    res.redirect(`/#error=token_error`);
  }
};

export default handler;
