class ListOfCustomer < ApplicationRecord
  before_save :convert_price

  belongs_to :booking, inverse_of: :list_of_customers
  monetize   :price_booking_cents, as: :price_booking, numericality: { greater_than_or_equal_to: 0 }
  monetize   :total_price_cents, as: :total_price, numericality: { greater_than_or_equal_to: 0 }

  def convert_price
   self.price_booking = self.price_booking.to_i
   self.total_price = self.price_booking.to_i
  end
end
