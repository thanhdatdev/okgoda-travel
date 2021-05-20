class HomeController < ApplicationController
  def index
    if request.fullpath.match('/')
      @tours = Tour.all
      render 'index'
    else
      render 'through_vietnam_tour'
    end
  end
end
