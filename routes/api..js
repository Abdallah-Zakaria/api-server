'use strict';

const express = require('express');
const router = express.Router();
const categoryModule = require('../lib/models/categories/categories.collection');
const productModule = require('../lib/models/products/products.collection');

// category routes 
router.param('model', getModel);

router.post('/:model/', createHandler);
router.get('/:model/', getAllHandler);
router.get('/:model/:id', getByIdHandler);
router.put('/:model/:id', UpdateHandler);
router.patch('/:model/:id', patchHandler);
router.delete('/:model/:id', deleteHandler);

function getModel(req, res, next) {
  const model = req.params.model;
  switch (model) {
  case 'categories':
    req.model = categoryModule;
    break;
  case 'products':
    req.model = productModule;
    break;
  default:
    break;
  }
  next();
}

//  handler
async function createHandler(req, res, next) {
  try {
    let record  = await req.model.create(req.body);
    res.status(201).json(record);
  } catch (err) {
    next();
  }
}
async function getAllHandler(req, res, next) {
  try {
    const obj = await req.model.read();
    res.status(200).json({ count: obj.length, result: obj });
  } catch (err) {
    next();
  }
}
async function getByIdHandler(req, res, next) {
  try {
    let { id } = req.params;
    let record = await req.model.read(id);
    res.status(200).json(record[0]);
  } catch (err) {
    next();
  }
}
async function UpdateHandler(req, res, next) {
  try {
    let { id } = req.params;
    let result = await req.model.update(id, req.body);
    res.status(202).json(result);
  } catch (err) {
    next();
  }
}
async function patchHandler(req, res, next) {
  try {
    let { id } = req.params;
    let result = await req.model.update(id, req.body);
    res.status(202).json(result);
  } catch (err) {
    next();
  }
}
async function deleteHandler(req, res, next) {
  try {
    let { id } = req.params;
    await req.model.delete(id);
    res.status(202).json({});
  } catch (err) {
    next();
  }
}

module.exports = router;