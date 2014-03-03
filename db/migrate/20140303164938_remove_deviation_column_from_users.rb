class RemoveDeviationColumnFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :deviation, :float
  end
end
