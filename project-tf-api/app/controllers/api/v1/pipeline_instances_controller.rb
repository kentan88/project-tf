class API::V1::PipelineInstancesController < ApplicationController
  def index
    @pipeline_instances = PipelineInstance.all
  end

  def create
    pipeline = Pipeline.find(1)
    @pipeline_instance = PipelineInstance.new(params[:pipeline_instance])
    @pipeline_instance.pipeline = pipeline

    if @pipeline_instance.save

    else
      puts @pipeline_instance.errors.full_messages
    end
  end

  private
  def permitted_params
    params.permit!
  end
end