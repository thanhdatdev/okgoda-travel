class CreateHotel < ActiveRecord::Migration[5.2]
  def change
    create_table :hotels, id: :uuid, default: 'gen_random_uuid()' do |t|
      t.string        :photo
      t.string        :destination
      t.string        :title
      t.monetize      :price
      t.string        :address
      t.string        :phone_number
      t.string        :description
      t.string        :infomation
      t.timestamps
    end
  end
end
