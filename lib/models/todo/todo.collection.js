'use strict';
const Collection = require('../collection');
const categoriesTask= require('./todo.schema');



class Tasks extends Collection{
  constructor(){
    super(categoriesTask);
  }
}


module.exports = new Tasks();