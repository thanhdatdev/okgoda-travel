class ListOfCustomer < ApplicationRecord
  belongs_to :booking, inverse_of: :list_of_customers
end
