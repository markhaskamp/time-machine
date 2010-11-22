require 'rubygems'
require 'sinatra'
require 'haml'
require 'active_record'

#ActiveRecord::Base.establish_connection(
#  :adapter => 'sqlite3',
#  :database => 'db/local.sqlite3.db'
#)                                        

class Event < ActiveRecord::Base
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

get '/new' do
  s = "params:<br />"
  params.each do |k,v|
    s = s + "<b>#{k}</b>: #{v}<br />\n"
  end

  s
end
