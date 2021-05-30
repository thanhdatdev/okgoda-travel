class Momo::UpdateBookingService < Momo::ApplicationService
  def initialize booking, params
    @booking = booking
    @params = params
  end

  def perform
    booking.update_attributes booking_params
  end

  private

  attr_reader :params

  def booking_params
    {
      momo_order_type: params[:orderType],
      momo_pay_type: params[:payType],
      momo_trans_id: params[:transId],
      momo_response_time: Time.zone.parse(params[:responseTime])
    }
  end
end
