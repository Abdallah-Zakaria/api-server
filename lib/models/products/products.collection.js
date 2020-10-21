'use strict';

const Collection = require('../collection');
const productsModule = require('./products.schema');

class Products extends Collection {
  constructor() {
    super(productsModule);
  }
}

module.exports = new Products();