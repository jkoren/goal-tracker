class Task < ApplicationRecord
  belongs_to :user
  has_many :hashtags

  validates :title, presence: true
  validates :task_starts_at, presence: true

end