class StripeChargesServices
  DEFAULT_CURRENCY = 'vnd'.freeze

  def initialize(params, user)
    @stripe_email = params[:stripeEmail]
    @stripe_token = params[:stripeToken]
    @booking = params[:booking_id]
    @user = user
  end

  def call
    create_charge(find_customer)
  end

  private

  attr_accessor :user, :stripe_email, :stripe_token, :order

  def find_customer
  if user.stripe_token
    retrieve_customer(user.stripe_token)
  else
    create_customer
  end
  end

  def retrieve_customer(stripe_token)
    Stripe::Customer.retrieve(stripe_token)
  end

  def create_customer
    customer = Stripe::Customer.create(
      email: stripe_email,
      source: stripe_token
    )
    user.update(stripe_token: customer.id)
    customer
  end

  def create_charge(customer)
    Stripe::Charge.create(
      customer: customer.id,
      amount: booking_amount,
      description: customer.email,
      currency: DEFAULT_CURRENCY
    )
  end

  def booking_amount
    Booking.list_of_customers.find_by(booking_id: booking).total_price
  end
end
