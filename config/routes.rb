Rails.application.routes.draw do
  # get 'task/create'
  # get 'task/show'
  # get 'task/destroy'
  # get 'task/update'
  root 'homes#index'
  devise_for :users

  get "/tasks", to: "homes#index"

  resources :tasks
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
