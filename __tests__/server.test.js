'use strict';

const server = require('../lib/server');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server.server);

describe('API testing', () => {

  describe('API testing || products routing', () => {
    let obj = { 'category': 'test', 'name': 'test', 'display_name': 'test', 'description': 'test' };
    let newObj = { 'category': 'test', 'name': 'test', 'display_name': 'test', 'description': 'test' };
    it('route:/products method:GET >> should response 200', () => {
      return mockRequest.get('/api/v1/products').then(result => {
        expect(result.status).toBe(200);
      });
    });
    it('route:/products/:id method:GET >> should response 200', () => {
      return mockRequest.post('/api/v1/products').send(obj).then((data) => {
        return mockRequest.get(`/api/v1/products/${data.body._id}`).then((results) => {
          expect(results.status).toBe(200);
          Object.keys(obj).forEach((key) => {
            expect(obj[key]).toEqual(results.body[key]);
          });
        });
      });
    });
    it('route:/products method:POST >> should response 201', () => {
      return mockRequest.post('/api/v1/products').send(obj).then(result => {
        expect(result.status).toBe(201);
        Object.keys(obj).forEach(key => {
          expect(obj[key]).toEqual(result.body[key]);
        });
      });
    });
    it('route:/products/:id method:PUT >> should response 202', () => {
      return mockRequest.post('/api/v1/products').send(obj).then(data => {
        return mockRequest.put(`/api/v1/products/${data.body._id}`).send(newObj).then(result => {
          expect(result.status).toBe(202);
          Object.keys(newObj).forEach(key=>{
            expect(newObj[key]).toEqual(result.body[key]);
          });
        });
      });
    });
    it('route:/products/:id method:PUT >> should response 202', () => {
      return mockRequest.post('/api/v1/products').send(obj).then(data => {
        return mockRequest.patch(`/api/v1/products/${data.body._id}`).send(newObj).then(result => {
          expect(result.status).toBe(202);
          Object.keys(newObj).forEach(key=>{
            expect(newObj[key]).toEqual(result.body[key]);
          });
        });
      });
    });
    it('route:/products/:id method:DELETE >> should response 202', () => {
      return mockRequest.post('/api/v1/products').send(obj).then(data=>{
        return mockRequest.delete(`/api/v1/products/${data.body._id}`).then(result => {
          expect(result.status).toBe(202);
          expect({}).toEqual(result.body);
        });
      });
    });
  });
  describe('API testing || category routing', () => {
    let obj = { 'name': 'test', 'display_name': 'test', 'description': 'test' };
    let newObj = { 'name': 'test', 'display_name': 'test', 'description': 'test' };
    it('route:/categories method:GET >> should response 200', () => {
      return mockRequest.get('/api/v1/categories').then(result => {
        expect(result.status).toBe(200);
      });
    });
    it('route:/categories/:id method:GET >> should response 200', () => {
      return mockRequest.post('/api/v1/categories').send(obj).then((data) => {
        return mockRequest.get(`/api/v1/categories/${data.body._id}`).then((results) => {
          expect(results.status).toBe(200);
          Object.keys(obj).forEach((key) => {
            expect(obj[key]).toEqual(results.body[key]);
          });
        });
      });
    });
    it('route:/categories method:POST >> should response 201', () => {
      return mockRequest.post('/api/v1/categories').send(obj).then(result => {
        expect(result.status).toBe(201);
        Object.keys(obj).forEach(key => {
          expect(obj[key]).toEqual(result.body[key]);
        });
      });
    });
    it('route:/categories/:id method:PUT >> should response 202', () => {
      return mockRequest.post('/api/v1/categories').send(obj).then(data => {
        return mockRequest.put(`/api/v1/categories/${data.body._id}`).send(newObj).then(result => {
          expect(result.status).toBe(202);
          Object.keys(newObj).forEach(key=>{
            expect(newObj[key]).toEqual(result.body[key]);
          });
        });
      });
    });
    it('route:/categories/:id method:PUT >> should response 202', () => {
      return mockRequest.post('/api/v1/categories').send(obj).then(data => {
        return mockRequest.patch(`/api/v1/categories/${data.body._id}`).send(newObj).then(result => {
          expect(result.status).toBe(202);
          Object.keys(newObj).forEach(key=>{
            expect(newObj[key]).toEqual(result.body[key]);
          });
        });
      });
    });
    it('route:/categories/:id method:DELETE >> should response 202', () => {
      return mockRequest.post('/api/v1/categories').send(obj).then(data=>{
        return mockRequest.delete(`/api/v1/categories/${data.body._id}`).then(result => {
          expect(result.status).toBe(202);
          expect({}).toEqual(result.body);
        });
      });
    });
  });
});
