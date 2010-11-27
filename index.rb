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
#DataMapper.auto_migrate!

get '/' do
  haml :index
end

get '/env' do
  #content_type 'text/plain'
  h = Hash.new
  h.merge ENV

  html_str = ""
  ENV.keys.sort.each do |k|
    html_str += "<div><span>#{k}:</span> <span style=\"color: #000099;\">#{ENV[k]}</span></div>\n"
  end

  html_str
end

get '/db' do
  @foo = ''

  Events.all.each do |e|
    
    display_date = e.event_date.strftime("%m/%d/%Y")
    @foo += "<div>#{e.id}. [#{display_date}] #{e.start_time}, #{e.stop_time}</div>\n"
  end
  haml :db
end

get '/new' do
  
  event_date = Time.now
  Events.create(:start_time => params[:start_time],
                :stop_time => params[:stop_time],
                :event_date => event_date)

  redirect '/db'
end
