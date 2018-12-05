const search = (query, type) => {
    return fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`)
        .then(data => data.json());
};

const searchArtists = (query) => {
    return search(query, 'artist');
};

const searchAlbums = (query) => {
    return search(query, 'album');
};

const searchTracks = (query) => {
    return search(query, 'tracks');
};

const searchPlayLists = (query) => {
    return search(query, 'playLists');
};

export { search, searchAlbums, searchArtists, searchTracks, searchPlayLists };