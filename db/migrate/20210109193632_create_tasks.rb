class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.text :body
      t.datetime :task_starts_at, null: false
      t.datetime :timer_starts_at
      t.integer :time_worked
      t.integer :status
      t.belongs_to :user, null: false
      
      t.timestamps
    end
  end
end
