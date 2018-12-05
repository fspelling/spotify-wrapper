global.fetch = require('node-fetch');

import { searchAlbums } from '../src/search';

const albuns = searchAlbums('icobs');

albuns.then(data => console.log(data));