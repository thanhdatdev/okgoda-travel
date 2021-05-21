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

  private

  def tour_params
    params.require(:tour).permit(:title, :start_date, :days, :price, :slot, :remain_slot, :departure, :tour_type,
                                 :notice)
  end
end
