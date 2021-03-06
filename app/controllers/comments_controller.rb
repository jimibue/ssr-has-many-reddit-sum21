class CommentsController < ApplicationController
    before_action :set_topic
    before_action :set_comment, only: [:edit, :show, :update, :destroy]

    def index
      @comments = @topic.comments
      render component: "Comments", props: {topic: @topic, comments: @comments}
    end

    def show
        render component: "Comment", props: {topic: @topic, comment: @comment}
    end

    def new 
        render component: "CommentNew", props: {topic: @topic}
    end

    def create
        comment = @topic.comments.new(comment_params)
        if (comment.save)
            redirect_to topic_comments_path(@topic.id)	
        else
            # later
        end
    end


    def edit
        render component: "CommentEdit", props: {topic: @topic, comment: @comment}
    end

    def update
        if (@comment.update(comment_params))
            redirect_to topic_comments_path(@topic.id)	
        else
            # later
        end
    end

    def destroy
      @comment.destroy
      redirect_to topic_comments_path(@topic.id)	
    end

    private
    def comment_params
      params.require(:comment).permit(:body)
    end
    def set_topic
     @topic =Topic.find(params[:topic_id])
    end

    def set_comment
     @comment = @topic.comments.find(params[:id])
    end
end
