class Booking < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :tour
  has_many   :payments, inverse_of: :booking
  has_many   :list_of_customers, inverse_of: :booking, dependent: :destroy, autosave: false
  accepts_nested_attributes_for :list_of_customers, allow_destroy: true

  validates :name_booking, presence: true, length: { minimum: 3 }
  validates :email_booking, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :mobile_booking, presence: { message: 'bad operation!' },
                             numericality: true,
                             length: { minimum: 10, maximum: 15 }
  validates :phone_booking, numericality: true, length: { minimum: 10, maximum: 15 }
  validates :adult_guests_number, :child_guests_number, :young_children_guests_number,
            :baby_guests_number, :customers_number, numericality: true, length: { minimum: 1, maximum: 3 }
  validates :payments, :list_of_customers, presence: true
  validates :address_booking, :note, format: {with: /[a-zA-Z]/}
  validates :rules_booking, acceptance: { accept: ['TRUE', 'accepted'] }
  # accepts_nested_attributes_for :payments
end
