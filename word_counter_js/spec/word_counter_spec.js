require('../lib/word_counter.js');

var request = require('supertest');
var app = require('../app');
var assert = require('assert');

describe( 'String#word_counter', function() {
  it('takes a string as an argument and returns number of instances of the argument in string object' ,function(){
    assert.equal('hi there'.word_counter('hi'), 1);
  });

  it('is case insensitive', function(){
    assert.equal('Hi there'.word_counter('hi'), 1);
  });

  it('works with long strings', function(){
    assert.equal("If Peter Piper picked a peck of pickled peppers, where's the peck of pickled peppers Peter Piper picked?".word_counter('peck'), 2);
  });
});

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
