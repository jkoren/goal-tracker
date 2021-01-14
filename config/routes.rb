Rails.application.routes.draw do
  # get 'task/create'
  # get 'task/show'
  # get 'task/destroy'
  # get 'task/update'
  root 'homes#index'
  devise_for :users

  get "/tasks/:id", to: "homes#index"
  get "/tasks", to: "homes#index"
  get "tasks/:id/edit", to: "homes#index"

  namespace :api do
    namespace :v1 do
      resources :tasks, only: [:index, :create, :show, :update, :destroy]
    end
  end
end
