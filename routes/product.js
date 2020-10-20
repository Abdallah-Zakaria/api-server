'use strict';

const express = require('express');
const router = express.Router();
const productModule = require('../lib/models/products/products.collection');

// products routes 
router.post('/', async (req, res) => {
  let { category, name, display_name, description } = req.body;
  let record = { category: category, name: name, display_name: display_name, description: description };
  await productModule.create(record);
  res.status(201).json(record);
});
router.get('/', async (req, res) => {
  const obj = await productModule.read();
  res.status(200).json(obj);
});
router.get('/:id', async (req, res) => {
  let { id } = req.params;
  let record = await productModule.read(id);
  res.status(200).json(record[0]);
});
router.put('/:id', async (req, res) => {
  let { category, name, display_name, description } = req.body;
  let record = { category: category, name: name, display_name: display_name, description: description };
  let { id } = req.params;
  await productModule.update(id , record);
  res.redirect(`/products/${id}`);
});
router.patch('/:id', async (req, res) => {
  let { category, name, display_name, description } = req.body;
  let record = { category: category, name: name, display_name: display_name, description: description };
  let { id } = req.params;
  await productModule.update(id , record);
  res.redirect(`/products/${id}`);
});
router.delete('/:id', async (req, res) => {
  let { id } = req.params;
  await productModule.delete(id);
  res.status(202).json({});
});

module.exports = router;