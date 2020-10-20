'use strict';

const server = require('../lib/server');
const supertest = require('supertest');
const mockRequest = supertest(server.server);

describe('API testing' , ()=>{
  xdescribe('API testing || products routing', ()=>{
    it('route:/products method:GET >> should response 200',()=>{
      return mockRequest.get('/products').then(result=>{
        expect(result.status).toBe(200);
      });
    });
    it('route:/products/:id method:GET >> should response 200',()=>{
      return mockRequest.get('/products/1').then(result=>{
        expect(result.status).toBe(200);
      });
    });
    it('route:/products method:POST >> should response 201',()=>{
      return mockRequest.post('/products').then(result=>{
        expect(result.status).toBe(201);
      });
    });
    it('route:/products/:id method:PUT >> should response 302',()=>{
      return mockRequest.put('/products/1').then(result=>{
        expect(result.status).toBe(302);
      });
    });
    it('route:/products/:id method:PATCH >> should response 302',()=>{
      return mockRequest.patch('/products/1').then(result=>{
        expect(result.status).toBe(302);
      });
    });
    it('route:/products/:id method:DELETE >> should response 202',()=>{
      return mockRequest.delete('/products/1').then(result=>{
        expect(result.status).toBe(202);
      });
    });
  });
  xdescribe('API testing || category routing', ()=>{
    it('route:/categories method:GET >> should response 200',()=>{
      return mockRequest.get('/categories').then(result=>{
        expect(result.status).toBe(200);
      });
    });
    it('route:/categories/:id method:GET >> should response 200',()=>{
      return mockRequest.get('/categories/1').then(result=>{
        expect(result.status).toBe(200);
      });
    });
    it('route:/categories method:POST >> should response 201',()=>{
      return mockRequest.post('/categories').then(result=>{
        expect(result.status).toBe(201);
      });
    });
    it('route:/categories/:id method:PUT >> should response 302',()=>{
      return mockRequest.put('/categories/1').then(result=>{
        expect(result.status).toBe(302);
      });
    });
    it('route:/categories/:id method:PATCH >> should response 302',()=>{
      return mockRequest.patch('/categories/1').then(result=>{
        expect(result.status).toBe(302);
      });
    });
    it('route:/categories/:id method:DELETE >> should response 202',()=>{
      return mockRequest.delete('/categories/1').then(result=>{
        expect(result.status).toBe(202);
      });
    });
  });
});
