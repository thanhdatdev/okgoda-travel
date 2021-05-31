Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  root to: 'home#index'

  get 'search/tour', to: 'search#tour_search'
  get 'search/booking', to: 'search#booking_search'
  get 'search/load_departure', to: 'search#load_departure'
  get 'search/load_destination', to: 'search#load_destination'

  devise_for :users, controllers: {
        registrations:  "users/registrations",
        sessions: "users/sessions",
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
      namespace :momo do
        resources :payments, only: %i(create show) do
          member do
            post :update
          end
        end
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

  match '/404', via: :all, to: 'errors#render_404'
  match '/403', via: :all, to: 'errors#render_403'
  match '/500', via: :all, to: 'errors#render_500'
  match '*unmatched', to: 'errors#render_canvas_404', via: :all

  resources  :hotel
end
