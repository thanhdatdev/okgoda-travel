class CreateTourTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :tour_types do |t|
      t.string :type, null: false, default: ""
      
      t.timestamps
    end
  end
end
