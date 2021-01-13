class Task < ApplicationRecord
  belongs_to :user
  has_many :hashtags

  validates :title, presence: true
  validates :task_starts_at, presence: true

  enum status: { "To Do": 1, Doing: 2, Done: 3}
  # see https://naturaily.com/blog/ruby-on-rails-enum

end