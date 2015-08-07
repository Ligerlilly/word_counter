String.prototype.word_counter = function(test_word){
  var words_array = [];
  var word_count = 0;
  words_array = this.split(' ');
  for (var i=0; i < words_array.length; i++){
    if (words_array[i] === test_word){
      word_count++;
    }
  }
  return word_count;

};
