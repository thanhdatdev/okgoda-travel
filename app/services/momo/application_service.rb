class Momo::ApplicationService
  include Rails.application.routes.url_helpers
  default_url_options[:host] = ENV["MOMO_HOST"]

  def initialize booking
    @booking = booking
  end

  protected

  attr_reader :booking

  def payment_url
    @payment_url ||= Rails.env.production? ? ENV["MOMO_DOMAIN_PRODUCTION"] : ENV["MOMO_DOMAIN_TEST"]
  end

  def partner_code
    @partner_code ||= ENV["MOMO_PARTNER_CODE"]
  end

  def access_key
    @access_key ||= ENV["MOMO_ACCESS_KEY"]
  end

  def secret_key
    @secret_key ||= ENV["MOMO_SECRET_KEY"]
  end

  def booking_info
    @booking_info ||= "Example booking with MoMo"
  end

  def return_url
    @return_url ||= momo_payment_url(id: booking.id)
  end

  def notify_url
    @notify_url ||= momo_payment_url(id: booking.id)
  end

  def amount
    @amount ||= booking.total_price.to_s
  end

  def order_id
    @order_id ||= booking.momo_order_id
  end

  def request_id
    @request_id ||= booking.momo_request_id
  end

  def request_type
    @request_type ||= ENV["MOMO_REQUEST_TYPE"]
  end

  def extra_data
    @extra_data ||= ""
  end
end
