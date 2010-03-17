class CreateUsers < ActiveRecord::Migration
  def self.up
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :phone_number
      t.string :city
      t.string :state
      t.string :favorite_band
    end
  end

  def self.down
    drop_table :users
  end
end
