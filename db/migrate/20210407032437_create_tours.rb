class CreateTours < ActiveRecord::Migration[5.2]
  def change
    create_table :tours, id: :uuid, default: "gen_random_uuid()" do |t|
      t.string      :title,         null: false, default: ""
      t.date        :start_date,    null: false
      t.date        :end_date,      null: false
      t.integer     :days,          null: false
      t.monetize    :price,         currency: { present: true }
      t.integer     :slot,          null: false
      t.integer     :remain_slot,   null: false
      t.string      :departure,     null: false
      t.references  :tour_type,     null: false
      t.string      :notice,        null: false

      t.timestamps
    end
  end
end
