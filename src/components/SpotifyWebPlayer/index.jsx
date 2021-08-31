import React, { useState, useEffect } from 'react';
import Script from 'next/script';

import PlayerContext from '../../lib/PlayerStateContext';

const SpotifyWebPlayer = ({ children }) => {
  const [playerState, setPlayerState] = useState({});

  const isPlayerLoaded = Object.keys(playerState).length ? true : false;

  useEffect(() => {
    if (!isPlayerLoaded) {
      setUpPlayer();
    } else {
      return () => player.disconnect();
    }
  }, [isPlayerLoaded]);

  async function waitForSpotifyWebPlaybackSDKToLoad() {
    return new Promise((resolve) => {
      if (window.Spotify) {
        console.log('spotify exists');

        resolve(window.Spotify);
      } else {
        window.onSpotifyWebPlaybackSDKReady = () => {
          resolve(window.Spotify);
        };
      }
    });
  }

  async function setUpPlayer() {
    const { Player } = await waitForSpotifyWebPlaybackSDKToLoad();

    const player = new Player({
      name: 'Kranzjam.fm',
      getOAuthToken: (callback) => {
        // Run code to get a fresh access token
        console.log(localStorage.getItem('access_token'));
        callback(localStorage.getItem('access_token'));
      },
      volume: 1,
    });

    await player
      .connect()
      .then((success) => {
        if (success) {
          console.log(player);
          console.log(
            'The Web Playback SDK successfully connected to Spotify!'
          );
        }
      })
      .catch((err) => console.log(err));

    setPlayerState(player);
  }

  return (
    <>
      <Script src='https://sdk.scdn.co/spotify-player.js' />
      <PlayerContext.Provider value={playerState}>
        {children}
      </PlayerContext.Provider>
    </>
  );
};

export default SpotifyWebPlayer;
