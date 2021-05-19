class TourController < ApplicationController
  def index
    render 'through_vietnam_tour'
  end

  def show
    @tour = Tour.friendly.find(params[:id])
  end

  def new
    @tour = Tour.new
  end

  def create
    @tour = Tour.new(tour_params)
    if @tour.save
      respond_to do |format|
        format.html do
          redirect_to(@tour,
                      notice: 'Tour was successfully created.')
        end
        format.json do
          render json: @tour,
                 status: :created, location: @tour
        end
      end
    else
      respond_to do |format|
        format.html  { render action: 'new' }
        format.json  do
          render json: @tour.errors,
                 status: :unprocessable_entity
        end
      end
    end
  end

  def load_departure_day

  end

  def load_destination
    tour = Tour.find(params[:tour_id])
    render json: {
      data: render_to_string(
        partial: 'tour/load_destination',
        locals: {
          tour: tour
        }
      )
    }
  end

  def load_combo_type

  end

  def load_province_by_combo

  end
  private

  def tour_params
    params.require(:tour).permit(:title, :start_date, :days, :price, :slot, :remain_slot, :departure, :tour_type,
                                 :notice)
  end
end
