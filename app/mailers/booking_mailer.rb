class BookingMailer < ApplicationMailer
  default from: 'zxzmakerzxz@gmail.com'
  
  def welcome_email(booking)
    @booking = booking
    @url  = 'http://okgoda-travel.com/new-booking'
    mail to: @booking.email_booking, subject: 'Welcome to My Awesome Site'
  end
end
