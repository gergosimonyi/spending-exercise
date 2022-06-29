class AddValueToSpending < ActiveRecord::Migration[7.0]
  def change
    add_column :spendings, :value, :decimal, null: false
  end
end
