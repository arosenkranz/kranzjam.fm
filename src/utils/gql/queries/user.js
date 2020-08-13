import { gql } from '@apollo/client';
import {
  ALBUM_FRAGMENT,
  ARTIST_FRAGMENT,
  TRACK_FRAGMENT,
  PLAYLIST_FRAGMENT,
  CATEGORY_FRAGMENT,
  USER_FRAGMENT,
} from '../fragments';

export const QUERY_MY_PROFILE = gql`
  ${USER_FRAGMENT}
  query getMyProfile {
    getMyProfile {
      ...UserFragment
    }
  }
`;

export const QUERY_MY_PLAYLISTS = gql`
  ${PLAYLIST_FRAGMENT}
  query getMyPlaylists($limit: Int, $offset: Int) {
    getMyPlaylists(limit: $limit, offset: $offset) {
      ...PlaylistFragment
    }
  }
`;

export const QUERY_MY_TOP_ARTISTS = gql`
  ${ARTIST_FRAGMENT}
  query getMyTopArtists($limit: Int, $offset: Int) {
    getMyTopArtists(limit: $limit, offset: $offset) {
      ...ArtistFragment
      images {
        url
      }
    }
  }
`;

export const QUERY_MY_SAVED_ALBUMS = gql`
  ${ARTIST_FRAGMENT}
  ${TRACK_FRAGMENT}
  ${ALBUM_FRAGMENT}
  query getMySavedAlbums($limit: Int, $offset: Int) {
    getMySavedAlbums(limit: $limit, offset: $offset) {
      ...AlbumFragment
      images {
        url
      }
      tracks {
        ...TrackFragment
      }
      artists {
        ...ArtistFragment
        images {
          url
        }
      }
    }
  }
`;

export const QUERY_MY_SAVED_TRACKS = gql`
  ${ARTIST_FRAGMENT}
  ${TRACK_FRAGMENT}
  ${ALBUM_FRAGMENT}
  query getMySavedTracks($limit: Int, $offset: Int) {
    getMySavedTracks(limit: $limit, offset: $offset) {
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
`;

export const QUERY_RECENTLY_PLAYED = gql`
  ${ARTIST_FRAGMENT}
  ${TRACK_FRAGMENT}
  ${ALBUM_FRAGMENT}
  query recentlyPlayed($limit: Int) {
    recentlyPlayed(limit: $limit) {
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
`;

export const QUERY_GET_CURRENTLY_PLAYING = gql`
  ${ARTIST_FRAGMENT}
  ${TRACK_FRAGMENT}
  ${ALBUM_FRAGMENT}
  query getCurrentlyPlaying {
    getCurrentlyPlaying {
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
`;
