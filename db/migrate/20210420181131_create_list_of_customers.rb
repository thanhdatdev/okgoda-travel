class CreateListOfCustomers < ActiveRecord::Migration[5.2]
  def change
    create_table :list_of_customers, id: :uuid, default: 'gen_random_uuid()' do |t|
      t.belongs_to :booking, foreign_key: true, type: :uuid
      t.string     :name_list_of_customers,     null: false, default: ""
      t.string     :sex_list_of_customers,      null: false, default: ""
      t.string     :birthday_list_of_customers, null: false, default: ""
      t.string     :ages,                       null: false, default: ""
      t.boolean    :single_room,                null: false, default: true
      t.decimal    :price_booking
      t.decimal    :total_price              
      t.timestamps
    end
  end
end
