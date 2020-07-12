/** @jsx jsx */
import { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
import { css, jsx } from '@emotion/core';

import Auth from './utils/auth';
import client from './utils/client-setup';

import Login from './pages/Login';
import SpotifyWebPlayer from './components/SpotifyWebPlayer';

import GlobalStyles from './styles/GlobalStyles';
import Theme from './styles/Theme';

const App = () => {
  useEffect(() => {
    if (Auth.loggedIn()) {
      window.location.hash = '';
    } else if (!Auth.loggedIn() && window.location.hash) {
      const { access_token, refresh_token } = window.location.hash
        ? window.location.hash
            ?.substr(1)
            .split('&')
            .map((v) => v.split('='))
            .reduce((pre, [key, value]) => ({ ...pre, [key]: value }), {})
        : null;

      Auth.login(access_token, refresh_token);
    }
  });

  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Theme>
        <div>
          {!Auth.loggedIn() ? (
            <Login />
          ) : (
            <SpotifyWebPlayer>
              <button onClick={Auth.logout}>Welcome! Now Log Out</button>
            </SpotifyWebPlayer>
          )}
        </div>
      </Theme>
    </ApolloProvider>
  );
};

export default App;
