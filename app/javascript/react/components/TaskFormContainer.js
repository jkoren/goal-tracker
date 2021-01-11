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
        Starts At:
        <input type="datetime-local"    
          id="task_starts_at" 
          name="task_starts_at"
          onChange={handleChange}
          value={newTask.task_starts_at}
          />
      </label>

      <div>
        <input className="button" type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default TaskFormContainer