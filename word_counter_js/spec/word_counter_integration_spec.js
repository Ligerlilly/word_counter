var request = require('supertest');

var app = require('../app');

describe("requests to the root path", function(){
  it('returns a 200 status code', function(done){
    request(app)
      .get('/')
      .expect(200, done);
  });

  it('returns a HTML format', function(done){
    request(app)
      .get('/')
      .expect('Content-Type', /html/, done);
  });

  it('returns an index file with Word Counter', function(done){
    request(app)
      .get('/')
      .expect(/word counter/i, done);
  });

});

describe('requests to the word_count path', function(){});
