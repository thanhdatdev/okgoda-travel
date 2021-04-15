class ApplicationRecord < ActiveRecord::Base
  extend FriendlyId
  self.abstract_class = true
end
