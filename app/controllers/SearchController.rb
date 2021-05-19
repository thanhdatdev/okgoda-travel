class SearchController < ApplicationController
  def search
    if params[:q].nil?
      @tours = []
    else
      @tours = Tour.search params[:q]
    end
  end
end
