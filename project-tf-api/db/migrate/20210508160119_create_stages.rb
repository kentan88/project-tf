class CreateStages < ActiveRecord::Migration[6.1]
  def change
    create_table :stages do |t|
      t.references :pipeline
      t.string :name

      t.timestamps
    end
  end
end
