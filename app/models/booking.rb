class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :tour
  has_many   :payments
  has_many   :list_of_customers
end
