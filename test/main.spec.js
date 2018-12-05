import { search, searchAlbums, searchArtists, searchTracks, searchPlayLists } from '../src/search';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = require('node-fetch');

describe('spotify-wrapper', () => {
    var fetchStub = undefined;
    var promise = undefined;

    beforeEach(() => {
        fetchStub = sinon.stub(global, 'fetch');
        promise = fetchStub.returnsPromise();
    });

    afterEach(() => {
        fetchStub.restore();
    });

    describe('tests-smoke', () => {
        it('Deveria existir o metodo search', () => {
            expect(search).to.exist;
        });

        it('Deveria existir o metodo searchAlbums', () => {
            expect(searchAlbums).to.exist;
        });

        it('Deveria existir o metodo searchArtists', () => {
            expect(searchArtists).to.exist;
        });

        it('Deveria existir o metodo searchTracks', () => {
            expect(searchTracks).to.exist;
        });

        it('Deveria existir o metodo searchPlayLists', () => {
            expect(searchPlayLists).to.exist;
        });
    });

    describe('search', () => {
        it('Deveria chamar o metodo fetch', () => {
            search();
            expect(fetchStub).to.have.been.calledOnce;
        });

        it('Deveria receber a url correta no fetch', () => {
            context('Caso passando apenas um tipo', () => {
                search('Incubus', 'Artist');
                expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=Artist');

                search('Incubus', 'Artists');
                expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=Artists');
            });

            context('Caso passando varios tipos', () => {
                search('Incubus', ['Artist', 'Album']);
                expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=Artist,Album');
            });
        });

        it('Deveria retornar promisse com objeto json', () => {
            promise.resolves({ body: 'json' });
            const artists = search('Incubus', 'artist');
            expect(artists.resolveValue).to.be.eql({ body: 'json' })
        });
    });

    describe('searchArtists', () => {
        it('Deveria chamar o metodo fetch', () => {
            searchArtists('almun');
            expect(fetchStub).to.have.been.calledOnce;
        });

        it('Deveria receber a url correta no fetch', () => {
            searchArtists('almun');
            expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=almun&type=artist');

            searchArtists('outh');
            expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=outh&type=artist');
        });
    });

    describe('searchAlbums', () => {
        it('Deveria chamar o metodo fetch', () => {
            searchAlbums('almun');
            expect(fetchStub).to.have.been.calledOnce;
        });

        it('Deveria receber a url correta no fetch', () => {
            searchAlbums('almun');
            expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=almun&type=album');

            searchAlbums('outh');
            expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=outh&type=album');
        });
    });

    describe('searchTracks', () => {
        it('Deveria chamar o metodo fetch', () => {
            searchTracks('almun');
            expect(fetchStub).to.have.been.calledOnce;
        });

        it('Deveria receber a url correta no fetch', () => {
            searchTracks('almun');
            expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=almun&type=tracks');

            searchTracks('outh');
            expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=outh&type=tracks');
        });
    });

    describe('searchPlayLists', () => {
        it('Deveria chamar o metodo fetch', () => {
            searchPlayLists('almun');
            expect(fetchStub).to.have.been.calledOnce;
        });

        it('Deveria receber a url correta no fetch', () => {
            searchPlayLists('almun');
            expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=almun&type=playLists');

            searchPlayLists('outh');
            expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=outh&type=playLists');
        });
    });
});