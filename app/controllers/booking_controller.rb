class BookingController < ApplicationController
  before_action :set_tour, only: %i[new create]
  before_action :set_booking, only: %i[show edit update destroy]

  def show
    @price_booking = params[:price_booking]
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

  def inbound_members
    tour = Tour.find(params[:tour_id])

    # validate remain_slot
    # Tạo ra 1 service để validate
    # /services/tour_valiation_service.rb
    #
    price_basics = tour.price_basics

    customer_type_hash = {
      adult: params[:adult].to_i,
      children11: params[:children11].to_i,
      children: params[:children].to_i,
      small_children: params[:small_children].to_i
    }

    render json: {
      data: render_to_string(
        partial: 'booking/inbound_member',
        locals: {
          tour: tour,
          total: params[:total].to_i,
          customer_type_hash: customer_type_hash
        }
      )
    }
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
                                    :young_children_guests_number, :baby_guests_number, :customers_number, :booking_date,
                                    list_of_customers_attributes: %i[name_list_of_customers sex_list_of_customers birthday_list_of_customers ages single_room price_booking total_price booking_id _destroy])
  end
end

# , :price_booking, :total_price
# payments_attributes: [:id, :payments_type, :description_payments, :position]
