import React, { useState } from "react"

const TaskFormContainer = (props) => {
  const [newTask, setNewTask] = useState({
    title: "",
    body: "",
    task_starts_at: Date.now(),
    timer_starts_at: Date.now(),
    time_worked: 0,
    status: 1,
    hashtags: []
  });
  
  const handleChange = event => {
    setNewTask({
      ...newTask,
      [event.currentTarget.name]: event.currentTarget.value
    });
  };

  const handleStatusChange = event => {
    setNewTask({
      ...newTask,
      status: parseInt(event.currentTarget.value)
    });
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.addNewTask(newTask);
    setNewTask({
      title: "",
      body: "",
      task_starts_at: Date.now(),
      timer_starts_at: Date.now(),
      time_worked: 0,
      status: 1,
      hashtags: []
    });
  };

  return (
    <form onSubmit={handleSubmit} className="new-task-form callout">
      <div className = "grid-x">

        <div className="medium-4">
          <label>
            To Do:
            <input
              name="title"
              id="title"
              type="text"
              onChange={handleChange}
              value={newTask.title}
              required
            />
          </label>
          <label>
            Description:
            <textarea 
              name="body" 
              id="body"
              rows="3"
              onChange={handleChange}
              value={newTask.body}>
            </textarea>
          </label>
        </div>

        <div className="medium-4 text-center">
          <label>
            Status:
            <div className="radio">
              <label>
                <input 
                  type="radio" 
                  value="1" 
                  checked={newTask.status === 1} 
                  onChange={handleStatusChange}
                />
                To do
              </label>
            </div>
            <div className="radio">
              <label>
                <input 
                  type="radio" 
                  value="2"
                  checked={newTask.status === 2} 
                  onChange={handleStatusChange}
                />
                In Progress
              </label>
            </div>
            <div className="radio">
              <label>
                <input 
                  type="radio" 
                  value="3"
                  checked={newTask.status === 3}  
                  onChange={handleStatusChange}
                />
                Completed
              </label>
            </div>
          </label>
        </div>

        <div className="medium-4">
          <label>
            Starts At:
            <input type="datetime-local"    
              id="task_starts_at" 
              name="task_starts_at"
              onChange={handleChange}
              value={newTask.task_starts_at}
              required
              />
          </label>
          <label>
            Hashtags:
            <br></br>
            <input type="checkbox" id="hashtag1" name="hashtag1" value="work"/>
            <label for="hashtag1">work</label><br></br>
            <input type="checkbox" id="hashtag2" name="hashtag2" value="health"/>
            <label for="hashtag2">health</label><br></br>
            <input type="checkbox" id="hashtag3" name="hashtag3" value="education"/>
            <label for="hashtag3">education</label><br></br>
            <input type="checkbox" id="hashtag4" name="hashtag4" value="free time"/>
            <label for="hashtag4">free time</label><br></br>
          </label>

        </div>
      </div>
      
      <div className="text-center">
        <input className="button" type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default TaskFormContainer