export interface HashParams {
  access_token: string;
  refresh_token: string;
}

export const getHashParams = () => {
  return window.location.hash
    ? window.location.hash
        ?.substr(1)
        .split('&')
        .map((v) => v.split('='))
        .reduce((pre, [key, value]) => ({ ...pre, [key]: value }), {})
    : { access_token: '', refresh_token: '' };
};
