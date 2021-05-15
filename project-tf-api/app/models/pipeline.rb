class Pipeline < ApplicationRecord
  has_many :stages
  has_many :pipeline_instances
  has_one :latest_pipeline_instance, -> { order("created_at DESC") }, class_name: "PipelineInstance"

  after_create :create_fetch_material_stage, :create_plan_stage, :create_apply_stage

  def create_fetch_material_stage
    self.stages.create(name: "Fetch Material")
  end

  def create_plan_stage
    self.stages.create(name: "Plan")
  end

  def create_apply_stage
    self.stages.create(name: "Apply")
  end
end
