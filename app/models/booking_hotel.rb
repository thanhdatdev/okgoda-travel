class BookingHotel < ApplicationRecord
  belongs_to :hotel
  monetize :room_price_cents
  monetize :bed_price_cents
  monetize :children_price_cents
  monetize :total_price_cents
end
