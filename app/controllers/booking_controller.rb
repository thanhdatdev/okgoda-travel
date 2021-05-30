class BookingController < ApplicationController
  before_action :set_tour, only: %i[new create]
  before_action :set_booking, only: %i[show edit update destroy]

  def show
    @list_of_customers = @booking.list_of_customers
    @customer = @booking.list_of_customers.find_by(params[:list_of_customers_id])
    @price_booking = @customer.price_booking.to_s.reverse.gsub(/(\d{3})(?=\d)/, '\\1,').reverse
    @total_price = @booking.total_price.to_s.reverse.gsub(/(\d{3})(?=\d)/, '\\1,').reverse

    @payment_gateway = nil
    if @booking.paymentID == "1"
      @payment_gateway = "Tiền mặt"
    elsif @booking.paymentID == "2"
      @payment_gateway = "Chuyển khoản"
    elsif @booking.paymentID == "15"
      @payment_gateway = "Thẻ tín dụng"
    else
      @payment_gateway = "Thanh toán bằng momo"
    end
  end

  def new
    @booking = Booking.new
    @booking.list_of_customers.build
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.booking_date = Time.now
    @booking.paymentID = params[:paymentID]
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
    tour = Tour.friendly.find(params[:tour_id])

    # validate remain_slot
    # Tạo ra 1 service để validate
    # /services/tour_valiation_service.rb
    #
    customer_types = {
      adult: {
        number_of_booking: params[:adult].to_i,
        price_basic: nil
      },
      children11: {
        number_of_booking: params[:children11].to_i,
        price_basic: nil
      },
      children: {
        number_of_booking: params[:children].to_i,
        price_basic: nil
      },
      small_children: {
        number_of_booking: params[:small_children].to_i,
        price_basic: nil
      }
    }

    customer_types.each do |key, value|
      price_basic = tour.price_basics.find_by(customers_type: key)

      if price_basic
        value[:price_basic] = price_basic
      else
        customer_types.delete(key)
      end
    end

    render json: {
      data: render_to_string(
        partial: 'booking/inbound_member',
        locals: {
          tour: tour,
          customer_types: customer_types,
          total: params[:total].to_i
        }
      )
    }
  end

  def get_condition_payment
    render json: {
      data: render_to_string(
        partial: 'booking/get_condition_payment',
        locals: {
          paymentID: params[:paymentID].to_i
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
                                    :young_children_guests_number, :baby_guests_number, :customers_number, :note, :total_price, :booking_date, :paymentID, :status, :expired_at, :purchased_at,
                                    list_of_customers_attributes: %i[name_list_of_customers sex_list_of_customers birthday_list_of_customers ages single_room price_booking booking_id _destroy])
  end
end
