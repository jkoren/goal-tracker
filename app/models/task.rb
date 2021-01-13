class Task < ApplicationRecord
  belongs_to :user
  has_many :hashtags

  validates :title, presence: true
  validates :task_starts_at, presence: true

  enum status: { "To Do": 1, Doing: 2, Done: 3}
  # see https://naturaily.com/blog/ruby-on-rails-enum

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