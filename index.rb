require 'rubygems'
require 'sinatra'
require 'haml'
#require 'active_record'
require 'sequel'

#:adapter => 'sqlite3',
#:database => 'db/local.sqlite3.db'
#ActiveRecord::Base.establish_connection(
#  :adapter => 'postgresql',
#  :database => ENV['DATABASE_URL']
#)                                        

Sequel.connect(ENV['DATABASE_URL'] || sqlite3://db/local.sqlite3.db)

#class Events < ActiveRecord::Base
class Events < Sequel::Model
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
