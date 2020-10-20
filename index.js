'use strict';

const mongoose = require('mongoose');
const server = require('./lib/server');

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  server.start(process.env.PORT);
}).catch((err)=>{
  console.error(err.message);
});