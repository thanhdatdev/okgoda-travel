class ListOfCustomer < ApplicationRecord
  before_save :convert_price

  validate   :birthday_list_of_customers_cannot_be_in_the_past
  belongs_to :booking, inverse_of: :list_of_customers
  monetize   :price_booking_cents, as: :price_booking, numericality: { greater_than_or_equal_to: 0 }
  monetize   :total_price_cents, as: :total_price, numericality: { greater_than_or_equal_to: 0 }


  def birthday_list_of_customers_cannot_be_in_the_past
    if birthday_list_of_customers.present? && birthday_list_of_customers > Date.today
      errors.add(:birthday_list_of_customers, "can't be in the past")
    end
  end

  def convert_price
   self.price_booking = self.price_booking.to_i
   self.total_price = self.price_booking.to_i
  end
end
