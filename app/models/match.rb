class Match < ActiveRecord::Base
  has_many :checkins
  validates_presence_of :venue, :match_date, :limit, :state

  # To change this template use File | Settings | File Templates.
  def participants(team = nil)
    checkins.select{|p| p.state == 'ok' and (team.nil? or p.team==team)}.map{|p| p.user.fullname}
  end
end