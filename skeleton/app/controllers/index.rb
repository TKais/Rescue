get '/' do
  erb :index
end

get '/search' do
  erb :form
end

get '/random' do
  erb :random
end

# get '/randompets' do
#   @band_names = Band.all.map(&:name)
#   erb :bands
# end

 # post '/bands' do
#   new_band = Band.create!(name: params[:name])
#   redirect "/bands/#{new_band.id}"
# end

# get '/bands/new' do
#   erb :new_band
# end

# get '/bands/:id' do
#   @band = Band.find(params[:id])
#   erb :show_band
# end

# get '/info' do
#   Demo.new(self).info
# end
