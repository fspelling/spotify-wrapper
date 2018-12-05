'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var search = function search(query, type) {
    return fetch('https://api.spotify.com/v1/search?q=' + query + '&type=' + type).then(function (data) {
        return data.json();
    });
};

var searchArtists = function searchArtists(query) {
    return search(query, 'artist');
};

var searchAlbums = function searchAlbums(query) {
    return search(query, 'album');
};

var searchTracks = function searchTracks(query) {
    return search(query, 'tracks');
};

var searchPlayLists = function searchPlayLists(query) {
    return search(query, 'playLists');
};

exports.search = search;
exports.searchAlbums = searchAlbums;
exports.searchArtists = searchArtists;
exports.searchTracks = searchTracks;
exports.searchPlayLists = searchPlayLists;