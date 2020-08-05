import React, { useState, useEffect } from 'react';
import Auth from '../../utils/auth';

import PlayerContext from '../../utils/PlayerStateContext';

const SpotifyWebPlayer = ({ children }) => {
  const [playerState, setPlayerState] = useState({});

  const isPlayerLoaded = Object.keys(playerState).length ? true : false;

  useEffect(() => {
    async function waitForSpotifyWebPlaybackSDKToLoad() {
      return new Promise((resolve) => {
        if (window.Spotify) {
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
          console.log(Auth.getToken());
          callback(Auth.getToken());
        },
        volume: 1,
      });

      player.connect().then((success) => {
        if (success) {
          console.log('The Web Playback SDK successfully connected to Spotify!');
        }
      });

      setPlayerState(player);
    }

    setUpPlayer();
  }, [isPlayerLoaded]);

  return <PlayerContext.Provider value={playerState}>{children}</PlayerContext.Provider>;
};

export default SpotifyWebPlayer;
