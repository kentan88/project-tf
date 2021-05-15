class CreatePipelines < ActiveRecord::Migration[6.1]
  def change
    create_table :pipelines do |t|
      t.string :name
      t.string :group
      t.integer :latest_pipeline_instance_num, default: 0

      t.timestamps
    end
  end
end
