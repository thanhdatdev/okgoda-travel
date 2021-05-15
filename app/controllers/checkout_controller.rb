class CheckoutController < ApplicationController
  def create
    booking = Booking.find(params[:id])

    if booking.nil?
      redirect_to root_path
      return
    end

    # Setting up a Stripe Session for payment.
    @session = Stripe::Checkout::Session.create(
      payment_method_type: ['card'],
      line_item: [{
        name_booking: booking.name_booking,
        email_booking: booking.email_booking,
        price_booking: booking.list_of_customers.total_price,
        currency: 'vnd',
        quantity: 1
        }],
        success_url: checkout_success_booking_index_url,
        cancel_url: checkout_cancel_booking_index_url
    )
    respond_to do |format|
      format.html
    end
  end

  def success

  end

  def cancel

  end
end
