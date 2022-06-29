class CreateSpendings < ActiveRecord::Migration[7.0]
  def change
    create_table :spendings, id: :uuid do |t|
      t.text :description, null: false
      t.string :currency, null: false
      t.decimal :amount, null: false
      t.datetime :spent_at, null: false, default: -> { 'CURRENT_TIMESTAMP' }

      t.timestamps
    end
  end
end
