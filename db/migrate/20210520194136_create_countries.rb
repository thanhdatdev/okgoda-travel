class CreateCountries < ActiveRecord::Migration[5.2]
  def change
    create_table :countries, temporal: true, copy_data: true do |t|
      t.string :name_country
      t.string :code_country
      t.timestamps
    end
  end
end
