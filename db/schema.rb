# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140226210934) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cycle_contents", force: true do |t|
    t.integer  "mood"
    t.integer  "cycle_id"
    t.integer  "user_id"
    t.integer  "pain"
    t.text     "note"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "cycles", force: true do |t|
    t.integer  "user_id"
    t.date     "start_date"
    t.date     "period_end_date"
    t.date     "cycle_end_date"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "follows", force: true do |t|
    t.integer  "follower_id"
    t.integer  "followee_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "messages", force: true do |t|
    t.integer  "to_id"
    t.integer  "from_id"
    t.text     "message"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
