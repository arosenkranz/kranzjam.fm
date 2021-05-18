import { serialize, parse } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

const TOKEN_NAME = process.env.SPOTIFY_COOKIE_STATEKEY;

export const MAX_AGE = 60 * 60 * 8; // 8 hours

export const setTokenCookie = (res: NextApiResponse, token: string): void => {
  const cookie = serialize(TOKEN_NAME, token, {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'lax',
  });

  res.setHeader('Set-Cookie', cookie);
};

export const removeTokenCookie = (res: NextApiResponse): void => {
  const cookie = serialize(process.env.SPOTIFY_COOKIE_STATEKEY, '', {
    maxAge: -1,
    path: '/',
  });

  res.setHeader('Set-Cookie', cookie);
};

export const parseCookies = (req: NextApiRequest) => {
  // For API Routes we don't need to parse the cookies.
  if (req.cookies) return req.cookies;

  // For pages we do need to parse the cookies.
  const cookie = req.headers?.cookie;
  return parse(cookie || '');
};

export const getTokenCookie = (req: NextApiRequest): string => {
  const cookies = parseCookies(req);
  return cookies[process.env.SPOTIFY_COOKIE_STATEKEY];
};
