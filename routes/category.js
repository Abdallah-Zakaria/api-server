'use strict';

const express = require('express');
const router = express.Router();
const categoryModule = require('../lib/models/categories/categories.collection');

// category routes 
router.post('/',createHandler);
router.get('/', getAllHandler);
router.get('/:id', getByIdHandler);
router.put('/:id',UpdateHandler);
router.patch('/:id', patchHandler);
router.delete('/:id',deleteHandler );

// category handler
async function createHandler(req, res) {
  let { name, display_name, description } = req.body;
  let record = { description: description, name: name, display_name: display_name };
  await categoryModule.create(record);
  res.status(201).json(record);
}
async function getAllHandler(req, res) {
  const obj = await categoryModule.read();
  res.status(200).json(obj);
}
async function getByIdHandler(req, res) {
  let { id } = req.params;
  let record = await categoryModule.read(id);
  res.status(200).json(record[0]);
}
async function UpdateHandler(req, res) {
  let { name, display_name, description } = req.body;
  let record = { description: description, name: name, display_name: display_name };
  let { id } = req.params;
  let result = await categoryModule.update(id, record);
  res.status(202).json(result);
}
async function patchHandler (req, res) {
  let { name, display_name, description } = req.body;
  let record = { description: description, name: name, display_name: display_name };
  let { id } = req.params;
  let result = await categoryModule.update(id, record);
  res.status(202).json(result);
}
async function deleteHandler (req, res) {
  let { id } = req.params;
  await categoryModule.delete(id);
  res.status(202).json({});
}

module.exports = router;