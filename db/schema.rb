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

ActiveRecord::Schema.define(version: 2021_04_07_041318) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "tour_id"
    t.string "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tour_id"], name: "index_comments_on_tour_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "tour_id"
    t.string "content"
    t.integer "rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tour_id"], name: "index_reviews_on_tour_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "tour_programs", force: :cascade do |t|
    t.date "date", null: false
    t.string "title", null: false
    t.string "description", null: false
    t.integer "position", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tour_types", force: :cascade do |t|
    t.string "type", default: "", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tours", force: :cascade do |t|
    t.time "start_date", null: false
    t.date "days", null: false
    t.decimal "price", null: false
    t.integer "slot", null: false
    t.integer "remain_slot", null: false
    t.string "departure", null: false
    t.bigint "tour_type_id", null: false
    t.string "notice", null: false
    t.bigint "photos_id", null: false
    t.bigint "tour_program_id", null: false
    t.bigint "reviews_id"
    t.bigint "comments_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "photo"
    t.index ["comments_id"], name: "index_tours_on_comments_id"
    t.index ["photos_id"], name: "index_tours_on_photos_id"
    t.index ["reviews_id"], name: "index_tours_on_reviews_id"
    t.index ["tour_program_id"], name: "index_tours_on_tour_program_id"
    t.index ["tour_type_id"], name: "index_tours_on_tour_type_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "comments", "users"
  add_foreign_key "reviews", "users"
end
