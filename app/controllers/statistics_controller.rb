class StatisticsController < ApplicationController

  def show
    #statistics = Checkin.group('user_id').sum(:goal, :assist)
    statistics = Checkin.joins(:user).select("user_id as id, user_id, count(1) as matches, sum(goal) as goals, sum(assist) as assists").group("user_id")
    users = User.find(statistics.map(&:user_id))
    render json: {statistics: statistics, users: users}
  end

end