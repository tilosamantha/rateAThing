class Thing < ApplicationRecord
  belongs_to :collection

  has_many :reviews, dependent: :destroy
  has_one :user, through: :review
end
