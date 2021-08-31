import { AppProps } from 'next/app';
import SpotifyWebPlayer from '../components/SpotifyWebPlayer';
import '@styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SpotifyWebPlayer>
      <Component {...pageProps} />
    </SpotifyWebPlayer>
  );
}

export default MyApp;
