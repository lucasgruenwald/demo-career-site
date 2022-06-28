Rails.application.routes.draw do
  # resources :applicants
  resources :jobs
  resources :team_members
  resources :applicants

  post '/job/:id', to: 'applicants#create'
  # post '/job/:id', to: redirect('/applicants')


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
