class AddMatchesTable < ActiveRecord::Migration
  def change
    create_table :matches do |t|
      t.integer :team_a_score
      t.integer :team_b_score
      t.datetime :match_date
      t.datetime :deadline
      t.integer :limit
      t.string :state
      t.string :venue
    end
  end
end
