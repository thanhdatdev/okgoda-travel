# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


- Tìm kiếm
- Đăng nhập / đăng ký
- Book tour ->  Đánh giá / comment
- Tự tạo tour
- Admin

1. Model
User -> normal user, admin user (admin page)
-> name
-> email
-> phone_number
-> ...

User (m)<--->(n) Tour

Tour
-> start_date
-> days
-> price
-> slot
-> remain_slot
-> diem xuat phat
-> dòng tour (giá rẻ, cao cấp, ....)
-> notice
-> photos (Photo)
-> tour_programs (TourProgram)
-> reviews (Review)
-> comments (Comment)

TourProgram
-> date
-> title
-> description
-> position

Review
-> user_id
-> tour_id
-> content
-> rating

Comment
-> user_id
-> tour_id
-> content

Photo (carrierwave)
