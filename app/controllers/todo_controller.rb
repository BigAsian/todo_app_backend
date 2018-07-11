class TodoController < ApplicationController
    def index
    end
    def show
        @description="Sleep"
        @time=8
        
        @todo=Todo.find_by_id(params[:id])
        
        todo_id=params[:id]
    end
    def new
    end
    def create
        t=Todo.new
        t.description=params['description']
        t.time_estimate=params['time_estimate']
        t.save
        redirect_to"/todo/show/#{t.id}"
    end
end