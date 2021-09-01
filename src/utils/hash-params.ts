export type HashParams = {
  [k: string]: string;
};

export const getHashParams = (): HashParams => {
  return window.location.hash
    ? window.location.hash
        ?.substr(1)
        .split('&')
        .map((v) => v.split('='))
        .reduce((pre, [key, value]) => ({ ...pre, [key]: value }), {})
    : { access_token: '', refresh_token: '' };
};
