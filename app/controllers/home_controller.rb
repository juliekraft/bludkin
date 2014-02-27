class HomeController < ApplicationController

  def index
    @cycles = Cycle.all
    respond_to do |format|
      format.html
      format.json {render json: @cycles}
    end
  end

end