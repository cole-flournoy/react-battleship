class UsersController < ApplicationController
  def index
    # binding.pry
    render json: User.all, key_transform: :camel_lower
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user
    else 
      render json: {error: user.errors.full_messages}
    end
  end

  private
  
  def user_params
    params.require(:user).permit(:username)
  end
end
