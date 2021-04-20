class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings, id: :uuid, default: "gen_random_uuid()" do |t|
      t.belongs_to :user
      t.belongs_to :tour,              foreign_key: true, type: :uuid
      t.string     :name_booking,      null: false, default: ""
      t.string     :email_booking,     null: false, default: ""
      t.string     :mobile_booking,    null: false, default: ""
      t.string     :phone_booing,      null: false, default: ""
      t.string     :address,           null: false, default: ""
      t.string     :customers_type,    null: false, default: ""
      t.string     :customers_number,  null: false, dafault: ""
      t.string     :note,                           default: ""
      t.decimal    :price_booking
      t.decimal    :total_price
      t.references :list_of_customers, null: false
      t.references :payments,          null: false
      t.datetime   :booking_date

      t.timestamps
    end
  end
end
