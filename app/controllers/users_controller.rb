class UsersController < ApplicationController

devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }

  def index

  end

end