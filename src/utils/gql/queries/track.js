import { gql } from '@apollo/client';
import { ALBUM_FRAGMENT, ARTIST_FRAGMENT, TRACK_FRAGMENT } from '../fragments';

export const QUERY_ALBUM_TRACKS = gql`
  ${ALBUM_FRAGMENT}
  ${ARTIST_FRAGMENT}
  ${TRACK_FRAGMENT}
  query getSingleAlbumTracks($id: ID!) {
    getSingleAlbumTracks(id: $id) {
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

export const QUERY_SINGLE_ARTIST_TOPTRACKS = gql`
  ${ARTIST_FRAGMENT}
  ${ALBUM_FRAGMENT}
  ${TRACK_FRAGMENT}
  query getSingleArtistTopTracks($id: ID!) {
    getSingleArtistTopTracks(id: $id) {
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

export const QUERY_RECOMMENDATION_TRACKS = gql`
  ${TRACK_FRAGMENT}
  ${ARTIST_FRAGMENT}
  ${ALBUM_FRAGMENT}
  query getRecommendationTracks($limit: Int!, $seedArtists: [String], $seedTracks: [String], $seedGenres: [String]) {
    getRecommendationTracks(
      limit: $limit
      seedArtists: $seedArtists
      seedTracks: $seedTracks
      seedGenres: $seedGenres
    ) {
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

export const QUERY_GET_PLAYLIST_TRACKS = gql`
  ${TRACK_FRAGMENT}
  ${ALBUM_FRAGMENT}
  ${ARTIST_FRAGMENT}
  query getPlaylistTracks($playlistId: ID!, $limit: Int, $offset: Int) {
    getPlaylistTracks(playlistId: $playlistId, limit: $limit, offset: $offset) {
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
      nextPage
    }
  }
`;
