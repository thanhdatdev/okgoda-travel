class CheckoutController < ApplicationController
  def create
    @booking = Booking.find(params[:id])

    if @booking.nil?
      redirect_to root_path
      return
    end

    # Setting up a Stripe Session for payment.
    @session = Stripe::Checkout::Session.create(
      payment_method_types: ['card'],
      line_items: [{
        name: @booking.name_booking,
        amount: @booking.total_price,
        currency: 'vnd',
        quantity: 1
        }],
        success_url: checkout_success_booking_index_url + '?session_id={CHECKOUT_SESSION_ID}',
        cancel_url: checkout_cancel_booking_index_url
    )
  end

  def success
    @session = Stripe::Checkout::Session.retrieve(params[:session_id])
    @payment_intent = Stripe::PaymentIntent.retrieve(@session.payment_intent)
  end

  def cancel
    redirect_to :back
  end
end
