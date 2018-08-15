import { expect } from 'chai';
import sinon from 'sinon';
import fetch from 'node-fetch';
import portfinder from 'portfinder';
import { setupChai } from '../unitTestUtils';
import * as AppServer from '../../../server/server';

setupChai();

function startServer() {
  return portfinder.getPortPromise().then(port => {
    AppServer.start(port);
    return port;
  });
}

describe.only('Server:', () => {
  let baseUrl;
  const sandbox = sinon.createSandbox();

  before(done => {
    process.env.no_proxy = '*';

    startServer().then(port => {
      baseUrl = `http://localhost:${port}`;
      done();
    });
  });

  after(() => {
    AppServer.stop();
    sandbox.restore();
  });

  describe('when a request is issued for an endpoint that does not exist, ', () => {
    describe('when the request is not a GET request', () => {
      it('returns a 404 response', done => {
        fetch(`${baseUrl}/my-fake-endpoint`, {
          method: 'POST',
        }).then(res => {
          expect(res.status).to.equal(404);
          done();
        });
      });
    });
  });
});
