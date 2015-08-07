require 'rspec'
require 'word_counter'

describe 'String#word_counter' do
  it 'takes a string as an argument and returns number of instances of the argument in string object' do
    expect("Hi there".word_counter('Hi')).to eq(1)
  end
end
