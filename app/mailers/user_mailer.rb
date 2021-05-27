class UserMailer < ApplicationMailer
  def send_new_user_message(user)
    @user = user
    @url  = 'http://okgoda-travel.com/new-booking'
    mail to: @user.email, subject: 'Welcome to Okgoda-travel'
  end
end
