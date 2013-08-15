class Match < ActiveRecord::Base
  has_many :participations
  # To change this template use File | Settings | File Templates.
  def participants(team = nil)
    participations.select{|p| p.state == 'ok' and (team.nil? or p.team==team)}.map{|p| p.user.fullname}
  end
end