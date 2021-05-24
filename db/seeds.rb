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

Tour.create!(title: 'Miền Tây Sông Nước: Châu Đốc - Hà Tiên - Phú Quốc - Cần Thơ - Chương Trình Mới', start_date: Date.parse('26-05-2021'), start_hour: Time.now.strftime("%I:%M %p"), end_date: Date.parse('31-05-2021'), days: "4", price: "3950000", slot: "15", remain_slot: "7", departure: "Hồ Chí Minh", destination: "An Giang", tour_type: TourType.first, notice: "Ữu đãi khi thanh toán trực tuyến", photo: "")

PriceBasic.create!(tour: Tour.find_by(title:'Miền Tây Sông Nước: Châu Đốc - Hà Tiên - Phú Quốc - Cần Thơ - Chương Trình Mới'), title: "Người lớn", customers_type: "adult", price_default: "6990000", position: "1")
PriceBasic.create!(tour: Tour.find_by(title:'Miền Tây Sông Nước: Châu Đốc - Hà Tiên - Phú Quốc - Cần Thơ - Chương Trình Mới'), title: "Trẻ em", customers_type: "children11", price_default: "3490000", position: "2")
PriceBasic.create!(tour: Tour.find_by(title:'Miền Tây Sông Nước: Châu Đốc - Hà Tiên - Phú Quốc - Cần Thơ - Chương Trình Mới'), title: "Trẻ nhỏ", customers_type: "children", price_default: "0", position: "3")
PriceBasic.create!(tour: Tour.find_by(title:'Miền Tây Sông Nước: Châu Đốc - Hà Tiên - Phú Quốc - Cần Thơ - Chương Trình Mới'), title: "Em bé", customers_type: "small_children", price_default: "0", position: "4")
PriceBasic.create!(tour: Tour.find_by(title:'Miền Tây Sông Nước: Châu Đốc - Hà Tiên - Phú Quốc - Cần Thơ - Chương Trình Mới'), title: "Phụ thu phòng đơn", customers_type: "single_room", price_default: "2600000", position: "5")

TourProgram.create!(tour: Tour.find_by(title:'Miền Tây Sông Nước: Châu Đốc - Hà Tiên - Phú Quốc - Cần Thơ - Chương Trình Mới'), description: 'Điểm nhấn: - Mũi Đại Lãnh: hay còn gọi là Mũi Điện, được biết đến là cực Đông của Tổ quốc, nơi đón ánh bình minh đầu tiên trên đất liền Việt Nam', tour_program_date: Date.parse('03-06-2021'), title: 'TP.HỒ CHÍ MINH – PHÚ YÊN Số bữa ăn: 2 bữa (trưa, tối)', description_by_date: 'Quý khách tập trung tại Cột 5 ga đi trong nước Sân bay Tân Sơn Nhất, hướng dẫn viên hỗ trợ làm thủ tục cho Quý khách đáp chuyến bay đi Phú Yên. Đến sân bay Tuy Hòa - Phú Yên, hướng dẫn viên đón Quý khách đi tham quan', position: '1')

Tour.create!(title: 'Vi Vu Giữa Chốn Thông Reo: Đà Lạt - Chèo Thuyền Khám Phá Hồ Tuyền Lâm - Kim Ngân Hills - Terracotta Resort - Chương Trình Mới', start_date: Date.parse('28-05-2021'), start_hour: Time.now.strftime("%I:%M %p"), end_date: Date.parse('03-06-2021'), days: "5", price: "2900000", slot: "20", remain_slot: "8", departure: "Hà Nội", destination: "Bắc Kạn", tour_type: TourType.last, notice: "Ữu đãi khi thanh toán trực tuyến", photo: "")

PriceBasic.create!(tour: Tour.find_by(title:'Vi Vu Giữa Chốn Thông Reo: Đà Lạt - Chèo Thuyền Khám Phá Hồ Tuyền Lâm - Kim Ngân Hills - Terracotta Resort - Chương Trình Mới'), title: "Người lớn", customers_type: "adult", price_default: "5990000", position: "1")
PriceBasic.create!(tour: Tour.find_by(title:'Vi Vu Giữa Chốn Thông Reo: Đà Lạt - Chèo Thuyền Khám Phá Hồ Tuyền Lâm - Kim Ngân Hills - Terracotta Resort - Chương Trình Mới'), title: "Trẻ em", customers_type: "children11", price_default: "2990000", position: "2")
PriceBasic.create!(tour: Tour.find_by(title:'Vi Vu Giữa Chốn Thông Reo: Đà Lạt - Chèo Thuyền Khám Phá Hồ Tuyền Lâm - Kim Ngân Hills - Terracotta Resort - Chương Trình Mới'), title: "Trẻ nhỏ", customers_type: "children", price_default: "0", position: "3")
PriceBasic.create!(tour: Tour.find_by(title:'Vi Vu Giữa Chốn Thông Reo: Đà Lạt - Chèo Thuyền Khám Phá Hồ Tuyền Lâm - Kim Ngân Hills - Terracotta Resort - Chương Trình Mới'), title: "Em bé", customers_type: "small_children", price_default: "0", position: "4")
PriceBasic.create!(tour: Tour.find_by(title:'Vi Vu Giữa Chốn Thông Reo: Đà Lạt - Chèo Thuyền Khám Phá Hồ Tuyền Lâm - Kim Ngân Hills - Terracotta Resort - Chương Trình Mới'), title: "Phụ thu phòng đơn", customers_type: "single_room", price_default: "2500000", position: "5")

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
