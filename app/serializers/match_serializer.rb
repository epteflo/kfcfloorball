class MatchSerializer < ActiveModel::Serializer
  embed :ids, :include => true
  attributes :id, :a_score, :b_score, :match_date, :deadline, :limit, :state, :venue
  has_many :checkins, :key => :checkins
end
