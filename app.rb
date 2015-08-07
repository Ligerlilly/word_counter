require './lib/word_counter'
require 'sinatra'
require 'sinatra/reloader'
also_reload 'lib/**/*.rb'

get '/' do
  erb :index
end

get '/word_count' do
  @test_word = params['test_word'].capitalize
  @string = params['string']
  @word_count = params['string'].word_counter(params['test_word'])
  @times = if @word_count > 1 then 'times'
  else
    'time'
  end
  erb :word_count
end
