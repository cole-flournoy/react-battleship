class UsersController < ApplicationController
  def index
    # binding.pry
    render json: User.all, key_transform: :camel_lower
  end

  def create
    user = User.find_or_create_by(username: params[:username])
    render json: user, key_transform: :camel_lower
  end

end

