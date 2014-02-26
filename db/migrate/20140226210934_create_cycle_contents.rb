class CreateCycleContents < ActiveRecord::Migration
  def change
    create_table :cycle_contents do |t|
      t.integer :mood
      t.integer :cycle_id
      t.integer :user_id
      t.integer :pain
      t.text :note

      t.timestamps
    end
  end
end
