import React, { useState, useEffect } from 'react';
import Script from 'next/script';

import PlayerContext from '../lib/PlayerStateContext';

const SpotifyWebPlayer = ({ children }) => {
  const [player, setPlayer] = useState(null);
  const [currentTrack, setCurrentTrack] = useState();

  useEffect(() => {
    if (!player) {
      setUpPlayer();
    } else {
      return () => player.disconnect();
    }
  }, [player]);

  async function waitForSpotifyWebPlaybackSDKToLoad() {
    return new Promise((resolve) => {
      if (window.Spotify) {
        resolve(true);
      } else {
        window.onSpotifyWebPlaybackSDKReady = () => {
          resolve(true);
        };
      }
    });
  }

  async function setUpPlayer() {
    await waitForSpotifyWebPlaybackSDKToLoad();
    const player = new window.Spotify.Player({
      name: 'Kranzjam.fm',
      getOAuthToken: (callback) => {
        callback(localStorage.getItem('access_token'));
      },
      volume: 0.5,
    });

    await player.connect().catch((err) => console.log(err));

    player.addListener('ready', async ({ device_id }) => {
      await fetch(`https://api.spotify.com/v1/me/player`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        body: JSON.stringify({
          device_ids: [device_id],
          play: true,
        }),
      });
      setPlayer(player);
    });

    player.addListener('autoplay_failed', () => {
      console.log('Autoplay is not allowed by the browser autoplay rules');
    });

    player.addListener(
      'player_state_changed',
      ({ track_window: { current_track } }) => {
        setCurrentTrack(current_track);
      }
    );

    player.on('playback_error', ({ message }) => {
      console.error('Failed to perform playback', message);
    });

    player.on('account_error', ({ message }) => {
      console.error('Failed to validate Spotify account', message);
    });

    player.on('authentication_error', ({ message }) => {
      console.error('Failed to authenticate', message);
    });
  }

  return (
    <>
      <Script src='https://sdk.scdn.co/spotify-player.js' />
      <PlayerContext.Provider value={{ player, currentTrack }}>
        {children}
      </PlayerContext.Provider>
    </>
  );
};

export default SpotifyWebPlayer;
