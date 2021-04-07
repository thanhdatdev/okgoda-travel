class CreateTours < ActiveRecord::Migration[5.2]
  def change
    create_table :tours do |t|
      t.time        :start_date,   null: false
      t.date        :days,         null: false
      t.decimal     :price,        null: false
      t.integer     :slot,         null: false
      t.integer     :remain_slot,  null: false
      t.string      :departure,    null: false
      t.references  :tour_type,    null: false
      t.string      :notice,       null: false
      t.references  :photos,       null: false
      t.references  :tour_program, null: false
      t.references  :reviews
      t.references  :comments

      t.timestamps
    end
  end
end
