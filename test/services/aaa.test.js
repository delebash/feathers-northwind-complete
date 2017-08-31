const assert = require('assert');
const app = require('../../server/src/app');

describe('\'aaa\' service', () => {
  it('registered the service', () => {
    const service = app.service('aaa');

    assert.ok(service, 'Registered the service');
  });
});
