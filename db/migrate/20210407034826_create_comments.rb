class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments, id: :uuid, default: "gen_random_uuid()" do |t|
      t.belongs_to :user, foreign_key: true, type: :uuid
      t.belongs_to :tour
      t.string     :content
      t.belongs_to :review

      t.timestamps
    end
  end
end
