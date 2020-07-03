import React, { useState, useEffect } from 'react';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';

import Auth from './utils/auth';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://spotiql.herokuapp.com/graphql',
  }),
});

const App = () => {
  useEffect(() => {
    console.log(Auth.loggedIn());
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
      <>
        <div>Hi App</div>
        {!Auth.loggedIn() ? (
          <a
            href={`https://spotiql.herokuapp.com/auth/spotify/login?redirect_uri=${window.location.href}`}>
            Log In!
          </a>
        ) : (
          <>
            <button onClick={Auth.logout}>Welcome! Now Log Out</button>
          </>
        )}
      </>
    </ApolloProvider>
  );
};

export default App;
