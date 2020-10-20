'use strict';

const express = require('express');
const router = express.Router();
const categoryModule = require('../lib/models/categories/categories.collection');

// category routes 
router.post('/', async (req, res) => {
  let { name, display_name, description } = req.body;
  let record = { description: description, name: name, display_name: display_name };
  await categoryModule.create(record);
  res.status(201).json(record);
});
router.get('/', async (req, res) => {
  const obj = await categoryModule.read();
  res.status(200).json(obj);
});
router.get('/:id', async (req, res) => {
  let { id } = req.params;
  let record = await categoryModule.read(id);
  res.status(200).json(record[0]);
});
router.put('/:id', async (req, res) => {
  let { name, display_name, description } = req.body;
  let record = { description: description, name: name, display_name: display_name };
  let { id } = req.params;
  await categoryModule.update(id , record);
  res.redirect(`/categories/${id}`);
});
router.patch('/:id', async (req, res) => {
  let { name, display_name, description } = req.body;
  let record = { description: description, name: name, display_name: display_name };
  let { id } = req.params;
  await categoryModule.update(id , record);
  res.redirect(`/categories/${id}`);
});
router.delete('/:id', async (req, res) => {
  let { id } = req.params;
  await categoryModule.delete(id);
  res.status(202).json({});
});

module.exports = router;