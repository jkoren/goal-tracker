class CreateHashtags < ActiveRecord::Migration[5.2]
  def change
    create_table :hashtags do |t|
      t.string :title, null: false
      t.integer :color, default: 0
      t.belongs_to :task, null: false
      
      t.timestamps
    end
  end
end
