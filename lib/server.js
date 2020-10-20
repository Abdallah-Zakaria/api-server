'use strict';

// dependence 
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
// routes require 
const categoriesRoute = require('../routes/category.js');
const productsRoute = require('../routes/product.js');
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
app.use('/categories', categoriesRoute);
app.use('/products', productsRoute);
// test route Error 500
app.get('/test', err500);
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
