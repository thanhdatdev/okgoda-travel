class Tour < ApplicationRecord
  mount_uploader :photo, PhotoUploader
  has_many :bookings
  has_many :users, through: :bookings
  has_many :tour_programs
  has_many :tour_types
end
