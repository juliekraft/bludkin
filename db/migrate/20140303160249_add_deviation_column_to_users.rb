class AddDeviationColumnToUsers < ActiveRecord::Migration
  def change
    add_column :users, :deviation, :float
  end
end
