class Booking < ApplicationRecord
  before_save  :set_status, :set_expired_at, :set_purchased_at, :set_session_id

  belongs_to :user, optional: true
  belongs_to :tour
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
  validates :list_of_customers, presence: true
  validates :address_booking, format: {with: /[a-zA-Z]/}

  def expired?
    expired_at < Time.current
  end

  private
  def set_status
    self.status = 'pending'
  end

  def set_expired_at
    self.expired_at = Time.current + 36.hour
  end

  def set_purchased_at
    self.purchased_at = nil
  end

  def set_session_id
    self.session_id = nil
  end
end
