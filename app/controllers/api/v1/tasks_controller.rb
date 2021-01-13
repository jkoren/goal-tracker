class Api::V1::TasksController < ApplicationController
  before_action :authenticate_user!
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token, only: [:create, :update]
 
  before_action :authorize_user, except: [:index, :show, :create]
  before_action :set_task, only: [:show, :edit, :update, :destroy]

  # before_action :authenticate_user, except: [:index, :show]
  # before_action :authorize_user, except: [:index, :show, :create]



  # GET /tasks
  def index
    render json: Task.all.sort_by{ |a| a[:updated_at] }.reverse
    @tasks = Task.search(params[:search])
  end

  # GET /tasks/1
  def show
    render json: @task
  end
  
  # POST /tasks
  def create
    @task = Task.new(task_params)
    @task.user = current_user
    @time_int = task_params["task_starts_at"]
    @task.task_starts_at = @time_int.to_datetime

    if @task.save
      flash[:notice] = 'Task was successfully created.'
      render json: @task
    else
      render json: :new
    end
  end

  # PATCH/PUT /tasks/1
  def update
    if @task.update(task_params)
      redirect_to @tasks, notice: 'Task was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /tasks/1
  def destroy
    @task.destroy
    redirect_to tasks_url, notice: 'Task was successfully destroyed.'
  end

 
  
 

def authorize_user
  if !user_signed_in? 
    render json: {error: ["Only admins have access to this feature"]}
  end
end



  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = Task.find(params[:id])
    end

    def authenticate_user
      if !user_signed_in?
        render json: {error: ["You need to be signed in first"]}
    end
  end

    # Only allow a trusted parameter "white list" through.
    def task_params
      params.require(:task).permit(:title, :body, :task_starts_at, :timer_starts_at, :time_worked, :status, :search)
    end
end
