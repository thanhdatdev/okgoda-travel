class Momo::ConfirmBookingService < Momo::ApplicationService
  attr_reader :success

  def initialize booking, params
    @booking = booking
    @params = params
    @success = true
  end

  def perform
    return @success = false if partner_code != params[:partnerCode]
    return @success = false if access_key != params[:accessKey]
    return @success = false if request_id != params[:requestId]
    return @success = false if amount != params[:amount]
    return @success = false if booking_id != params[:id]
    return @success = false if signature != params[:signature]
  end

  private

  attr_reader :params

  def signature
    @signature ||= Momo::ResponseSignatureService.new(booking, params).perform
  end
end
