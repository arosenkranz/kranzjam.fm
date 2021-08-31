import { Http2ServerResponse } from 'http2';

class AuthService {
  loggedIn(): boolean {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired();
  }

  isTokenExpired(): boolean {
    const signedTime = this.getTimeStamp();
    const expirationTimeSecs = parseFloat(signedTime) + 3600;
    const rightNowSecs = Date.now() / 1000;

    return rightNowSecs > expirationTimeSecs ? true : false;
  }

  getToken(): string {
    return localStorage.getItem('access_token');
  }

  getRefreshToken(): string {
    return localStorage.getItem('refresh_token');
  }

  getTimeStamp() {
    return localStorage.getItem('token_timestamp');
  }

  login(accessToken: string, refreshToken: string) {
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('refresh_token', refreshToken);
    localStorage.setItem('token_timestamp', String(Date.now() / 1000));
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('token_timestamp');

    // this will reload the page and reset the state of the application
    window.location.assign('/');
  }

  async refreshLogin() {
    const refreshToken = localStorage.getToken('refresh_token');

    const queryUrl = `/api/refresh?refresh_token=${refreshToken}`;

    try {
      const refreshResponse = await fetch(queryUrl);
      if (!refreshResponse.ok) {
        throw new Error('issue with the refresh!');
      }
      const { access_token: accessToken, refresh_token: refreshToken } =
        await refreshResponse.json();

      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('refresh_token', refreshToken);
      localStorage.setItem('token_timestamp', String(Date.now() / 1000));
    } catch (e) {
      console.error(e);
      this.logout();
    }
  }
}

export default new AuthService();
