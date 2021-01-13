class Hashtag < ApplicationRecord
  belongs_to :task

  validates :title, presence: true
  enum color: { yellow: 0, blue: 1, green: 2, red: 3}
  # see https://naturaily.com/blog/ruby-on-rails-enum
end