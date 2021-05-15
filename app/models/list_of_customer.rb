class ListOfCustomer < ApplicationRecord
  belongs_to :booking, inverse_of: :list_of_customers
  monetize   :price_booking_cents, :total_price_cents
end
