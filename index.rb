require 'rubygems'
require 'sinatra'
require 'haml'
require 'dm-core'
require 'dm-migrations'
require 'dm-sqlite-adapter'


class Events
  include DataMapper::Resource
  property :id,         Serial
  property :gmt_offset,  Integer
  property :start_time, Integer
  property :stop_time,  Integer
  property :event_date, Time
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
  @report_html = build_report_html
  haml :index
end

get '/env' do
  h = Hash.new
  h.merge ENV

  html_str = ""
  ENV.keys.sort.each do |k|
    html_str += "<div><span>#{k}:</span> <span style=\"color: #000099;\">#{ENV[k]}</span></div>\n"
  end

  html_str
end

get '/delete/:id' do
  Events.get(params[:id]).destroy
  redirect '/'
end

get '/new' do
  
  event_date = Time.now
  Events.create(:gmt_offset => params[:time_zone_offset],
                :start_time => params[:start_time],
                :stop_time => params[:stop_time],
                :event_date => event_date)

  redirect '/'
end

def build_report_html
  html_str = ""

  Events.all.each do |e|
    
    display_date = e.event_date.strftime("%m/%d/%Y")

    elapsed_minutes = e.stop_time - e.start_time
    start_seconds = e.start_time * 60
    d_start = Time.at(start_seconds)
    d_start += ((d_start.gmt_offset + (e.gmt_offset * 60)) * -1)

    stop_seconds = e.stop_time * 60
    d_stop = Time.at(stop_seconds)
    d_stop += ((d_stop.gmt_offset + (e.gmt_offset * 60)) * -1)

    html_str += <<EOL
<div>
  <span class="report_date">#{display_date}</span>
  from
  <span> #{sprintf("%d:%02d", d_start.hour, d_start.min)}</span>
  <span> to </span>
  <span> #{sprintf("%d:%02d", d_stop.hour, d_stop.min)} </span>
  <span> for  </span>
  <span> #{convert_minutes_to_hours_and_minutes(elapsed_minutes)} </span>
  - [<a href="/delete/#{e.id}">X</a>]
  <span class="clicker edit">edit</span>
  <div class="report_edit_line" id="#{e.id}">a b c d e f g</div>
</div>
EOL

  end

  html_str
end

def convert_minutes_to_hours_and_minutes(m)
  sprintf("%d:%02d", m/60.to_i, m%60)
end
