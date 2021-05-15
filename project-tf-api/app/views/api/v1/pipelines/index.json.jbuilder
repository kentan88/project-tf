json.pipelines do
  json.array! @pipelines do |pipeline|
    latest_pipeline_instance = pipeline.latest_pipeline_instance

    json.id pipeline.id
    json.name pipeline.name
    json.group pipeline.group
    json.created_at pipeline.created_at

    if latest_pipeline_instance.present?
      json.latest_pipeline_instance do
        json.id latest_pipeline_instance.id
        json.instance_num latest_pipeline_instance.instance_num
        json.created_at latest_pipeline_instance.created_at

        json.stage_instances do
          json.array! latest_pipeline_instance.stage_instances do |stage_instance|
            json.id stage_instance.id
            json.name stage_instance.name
            json.status stage_instance.status
          end
        end
      end
    end
  end
end