class CreateThings < ActiveRecord::Migration[6.0]
  def change
    create_table :things do |t|
      t.string :name
      t.text :description
      t.string :image
      t.belongs_to :collection, null: false, foreign_key: true

      t.timestamps
    end
  end
end
