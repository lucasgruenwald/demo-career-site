class CreateTeamMembers < ActiveRecord::Migration[7.0]
  def change
    create_table :team_members do |t|
      t.string :name, null: false
      t.string :title, null: false
      t.text :picture, null: false

      t.timestamps
    end
  end
end
