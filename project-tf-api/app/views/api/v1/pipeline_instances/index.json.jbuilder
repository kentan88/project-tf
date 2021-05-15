# json.pipeline_instances do
#   json.array! @pipeline_instances do |pipeline_instance|
#
#       json.id pipeline_instance.id
#       json.name pipeline_instance.name
#
#       json.stage_instances do
#         json.array! pipeline_instance.stage_instances do |stage_instance|
#           json.id stage_instance.id
#           json.name stage_instance.name
#           json.status stage_instance.status
#         end
#       end
#   end
# end
#
#
#
#
#
