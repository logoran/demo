const supertest = require('supertest');

const app = require('../app');
const server = app.listen();
const request = supertest.agent(server);

describe('Logoran GET /', function(){
  afterAll(function() {
    server.close();
  });

  it('respond success', function(done){
    request
      .get('/')
      .set('Accept', 'application/text')
      .expect(200)
      .expect('Content-Type', /text/)
      .expect('<!DOCTYPE html><html><head><title>logoran title</title><link rel="stylesheet" href="/stylesheets/style.css"></head><body><h1>logoran title</h1><p>JADE Welcome to logoran title</p></body></html>', done);
  });

  it('respond users success', function(done){
    request
      .get('/users')
      .set('Accept', 'application/text')
      .expect(200)
      .expect('Content-Type', /text/)
      .expect('this a users response!', done);
  });
});