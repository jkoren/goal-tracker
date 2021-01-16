class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :task_starts_at, :timer_starts_at, :time_worked, :status, :hashtag_work, :hashtag_health, :hashtag_education, :hashtag_free_time


  belongs_to :user
  has_many :hashtags
end

# https://itnext.io/a-quickstart-guide-to-using-serializer-with-your-ruby-on-rails-api-d5052dea52c5