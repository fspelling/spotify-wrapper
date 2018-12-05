import { getAlbum, getAlbumTracks } from '../src/album';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = require('node-fetch');

describe('Album', () => {
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
        it('Deveria existir o metodo getAlbum', () => {
            expect(getAlbum).to.exist;
        });

        it('Deveria existir o metodo getAlbumTracks', () => {
            expect(getAlbum).to.exist;
        });
    });

    describe('getAlbum', () => {
        it('Deveria chamar o metodo fecth', () => {
            getAlbum('');
            expect(fetchStub).to.have.been.calledOnce;
        });

        it('Deveria passar a url correta', () => {
            getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
            expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy');
        });

        it('Deveria retornar o objeto json correto na promisse', () => {
            promise.resolves({ body: 'nome' });
            let albuns = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
            expect(albuns.resolveValue).to.be.eql({ body: 'nome' });
        });
    });

    describe('getAlbumTracks', () => {
        it('Deveria chamar o metodo fecth', () => {
            getAlbumTracks('');
            expect(fetchStub).to.have.been.calledOnce;
        });

        it('Deveria passar a url correta', () => {
            getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
            expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');
        });

        it('Deveria retornar o objeto json correto na promisse', () => {
            promise.resolves({ body: 'tracks' });
            let albuns = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
            expect(albuns.resolveValue).to.be.eql({ body: 'tracks' });
        });
    });
});
