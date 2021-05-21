class Booking < ApplicationRecord
  enum status: { pending: 0, failed: 1, paid: 2, paypal_executed: 3}

  belongs_to :user, optional: true
  belongs_to :tour
  has_many   :list_of_customers, inverse_of: :booking, dependent: :destroy, autosave: false
  accepts_nested_attributes_for :list_of_customers, allow_destroy: true

  def set_paid
   self.status = Booking.statuses[:paid]
  end

  def set_failed
   self.status = Booking.statuses[:failed]
  end

  def set_paypal_executed
   self.status = Booking.statuses[:paypal_executed]
  end
end
