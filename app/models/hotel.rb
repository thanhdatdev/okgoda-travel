class Hotel < ApplicationRecord
  mount_uploader :photo, PhotoUploader
  has_many :booking_hotels
  monetize :price_cents
end
