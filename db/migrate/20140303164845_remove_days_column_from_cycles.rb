class RemoveDaysColumnFromCycles < ActiveRecord::Migration
  def change
    remove_column :cycles, :days, :integer
  end
end
