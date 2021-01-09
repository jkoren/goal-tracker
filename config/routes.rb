Rails.application.routes.draw do
  # get 'task/create'
  # get 'task/show'
  # get 'task/destroy'
  # get 'task/update'
  root 'homes#index'
  resources :tasks
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
