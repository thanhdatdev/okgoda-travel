class CreateTourPrograms < ActiveRecord::Migration[5.2]
  def change
    create_table :tour_programs do |t|
      t.date    :date,        null: false
      t.string  :title,       null: false
      t.string  :description, null: false
      t.integer :position,    null: false

      t.timestamps
    end
  end
end
