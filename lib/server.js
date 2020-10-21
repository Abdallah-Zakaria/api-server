'use strict';

// dependence 
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
// routes require 
const apiRouter = require('../routes/api.');
// middleware require
const requestTime = require('./middleware/timestamp');
const logger = require('./middleware/logger');
const err404 = require('./middleware/404');
const err500 = require('./middleware/500');
// middleware before routes
app.use(express.json());
app.use(cors());
app.use(requestTime);
app.use(logger);
// routes
app.use('/api/v1/', apiRouter);
// test route Error 500
app.get('/api/v1/test', err500);
// middleware after routes
app.use('*', err404);
app.use(err500);
// exporting server
module.exports = {
  server: app,
  start: (port) => {
    port = process.env.PORT || port;
    app.listen(port, () => {
      console.log(`listing to port ${port}`);
    });
  },
};
