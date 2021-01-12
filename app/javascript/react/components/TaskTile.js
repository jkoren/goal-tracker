import React from "react"

const TaskTile = (props) =>{
  return(
      <div className="cell callout">
        {props.data.title} <br></br>
        {props.data.status}
      </div>
  )
}

export default TaskTile