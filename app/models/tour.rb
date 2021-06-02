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

  def should_generate_new_friendly_id?
    title_changed? || super
  end
end
