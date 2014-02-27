class CyclesController < ApplicationController

  def create
    @cycle = Cycle.create(cycle_params)
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