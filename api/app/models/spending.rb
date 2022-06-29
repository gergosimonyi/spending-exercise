class Spending < ApplicationRecord
  validates :description, presence: true, allow_blank: false
  validates :currency, presence: true, allow_blank: false
  validates :amount, presence: true, numericality: { other_than: 0 }, allow_blank: false

  after_create :reload
end
