class SearchController < ApplicationController
  before_action :load_params, only: :tour_search

  def tour_search
    @tours = Tour.all
    if @departure.present?
      @tours = @tours.where("departure = ?", @departure)
    elsif @destination.present?
      @tours = @tours.where("destination = ?", @destination)
    else
      @tours = @tours.where("start_date BETWEEN ? AND ?", @departure_date, @departure_date_to) if @departure_date && @departure_date_to
    end
    @tours = @tours.order(:departure, :destination, :start_date).page(params[:page]).per(5)
  end

  def booking_search
    if params[:bookingID].present?
      @booking = Booking.find_by(id: params[:bookingID])
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
    else
      redirect_to root_path
    end
  end

  def load_departure
    departure = Tour.all.select(:departure).map(&:departure).uniq
    render json: { data: departure }
  end

  def load_destination
    destination = Tour.all.select(:destination).map(&:destination).uniq
    render json: { data: destination }
  end

  private

  def load_params
    @departure = params[:departure]
    @destination = params[:destination]
    @departure_date = Date.parse(params[:DepartureDate])
    @departure_date_to = Date.parse(params[:DepartureDateTo])
  end
end
