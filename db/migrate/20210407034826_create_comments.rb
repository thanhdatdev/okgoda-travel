class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :tour
      t.string     :content
      t.belongs_to :review

      t.timestamps
    end
  end
end
