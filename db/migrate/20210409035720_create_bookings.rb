class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings, id: :uuid, default: "gen_random_uuid()" do |t|
      t.belongs_to :user
      t.belongs_to :tour
      t.datetime   :booking_date

      t.timestamps
    end
  end
end
