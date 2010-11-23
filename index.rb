require 'rubygems'
require 'sinatra'
require 'haml'
require 'dm-core'
require 'dm-migrations'


class Events
  include DataMapper::Resource
  property :id,         Serial
  property :start_time, Integer
  property :stop_time,  Integer
  property :event_date, DateTime
  property :tags,       Text
end

configure do
  DataMapper.setup(:default, (ENV["DATABASE_URL"] || "sqlite3:///db/local.sqlite3.db"))
  DataMapper.auto_migrate!
end

get '/' do
  haml :index
end

get '/env' do
  content_type 'text/plain'
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
