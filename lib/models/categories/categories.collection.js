'use strict';

const Collection = require('../collection');
const categoriesModule = require('./categories.schema');

class Categories extends Collection {
  constructor() {
    super(categoriesModule);
  }
}

module.exports = new Categories();