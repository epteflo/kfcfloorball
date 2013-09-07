class UsersController < ActionController::Base

  def index
    users = User.all
    render json: {users: users}
  end

  def show
    user = User.find(params[:id])
    render json: {user: user}
  end

  def create
    user_to_save = User.new(user_params)
    user_to_save.role ||= 'team_member'
    user_to_save.save
    render json: {user: user_to_save}
  end

  def update
    user = User.find(params[:id])
    changed = false
    unless(user.role == params[:user][:role])
      user.role = params[:user][:role]
      changed = true
    end
    unless(user.name == params[:user][:name])
      user.name = params[:user][:name]
      changed = true
    end
    unless(user.nickname == params[:user][:nickname])
      user.nickname = params[:user][:nickname]
      changed = true
    end

    if(changed)
      user.save
    end

    render json: {user: user}
  end

  private
    def user_params
      params.require(:user).permit(:name, :email, :nickname, :role, :password, :login)
    end

end