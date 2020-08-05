import React, { useEffect } from 'react';
import { ThemeProvider, CSSReset, Box } from '@chakra-ui/core';
import { ApolloProvider } from '@apollo/client';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Auth from './utils/auth';
import client from './utils/client-setup';

import Login from './pages/Login';
import SpotifyWebPlayer from './components/SpotifyWebPlayer';

import theme from './theme';

library.add(fab);

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
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Box minH='100vh' bg='themeOne.foam'>
          {!Auth.loggedIn() ? (
            <Login />
          ) : (
            <SpotifyWebPlayer>
              <button onClick={Auth.logout}>Welcome! Now Log Out</button>
            </SpotifyWebPlayer>
          )}
        </Box>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
