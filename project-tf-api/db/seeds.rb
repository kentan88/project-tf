environments = ["Development", "Staging", "Production"]
pipelines = ["Common", "DMZ", "App", "Mgmt", "Secrets"]

environments.each do |environment|
  pipelines.each do |pipeline|
    pipeline = Pipeline.create(name: "#{pipeline}-#{environment}", group: environment)

    rand(20).times do |n|
      pipeline_instance = pipeline.pipeline_instances.create
    end
  end
end
