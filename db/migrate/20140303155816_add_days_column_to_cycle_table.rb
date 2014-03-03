class AddDaysColumnToCycleTable < ActiveRecord::Migration
  def change
    add_column :cycles, :days, :integer
  end
end
