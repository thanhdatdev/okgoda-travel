class ListOfCustomersController < ApplicationController
  def new
    @tour = Tour.friendly.find(params[:id])
  end
end
