import React, { useState } from "react"

const TaskFormContainer = (props) => {
  const [newTask, setNewTask] = useState({
    title: "",
    body: "",
    task_starts_at: Date.now()
  });
  
  const handleChange = event => {
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
      task_starts_at: Date.now()
    });
    // }
  };
  
  return (
    <form onSubmit={handleSubmit}>
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


      <label>
        Status:
        <div className="radio">
          <label>
            <input 
              type="radio" 
              value="1" 
              checked={true} 
              onChange={handleChange}
              value={newTask.status}
            />
            To do
          </label>
        </div>
        <div className="radio">
          <label>
            <input 
              type="radio" 
              value="2"
              onChange={handleChange}
              value={newTask.status}
            />
            Doing
          </label>
        </div>
        <div className="radio">
          <label>
            <input 
              type="radio" 
              value="3" 
              onChange={handleChange}
              value={newTask.status}
            />
            Done
          </label>
        </div>
      </label>

      <label>
        Starts At:
        <input type="datetime-local"    
          id="task_starts_at" 
          name="task_starts_at"
          required>
        </input>
      </label>
      
      <div>
        <input className="button" type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default TaskFormContainer