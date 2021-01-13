import React, { useState, useEffect } from "react"

const TaskShow = (props) => {
  
    const [task, setTask] = useState({
      body:"",
      status:"",
      task_starts_at:"",
      time_worked:"",
      timer_starts_at:"",
      title:""

    })

    const id = props.match.params.id 

    useEffect(() => {
      fetch(`/api/v1/tasks/${id}`)
        .then (response => {
          if (response.ok) {
            return response
            } else {
              let errorMessage = `${response.status} (${response.statusText})`,
                error = new Error(errorMessage)
              throw error
            }
          })
          .then(response => response.json())
          .then(body => {
            setTask(body)
          })
          .catch(error => console.error(`Error in fetch: ${error.message}`))
        }, [])
        
      


  return(
    <>
    <div className="grid-x grid-margin-x">
      <div className = "medium-offset-1">
        <div className="medium-3 callout">
          
        </div>
      </div>
    </div>

    <div className="grid-x grid-margin-x">
      <div className="medium-offset-1 medium-6">
        <table>
          <thead>
            <tr>
              <th>TASK</th> 
             </tr>
            </thead>
          <tbody>
            {task.title}
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>BODY</th>
            </tr>
          </thead>
          <tbody>
            {task.body}
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {task.status}
          </tbody>
          <thead>
            <tr>
              <th>TASK STARTED AT</th>
            </tr>
          </thead>
          <tbody>
            {task.task_starts_at}
          </tbody>
          <thead>
            <tr>
              <th>TIME WORKED</th>
            </tr>
          </thead>
          <tbody>
            {task.time_worked}
          </tbody>
          <thead>
            <tr>
              <th>TIMER STARTS AT</th>
            </tr>
          </thead>
          <tbody>
            {task.timer_starts_at}
          </tbody>

        </table>
      </div>
    </div>
  </>
  )
}

export default TaskShow

