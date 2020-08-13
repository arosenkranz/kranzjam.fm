import { gql } from '@apollo/client';
import {
  ALBUM_FRAGMENT,
  ARTIST_FRAGMENT,
  TRACK_FRAGMENT,
  PLAYLIST_FRAGMENT,
  CATEGORY_FRAGMENT,
  USER_FRAGMENT,
} from '../fragments';

export const QUERY_CATEGORIES = gql`
  ${CATEGORY_FRAGMENT}
  query getCategories($limit: Int, $offset: Int) {
    getCategories(limit: $limit, offset: $offset) {
      ...CategoryFragment
    }
  }
`;

export const QUERY_SINGLE_CATEGORY = gql`
  ${CATEGORY_FRAGMENT}
  query getSingleCategory($categoryId: ID!) {
    getSingleCategory(categoryId: $categoryId) {
      ...CategoryFragment
    }
  }
`;
