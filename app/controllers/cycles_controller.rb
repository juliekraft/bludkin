class CyclesController < ApplicationController

  def index
    @cycles = current_user.cycles 

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

  def months

    users = current_user.follows

    data = {

      me: {},
      followers: {}


    }

    users.each do |user|

      cycles = user.cycles

      cylces_array = cycles.map do |cycle|
        {
          start_date: cycle.start_date,
          stop_date: cycle.period_end_data


        }
      end
      data[:followers][user.name] = cylces_array

    end

      data[:me] = current_user.cycles.map do |cycle|
           {
          start_date: cycle.start_date,
          stop_date: cycle.period_end_date

        }
      end

  


    render json: data
  end

  private

  def cycle_params
    params.permit(:user_id, :start_date, :period_end_date, :cycle_end_date)
  end

end