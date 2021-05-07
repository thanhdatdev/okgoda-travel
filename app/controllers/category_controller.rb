class CategoryController < ApplicationController
  def index
    @categories = Category.all
  end

  def show
    @item_categories = ItemCategory.find_by(params[:category_id])
  end
end
