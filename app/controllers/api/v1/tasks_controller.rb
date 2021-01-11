class Api::V1::TasksController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token, only: [:create, :update]
  before_action :set_task, only: [:show, :edit, :update, :destroy]

  # GET /tasks
  def index
    @tasks = Task.all
    render json: @tasks
  end

  # GET /tasks/1
  def show
    @task = Task.find(params[:id])
    render :show
    
  end

  # GET /tasks/new
  def new
    @task = Task.new
  end
  
  # GET /tasks/1/edit
  def edit
  end
  
  # POST /tasks
  def create
    @task = Task.new(task_params)
    @task.user = current_user
    # @task.task_starts_at = DateTime.now # this is required.  do we want it in the form so that it can be over-written for future tasks?
    # binding.pry

    if @task.save
      flash[:notice] = 'Task was successfully created.'
      redirect_to @task
    else
      render :new
    end
  end

  # PATCH/PUT /tasks/1
  def update
    if @task.update(task_params)
      redirect_to @task, notice: 'Task was successfully updated.'
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
      params.permit(:title, :body, :task_starts_at, :timer_starts_at, :time_worked, :status)
    end
end
