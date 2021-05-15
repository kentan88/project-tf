class PipelineInstance < ApplicationRecord
  belongs_to :pipeline
  has_many :stage_instances

  before_create :set_instance_num, :set_name
  after_create :create_stage_instances, :update_latest_pipeline_instance_num

  def set_instance_num
    self.instance_num = self.pipeline.latest_pipeline_instance_num + 1
  end

  def set_name
    self.name = self.pipeline.name
  end

  def create_stage_instances
    self.pipeline.stages.each do |stage|
      self.stage_instances.create(name: stage.name, status: "in_progress")
    end
  end

  def update_latest_pipeline_instance_num
    num = self.pipeline.latest_pipeline_instance_num + 1
    self.pipeline.update_column(:latest_pipeline_instance_num, num)
  end
end
