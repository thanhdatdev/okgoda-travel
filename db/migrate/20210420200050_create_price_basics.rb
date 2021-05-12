class CreatePriceBasics < ActiveRecord::Migration[5.2]
  def change
    create_table :price_basics, id: :uuid, default: 'gen_random_uuid()' do |t|
      t.belongs_to :tour,              foreign_key: true, type: :uuid
      t.string    :title,              null: false, default: ""
      t.string    :customers_type,     null: false, default: ""
      t.decimal   :price_default ,     null: false
      t.integer   :position
      t.timestamps
    end
  end
end

# Thêm 1 trường là title
# customer_type để là adult, children11, children, small_children
