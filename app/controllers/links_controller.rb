class LinksController < ApplicationController

  def index
    if current_user
      @links = current_user.links
      @add_link = Link.new
    else
      redirect_to login_path
    end

  end

  def create
    link = current_user.links.create(link_params)
    if link.save
      redirect_to links_path
      flash[:success] = "You successfully added a link"
    else
      flash[:error] = "Link is not valid"
      redirect_to links_path
    end
end

def update
    link = Link.find(params[:id])

    if link.update(link_params)
      flash[:success] = "You successfully updated your link"
      redirect_to links_path
    else
      flash[:error] = "invalid link"
      redirect_to edit_link_path
    end
  end

  def edit
    @link = Link.find(params[:id])
  end

    def link_params
      params.require(:link).permit(:url, :title, :read, :user)
  end
end
