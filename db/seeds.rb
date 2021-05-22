# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name_category: 'Star Wars' }, { name_category: 'Lord of the Rings' }])
#   Character.create(name_category: 'Luke', movie: movies.first)
# User.create!(name: "Thanh Dat Nguyen", sex: true, birthday: Time.now, phone_number: "0359208878", identity_card: "281263881", issued_on_identity_card: Time.now, email: "thanhdat.nguyen2104@gmail.com", country: "")
TourType.create!(type_name: 'Giá rẻ')
TourType.create!(type_name: "Ưu đãi mùa hè")

Tour.create!(title: "Miền Tây Sông Nước”, start_date: “2021-05-26”, start_hour: Time.now.strftime("%I:%M %p"), end_date: “2021-05-31", days: "5", price: "6990000", slot: "15",remain_slot: "7", departure: "Hồ Chí Minh", destination: "An Giang",tour_type: TourType.first, notice: "Ữu đãi khi thanh toán trực tuyến", photo: "")

PriceBasic.create!(tour: Tour.first, title: "Người lớn", customers_type: "adult", price_default: "2090000", position: "1")
PriceBasic.create!(tour: Tour.first, title: "Trẻ em", customers_type: "children11",    price_default: "1492500", position: "2")
PriceBasic.create!(tour: Tour.first, title: "Trẻ nhỏ", customers_type: "children",   price_default: "1000000", position: "3")
PriceBasic.create!(tour: Tour.first, title: "Em bé", customers_type: "small_children",     price_default: "220000", position: "4")
PriceBasic.create!(tour: Tour.first, title: "Phụ thu phòng đơn", customers_type: "single_room", price_default: "600000", position: "5")

PriceBasic.create!(tour: Tour.last, title: "Người lớn", customers_type: "adult", price_default: "2090000", position: "1")
PriceBasic.create!(tour: Tour.last, title: "Trẻ em", customers_type: "children11",    price_default: "1492500", position: "2")
PriceBasic.create!(tour: Tour.last, title: "Trẻ nhỏ", customers_type: "children",   price_default: "1000000", position: "3")
PriceBasic.create!(tour: Tour.last, title: "Em bé", customers_type: "small_children",     price_default: "220000", position: "4")
PriceBasic.create!(tour: Tour.last, title: "Phụ thu phòng đơn", customers_type: "single_room", price_default: "600000", position: "5")

Category.create!(name_category: "Du lịch", position: '1')
Category.create!(name_category: "Khách sạn", position: '2')
Category.create!(name_category: "Vận chuyển", position: '3')
Category.create!(name_category: "Tin tức", position: '4')
Category.create!(name_category: "Khuyến mãi", position: '5')
Category.create!(name_category: "VietravelPlus", position: '6')
Category.create!(name_category: "Liên hệ", position: '7')

ItemCategory.create!(category_id: Category.find_by(name_category: "Du lịch").id, name_item_category: "Tour xuyên việt")
ItemCategory.create!(category_id: Category.find_by(name_category: "Du lịch").id, name_item_category: "Du lịch trong nước")
ItemCategory.create!(category_id: Category.find_by(name_category: "Du lịch").id, name_item_category: "Du lịch tự chọn")
ItemCategory.create!(category_id: Category.find_by(name_category: "Du lịch").id, name_item_category: "Du lịch an toàn")
ItemCategory.create!(category_id: Category.find_by(name_category: "Du lịch").id, name_item_category: "Du học")

ItemCategory.create!(category_id: Category.find_by(name_category: "Vận chuyển").id, name_item_category: "Thuê xe")
ItemCategory.create!(category_id: Category.find_by(name_category: "Vận chuyển").id, name_item_category: "Vé máy bay")

ItemCategory.create!(category_id: Category.find_by(name_category: "Tin tức").id, name_item_category: "Tin tức")
ItemCategory.create!(category_id: Category.find_by(name_category: "Tin tức").id, name_item_category: "Cẩm nang du lịch")
ItemCategory.create!(category_id: Category.find_by(name_category: "Tin tức").id, name_item_category: "Kinh nghiệm du lịch")
ItemCategory.create!(category_id: Category.find_by(name_category: "Tin tức").id, name_item_category: "Thông tin visa")
