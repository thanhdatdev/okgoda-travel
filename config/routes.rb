Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  get 'search/tour', to: 'search#tour_search'
  get 'search/booking', to: 'search#booking_search'
  root to: 'home#index'
  devise_for :users, controllers: {
        registrations: 'users/registration'
  }

  resources  :tour
  resources  :booking do
    collection do
      get :inbound_members, :get_condition_payment
      scope '/checkout' do
        post 'create', to: 'checkout#create', as: 'checkout_create'
        get 'cancel', to: 'checkout#cancel', as: 'checkout_cancel'
        get 'success', to: 'checkout#success', as: 'checkout_success'
      end
    end
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
