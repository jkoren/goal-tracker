class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :task_starts_at, :timer_starts_at, :time_worked, :status

  belongs_to :user
  has_many :hashtags
end
