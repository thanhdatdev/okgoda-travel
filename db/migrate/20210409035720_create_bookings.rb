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
      t.monetize   :total_price,   currency: { present: false }
      t.string     :paymentID,                    null: false
      t.datetime   :expired_at
      t.datetime   :purchased_at
      t.string     :status
      # data sent to MoMo
      # recheck data when receive MoMo respone
      t.string     :momo_order_id
      t.string     :momo_request_id

      # update data when receive MoMo respone
      t.string     :momo_trans_id
      t.string     :momo_order_type
      t.string     :momo_pay_type
      t.datetime   :momo_response_time
      t.datetime   :booking_date
      t.timestamps
    end
  end
end
