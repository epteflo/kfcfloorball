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

ActiveRecord::Schema.define(version: 20130907100429) do

  create_table "checkins", force: true do |t|
    t.string  "state"
    t.integer "goal"
    t.integer "assist"
    t.string  "team"
    t.integer "order_in_team"
    t.integer "user_id"
    t.integer "match_id"
  end

  create_table "matches", force: true do |t|
    t.integer  "team_a_score"
    t.integer  "team_b_score"
    t.datetime "match_date"
    t.datetime "deadline"
    t.integer  "limit"
    t.string   "state"
    t.string   "venue"
  end

  create_table "users", force: true do |t|
    t.string "name"
    t.string "email"
    t.string "nickname"
    t.string "role"
    t.string "password"
    t.string "login"
  end

end
