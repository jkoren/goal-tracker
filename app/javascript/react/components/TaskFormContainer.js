import React, { useState } from "react"

const TaskFormContainer = (props) => {
  const [newTask, setNewTask] = useState({
    task_name: "",
    description: ""
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
        task_name: "",
        description: ""
      });
    // }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        To Do:
        <input
          name="task_name"
          id="task_name"
          type="text"
          onChange={handleChange}
          value={newTask.task_name}
        />
      </label>
      <label>
        Description:
        <textarea 
          name="description" 
          id="description"
          rows="3"
          onChange={handleChange}
          value={newTask.description}>
        </textarea>
      </label>
      <div>
        <input className="button" type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default TaskFormContainer