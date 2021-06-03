class Momo::UpdateBookingService < Momo::ApplicationService
  def initialize booking, params
    @booking = booking
    @params = params
  end

  def perform
    @remain_slot = booking.tour.remain_slot.to_i - booking.customers_number.to_i
    @booking.tour.update remain_slot: @remain_slot
    booking.update_attributes booking_params
  end

  private

  attr_reader :params

  def booking_params
    {
      status: "approved",
      purchased_at: Time.zone.parse(params[:responseTime]),
      momo_order_type: params[:orderType],
      momo_pay_type: params[:payType],
      momo_trans_id: params[:transId],
      momo_response_time: Time.zone.parse(params[:responseTime])
    }
  end
end
