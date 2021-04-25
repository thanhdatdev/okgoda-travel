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

ActiveRecord::Schema.define(version: 2021_04_20_200050) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "pgcrypto"
  enable_extension "plpgsql"

  create_table "bookings", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.bigint "user_id"
    t.uuid "tour_id", null: false
    t.string "name_booking", default: "", null: false
    t.string "email_booking", default: "", null: false
    t.string "mobile_booking", default: "", null: false
    t.string "phone_booing", default: "", null: false
    t.string "address", default: "", null: false
    t.integer "adult_guests_number"
    t.integer "child_guests_number"
    t.integer "young_children_guests_number"
    t.integer "baby_guests_number"
    t.string "customers_number", null: false
    t.string "note", default: ""
    t.datetime "booking_date"
    t.bigint "list_of_customers_id", null: false
    t.bigint "payments_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["list_of_customers_id"], name: "index_bookings_on_list_of_customers_id"
    t.index ["payments_id"], name: "index_bookings_on_payments_id"
    t.index ["tour_id"], name: "index_bookings_on_tour_id"
    t.index ["user_id"], name: "index_bookings_on_user_id"
  end

  create_table "comments", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "user_id"
    t.bigint "tour_id"
    t.string "content"
    t.bigint "review_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["review_id"], name: "index_comments_on_review_id"
    t.index ["tour_id"], name: "index_comments_on_tour_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "enable_uuids", force: :cascade do |t|
  end

  create_table "friendly_id_slugs", force: :cascade do |t|
    t.string "slug", null: false
    t.integer "sluggable_id", null: false
    t.string "sluggable_type", limit: 50
    t.string "scope"
    t.datetime "created_at"
    t.index ["slug", "sluggable_type", "scope"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type_and_scope", unique: true
    t.index ["slug", "sluggable_type"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type"
    t.index ["sluggable_type", "sluggable_id"], name: "index_friendly_id_slugs_on_sluggable_type_and_sluggable_id"
  end

  create_table "list_of_customers", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "booking_id"
    t.string "name_list_of_customers", default: "", null: false
    t.string "sex_list_of_customers", default: "", null: false
    t.string "birthday_list_of_customers", default: "", null: false
    t.string "ages", default: "", null: false
    t.boolean "single_room", default: true, null: false
    t.decimal "price_booking"
    t.decimal "total_price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["booking_id"], name: "index_list_of_customers_on_booking_id"
  end

  create_table "payments", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "booking_id"
    t.string "payments_type", default: "", null: false
    t.string "description_payments", default: ""
    t.integer "position"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["booking_id"], name: "index_payments_on_booking_id"
  end

  create_table "price_basics", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "tour_id"
    t.string "customers_type", default: "", null: false
    t.decimal "price_default", null: false
    t.integer "position"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tour_id"], name: "index_price_basics_on_tour_id"
  end

  create_table "reviews", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "user_id"
    t.bigint "tour_id"
    t.string "content"
    t.integer "rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tour_id"], name: "index_reviews_on_tour_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "tour_programs", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.date "tour_program_date", null: false
    t.string "title", null: false
    t.string "description", null: false
    t.integer "position", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.uuid "tour_id"
    t.index ["tour_id"], name: "index_tour_programs_on_tour_id"
  end

  create_table "tour_types", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "type_name", default: "", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tours", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "title", default: "", null: false
    t.time "start_date", null: false
    t.integer "days", null: false
    t.decimal "price", null: false
    t.integer "slot", null: false
    t.integer "remain_slot", null: false
    t.string "departure", null: false
    t.bigint "tour_type_id", null: false
    t.string "notice", null: false
    t.string "photo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "slug"
    t.index ["slug"], name: "index_tours_on_slug", unique: true
    t.index ["tour_type_id"], name: "index_tours_on_tour_type_id"
  end

  create_table "users", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name", default: "", null: false
    t.string "sex", default: "", null: false
    t.date "birthday", null: false
    t.string "phone_number", default: "", null: false
    t.string "identity_card", default: "", null: false
    t.date "issued_on_identity_card"
    t.string "passport"
    t.string "email", default: "", null: false
    t.date "issued_on_passport"
    t.date "expiration_date_passport"
    t.string "address", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.boolean "admin", default: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "bookings", "tours"
  add_foreign_key "comments", "users"
  add_foreign_key "list_of_customers", "bookings"
  add_foreign_key "payments", "bookings"
  add_foreign_key "price_basics", "tours"
  add_foreign_key "reviews", "users"
  add_foreign_key "tour_programs", "tours"
end
