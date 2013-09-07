class StatisticsController < ActionController::Base

  def show
    #statistics = Checkin.group('user_id').sum(:goal, :assist)
    statistics = Checkin.joins(:user).select("users.nickname, sum(goal) as goal, sum(assist) as assist").group('users.nickname')
    render json: {statistics: statistics}
  end

end