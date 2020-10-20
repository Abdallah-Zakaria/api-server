'use strict';

require('@code-fellows/supergoose');
const categoryModule = require('../lib/models/categories/categories.collection');
const productyModule = require('../lib/models/products/products.collection');

describe('module test', () => {
  describe('category module test', () => {
    let testObject = { name: 'test', display_name: 'test', description: 'test' };
    it('create a document', () => {
      return categoryModule.create(testObject).then(records => {
        Object.keys(testObject).forEach(key => {
          expect(records[key]).toEqual(testObject[key]);
        });
      });
    });
    it('read from database', () => {
      return categoryModule.read().then(result => {
        Object.keys(testObject).forEach(key => {
          expect(result[0][key]).toEqual(testObject[key]);
        });
      });
    });
    it('read from database by pass id', () => {
      return categoryModule.create(testObject).then(result => {
        return categoryModule.read(result._id).then(item => {
          Object.keys(testObject).forEach(key => {
            expect(item[0][key]).toEqual(testObject[key]);
          });
        });
      });
    });
    it('update from database by pass id and new data', () => {
      const updateObject = { name: 'test2', display_name: 'test2', description: 'test2' };
      return categoryModule.create(testObject).then(result => {
        return categoryModule.update(result._id, updateObject).then(item => {
          return categoryModule.read(result._id).then(item => {
            Object.keys(updateObject).forEach(key => {
              expect(item[0][key]).toEqual(updateObject[key]);
            });
          });
        });
      });
    });
    it('delete from database by pass id', () => {
      return categoryModule.create(testObject).then(result => {
        return categoryModule.delete(result._id).then(() => {
          return categoryModule.read(result._id).then((result)=>{
            expect(result[0]).toBeUndefined();
          });
        });
      });
    });
  });
  describe('products module test', () => {
    let testObject = { name: 'test', display_name: 'test', description: 'test' , category : 'test'};
    it('create a document', () => {
      return productyModule.create(testObject).then(records => {
        Object.keys(testObject).forEach(key => {
          expect(records[key]).toEqual(testObject[key]);
        });
      });
    });
    it('read from database', () => {
      return productyModule.read().then(result => {
        Object.keys(testObject).forEach(key => {
          expect(result[0][key]).toEqual(testObject[key]);
        });
      });
    });
    it('read from database by pass id', () => {
      return productyModule.create(testObject).then(result => {
        return productyModule.read(result._id).then(item => {
          Object.keys(testObject).forEach(key => {
            expect(item[0][key]).toEqual(testObject[key]);
          });
        });
      });
    });
    it('update from database by pass id and new data', () => {
      const updateObject = { name: 'test2', display_name: 'test2', description: 'test2' , category : 'test2' };
      return productyModule.create(testObject).then(result => {
        return productyModule.update(result._id, updateObject).then(item => {
          return productyModule.read(result._id).then(item => {
            Object.keys(updateObject).forEach(key => {
              expect(item[0][key]).toEqual(updateObject[key]);
            });
          });
        });
      });
    });
    it('delete from database by pass id', () => {
      return productyModule.create(testObject).then(result => {
        return productyModule.delete(result._id).then(() => {
          return productyModule.read(result._id).then((result)=>{
            expect(result[0]).toBeUndefined();
          });
        });
      });
    });
  }); 
}); 