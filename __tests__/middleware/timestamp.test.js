'use strict';

const timestamp = require('../../lib/middleware/timestamp');

describe('Timestamp Middleware', () =>{
  const req = {};
  const res = {};
  const next = jest.fn();
  it('adding the data as a property in the req object', ()=>{
    timestamp(req, res, next);
    expect(req.requestTime).toBeDefined();
  });
  it('moving to the next middlware', () => {
    timestamp(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });
});