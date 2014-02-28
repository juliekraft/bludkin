class HomeController < ApplicationController

  def index
    @cycles = Cycle.all
    respond_to do |format|
      format.html
      format.json {render json: @cycles}
    end
  end


def friend
@users = User.all
 respond_to do |format|
      format.html
      format.json {render json: @users}
end 
end

end