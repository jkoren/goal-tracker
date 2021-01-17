import React, { useState, useEffect } from "react"

const TaskShow = (props) => {
  
    const [task, setTask] = useState({
      body:"",
      status:"",
      task_starts_at:"",
      time_worked:"",
      timer_starts_at:"",
      title:"",
      hashtag_work: "off", 
      hashtag_health: "off", hashtag_education: "off", hashtag_free_time: "off",
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
          
  var date = new Date(task.task_starts_at.slice(0, 23))
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
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  var formattedStart = month + '/' + day + '/' + year + "  " + hours + ":" + minutes

  let now = new Date()
  let started = date
  let diffTime = now - started
  let diffHours = Math.ceil(diffTime / (1000 * 60 * 60))
  let diffDays = Math.floor(diffHours / 24)

  let elapsedDiv
  if (diffTime < 0) {
    elapsedDiv = (<div> To be started: {formattedStart} </div>)
  } else {
    elapsedDiv = (<div> Elapsed: {diffDays} days ({diffHours} hrs) </div>)
  }

  return(
    <>
      <div className="grid-x grid-margin-x">
        <div className="medium-offset-1 medium-6">
          <h4>Goal: {task.title}</h4>
          <h5>{task.body}</h5>
          <h5>Status: {task.status}</h5>
          <h5>Task start time: {formattedStart}</h5>
          <h5>Days since start: {diffDays} ({diffHours} hours)</h5>
          <h5>{elapsedDiv}</h5>
        </div>
      </div>
    </>
  )
}

export default TaskShow

