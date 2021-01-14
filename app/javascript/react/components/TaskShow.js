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
            setTask(body.task)
          })
          .catch(error => console.error(`Error in fetch: ${error.message}`))
        }, [])
        
      
  var date = new Date(task.task_starts_at);

  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }
  var formattedDate = month + '/' + day + '/' + year + "  " + hours + ":" + minutes

  let now = new Date()
  let started = Date.parse(task.task_starts_at)
  let diffTime = Math.abs(now - started);
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  let diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
  return(
    <>

    <div className="grid-x grid-margin-x">
      <div className="medium-offset-1 medium-6">
        <h4>Goal: {task.title}</h4>
        <h5>{task.body}</h5>
        <h5>Status: {task.status}</h5>
        <h5>Task start time: {formattedDate}</h5>
        <h5>Days since start: {diffDays} ({diffHours} hours)</h5>
        <h5>Minutes worked: {task.time_worked}</h5>
      </div>
    </div>
  </>
  )
}

export default TaskShow

