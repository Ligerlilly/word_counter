require 'rspec'
require 'word_counter'

describe 'String#word_counter' do
  it 'takes a string as an argument and returns number of instances of the argument in string object' do
    expect("Hi there".word_counter('Hi')).to eq(1)
  end

  it 'is case insensitive' do
    expect('Hi there'.word_counter('hi')).to eq(1)
  end

  it 'works with long strings' do
    expect("If Peter Piper picked a peck of pickled peppers, where's the peck of pickled peppers Peter Piper picked?".word_counter('peck')).to eq(2)
  end
end
