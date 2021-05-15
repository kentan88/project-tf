# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_05_08_160124) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "pipeline_instances", force: :cascade do |t|
    t.bigint "pipeline_id"
    t.string "name"
    t.integer "instance_num"
    t.string "status"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["pipeline_id"], name: "index_pipeline_instances_on_pipeline_id"
  end

  create_table "pipelines", force: :cascade do |t|
    t.string "name"
    t.string "group"
    t.integer "latest_pipeline_instance_num", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "stage_instances", force: :cascade do |t|
    t.bigint "stage_id"
    t.bigint "pipeline_instance_id"
    t.string "name"
    t.string "status"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["pipeline_instance_id"], name: "index_stage_instances_on_pipeline_instance_id"
    t.index ["stage_id"], name: "index_stage_instances_on_stage_id"
  end

  create_table "stages", force: :cascade do |t|
    t.bigint "pipeline_id"
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["pipeline_id"], name: "index_stages_on_pipeline_id"
  end

end
