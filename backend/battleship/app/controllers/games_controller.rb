class GamesController < ApplicationController

  def create
    game = Game.new(game_params)
    if game.save
      render json: game
    else 
      render json: {error: game.errors.full_messages}
    end
  end

  private
  
  def game_params
    params.require(:game).permit(:win, :accuracy, :user_id)
  end

end
