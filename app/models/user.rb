class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  mount_uploader :avatar, PhotoUploader
  after_create :send_admin_mail
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :bookings
  has_many :tours, through: :bookings
  has_many :reviews
  has_many :comments

  def send_admin_mail
    UserMailer.send_new_user_message(self).deliver
  end
end
