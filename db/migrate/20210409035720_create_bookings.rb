class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.belongs_to :user
      t.belongs_to :tour
      t.datetime   :booking_date

      t.timestamps
    end
  end
end
