class Momo::PaymentsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: %i(update)

  before_action :load_booking
  before_action :authenticate_payment_success, only: %i(show update)

  def create
    @booking.update_attributes(momo_order_id: SecureRandom.hex, momo_request_id: SecureRandom.hex)
    service = Momo::SendRequestService.new(@booking)
    service.perform

    if service.success
      redirect_to service.pay_url
    else
      # @booking.destroy

      flash[:danger] = service.error_message
      redirect_to root_url
    end
  end

  def show
    confirm_and_update_booking
  end

  def update
    confirm_and_update_booking
  end

  private

  def load_booking
    @booking = Booking.find(params[:id])
    return if @booking

    flash[:danger] = "Booking not found"
    redirect_to root_url
  end

  def authenticate_payment_success
    return if params[:errorCode] == "0"

    flash[:danger] = params[:localMessage]
    redirect_to root_url
  end

  def confirm_and_update_booking
    confirm_service = Momo::ConfirmBookingService.new @booking, params
    confirm_service.perform

    if confirm_service.success
      update_service = Momo::UpdateBookingService.new @booking, params
      update_service.perform

      redirect_to booking_url(@booking)
      flash[:success] = "Bạn đã thanh toán thành công, vui lòng kiểm tra email!"
    else
      # @booking.destroy

      flash[:danger] = "Incorrect MoMo Response"
      redirect_to root_url
    end
  end
end
