import React from "react"
import { Link } from 'react-router-dom'

const TaskTile = (props) =>{
  return(
    <div className="cell callout">
       <Link to={`tasks/${props.data.id}`} >
         {props.data.title} <br></br>
         {props.data.status}
      </Link>
    </div>
  )
}


export default TaskTile