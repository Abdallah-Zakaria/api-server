'use strict';

class Collection {
  constructor(module){
    this.module = module;
  }
  read(_id) {
    const query = _id ? { _id } : {};
    return this.module.find(query);
  }
  create(record) {
    const newRecord = new this.module(record);
    return newRecord.save();
  }
  update(_id, record) {
    return this.module.findByIdAndUpdate(_id, record, { new: true });
  }
  delete(_id) {
    return this.module.findByIdAndDelete(_id);
  }
}

module.exports = Collection;