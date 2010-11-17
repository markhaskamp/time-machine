require 'rubygems'
require 'sinatra'
require 'haml'

get '/' do
  haml :index
end

get '/env' do
  ENV.inspect
end
