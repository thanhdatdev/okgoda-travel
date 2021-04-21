# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
TourType.create!(type_name: 'Giá rẻ')
TourType.create!(type_name: "Ưu đãi mùa hè")

PriceBasic.create!(Tour.first, settings: [{ "customers_type" => "Người lớn", "price_default" => "2090000" }, { "customers_type" => "Trẻ em", "price_default" => "1492500" }] )

Tour.create!(start_date: Time.now, days: "4", price: "3950000", slot: "15", remain_slot: "7", departure: "Hồ Chí Minh", tour_type: TourType.first, notice: "Ữu đãi khi thanh toán trực tuyến", photo: "https://media.travel.com.vn/tour/tfd_200811032731_014482.jpg", title: "Việt Nam đẹp lắm người ơi", PriceBasic.first)
Tour.create!(start_date: Time.now, days: "5", price: "2900000", slot: "20", remain_slot: "8", departure: "Hà Nội", tour_type: TourType.last, notice: "Ữu đãi khi thanh toán trực tuyến", photo: "https://media.travel.com.vn/tour/tfd_200811032731_014482.jpg", title: "Hà nội xinh khỏi bàn")

# PriceBasic.create!(Tour.first, customers_type: "Người lớn", price_default: "2090000")
# PriceBasic.create!(Tour.first, customers_type: "Trẻ em",    price_default: "1492500")
# PriceBasic.create!(Tour.first, customers_type: "Trẻ nhỏ",   price_default: "1000000")
# PriceBasic.create!(Tour.first, customers_type: "Em bé",     price_default: "220000")
# PriceBasic.create!(Tour.first, customers_type: "Phụ thu phòng đơn", price_default: "600000")
#
# PriceBasic.create!(Tour.last, customers_type: "Người lớn", price_default: "2090000")
# PriceBasic.create!(Tour.last, customers_type: "Trẻ em",    price_default: "1492500")
# PriceBasic.create!(Tour.last, customers_type: "Trẻ nhỏ",   price_default: "1000000")
# PriceBasic.create!(Tour.last, customers_type: "Em bé",     price_default: "220000")
# PriceBasic.create!(Tour.last, customers_type: "Phụ thu phòng đơn", price_default: "600000")
