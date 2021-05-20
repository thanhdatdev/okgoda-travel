class CreateItemCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :item_categories, id: :uuid, default: 'gen_random_uuid()' do |t|
      t.belongs_to :category, foreign_key: true, type: :uuid
      t.string :name_item_category, null: false, default: ""
      t.timestamps
    end
  end
end
