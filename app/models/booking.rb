class Booking < ApplicationRecord
  before_save  :set_status, :set_expired_at, :set_purchased_at

  belongs_to :user, optional: true
  belongs_to :tour
  has_many   :list_of_customers, inverse_of: :booking, dependent: :destroy, autosave: false
  accepts_nested_attributes_for :list_of_customers, allow_destroy: true


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
end
