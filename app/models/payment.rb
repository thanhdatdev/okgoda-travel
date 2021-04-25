class Payment < ApplicationRecord
  belongs_to :booking, inverse_of: :payments
end
