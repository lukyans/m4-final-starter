class SessionsController < ApplicationController
  def new

  end

  def create
    @user = User.find_by(email: params[:session][:email])
    if @user && @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id
      redirect_to root_path
    else
      flash[:alert] = "invalid email or password"
      render :new
    end
  end

  def destroy
    session.clear
    flash[:message] = "Successful logged out."
    redirect_to root_path
  end
end
