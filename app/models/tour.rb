class Tour < ApplicationRecord
  mount_uploader :photo, PhotoUploader
  has_and_belongs_to_many :users
  has_many :tour_programs
  has_many :tour_types
end
