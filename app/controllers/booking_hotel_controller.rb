class BookingHotelController < ApplicationController
  before_action :load_hotel

  def new
    @booking_hotel = Hotel.new
  end

  def create
    @booking_hotel = Hotel.new(booking_hotel_params)
    @booking_hotel.paymentID = params[:paymentID]
    respond_to do |format|
      if @hotel.save
        # BookingMailer.welcome_email(@hotel).deliver
        format.html do
          redirect_to(@booking_hotel,
                      notice: 'Booking hotel was successfully created.')
        end
        format.json do
          render json: @booking_hotel,
                 status: :created, location: @booking_hotel
        end
      else
        format.html do
          render action: 'new',
                 notice: 'Booking was failed.'
        end
        format.json do
          render json: @booking_hotel.errors,
                 status: :unprocessable_entity
        end
      end
    end
  end

  private

  def load_hotel
    @hotel = Hotel.find_by(id: params[:hotel_id])
  end

  def booking_hotel_params

  end
end
