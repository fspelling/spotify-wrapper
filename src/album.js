import toJSON from './util';
import API_URL from './config';

const getAlbum = (id) => {
    return fetch(`${API_URL}/albums/${id}`).then(toJSON);
};

const getAlbumTracks = (id) => {
    return fetch(`${API_URL}/albums/${id}/tracks`).then(toJSON);
};

export { getAlbum, getAlbumTracks };