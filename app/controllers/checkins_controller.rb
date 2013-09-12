class CheckinsController < ApplicationController

  def create
    p = checkin_params
    user_id = p[:user]
    match_id = p[:match]
    state = p[:state]

    checkin = Checkin.find_or_initialize_by_user_id_and_match_id(user_id, match_id)
    checkin.state = state
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