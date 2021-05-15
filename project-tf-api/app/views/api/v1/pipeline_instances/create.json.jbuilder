json.pipeline_instance do
  json.id @pipeline_instance.id
  json.name @pipeline_instance.name
  json.created_at @pipeline_instance.created_at

  json.stage_instances do
    json.array! @pipeline_instance.stage_instances do |stage_instance|
      json.id stage_instance.id
      json.name stage_instance.name
    end
  end
end