class Task < ApplicationRecord
  belongs_to :user
  has_many :hashtags

  validates :title, presence: true
  validates :task_starts_at, presence: true

  def self.search(search)

    if search
      task = Task.find_by(name: search)
      if task
        where(task_id: search)
      else
        all
      end
    else
      all
    end
  end
end