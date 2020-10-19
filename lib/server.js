'use strict';

// dependence 
const express = require('express')
const app = express();
require('dotenv').config()
// middleware require
const requestTime = require('./middleware/timestamp')
const logger = require('./middleware/logger')
const err404 = require('./middleware/404');
const err500 = require('./middleware/500')
// middleware before routes
app.use(express.json());
app.use(requestTime)
app.use(logger)

let database = []
// routes
app.post('/products', (req, res) => {
  let { id, category, name, display_name, description } = req.body;
  let record = { _id: id, category: category, name: name, display_name: display_name, description: description };
  database.push(record)
  console.log(database)
  res.json(record)
})
app.get('/products', (req, res) => {
  res.json(database)
})
app.get('/products/:id', (req, res) => {
  let { id } = req.params
  let record = []
  database.forEach(item => {
    if (item._id == id) {
      record.push(item)
    }
  })
  res.json(record)
})
app.put('/products/:id', (req, res) => {
  let { category, name, display_name, description } = req.body
  let { id } = req.params
  let record ;
  database.forEach((item , index) => {
    if (item._id == id) {
      database[index].category = category
      database[index].name = name
      database[index].display_name = display_name
      database[index].description = description
      record = database[index]
    }
  })
  res.redirect(`/products/${id}`)
})


// middleware after routes
app.use(err404)
app.use(err500)
// eporting server
module.exports = {
  server: app,
  start: (port) => {
    port = process.env.PORT || port;
    app.listen(port, () => {
      console.log(`listing to port ${port}`)
    })
  }
}
