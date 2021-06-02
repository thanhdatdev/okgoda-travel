class HotelController < ApplicationController
  def index
    @hotels = Hotel.all
  end

  def show

  end
end
