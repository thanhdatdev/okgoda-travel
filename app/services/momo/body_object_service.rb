class Momo::BodyObjectService < Momo::ApplicationService
  def initialize booking, signature
    @booking = booking
    @signature = signature
  end

  def perform
    {
      accessKey: access_key,
      partnerCode: partner_code,
      requestType: request_type,
      notifyUrl: notify_url,
      returnUrl: return_url,
      orderId: order_id,
      amount: amount,
      orderInfo: booking_info,
      requestId: request_id,
      extraData: extra_data,
      signature: signature
    }
  end

  private

  attr_reader :signature
end
