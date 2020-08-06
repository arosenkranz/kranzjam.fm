import { gql } from '@apollo/client';
import { ALBUM_FRAGMENT, ARTIST_FRAGMENT, TRACK_FRAGMENT, PLAYLIST_FRAGMENT, CATEGORY_FRAGMENT } from './fragments';

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

export const QUERY_FEATURED_PLAYLISTS = gql`
  ${PLAYLIST_FRAGMENT}
  query getFeaturedPlaylists($limit: Int, $offset: Int) {
    getFeaturedPlaylists(limit: $limit, offset: $offset) {
      ...PlaylistFragment
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

export const QUERY_GENRES = gql`
  query getGenres {
    getGenres {
      genres
    }
  }
`;

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

export const QUERY_CATEGORY_PLAYLISTS = gql`
  ${PLAYLIST_FRAGMENT}
  query getCategoryPlaylists($categoryId: ID!) {
    getCategoryPlaylists(categoryId: $categoryId) {
      ...PlaylistFragment
    }
  }
`;
