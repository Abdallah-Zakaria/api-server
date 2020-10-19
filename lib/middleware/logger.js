'use strict';

module.exports = (req, res, next) => {
  console.log('Logger', req.method, req.path, req.requestTime)
  next()
}
