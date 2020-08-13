import { gql } from '@apollo/client';
import { ALBUM_FRAGMENT, ARTIST_FRAGMENT, TRACK_FRAGMENT } from '../fragments';

export const QUERY_SEARCH = gql`
  ${ALBUM_FRAGMENT}
  ${ARTIST_FRAGMENT}
  ${TRACK_FRAGMENT}
  query search($q: String!) {
    search(q: $q) {
      albums {
        ...AlbumFragment
        artists {
          ...ArtistFragment
          images {
            url
          }
        }
        images {
          url
        }
      }
      artists {
        ...ArtistFragment
        images {
          url
        }
      }
      tracks {
        ...TrackFragment
        album {
          ...AlbumFragment
          images {
            url
          }
        }
        artists {
          ...ArtistFragment
          images {
            url
          }
        }
      }
    }
  }
`;

export const QUERY_GENRES = gql`
  query getGenres {
    getGenres {
      genres
    }
  }
`;

export const QUERY_CURRENT_PLAYER_STATE = gql`
  ${ALBUM_FRAGMENT}
  ${ARTIST_FRAGMENT}
  ${TRACK_FRAGMENT}
  query currentPlayerState {
    currentPlayerState {
      deviceId
      deviceNames
      deviceType
      deviceVolume
      isPlaying
      trackInfo {
        trackId
        trackName
        album {
          ...AlbumFragment
          images {
            url
          }
        }
        artists {
          ...ArtistFragment
          images {
            url
          }
        }
      }
    }
  }
`;

export const QUERY_GET_DEVICES = gql`
  query getDevices {
    getDevices {
      deviceId
      deviceName
      deviceType
      deviceVolume
      isActive
      isRestricted
      isPrivateSession
    }
  }
`;
