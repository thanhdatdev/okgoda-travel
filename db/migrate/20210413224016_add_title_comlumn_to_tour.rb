class AddTitleComlumnToTour < ActiveRecord::Migration[5.2]
  def change
    add_column :tours, :title, :string, null: false, default: ""
  end
end
