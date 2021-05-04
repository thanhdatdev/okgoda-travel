class BookingController < ApplicationController
  before_action :set_tour, only: %i[new create]
  before_action :set_booking, only: %i[show edit update destroy]

  def show
    @booking = Booking.find(params[:id])
  end

  def new
    @booking = Booking.new
    @booking.list_of_customers.build
    # @booking.payments.build
  end

  def create
    @booking = Booking.new(booking_params)
    respond_to do |format|
      if @booking.save
        BookingMailer.welcome_email(@booking).deliver
        format.html do
          redirect_to(@booking,
                      notice: 'Booking was successfully created.')
        end
        format.json do
          render json: @booking,
                 status: :created, location: @booking
        end
      else
        format.html do
          render action: 'new',
                 notice: 'Booking was failed.'
        end
        format.json do
          render json: @booking.errors,
                 status: :unprocessable_entity
        end
      end
    end
  end

  private

  def set_booking
    @booking = Booking.find(params[:id])
  end

  def set_tour
    @tour = Tour.friendly.find(params[:tour_id])
    @tour_order_by_position = @tour.price_basics.order(position: :asc)
  end

  def booking_params
    params.require(:booking).permit(:tour_id, :name_booking, :email_booking, :mobile_booking, :phone_booking, :address_booking, :adult_guests_number, :child_guests_number,
                                    :young_children_guests_number, :baby_guests_number, :customers_number, :payments, :booking_date,
                                    list_of_customers_attributes: %i[name_list_of_customers sex_list_of_customers birthday_list_of_customers ages single_room price_booking total_price booking_id _destroy])
  end
end
