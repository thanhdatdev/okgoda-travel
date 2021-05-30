class Momo::RequestSignatureService < Momo::ApplicationService
  def perform
    digest = OpenSSL::Digest.new("sha256")
    OpenSSL::HMAC.hexdigest(digest, secret_key, raw_signature)
  end

  private

  def raw_signature
    "partnerCode=" + partner_code +
    "&accessKey=" + access_key +
    "&requestId=" + request_id +
    "&amount=" + amount +
    "&orderId=" + order_id +
    "&orderInfo=" + booking_info +
    "&returnUrl=" + return_url +
    "&notifyUrl=" + notify_url +
    "&extraData=" + extra_data
  end
end
