# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
TourType.create!(type_name: 'Giá rẻ')
TourType.create!(type_name: "Ưu đãi mùa hè")

# PriceBasic.create!(Tour.first, settings: [{ "customers_type" => "Người lớn", "price_default" => "2090000" }, { "customers_type" => "Trẻ em", "price_default" => "1492500" }] )

Tour.create!(title: "Việt Nam đẹp lắm người ơi", start_date: Time.now, days: "4", price: "3950000", slot: "15", remain_slot: "7", departure: "Hồ Chí Minh",
  tour_type: TourType.first, notice: "Ữu đãi khi thanh toán trực tuyến", photo: "")
Tour.create!(title: "Hà nội xinh khỏi bàn", start_date: Time.now, days: "5", price: "2900000", slot: "20", remain_slot: "8", departure: "Hà Nội",
  tour_type: TourType.last, notice: "Ữu đãi khi thanh toán trực tuyến", photo: "")

PriceBasic.create!(tour: Tour.first, title: "Người lớn", customers_type: "adult", price_default: "2090000", position: "1")
PriceBasic.create!(tour: Tour.first, title: "Trẻ em", customers_type: "children11",    price_default: "1492500", position: "2")
PriceBasic.create!(tour: Tour.first, title: "Trẻ nhỏ", customers_type: "children",   price_default: "1000000", position: "3")
PriceBasic.create!(tour: Tour.first, title: "Em bé", customers_type: "small_children",     price_default: "220000", position: "4")
PriceBasic.create!(tour: Tour.first, title: "Phụ thu phòng đơn", customers_type: "single_room", price_default: "600000", position: "5")
#
PriceBasic.create!(tour: Tour.last, title: "Người lớn", customers_type: "adult", price_default: "2090000", position: "1")
PriceBasic.create!(tour: Tour.last, title: "Trẻ em", customers_type: "children11",    price_default: "1492500", position: "2")
PriceBasic.create!(tour: Tour.last, title: "Trẻ nhỏ", customers_type: "children",   price_default: "1000000", position: "3")
PriceBasic.create!(tour: Tour.last, title: "Em bé", customers_type: "small_children",     price_default: "220000", position: "4")
PriceBasic.create!(tour: Tour.last, title: "Phụ thu phòng đơn", customers_type: "single_room", price_default: "600000", position: "5")
