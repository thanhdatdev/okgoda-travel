Rails.application.routes.draw do
  root to: 'home#index'
  devise_for :users
  resources  :tour
  resources  :booking do
    resources  :list_of_customers
  end
  resources  :category do
    collection do
      resources :item_category
    end
  end

  get  "/booking/tourId/:tour_id" => "booking#new", as: "booking_tour_new"
  post "/booking/tourId/:tour_id" => "booking#create", as: "booking_tour"

  get "/tour-xuyen-viet" => "tour#index", as: "through_vietnam_tour"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
