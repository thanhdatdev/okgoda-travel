class SearchController < ApplicationController
  def tour_search
    if check_params(params)
      @tours = Tour.where("departure = ? OR destination = ? OR start_date BETWEEN ? AND ?", @departure, @destination, @departureDate, @departureDateTo)
    else
      @tours = Tour.all
    end
  end

  def booking_search
    if params[:bookingID].present?
      @booking = Booking.find_by(id: params[:bookingID])
    else
      redirect_to root_path
    end
  end

  private

  def check_params(params)
    if params.values_at(:departure, :destination, :DepartureDate, :DepartureDateTo).all?(&:present?)
      @departure = Tour.find(params[:departure]).departure
      @destination = Tour.find(params[:departure]).destination
      @departureDate   = Date.parse(params[:DepartureDate])
      @departureDateTo = Date.parse(params[:DepartureDateTo])
    else
      return
    end
  end
end
