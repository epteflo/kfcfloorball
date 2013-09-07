class MatchesController < ActionController::Base
  def index
    matches = Match.all()
    render json: {matches: matches}
  end

  
end