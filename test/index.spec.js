import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import SpotifyWrapper from '../src';

chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = require('node-fetch');

describe('SpotifyWrapper library', () => {
    it('Deveria ter instancia do objeto SpotifyWrapper', () => {
        let spotify = new SpotifyWrapper({});
        expect(spotify).to.be.instanceOf(SpotifyWrapper);
    });

    it('Deveria ter a propriedade da url_api na classe SpotifyWrapper', () => {
        let spotify = new SpotifyWrapper({ apiURL: 'test' });
        expect(spotify.apiURL).to.be.equals('test');
    });

    it('Deveria passar a url padrao quando nao for passado nenhuma no parametro', () => {
        let spotify = new SpotifyWrapper({});
        expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1');
    });

    it('Deveria ter a propriedade da token na classe SpotifyWrapper', () => {
        let spotify = new SpotifyWrapper({ apiURL: 'test', token: 'foo' });
        expect(spotify.token).to.be.equals('foo');
    });
});

describe('Metodo request', () => {
    var fetchStub = undefined;
    var promise = undefined;

    beforeEach(() => {
        fetchStub = sinon.stub(global, 'fetch');
        promise = fetchStub.returnsPromise();
    });

    afterEach(() => {
        fetchStub.restore();
    });

    it('Deveria existir o metodo request', () => {
        let spotify = new SpotifyWrapper({ apiURL: 'test', token: 'foo' });
        expect(spotify.request).to.be.exist;
    });

    it('Deveria chamar o metodo fetch', () => {
        let spotify = new SpotifyWrapper({ apiURL: 'test', token: 'foo' });
        spotify.request();

        expect(fetchStub).to.have.been.calledOnce;
    });

    it('Deveria passar com a url correta', () => {
        let spotify = new SpotifyWrapper({ apiURL: 'test', token: 'foo' });
        spotify.request('url');

        expect(fetchStub).to.have.been.calledWith('url');
    });

    it('Deveria passar com a token correta', () => {
        const HEADER = {
            headers: {
                Authorization: `'Bearer ${'foo'}'`,
              }
        };

        let spotify = new SpotifyWrapper({ apiURL: 'test', token: 'foo' });
        spotify.request('url', 'foo');

        expect(fetchStub).to.have.been.calledWith('url', HEADER);
    });
});