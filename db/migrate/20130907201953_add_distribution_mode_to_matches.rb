class AddDistributionModeToMatches < ActiveRecord::Migration
  def change
    add_column :matches, :distribution_mode, :string
  end
end
