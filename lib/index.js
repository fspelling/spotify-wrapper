'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbum = exports.searchPlayLists = exports.searchTracks = exports.searchArtists = exports.searchAlbums = exports.search = undefined;

var _search = require('../src/search');

var _album = require('../src/album');

exports.search = _search.search;
exports.searchAlbums = _search.searchAlbums;
exports.searchArtists = _search.searchArtists;
exports.searchTracks = _search.searchTracks;
exports.searchPlayLists = _search.searchPlayLists;
exports.getAlbum = _album.getAlbum;
exports.getAlbumTracks = _album.getAlbumTracks;