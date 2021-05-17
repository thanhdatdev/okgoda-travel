class ListOfCustomer < ApplicationRecord
  attr_accessor :price_booking_cents
  belongs_to :booking, inverse_of: :list_of_customers
  monetize   :price_booking_cents, :total_price_cents, numericality: { greater_than_or_equal_to: 0 }
end
