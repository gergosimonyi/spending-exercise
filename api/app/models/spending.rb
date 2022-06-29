require './lib/value'

class Spending < ApplicationRecord
  validates :description, presence: true, allow_blank: false
  validates :currency, presence: true, allow_blank: false
  validates :amount, presence: true, numericality: { other_than: 0 }, allow_blank: false

  before_create :set_value
  after_create :reload

  def set_value
    self.value = currency_to_value(self.currency, self.amount)
  end
end
