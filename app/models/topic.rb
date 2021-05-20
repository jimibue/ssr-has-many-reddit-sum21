class Topic < ApplicationRecord
  has_many :comments, dependent: :destroy
  belongs_to :sub
end
