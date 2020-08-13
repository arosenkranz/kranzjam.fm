import { gql } from '@apollo/client';

export const ALBUM_FRAGMENT = gql`
  fragment AlbumFragment on Album {
    id
    name
    uri
    totalTracks
  }
`;

export const ARTIST_FRAGMENT = gql`
  fragment ArtistFragment on Artist {
    id
    name
    uri
    genres
  }
`;

export const TRACK_FRAGMENT = gql`
  fragment TrackFragment on Track {
    id
    name
    uri
    trackNumber
    duration
    previewUrl
  }
`;

export const PLAYLIST_FRAGMENT = gql`
  fragment PlaylistFragment on Playlist {
    description
    spotifyUrl
    id
    name
    ownerId
    ownerName
    trackCount
    images {
      url
    }
  }
`;

export const CATEGORY_FRAGMENT = gql`
  fragment CategoryFragment on Category {
    id
    name
    icons {
      url
    }
  }
`;

export const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    displayName
    email
    spotifyUrl
    image {
      url
    }
    id
    product
  }
`;
