class Task < ApplicationRecord
  belongs_to :user

  validates :title, presence: true
  validates :task_starts_at, presence: true

end