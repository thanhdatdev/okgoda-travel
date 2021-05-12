class PriceBasic < ApplicationRecord
  belongs_to :tour

  PERSONAL_KINDS = {
    adult: 0,
    small_children: 1,
    children: 2,
    children11: 3
  }.freeze

  def personal_kind
    PERSONAL_KINDS[customers_type.to_sym]
  end

  def self.adult
    find_by(customers_type: 'adult')
  end
end
