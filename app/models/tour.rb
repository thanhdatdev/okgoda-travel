class Tour < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: :slugged
  mount_uploader :photo, PhotoUploader
  has_many   :bookings
  has_many   :users, through: :bookings
  has_many   :tour_programs
  has_many   :price_basics
  belongs_to :tour_type
end
