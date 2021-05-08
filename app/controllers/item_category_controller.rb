class ItemCategoryController < ApplicationController
  def show
    @item_category = ItemCategory.find_by(params[:item_category_id])
  end
end
