class Booking < ApplicationRecord
  enum status: { pending: 0, failed: 1, paid: 2, paypal_executed: 3}
  enum payment_gateway: { visa: 0, master_card: 1, jcb: 2, american_express: 3}

  belongs_to :user, optional: true
  belongs_to :tour
  has_many   :payments, inverse_of: :booking
  has_many   :list_of_customers, inverse_of: :booking, dependent: :destroy, autosave: false
  accepts_nested_attributes_for :list_of_customers, allow_destroy: true

  def set_paid
   self.status = Order.statuses[:paid]
  end

  def set_failed
   self.status = Order.statuses[:failed]
  end

  def set_paypal_executed
   self.status = Order.statuses[:paypal_executed]
  end
end
