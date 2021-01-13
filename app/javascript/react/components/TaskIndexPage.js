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
        setTasks(body.tasks)
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
      <div>
        <TaskTile
          key={task.id} 
          data={task}
        />
      </div>
    )
  })

  return(
    <div>
      <div className="grid-x grid-margin-x">
        <div className="show-callout">
          <div className = "medium-offset-1">
            <div className="medium-3 callout">
              <TaskFormContainer addNewTask={addNewTask} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid-x grid-margin-x">
        <div>
          <div className="text-center cell medium-3">
            <table>
              <thead>
                <tr>
                  <th>To Do:</th>
                </tr>
              </thead>
              <tbody>
                {taskTiles}
              </tbody>
            </table>
          </div>
          <div className="cell medium-3 text-center">
            <table>
              <thead>
                <tr>
                  <th>In Progress:</th>
                </tr>
              </thead>
              <tbody>
                {taskTiles}
              </tbody>
            </table>
          </div>
          <div className="cell medium-3 text-center">
            <table>
              <thead>
                <tr>
                  <th>Completed:</th>
                </tr>
              </thead>
              <tbody>
                {taskTiles}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskIndexPage