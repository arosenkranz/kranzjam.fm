import { gql } from '@apollo/client';

export const NEXT_TRACK = gql`
  mutation nextTrack($deviceId: ID) {
    nextTrack(deviceId: $deviceId) {}
  }
`;

export const PREV_TRACK = gql`
  mutation previousTrack($deviceId: ID) {
    previousTrack(deviceId: $deviceId) {}
  }
`;

export const PAUSE_TRACK = gql`
  mutation pauseTrack($deviceId: ID) {
    pauseTrack(deviceId: $deviceId) {}
  }
`;

export const PLAY_TRACK = gql`
  mutation playTrack($deviceId: ID) {
    playTrack(deviceId: $deviceId) {}
  }
`;

export const ADD_TO_QUEUE = gql`
  mutation addToQueue($uri: String!, $deviceId: ID) {
    addToQueue(uri: $uri, deviceId: $deviceId) {}
  }
`;

export const SET_REPEAT = gql`
  mutation setRepeat($state: String, $deviceId: ID) {
    setRepeat(state: $state, deviceId: $deviceId) {}
  }
`;

export const SET_SHUFFLE = gql`
  mutation shufflePlayer($state: String, $deviceId: ID) {
    shufflePlayer(state: $state, deviceId: $deviceId) {}
  }
`;

export const SEEK_TRACK = gql`
  mutation seekTrack($position: Int, $deviceId: ID) {
    seekTrack(position: $position, deviceId: $deviceId) {}
  }
`;

export const TRANSFER_PLAYBACK = gql`
  mutation transferPlayback($deviceIds: [ID]!) {
    transferPlayback(deviceIds: $deviceIds) {}
  }
`;

export const SET_VOLUME = gql`
  mutation setVolume($volume: Int, $deviceId: ID) {
    setVolume(volume: $volume, deviceId: $deviceId) {}
  }
`;
