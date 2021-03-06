import React, { useState } from "react"

const TaskFormContainer = (props) => {
  const [newTask, setNewTask] = useState({
    title: "",
    body: "",
    task_starts_at: Date.now(),
    timer_starts_at: Date.now(),
    time_worked: 0,
    hashtag_work: "off", 
    hashtag_health: "off", hashtag_education: "off",hashtag_free_time: "off",
    status: 1,
    hashtags: []
  });
  
  const handleChange = event => {
    // debugger
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
      hashtag_work: "off", 
      hashtag_health: "off", hashtag_education: "off", hashtag_free_time: "off",
      status: 1,
      hashtags: []
    });
    location.reload();
  };

  // let work_checked
  // let health_checked
  // let education_checked
  // let free_time_checked
  // work_checked = (newTask.hashtag_work ==="on" ? "checked" : "")
  // health_checked = (newTask.hashtag_health ==="on" ? "checked" : "")
  // education_checked = (newTask.hashtag_education ==="on" ? "checked" : "")
  // free_time_checked = (newTask.hashtag_free_time ==="on" ? "checked" : "")

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
            <input 
              type="checkbox"
              // {work_checked}
              id="hashtag_work" 
              onChange={handleChange} 
              name="hashtag_work"/>
              <label  htmlFor="hashtag_work">
                work
              </label>
            <br></br>
            
            <input 
              type="checkbox"
              // {health_checked}
              id="hashtag_health" 
              onChange={handleChange} 
              name="hashtag_health"/>
              <label  htmlFor="hashtag_health">
                health
              </label>
            <br></br>
            
            <input 
              type="checkbox"
              // {education_checked}
              id="hashtag_education" 
              onChange={handleChange} 
              name="hashtag_education"/>
              <label  htmlFor="hashtag_education">
                education
              </label>
            <br></br>
            
            <input 
              type="checkbox"
              // {free_time_checked}
              id="hashtag_free_time" 
              onChange={handleChange} name="hashtag_free_time"/>
              <label  htmlFor="hashtag_free_time">
                free time
              </label>
            <br></br>
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