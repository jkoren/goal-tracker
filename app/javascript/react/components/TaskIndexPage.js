import React, { useState, useEffect } from "react"
import TaskFormContainer from './TaskFormContainer'
import TaskTile from './TaskTile'

const TaskIndexPage = (props) => {
  const [tasks, setTasks] = useState([])

    useEffect(() => {
      fetch("api/v1/tasks")
      .then(response => {
        if(response.ok){
          return response
        } else{
          let errorMessage = `${response.status}(${response.statusText})`,
          error = new Error(errorMessage)
          throw(error)
        }
      })
      .then(response => {
        return response.json()
      })
      .then(body => {
        setTasks(body)
      }).catch(error => console.error(`Error in fetch: ${error.message}`))
    }, [])

  const addNewTask = (formData) => {
    fetch(`api/v1/tasks`, {
      method: 'POST',
      body: JSON.stringify(formData),
      credentials: 'same-origin',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      setTasks([
        ...tasks, 
        body,
      ]);
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
};

  const taskTiles = tasks.map((task) => {
    return(
      <TaskTile
        key={task.id} 
        id={task.id}
        title={task.title}
        body={task.body}
      />
    )
  })

  return(
    <div>
      <TaskFormContainer addNewTask={addNewTask} />
        {taskTiles}
    </div>
  )
}

export default TaskIndexPage