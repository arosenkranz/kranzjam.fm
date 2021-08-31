import type { NextApiRequest, NextApiResponse } from 'next';
import { getRefreshToken } from '@lib/spotify-auth';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const response = await getRefreshToken(req.query.refresh_token);
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json({ err });
  }
};

export default handler;
