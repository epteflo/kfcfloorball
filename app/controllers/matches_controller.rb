class MatchesController < ApplicationController
  respond_to :json

  def index
    matches = Match.where('state!="deleted"')
                   .includes(checkins: :user)
                   .order("id desc")
                   .limit(25)
    respond_with matches
  end

  def show
    match = Match.find(params[:id])
    respond_with match
  end

  def create
    match_to_save = Match.new(match_params)
    match_to_save.state='RSVP';
    match_to_save.save
    render json: {match: match_to_save}
  end

  def update
    match = Match.find(params[:id])
    changed = false
    unless(match.limit == params[:match][:limit])
      match.limit = params[:match][:limit]
      changed = true
    end

    unless(match.match_date == params[:match][:match_date])
      match.match_date = params[:match][:match_date]
      changed = true
    end

    unless(match.state == params[:match][:state])
      match.state = params[:match][:state]
      changed = true
    end

    unless(match.deadline == params[:match][:deadline])
      match.deadline = params[:match][:deadline]
      changed = true
    end

    unless(match.team_a_score == params[:match][:team_a_score])
      match.team_a_score = params[:match][:team_a_score]
      changed = true
    end

    unless(match.team_b_score == params[:match][:team_b_score])
      match.team_b_score = params[:match][:team_b_score]
      changed = true
    end

    unless(match.venue == params[:match][:venue])
      match.venue = params[:match][:venue]
      changed = true
    end

    if(changed)
      match.save
    end

    render json: {match: match}

  end

  def destroy
    match = Match.find(params[:id])
    match.state = 'deleted'
    match.save
    render json: {match: match}
  end

  private

    def match_params
      params.require(:match).permit(:match_date, :limit, :state, :venue, :deadline)
    end
end