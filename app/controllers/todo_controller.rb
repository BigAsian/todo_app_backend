class TodoController < ApplicationController
    def index
    end
    def show
        @description="Sleep"
        @time=8
        
        todo_id=params[:id]
        
        if todo_id=='1'
            @description="Wake up"
            @time=0.1
        elsif todo_id=='2'
            @description="Eat food"
            @time=1
        elsif todo_id=='3'
            @description="Perform cellular respiration"
            @time=24
        elsif todo_id=='4'
            @description="Exist"
            @time=24            
        elsif todo_id=='5'
            @description="Sleep"
            @time=8
        end
        #If user goes to
        #todo/show/3
        #@description will be
        #performing cellular respiration and
        #@time will be 24
        #
        #If user goes to
        #todo/show/1
        #@description will be
        #wake up and
        #@time will be .1
        #
        #If user goes to
        #todo/show/2
        #@description will be
        #eat food and
        #@time will be 1
    end
end