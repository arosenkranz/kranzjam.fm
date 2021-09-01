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
    return typeof window !== 'undefined'
      ? localStorage.getItem('access_token')
      : null;
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

  async refreshLogin(): Promise<{
    access_token: string;
    refresh_token: string;
  }> {
    if (typeof window !== 'undefined') {
      return { access_token: '', refresh_token: '' };
    }

    const refreshToken = localStorage.getToken('refresh_token');

    const queryUrl = `/api/refresh?refresh_token=${refreshToken}`;

    try {
      const refreshResponse = await fetch(queryUrl);
      if (!refreshResponse.ok) {
        throw new Error('issue with the refresh!');
      }
      const tokens = await refreshResponse.json();

      localStorage.setItem('access_token', tokens.access_Token);
      localStorage.setItem('refresh_token', tokens.refresh_Token);
      localStorage.setItem('token_timestamp', String(Date.now() / 1000));
      return tokens;
    } catch (e) {
      console.error(e);
      this.logout();
    }
  }
}

export default new AuthService();
