json.pipeline do
  json.id @pipeline.id
  json.name @pipeline.name
  json.group @pipeline.group
  json.created_at @pipeline.created_at
end

json.pipeline_instances do
  json.array! @pipeline.pipeline_instances do |pipeline_instance|
    json.id pipeline_instance.id
    json.instance_num pipeline_instance.instance_num
    json.status pipeline_instance.status
    json.created_at pipeline_instance.created_at

    json.stage_instances do
      json.array! pipeline_instance.stage_instances do |stage_instance|
        json.id stage_instance.id
        json.name stage_instance.name
        json.status stage_instance.status
      end
    end
  end
end