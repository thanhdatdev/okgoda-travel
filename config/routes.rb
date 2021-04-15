Rails.application.routes.draw do
  root to: 'home#index'
  devise_for :users
  resources  :tour
  resources  :booking
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
