require 'stripe'
require 'sinatra'
# This is your real test secret API key.
Stripe.api_key = Rails.application.secrets.stripe_secret_key
set :static, true
set :public_folder, File.dirname(__FILE__)
set :port, 3000
YOUR_DOMAIN = 'http://localhost:3000'
post '/create-checkout-session' do
  content_type 'application/json'
  session = Stripe::Checkout::Session.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        unit_amount: 2000,
        currency: 'usd',
        product_data: {
          name: 'Stubborn Attachments',
          images: ['https://i.imgur.com/EHyR2nP.png'],
        },
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: YOUR_DOMAIN + '/success.html',
    cancel_url: YOUR_DOMAIN + '/cancel.html',
  })
  {
    id: session.id
  }.to_json
end
