class String
  define_method(:word_counter) do |test_word|
    string = self.downcase
    words_array = string.split(' ')
    word_count = 0

    words_array.each do |word|
      if word == test_word.downcase
        word_count += 1
      end
    end
    word_count
  end
end
