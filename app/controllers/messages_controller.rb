class MessagesController < ApplicationController
  before_action :set_group

  def index
    @message = Message.new
    @messages = @group.messages.includes(:user)
  end

  def create
    @message = @group.messages.new(message_params)
    @message.user = current_user
    if @message.save
      respond_to do |format|
      #format.html { redirect_to :group_messages }
      format.json
    end
    else
      @messages = @group.messages.includes(:user)
      flash.now[:alert] = 'メッセージを入力してください。'
      render :index
    end
  end


  private

  def message_params
    params.require(:message).permit(:content, :group_id, :user_id, :image)
  end

  def set_group
    @group = Group.find(params[:group_id])
  end

end
