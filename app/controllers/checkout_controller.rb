class CheckoutController < ApplicationController
  before_action :load_booking

  def create
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
    @booking.update_attributes booking_params
    redirect_to booking_url(@booking)
    flash[:success] = "Bạn đã thanh toán thành công, vui lòng kiểm tra email!"
  end

  def cancel
    redirect_to booking_url(@booking)
    flash[:danger] = "Thanh toán không thành công"
  end

  def booking_params
    {
      status: "approved",
      purchased_at: Time.now
    }
  end

  def load_booking
    @booking = Booking.find(params[:booking_id])
  end
end
