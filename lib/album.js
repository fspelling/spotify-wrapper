'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAlbumTracks = exports.getAlbum = undefined;

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAlbum = function getAlbum(id) {
    return fetch(_config2.default + '/albums/' + id).then(_util2.default);
};

var getAlbumTracks = function getAlbumTracks(id) {
    return fetch(_config2.default + '/albums/' + id + '/tracks').then(_util2.default);
};

exports.getAlbum = getAlbum;
exports.getAlbumTracks = getAlbumTracks;