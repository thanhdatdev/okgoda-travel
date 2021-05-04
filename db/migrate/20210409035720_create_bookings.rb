class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings, id: :uuid, default: "gen_random_uuid()" do |t|
      t.belongs_to :user
      t.belongs_to :tour,                         null: false, foreign_key: true, type: :uuid
      t.string     :name_booking,                 null: false, default: ""
      t.string     :email_booking,                null: false, default: ""
      t.string     :mobile_booking,               null: false, default: ""
      t.string     :phone_booking,                null: false, default: ""
      t.string     :address_booking,              null: false, default: ""
      t.integer    :adult_guests_number
      t.integer    :child_guests_number
      t.integer    :young_children_guests_number
      t.integer    :baby_guests_number
      t.string     :customers_number,             null: false, dafault: ""
      t.string     :note,                                      default: ""
      t.boolean    :rules_booking,                null: false, default: false
      t.datetime   :booking_date
      t.timestamps
    end
  end
end
