class AddCheckinsTable < ActiveRecord::Migration
  def change
    create_table :checkins do |t|
      t.string :state
      t.integer :goal
      t.integer :assist
      t.string  :team
      t.integer :order_in_team
    end
  end
end
