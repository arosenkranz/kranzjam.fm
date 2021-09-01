import { useState, useEffect } from 'react';
import Head from 'next/head';
import Auth from '@utils/auth';
import { getHashParams } from '@utils/hash-params';
import Controls from '@components/Controls';
import Metadata from '@components/Metadata';
import Header from '@components/Header';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    loginUser();
  }, [isLoggedIn]);

  const loginUser = async () => {
    if (Auth.loggedIn()) {
      window.location.hash = '';
      setIsLoggedIn(true);
    } else if (!Auth.loggedIn() && window.location.hash) {
      const tokens = getHashParams();
      Auth.login(tokens.access_token, tokens.refresh_token);
      setIsLoggedIn(true);
    } else {
      const tokens = await Auth.refreshLogin();
      Auth.login(tokens.access_token, tokens.refresh_token);
      setIsLoggedIn(true);
    }
  };

  return (
    <div>
      <Head>
        <title>Kranzjam.fm</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='min-h-screen flex flex-col content-start'>
        <Header />
        <main className='mt-auto w-screen p-8'>
          <Metadata />
          <Controls />
        </main>
      </div>
    </div>
  );
};

export default Home;
