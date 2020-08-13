import { gql } from '@apollo/client';
import {
  ALBUM_FRAGMENT,
  ARTIST_FRAGMENT,
  TRACK_FRAGMENT,
  PLAYLIST_FRAGMENT,
  CATEGORY_FRAGMENT,
  USER_FRAGMENT,
} from '../fragments';

export const QUERY_ALBUMS = gql`
  ${ALBUM_FRAGMENT}
  ${ARTIST_FRAGMENT}
  ${TRACK_FRAGMENT}
  query getAlbums($idArr: [ID]!) {
    getAlbums(ids: $idArr) {
      ...AlbumFragment
      tracks {
        ...TrackFragment
      }
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
  }
`;

export const QUERY_SINGLE_ALBUM = gql`
  ${ALBUM_FRAGMENT}
  ${ARTIST_FRAGMENT}
  ${TRACK_FRAGMENT}
  query getSingleAlbum($id: ID!) {
    getSingleAlbum(id: $id) {
      ...AlbumFragment
      tracks {
        ...TrackFragment
      }
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
  }
`;

export const QUERY_SINGLE_ARTIST_ALBUMS = gql`
  ${ARTIST_FRAGMENT}
  ${ALBUM_FRAGMENT}
  ${TRACK_FRAGMENT}
  query getSingleArtistAlbums($id: ID!) {
    getSingleArtistAlbums(id: $id) {
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

export const QUERY_NEW_RELEASES = gql`
  ${ARTIST_FRAGMENT}
  ${ALBUM_FRAGMENT}
  ${TRACK_FRAGMENT}
  query getNewReleases($limit: Int, $offset: Int) {
    getNewReleases(limit: $limit, offset: $offset) {
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
