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
    # data = User.find_by_sql('select users.name, cycles.start_date, cycles.period_end_date from users full outer join cycles on users.id = cycles.user_id')

    data = Cycle.all.pluck(:user_id, :start_date, :period_end_date)

    data = data.map do |hash|
      hash.range = 4
    end

    # data = current_user.follows.cycles

    # data = current_user.follows.cycles


    # users = current_user.follows

    # data = [

    #   me: {},
    #   followers: {}


    # ]

    # users.each do |user|

    #   cycles = user.cycles

    #   cylces_array = cycles.map do |cycle|
    #     {
    #       start_date: cycle.start_date,
    #       stop_date: cycle.period_end_data
    #       label: cycle.user.name

    #     }
    #   end
    #   data[1][user.name] = cylces_array

    # end

    #   data[0] = current_user.cycles.map do |cycle|
    #        {
    #       start_date: cycle.start_date,
    #       stop_date: cycle.period_end_date
    #       label: current_user.name

    #     }

    render json: data
  end

  private

  def cycle_params
    params.permit(:user_id, :start_date, :period_end_date, :cycle_end_date)
  end

end