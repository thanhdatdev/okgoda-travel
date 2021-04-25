class CreatePayments < ActiveRecord::Migration[5.2]
  def change
    create_table :payments, id: :uuid, default: 'gen_random_uuid()' do |t|
      t.belongs_to :booking,            foreign_key: true, type: :uuid
      t.string  :payments_type,          null: false, default: ""
      t.string  :description_payments,                default: ""
      t.integer :position 
      t.timestamps
    end
  end
end
