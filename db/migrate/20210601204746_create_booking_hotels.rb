class CreateBookingHotels < ActiveRecord::Migration[5.2]
  def change
    create_table :booking_hotels, id: :uuid, default: 'gen_random_uuid()' do |t|
      t.belongs_to    :hotel, foreign_key: true, type: :uuid
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
      t.string        :status
      t.timestamps
    end
  end
end
