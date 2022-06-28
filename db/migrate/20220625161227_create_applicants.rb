class CreateApplicants < ActiveRecord::Migration[7.0]
  def change
    create_table :applicants do |t|
      t.string :name
      t.string :email
      t.text :linkedin
      t.integer :jobid

      t.timestamps
    end
  end
end
