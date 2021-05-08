class HomeController < ApplicationController
  def index
    @tours = Tour.all
    @categories = Category.all.order(position: :asc)
    @category = Category.find_by(params[:id])
    @item_category = @category.item_categories
    @item = @category.item_categories.find_by(params[:category_id])
  end
end
