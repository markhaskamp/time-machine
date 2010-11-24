require 'rubygems'
require 'sinatra'
require 'haml'
require 'dm-core'
require 'dm-migrations'
require 'dm-sqlite-adapter'


class Events
  include DataMapper::Resource
  property :id,         Serial
  property :start_time, Integer
  property :stop_time,  Integer
  property :event_date, DateTime
  property :tags,       Text
end

DataMapper.setup(:default, (ENV["DATABASE_URL"] || "sqlite3://local.sqlite3.db"))
configure :development do
 enable :logging, :dump_errors, :raise_errors
end

DataMapper.finalize
require 'dm-migrations'
DataMapper.auto_upgrade!

get '/' do
  haml :index
end

get '/env' do
  content_type 'text/plain'
  ENV.inspect
end

get '/db' do
  @foo = ''

  Events.all.each do |e|
    @foo += "<div>#{e.id}. #{e.start_time}, #{e.stop_time}</div>\n"
  end
  haml :db
end

get '/new' do
  Events.create(:start_time => 12345, :stop_time => 12350)

  redirect '/db'
end
