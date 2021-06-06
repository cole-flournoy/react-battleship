class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :wins, :losses, :best_efficiency, :avg_efficiency
  has_many :games


  def wins
    self.object.games.select{|game| game.win == true}.length
  end

  def losses
    self.object.games.select{|game| game.win == false}.length
  end

  def best_efficiency
    efficiency_array = self.object.games.collect{|game| game.accuracy}
    if efficiency_array.max
      return (efficiency_array.max).round(1)
    end
  end

  def avg_efficiency
    efficiency_array = self.object.games.collect{|game| game.accuracy}
    if efficiency_array.length != 0
      (efficiency_array.sum / efficiency_array.length).round(1)
    else 
      return nil
    end
  end


end
