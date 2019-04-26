class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.references :group, null:false, foreign_key:true
      t.references :user, null:false, foreign_key: true
      t.text :content
      t.string :image, null:true
      t.timestamps
    end
  end
end
