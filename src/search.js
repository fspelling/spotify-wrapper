const search = (query, type) => fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`)
  .then(data => data.json());

const searchArtists = query => search(query, 'artist');

const searchAlbums = query => search(query, 'album');

const searchTracks = query => search(query, 'tracks');

const searchPlayLists = query => search(query, 'playLists');

export {
  search, searchAlbums, searchArtists, searchTracks, searchPlayLists,
};
