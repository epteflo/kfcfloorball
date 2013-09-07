class AddMatchIdToCheckins < ActiveRecord::Migration
  def change
    add_column :checkins, :match_id, :integer
  end
end
