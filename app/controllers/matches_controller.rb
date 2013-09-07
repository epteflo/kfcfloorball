class MatchesController < ActionController::Base
  def index
    matches = Match.order("id desc")
    render json: {matches: matches}
  end

  def show
    match = Match.find(params[:id])
    checkins = match.checkins
    user_ids = Array.new
    checkins.each do |checkin|
      user_ids.push(checkin.user_id)
    end
    render json: {match: match, checkins: match.checkins, users: User.find(user_ids)}
  end
end