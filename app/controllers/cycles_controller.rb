class CyclesController < ApplicationController

  def index
    @cycles = Cycle.all

    respond_to do |format|
      format.html
      format.json {render json: @cycles}
    end
  end

  def create
    @cycle = Cycle.new(cycle_params)
    @cycle.user = current_user
    last_cycle = current_user.cycles.last
    if current_user.cycles.length > 0
      last_cycle.update_attributes(cycle_end_date: @cycle.start_date)
      #find number of days between start date and end date of last cycle to update days attribute
    end
    @cycle.save!
    render json: @cycle

  end

  def destroy
    @cycle = Cycle.find(params[:id])
    @cycle.destroy
    render json: {}
  end

  def update
    @cycle = Cycle.find(params[:id])
    @cycle.update_attributes(cycle_params)
    render json: @cycle
  end

  def edit
    @cycle = Cycle.find(params[:id])
  end

  def new
    @cycle = Cycle.new
  end

  private

  def cycle_params
    params.permit(:user_id, :start_date, :period_end_date, :cycle_end_date)
  end

end