var request = require('supertest')
var should = require('should')

var app = require('../app')

describe('Logoran GET /', function(){
  it('respond success', function(done){
    request(app.listen())
      .get('/')
      .set('Accept', 'application/text')
      .expect('Content-Type', /text/)
      .end(function(err, res) {
        res.status.should.equal(200);
        res.text.should.equal('<!DOCTYPE html><html><head><title>logoran title</title><link rel="stylesheet" href="/stylesheets/style.css"></head><body><h1>logoran title</h1><p>JADE Welcome to logoran title</p></body></html>');
        done();
      });
  })

  it('respond users success', function(done){
    request(app.listen())
      .get('/users')
      .set('Accept', 'application/text')
      .expect('Content-Type', /text/)
      .end(function(err, res) {
        res.status.should.equal(200);
        res.text.should.equal('this a users response!');
        done();
      });
  })
})