class FollowsController < ApplicationController

  def index
    @follow = Follow.all

    respond_to do |format|
      format.html
      format.json {render json: @follow}
    end
  end

  def create
    @follow = Follow.new(follow_params)
    @follow.follower = current_user
    @follow.followee = User.find(params['followee'])
    @follow.save!
    render json: @follow
  end

  def destroy
    @follow = Follow.find(params[:id])
    @follow.destroy
    render json: {}
  end

  def new
    @follow = Follow.new
  end

  private

  def follow_params
    params.permit(:follower_id, :followee_id)
  end



end