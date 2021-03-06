'use strict';

let assert = require('assert');
let app = require('./app');
var request = require("supertest").agent(app.listen());

describe('server', function () {

  describe('/', function() {

    it('should return Hello World', function (done) {
      request.get('/')
        .expect(200)
        .expect('Hello World')
        .end(done);
    });

  });

  describe('/random-dna/', function() {

    it('should return some dna', function (done) {
      request.get('/random-dna/')
        .expect(200)
        .expect(function(res) {
          assert.equal(20, res.body.first_layer.length);
          assert.equal(4, res.body.second_layer.length);
        })
        .end(done);
    });

  });

});

