get '/' do
  erb :index
end

get '/search' do
  erb :form
end

get '/random' do
  erb :random
end

#  post '/bands' do
#   new_search = Animal.create(animal: params[:animal],breed: params[:breed], age: params[:age], zip: params[:zip] )
# end

