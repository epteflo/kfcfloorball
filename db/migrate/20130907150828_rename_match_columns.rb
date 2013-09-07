class RenameMatchColumns < ActiveRecord::Migration
  def change
    rename_column :matches, :team_a_score, :a_score
    rename_column :matches, :team_b_score, :b_score
  end
end
