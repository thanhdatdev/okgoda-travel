class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :tour
  has_many   :payments, inverse_of: :booking
  has_many   :list_of_customers, inverse_of: :booking

  accepts_nested_attributes_for :list_of_customers, allow_destroy: true
  accepts_nested_attributes_for :payments
end
