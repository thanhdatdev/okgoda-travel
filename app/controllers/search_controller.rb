class SearchController < ApplicationController
  before_action :load_params, only: :tour_search

  def tour_search
    @tours = Tour.all
    @tours = @tours.where("departure = ?", @departure) if @departure.present?
    @tours = @tours.where("destination = ?", @destination) if @destination.present?
    @tours = @tours.where("start_date BETWEEN ? AND ?", @departure_date, @departure_date_to) if @departure_date && @departure_date_to
    @tours = @tours.order(:departure, :destination, :start_date).page(params[:page]).per(5)
  end

  def booking_search
    if params[:bookingID].present?
      @booking = Booking.find_by(id: params[:bookingID])
    else
      redirect_to root_path
    end
  end

  def load_noi_khoi_hanh
    noi_khoi_hanh = Tour.all.select(:departure).map(&:departure).uniq
    render json: { data: noi_khoi_hanh }
  end

  private

  def load_params
    @departure = params[:departure]
    @destination = params[:departure]
    @departure_date = Date.parse(params[:DepartureDate])
    @departure_date_to = Date.parse(params[:DepartureDateTo])
  end
end
