import toJSON from './util';
import API_URL, { HEADERS } from './config';

const getAlbum = id => fetch(`${API_URL}/albums/${id}`, HEADERS).then(toJSON);

const getAlbumTracks = id => fetch(`${API_URL}/albums/${id}/tracks`, HEADERS).then(toJSON);

export { getAlbum, getAlbumTracks };
