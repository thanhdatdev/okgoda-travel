class Booking < ApplicationRecord
  before_save   :convert_price
  before_create :set_params, :set_status, :set_expired_at, :set_purchased_at
  belongs_to :user, optional: true
  belongs_to :tour
  has_many   :list_of_customers, inverse_of: :booking, dependent: :destroy, autosave: false
  accepts_nested_attributes_for :list_of_customers, allow_destroy: true
  monetize   :total_price_cents, as: :total_price, numericality: { greater_than_or_equal_to: 0 }

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
    self.expired_at < Time.current
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

  def convert_price
   self.total_price = self.total_price.to_i
  end

  def set_params
    self.momo_order_id = nil
    self.momo_request_id = nil
  end
end
