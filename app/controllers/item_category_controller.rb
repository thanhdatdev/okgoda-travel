class ItemCategoryController < ApplicationController
  def show
    @item_category_details = ItemCategory.find(params[:id])
  end
end
