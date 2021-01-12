import React, { useState, useEffect } from "react"

const TaskShow = (props) => {
  debugger
    const [task, setTask] = useState([])

    const id = props.match.params.id 

    useEffect(() => {
        fetch(`api/1/scripts/${id}`)
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
    <div>
      This is the task show page
    </div>
  )
}

export default TaskShow