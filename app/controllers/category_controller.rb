class CategoryController < ApplicationController
  def index
    @categories = Category.all
  end

  def show
    byebug
    @item = ItemCategory.find(params[:item_category_id])
  end
end
