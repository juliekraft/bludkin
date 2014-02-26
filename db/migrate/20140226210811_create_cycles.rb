class CreateCycles < ActiveRecord::Migration
  def change
    create_table :cycles do |t|
      t.integer :user_id
      t.date :start_date
      t.date :period_end_date
      t.date :cycle_end_date

      t.timestamps
    end
  end
end
