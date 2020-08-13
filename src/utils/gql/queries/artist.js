import { gql } from '@apollo/client';
import {
  ALBUM_FRAGMENT,
  ARTIST_FRAGMENT,
  TRACK_FRAGMENT,
  PLAYLIST_FRAGMENT,
  CATEGORY_FRAGMENT,
  USER_FRAGMENT,
} from '../fragments';

export const QUERY_ARTISTS = gql`
  ${ARTIST_FRAGMENT}
  query getArtists($idArr: [ID]!) {
    getArtists(id: $idArr) {
      ...ArtistFragment
      images {
        url
      }
    }
  }
`;

export const QUERY_SINGLE_ARTIST = gql`
  ${ARTIST_FRAGMENT}
  query getSingleArtist($id: ID!) {
    getSingleArtist(id: $id) {
      ...ArtistFragment
      images {
        url
      }
    }
  }
`;

export const QUERY_SINGLE_ARTIST_RELATED = gql`
  ${ARTIST_FRAGMENT}
  query getSingleArtistRelated($id: ID!) {
    getSingleArtistRelated(id: $id) {
      ...ArtistFragment
      images {
        url
      }
    }
  }
`;
