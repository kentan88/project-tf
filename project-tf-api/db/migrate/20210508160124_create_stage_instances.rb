class CreateStageInstances < ActiveRecord::Migration[6.1]
  def change
    create_table :stage_instances do |t|
      t.references :stage
      t.references :pipeline_instance
      t.string :name
      t.string :status

      t.timestamps
    end
  end
end
