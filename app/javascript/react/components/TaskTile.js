import React from "react"

const TaskTile = (props) =>{
  return(
      <tr>
        <td>{props.data.title}</td>
        {props.data.status}
      </tr>
  )
}

export default TaskTile