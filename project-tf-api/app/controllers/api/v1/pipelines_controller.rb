class API::V1::PipelinesController < ApplicationController
  def index
    @pipelines = Pipeline.includes(latest_pipeline_instance: [:stage_instances])
  end

  def show
    @pipeline = Pipeline.find(params[:id])
  end
end