require 'rubygems'
require 'sinatra'
require 'haml'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'local.sqlite3.db'
)                                        

class Events < ActiveRecord::Base
end

get '/' do
  haml :index
end

get '/env' do
  ENV.inspect
end

get '/db' do
  #@foo = 'we excel on ice'
  @foo = Events.all.count
  haml :db
end
