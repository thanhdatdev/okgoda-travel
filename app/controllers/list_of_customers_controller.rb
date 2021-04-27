class ListOfCustomersController < ApplicationController
  def new
    @list_of_customers = Booking.new
  end

  def create
    @list_of_customers = Booking.new(list_of_customers_params)
    byebug
     if @list_of_customers.save
       respond_to do |format|
         format.html  { redirect_to(root_path,
                      :notice => 'Booking was successfully created.') }
         format.json  { render :json => @list_of_customers,
                      :status => :created, :location => @list_of_customers }
       end
     else
       respond_to do |format|
         format.html  { #render :action => "new",
            redirect_to(root_path,
                      :notice => 'Booking was failed.') }
         format.json  { render :json => @list_of_customers.errors,
                      :status => :unprocessable_entity }
       end
     end
   end

 private
   def list_of_customers_params
      params.require(:booking).permit(:name_list_of_customers, :sex_list_of_customers, :birthday_list_of_customers, :ages, :single_room, :price_booking, :total_price)
   end
end
