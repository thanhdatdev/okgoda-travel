class CreateHotel < ActiveRecord::Migration[5.2]
  def change
    create_table :hotels, id: :uuid, default: 'gen_random_uuid()' do |t|
      t.string        :destination
      t.string        :title
      t.monetize      :price_default
      t.string        :address
      t.string        :phone_number
      t.string        :description
      t.string        :infomation
      t.date          :checkin_date
      t.date          :checkout_date
      t.monetize      :room_price
      t.monetize      :bed_price
      t.monetize      :children_price
      t.string        :name_booking_hotel
      t.string        :phone_booking_hotel
      t.string        :email_booking_hotel
      t.string        :note
      t.monetize      :total_price

      t.timestamps
    end
  end
end
