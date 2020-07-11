class Collection < ApplicationRecord
  belongs_to :user
  has_many :things, dependent: :destroy
end
