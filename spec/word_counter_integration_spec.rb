require 'capybara/rspec'
require './app'
Capybara.app = Sinatra::Application
set(:show_exceptions, false)

describe 'word_counter path', { type: :feature } do
  it 'takes a user inputed string and test_word and returns number of instances of test_word in user enter string' do
    visit '/'
    fill_in 'string', with: "If Peter Piper picked a peck of pickled peppers, where's the peck of pickled peppers Peter Piper picked?"
    fill_in 'test_word', with: 'peck'
    click_button 'Send'
    expect(page).to have_content 2
  end
end
