class CheckinsController < ApplicationController

  def create
    p = checkin_params
    user_id = p[:user]
    match_id = p[:match]
    state = p[:state]

    checkin = Checkin.new({user_id: user_id, match_id: match_id, state: state})
    checkin.save

    render json: ""
  end

  def update
    checkin = Checkin.find(params[:id])
    checkin.state = checkin_params[:state]
    checkin.save
    render json: ""
  end

  private
    def checkin_params
      params.require(:checkin).permit(:state, :user, :match, :assist, :goal, :order_in_team, :team)
    end

end