class SubsController < ApplicationController
    before_action :set_sub, only: [:show, :update, :edit, :destroy]

    def index
        @subs = Sub.all
        render component: "Subs", props: {subs: @subs, yo: 'yo here'}
    end

    def show
        # @sub = Sub.find(params[:id]) done in before-action
        render component: "Sub", props: {sub: @sub}
    end

    def edit
        # @sub = Sub.find(params[:id]) done in before-action
        render component: "SubEdit", props: {sub: @sub}
    end
    def update
     # @sub = Sub.find(params[:id]) done in before-action
     if @sub.update(sub_params)
        redirect_to root_path
     else
         # didn't update to db, deal with this later
     end
    end

    def new
        render component: "SubNew"
    end

    def create
        @sub = Sub.new(sub_params)
        if(@sub.save)
            redirect_to root_path
        else
            # didn't save to db, deal with this later
        end 
    end

    def destroy
        # @sub = Sub.find(params[:id]) done in before-action
      @sub.destroy
      redirect_to root_path
    end

    def all
       comments = Comment.all
       topics = Comment.all
       subs = Sub.all
       sum = 1 + 1
       render component: "All", props:{comments: comments, topics:topics, subs:subs, sum:sum }
    end

    def tacos
        render component: "Subs"
    end

    private

    def set_sub
      @sub = Sub.find(params[:id])
    end

    def sub_params
        params.require(:sub).permit(:name)
    end
end
