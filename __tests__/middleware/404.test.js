'use strict';

const server = require('../../lib/server');
const supertest = require('supertest');
const mockRequest = supertest(server.server);

describe('404 middleware', () => {
  it('route:/foo method:get >> should response 404', () => {
    return mockRequest.get('/foo').then((result) => {
      expect(result.status).toBe(404);
    });
  });
});