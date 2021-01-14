Rails.application.routes.draw do
  # get 'task/create'
  # get 'task/show'
  # get 'task/destroy'
  # get 'task/update'
  root 'homes#index'
  devise_for :users

  get "/tasks/:id", to: "homes#index"
  get "/tasks/:id/destroy", to: "homes#index"
  get "/tasks", to: "homes#index"
  

  namespace :api do
    namespace :v1 do
      resources :tasks, only: [:index, :show, :create, :edit, :destroy, :update]
    end
  end
end
