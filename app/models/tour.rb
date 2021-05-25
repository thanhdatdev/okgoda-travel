class Tour < ApplicationRecord
  extend FriendlyId

  friendly_id :title, use: %i(slugged finders)
  mount_uploader :photo, PhotoUploader
  belongs_to :tour_type
  has_many   :bookings
  has_many   :users, through: :bookings
  has_many   :tour_programs
  has_many   :price_basics
  has_many   :reviews
  has_many   :comments

  monetize   :price_cents

  # ADULT = "Người lớn"
  # CHILD = "Trẻ em"
  # YOUNG = "Trẻ nhỏ"
  # BABY = "Em bé"

  # def total_price
  #   price_basics.each do |price_basic|
  #     if price_basic.customers_type == ADULT
  #       @total_price = price_basic.price_default + price_basic.
  #   end
  #   @total_price ||= price_basics.includes(:tour).reduce(0) do |sum, price_basic|
  #     sum + (price_basic.count * l_prod.product.price)
  #   end
  # end
  # searchkick mappings: {
  #   tour: {
  #     properties: {
  #     	id: {type: "uuid"},
  #       title: {type: "string"},
  #       start_date: {type: "string"}
  #     }
  #   }
  # }

  def should_generate_new_friendly_id?
    title_changed? || super
  end
end
