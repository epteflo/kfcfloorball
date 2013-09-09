class CheckinsController < ApplicationController

  def create
    match_id = params[:id]
    checkin_to_save = Checkin.new(checkin_params)
    checkin_to_save.match_id = match_id
    checkin_to_save.save
    render json: {checkin: checkin_to_save}
  end

  def update
    checkin = Checkin.find(params[:checkin][:id])
    changed = false
    unless(checkin.state == params[:checkin][:state])
      checkin.state = params[:checkin][:state]
      changed = true
    end
    unless(checkin.goal == params[:checkin][:goal])
      checkin.goal = params[:checkin][:goal]
      changed = true
    end
    unless(checkin.assist == params[:checkin][:assist])
      checkin.assist = params[:checkin][:assist]
      changed = true
    end
    unless(checkin.team == params[:checkin][:team])
      checkin.team = params[:checkin][:team]
      changed = true
    end
    unless(checkin.order_in_team == params[:checkin][:order_in_team])
      checkin.order_in_team = params[:checkin][:order_in_team]
      changed = true
    end

    if(changed)
      checkin.save
    end

    render json: {checkin: checkin}

  end

  private
    def checkin_params
      params.require(:checkin).permit(:state, :user_id)
    end

end