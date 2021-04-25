class TourController < ApplicationController
  def index
    @tours = Tour.all
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
         format.html  { redirect_to(@tour,
                      :notice => 'Tour was successfully created.') }
         format.json  { render :json => @tour,
                      :status => :created, :location => @tour }
        end
     else
       respond_to do |format|
         format.html  { render :action => "new" }
         format.json  { render :json => @tour.errors,
                      :status => :unprocessable_entity }
       end
     end
   end

 private
   def tour_params
      params.require(:tour).permit(:title, :start_date, :days, :price, :slot, :remain_slot, :departure, :tour_type, :notice)
   end
end
