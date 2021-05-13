class CreateListOfCustomers < ActiveRecord::Migration[5.2]
  def change
    create_table :list_of_customers, id: :uuid, default: 'gen_random_uuid()' do |t|
      t.belongs_to :booking, foreign_key: true, type: :uuid
      t.string     :name_list_of_customers,     null: false, default: ""
      t.boolean    :sex_list_of_customers,      null: false, default: true
      t.date       :birthday_list_of_customers, null: false
      t.string     :ages,                       null: false, default: ""
      t.boolean    :single_room,                null: false, default: true
      t.boolean    :domestic_customers
      t.monetize   :price_booking, currency: { present: true }
      t.monetize   :total_price, currency: { present: true }
      t.timestamps
    end
  end
end
