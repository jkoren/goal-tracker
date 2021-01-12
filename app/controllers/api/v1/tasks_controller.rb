class Api::V1::TasksController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token, only: [:create, :update]
  before_action :set_task, only: [:show, :edit, :update, :destroy]

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

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = Task.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def task_params
      params.require(:task).permit(:title, :body, :task_starts_at, :timer_starts_at, :time_worked, :status, :search)
    end
end
