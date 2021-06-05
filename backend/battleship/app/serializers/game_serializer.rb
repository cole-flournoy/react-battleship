class GameSerializer < ActiveModel::Serializer
  attributes :id, :win, :accuracy
  belongs_to :user
end
