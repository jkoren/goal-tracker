import React, { useState } from "react"

const TaskFormContainer = (props) => {
  const [newTask, setNewTask] = useState({
    title: "",
    body: "",
    task_starts_at: Date.now(),
    timer_starts_at: Date.now(),
    time_worked: 0,
    status: 0,
    hashtags: []
  });
  
  const handleChange = event => {
    debugger // need to work on radio button
    setNewTask({
      ...newTask,
      [event.currentTarget.name]: event.currentTarget.value
    });
  };
  
  const handleSubmit = event => {
    event.preventDefault();
    props.addNewTask(newTask);
    setNewTask({
      title: "",
      body: "",
      task_starts_at: Date.now(),
      timer_starts_at: Date.now(),
      time_worked: 0,
      status: 0,
      hashtags: []
    });
    // }
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
                  value="To Do" 
                  checked={newTask.status === "To Do"} 
                  onChange={handleChange}
                />
                To do
              </label>
            </div>
            <div className="radio">
              <label>
                <input 
                  type="radio" 
                  value="In Progress"
                  checked={newTask.status === "In Progress"} 
                  onChange={handleChange}
                />
                In Progress
              </label>
            </div>
            <div className="radio">
              <label>
                <input 
                  type="radio" 
                  value="Completed"
                  checked={newTask.status === "Completed"}  
                  onChange={handleChange}
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
              />
          </label>
          <label>
            Hashtags:
            <input type="text"
              id="hashtag"
              name="hashtag"
              onChange={handleChange}
              value={newTask.hashtag}
            />
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