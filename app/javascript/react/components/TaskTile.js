import React from "react"
import { Link } from 'react-router-dom'

const TaskTile = (props) =>{
  return(
    <tr>
      <td>
        <Link to={`tasks/${props.data.id}`} >
          {props.data.title}
        </Link>
      </td>
      <td>{props.data.hashtag}</td>
    </tr>
  )
}


export default TaskTile