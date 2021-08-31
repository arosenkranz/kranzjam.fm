import { FunctionComponent, useEffect } from 'react';
import Head from 'next/head';
import Auth from '@utils/auth';
import { getHashParams } from '@utils/hash-params';

const Home: FunctionComponent = () => {
  useEffect(() => {
    if (Auth.loggedIn()) {
      window.location.hash = '';
    } else if (!Auth.loggedIn() && window.location.hash) {
      const tokens: any = getHashParams();
      Auth.login(tokens.access_token, tokens.refresh_token);
    }
  });

  return (
    <div>
      <Head>
        <title>Kranzjam.fm</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='min-h-screen flex items-start'>
        <header className='w-full py-10 bg-gray-800 text-gray-50'>
          <div className='w-10/12 mx-auto flex items-center'>
            <h1 className='font-mono text-4xl'>Kranzjam.fm</h1>
            <a
              href='/api/login'
              className='ml-auto bg-gray-50 text-gray-800 p-2 border-1 border-gray-500 transition-colors duration-500 ease-in cursor-pointer hover:bg-gray-300 hover:text-gray-900'
            >
              Login with Spotify
            </a>
          </div>
        </header>
        <main className='my-5'>
          <div className='mx-auto w-10/12 flex flex-wrap'></div>
        </main>
      </div>
    </div>
  );
};

export default Home;
