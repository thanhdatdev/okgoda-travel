class BookingController < ApplicationController
  def show
    @tour = Tour.friendly.find(params[:id])
  end

  def new
    @booking = Booking.new
    @booking.list_of_customers.build
    @booking.payments.build
  end

  def create
    @booking = Booking.new(booking_params)
    byebug
     if @booking.save
       respond_to do |format|
         format.html  { redirect_to(root_path,
                      :notice => 'Booking was successfully created.') }
         format.json  { render :json => @booking,
                      :status => :created, :location => @booking }
       end
     else
       respond_to do |format|
         format.html  { #render :action => "new",
            redirect_to(root_path,
                      :notice => 'Booking was failed.') }
         format.json  { render :json => @booking.errors,
                      :status => :unprocessable_entity }
       end
     end
   end

 private
   def booking_params
      params.require(:booking).permit(:tour_id, :name_booking, :email_booking, :mobile_booking, :phone_booing, :address, :adult_guests_number, :child_guests_number,
        :young_children_guests_number, :baby_guests_number, :customers_number, :booking_date,
        list_of_customers_attributes: [:id, :name_list_of_customers, :sex_list_of_customers, :birthday_list_of_customers, :ages, :single_room, :price_booking, :total_price],
        payments_attributes: [:id, :payments_type, :description_payments])
   end
end
