class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.integer :to_id
      t.integer :from_id
      t.text :message

      t.timestamps
    end
  end
end
