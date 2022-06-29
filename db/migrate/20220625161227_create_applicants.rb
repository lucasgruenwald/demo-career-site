class CreateApplicants < ActiveRecord::Migration[7.0]
  def change
    create_table :applicants do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.text :linkedin, null: false
      t.integer :jobid

      t.timestamps
    end
  end
end
