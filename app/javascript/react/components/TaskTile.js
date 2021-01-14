import React from "react"
import { Link } from 'react-router-dom'

const TaskTile = (props) =>{
  let textColor = "white"

  let tileStyle
  if (props.data.status == 1)  {tileStyle = "to-do"}
  else if (props.data.status == 2) {tileStyle = "in-progress"}
  else {tileStyle = "completed"}

  // if (props.data.status == 2) { 
  //   let stopwatchTile = <i class="fas fa-stopwatch fa-2x"></i>
  // } else {
  //   let stopwatchTile = ""
  // }

  const hashtagTiles = props.data.hashtags.map((hashtag) => {
    return (
      <h6 className="text-center" style={{ backgroundColor: hashtag.color }}>
        <h6 style={{color:textColor}}>
        {hashtag.title}
        </h6>
      </h6>
    )
    // https://stackoverflow.com/questions/64256897/how-to-change-the-color-of-the-text-dynamically-in-react
  })
  let now = new Date()
  let started = Date.parse(props.data.task_starts_at)
  let diffTime = Math.abs(now - started);
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  let diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
  // https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript

  return(
    <div className="cell callout box-shadow hover-zoom">
      <div className = "to-do">
        <Link to={`tasks/${props.data.id}`} className="normal-size">
          {props.data.title} <br></br>
        </Link>
        <div className="grid-x">
          <div className="cell medium-6">
            {props.data.status}
          </div>
          <div className="cell medium-6">
            Days since start:{diffDays} ({diffHours} hrs)
          </div>
          <div className="cell medium-6">
            <i class="fas fa-stopwatch fa-2x"></i>
          </div>
          <div className="cell medium-6">
            Hours worked: {diffHours}
          </div>
          <div>
          <Link to={`tasks/${props.data.id}/destroy`}>
        <button type="button" className="button alert">Delete Task</button>
          </Link>
        </div>
        </div>
        <div>{hashtagTiles}</div>

        
      </div>
    </div>
  )
}


export default TaskTile