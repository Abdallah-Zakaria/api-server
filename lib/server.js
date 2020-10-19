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
// server DataBase
let productDB = [];
let categoryDB = [];
// products routes 
app.post('/products', (req, res) => {
  let { id, category, name, display_name, description } = req.body;
  let record = { _id: id, category: category, name: name, display_name: display_name, description: description };
  productDB.push(record)
  res.status(201).json(record)
})
app.get('/products', (req, res) => {
  const obj = { count: productDB.length, results: productDB }
  res.status(200).json(obj)
})
app.get('/products/:id', (req, res) => {
  let { id } = req.params
  let record = []
  productDB.forEach(item => {
    if (item._id == id) {
      record.push(item)
    }
  })
  res.status(200).json(record[0])
})
app.put('/products/:id', (req, res) => {
  let { category, name, display_name, description } = req.body
  let { id } = req.params
  productDB.forEach((item, index) => {
    if (item._id == id) {
      productDB[index].category = category
      productDB[index].name = name
      productDB[index].display_name = display_name
      productDB[index].description = description
    }
  })
  res.redirect(`/products/${id}`)
})
app.patch('/products/:id', (req, res) => {
  let changeAttKeys = Object.keys(req.body)
  let { id } = req.params
  productDB.forEach((item, index) => {
    if (item._id == id) {
      changeAttKeys.forEach(key => {
        productDB[index][key] = req.body[key]
      })
    }
  })
  res.redirect(`/products/${id}`)
})
app.delete('/products/:id', (req, res) => {
  let { id } = req.params
  productDB.forEach((item, index) => {
    if (item._id == id) {
      productDB[index] = {}
      productDB = productDB.filter(item => {
        return Object.keys(item).length !== 0
      })
    }
  })
  res.status(202).json({})
})
// category routes 
app.post('/categories', (req, res) => {
  let { id, name, display_name, description } = req.body;
  let record =  {_id: id , description: description , name: name , display_name: display_name };
  categoryDB.push(record)
  res.status(201).json(record)
})
app.get('/categories', (req, res) => {
  const obj = { count: categoryDB.length, results: categoryDB }
  res.status(200).json(obj)
})
app.get('/categories/:id', (req, res) => {
  let { id } = req.params
  let record = []
  categoryDB.forEach(item => {
    if (item._id == id) {
      record.push(item)
    }
  })
  res.status(200).json(record[0])
})
app.put('/categories/:id', (req, res) => {
  let { name, display_name, description } = req.body
  let { id } = req.params
  categoryDB.forEach((item, index) => {
    if (item._id == id) {
      categoryDB[index].name = name
      categoryDB[index].display_name = display_name
      categoryDB[index].description = description
    }
  })
  res.redirect(`/categories/${id}`)
})
app.patch('/categories/:id', (req, res) => {
  let changeAttKeys = Object.keys(req.body)
  let { id } = req.params
  categoryDB.forEach((item, index) => {
    if (item._id == id) {
      changeAttKeys.forEach(key => {
        categoryDB[index][key] = req.body[key]
      })
    }
  })
  res.redirect(`/categories/${id}`)
})
app.delete('/categories/:id', (req, res) => {
  let { id } = req.params
  categoryDB.forEach((item, index) => {
    if (item._id == id) {
      categoryDB[index] = {}
      categoryDB = categoryDB.filter(item => {
        return Object.keys(item).length !== 0
      })
    }
  })
  res.status(202).json({})
})
// middleware after routes
app.use('*', err404)
app.use(err500)
// exporting server
module.exports = {
  server: app,
  start: (port) => {
    port = process.env.PORT || port;
    app.listen(port, () => {
      console.log(`listing to port ${port}`)
    })
  }
}
