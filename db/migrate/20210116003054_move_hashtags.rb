class MoveHashtags < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :hashtag_work, :boolean, default: false
    add_column :tasks, :hashtag_health, :boolean, default: false
    add_column :tasks, :hashtag_education, :boolean, default: false
    add_column :tasks, :hashtag_free_time, :boolean, default: false
  end
end

