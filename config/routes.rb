Rails.application.routes.draw do
  root to: 'home#index'
  devise_for :users
  resources  :tour
  resources  :booking do
    resource :list_of_customers
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
