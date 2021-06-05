class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.boolean :win
      t.float :accuracy

      t.timestamps
    end
  end
end
