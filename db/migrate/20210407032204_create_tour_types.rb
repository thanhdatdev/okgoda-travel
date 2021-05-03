class CreateTourTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :tour_types, id: :uuid, default: "gen_random_uuid()" do |t|
      t.string :type_name, null: false, default: ""

      t.timestamps
    end
  end
end
