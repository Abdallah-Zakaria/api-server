'use strict';

const server = require('../../lib/server');
const supertest = require('supertest');
const mockRequest = supertest(server.server);

describe('500 middleware', () => {
  it('route:/test method:get >> should response 500',  () => {
    return mockRequest.get('/api/v1/test').then((result) => {
      expect(result.status).toBe(500);
    });
  });
});