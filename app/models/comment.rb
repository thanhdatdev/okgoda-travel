class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :tour
  belongs_to :review
end
