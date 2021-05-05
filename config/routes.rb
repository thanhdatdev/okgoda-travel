Rails.application.routes.draw do
  root to: 'home#index'
  devise_for :users
  resources  :tour
  resources  :booking do
    resources :list_of_customers
    collection do
      get :inbound_members
    end
  end
  get  "/booking/tour/:tour_id" => "booking#new", as: "booking_tour_new"
  post "/booking/tour/:tour_id" => "booking#create", as: "booking_tour"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
