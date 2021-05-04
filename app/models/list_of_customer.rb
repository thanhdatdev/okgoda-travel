class ListOfCustomer < ApplicationRecord
  belongs_to :booking, inverse_of: :list_of_customers

  validate :birthday_list_of_customers_cannot_be_in_the_past

  def birthday_list_of_customers_cannot_be_in_the_past
    if birthday_list_of_customers.present? && birthday_list_of_customers > Date.today
      errors.add(:birthday_list_of_customers, "can't be in the past")
    end
  end
end
