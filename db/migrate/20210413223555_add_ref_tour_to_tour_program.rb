class AddRefTourToTourProgram < ActiveRecord::Migration[5.2]
  def change
    add_reference :tour_programs, :tour, foreign_key: true, type: :uuid
  end
end
