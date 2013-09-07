class CheckinSerializer < ActiveModel::Serializer
  embed :ids, :include => true
  attributes :id, :state, :goal, :assist, :team, :order_in_team
  has_one :user
end