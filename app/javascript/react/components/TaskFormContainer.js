import React, { useState } from "react"

const TaskFormContainer = (props) => {
  const [newTask, setNewTask] = useState({
    title: "",
    body: ""
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
      body: ""
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
      <div>
        <input className="button" type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default TaskFormContainer