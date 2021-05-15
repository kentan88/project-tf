class CreatePipelineInstances < ActiveRecord::Migration[6.1]
  def change
    create_table :pipeline_instances do |t|
      t.references :pipeline
      t.string :name
      t.integer :instance_num
      t.string :status

      t.timestamps
    end
  end
end
