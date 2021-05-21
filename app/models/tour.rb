class Tour < ApplicationRecord
  extend FriendlyId
  include PgSearch::Model
  # multisearchable against: [:title, :tour_type]

  friendly_id :title, use: :slugged
  mount_uploader :photo, PhotoUploader
  belongs_to :tour_type
  has_many   :bookings
  has_many   :users, through: :bookings
  has_many   :tour_programs
  has_many   :price_basics
  has_many   :reviews
  has_many   :comments
  monetize   :price_cents
end
