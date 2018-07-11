class TodoController < ApplicationController
    def index
    end
    def show
        @description="Sleep"
        @time=8
    end
end