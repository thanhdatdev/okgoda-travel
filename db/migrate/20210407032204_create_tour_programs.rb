class CreateTourPrograms < ActiveRecord::Migration[5.2]
  def change
    create_table :tour_programs, id: :uuid, default: "gen_random_uuid()", null: false do |t|
      t.date       :tour_program_date,        null: false
      t.string     :title,                    null: false
      t.string     :description,              null: false
      t.integer    :position,                 null: false
      t.timestamps
    end
  end
end
