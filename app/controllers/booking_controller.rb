class BookingController < ApplicationController
  def show
    @tour = Tour.friendly.find(params[:id])
  end
end
