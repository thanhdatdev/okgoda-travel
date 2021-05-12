class Tour < ApplicationRecord
  extend FriendlyId
  include PgSearch::Model
  multisearchable against: [:title, :tour_type]

  friendly_id :title, use: :slugged
  mount_uploader :photo, PhotoUploader
  belongs_to :tour_type
  has_many   :bookings
  has_many   :users, through: :bookings
  has_many   :tour_programs
  has_many   :price_basics
  has_many   :reviews
  has_many   :comments

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
end
