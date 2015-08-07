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

describe('requests to the word_count path', function(){
  it('takes a user inputed string and test_word and returns number of instances of test_word in user enter string', function(done){
    request(app)
      .post('/word_count')
      .send({'string': 'hi hi hi', 'test_word': 'hi'})
      .expect(/3/, done);
  });
});
