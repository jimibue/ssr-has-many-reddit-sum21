class CommentsController < ApplicationController
    before_action :set_topic

    def index
      @comments = @topic.comments
      render component: "Comments", props: {topic: @topic, comments: @comments}
    end

    private
    def set_topic
     @topic =Topic.find(params[:topic_id])
    end
end
