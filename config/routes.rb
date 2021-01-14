Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get "/tasks/:id", to: "homes#index"
  get "/tasks", to: "homes#index"
  
  namespace :api do
    namespace :v1 do
      get "/search/:term", to: "tasks#search"
      resources :tasks, only: [:index, :show, :create, :edit, :destroy, :update]
    end
  end
end
