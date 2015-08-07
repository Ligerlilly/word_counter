require('../lib/word_counter.js');

var assert = require('assert');

describe( 'String#word_counter', function() {
  it('takes a string as an argument and returns number of instances of the argument in string object' ,function(){
    assert.equal('hi there'.word_counter('hi'), 1);
  });
});
