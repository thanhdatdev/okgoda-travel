class TourController < ApplicationController
  def index
    render 'through_vietnam_tour'
  end

  def show
    @tour = Tour.friendly.find(params[:id])
    @tour_programs = @tour.tour_programs.order(:position)
  end
end
