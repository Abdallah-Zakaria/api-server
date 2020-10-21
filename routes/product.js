'use strict';

const express = require('express');
const router = express.Router();
const productModule = require('../lib/models/products/products.collection');

// products routes 
router.post('/',createHandler);
router.get('/', getAllHandler);
router.get('/:id', getByIdHandler);
router.put('/:id',UpdateHandler);
router.patch('/:id', patchHandler);
router.delete('/:id',deleteHandler );

// products handler
async function createHandler(req, res) {
  let { category, name, display_name, description } = req.body;
  let record = { category: category, name: name, display_name: display_name, description: description };
  await productModule.create(record);
  res.status(201).json(record);
}
async function getAllHandler(req, res) {
  const obj = await productModule.read();
  res.status(200).json(obj);
}
async function getByIdHandler(req, res) {
  let { id } = req.params;
  let record = await productModule.read(id);
  res.status(200).json(record[0]);
}
async function UpdateHandler(req, res) {
  let { category, name, display_name, description } = req.body;
  let record = { category: category, name: name, display_name: display_name, description: description };
  let { id } = req.params;
  let result = await productModule.update(id, record);
  res.status(202).json(result);
}
async function patchHandler (req, res) {
  let { category, name, display_name, description } = req.body;
  let record = { category: category, name: name, display_name: display_name, description: description };
  let { id } = req.params;
  let result = await productModule.update(id, record);
  res.status(202).json(result);
}
async function deleteHandler (req, res) {
  let { id } = req.params;
  await productModule.delete(id);
  res.status(202).json({});
}

module.exports = router;
