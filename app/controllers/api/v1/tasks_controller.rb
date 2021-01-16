class Api::V1::TasksController < ApplicationController
  # before_action :authenticate_user!
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token, only: [:create, :update]

  # GET /tasks
  def index
    tasks = current_user.tasks
    tasks = tasks.sort_by{ |a| a[:created_at] }.reverse
    render json: tasks, each_serializer: TaskSerializer
  end

  # GET /tasks/1
  def show
    tasks = Task.find(params[:id])
    render json: tasks, serializer: TaskSerializer
  end

  def search
    @term = params[:term].downcase
    tasks = Task.all
    selectedTasks = []
    tasks.each do | task |
      found = false
      found = task.title.downcase.include?(@term)
      if !found
        task.hashtags.each do | hashtag |
          if !found
            found = hashtag.title.downcase.include?(@term)
          end
        end
      end
      if found
        selectedTasks << task
      end
    end
    if !selectedTasks.empty?
      render json: selectedTasks
    else
      # what to do if empty
      render json: ["no match"]
    end
  end

  # POST /tasks
  def create
    # binding.pry #create
    revised_params = task_params
    # revised_params["status"] = task_num

    # converting HTML on/off to boolean
    revised_params["hashtag_work"] = (task_params["hashtag_work"] == "on")
    revised_params["hashtag_health"] = (task_params["hashtag_health"] == "on")
    revised_params["hashtag_education"] = (task_params["hashtag_education"] == "on")
    revised_params["hashtag_free_time"] = (task_params["hashtag_free_time"] == "on")
    # converting json time to ruby time format
    revised_params["task_starts_at"] = task_params["task_starts_at"].to_datetime
    
    task = Task.new(revised_params)
    task.user = current_user
    
    if task.save
      flash[:notice] = 'Task was successfully created.'
      render json: task
    else 
      render json: task, status: :error
      # https://medium.com/rails-ember-beyond/error-handling-in-rails-the-modular-way-9afcddd2fe1b
      
      # render json: {status: "error", code: 3000, message: "User is not logged in"}
      # https://www.thegreatcodeadventure.com/rails-api-painless-error-handling-and-rendering-2/
    end
  end

  # PATCH/PUT /tasks/1
  def update
    task = Task.find_by(id: params[:id])
    # rails update needs to have process as value, not text
    if task_params["status"]  == "To Do"
      task_num = 1
    elsif task_params["status"]  == "In Progress"
      task_num = 2
    else
      task_num = 3
    end

    # binding.pry #edit
    # work_hash = task_params["hashtag_work"] == "on"
    # health_hash = task_params["hashtag_health"] == "on"
    # education_hash = task_params["hashtag_education"] == "on"
    # free_time_hash = task_params["hashtag_free_time"] == "on"

    revised_params = task_params
    revised_params["status"] = task_num
    # revised_params["hashtag_work"] = work_hash
    # revised_params["hashtag_health"] = health_hash
    # revised_params["hashtag_education"] = education_hash
    # revised_params["hashtag_free_time"] = free_time_hash
 
    if task.update(revised_params)
      render json: {status: "updated successfully"}
    else
      render json: {error: "update failed"}
    end
  end

  # DELETE /tasks/1
  def destroy
    task = Task.find(params[:id])
    if task.destroy
      render json: {destroyed: true}
    end   
  end

end

def authorize_user
  if !user_signed_in? 
    render json: {error: ["Only admins have access to this feature"]}
  end
end

private
  # Use callbacks to share common setup or constraints between actions.

  def authenticate_user
    if !user_signed_in?
      render json: {error: ["You need to be signed in first"]}
    end
  end

    # Only allow a trusted parameter "white list" through.
    def task_params
      params.require(:task).permit(:id, :title, :body, :task_starts_at, :timer_starts_at, :time_worked, :status, :hashtag_work, :hashtag_health, :hashtag_education, :hashtag_free_time, :search)
    end
