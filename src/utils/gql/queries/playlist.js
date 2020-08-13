import { gql } from '@apollo/client';
import { PLAYLIST_FRAGMENT } from '../fragments';

export const QUERY_FEATURED_PLAYLISTS = gql`
  ${PLAYLIST_FRAGMENT}
  query getFeaturedPlaylists($limit: Int, $offset: Int) {
    getFeaturedPlaylists(limit: $limit, offset: $offset) {
      ...PlaylistFragment
    }
  }
`;

export const QUERY_CATEGORY_PLAYLISTS = gql`
  ${PLAYLIST_FRAGMENT}
  query getCategoryPlaylists($categoryId: ID!) {
    getCategoryPlaylists(categoryId: $categoryId) {
      ...PlaylistFragment
    }
  }
`;

export const QUERY_GET_PLAYLIST = gql`
  ${PLAYLIST_FRAGMENT}
  query getPlaylist($playlistId: ID!) {
    getPlaylist(playlistId: $playlistId) {
      ...PlaylistFragment
    }
  }
`;
