import React from "react"
import { Link } from 'react-router-dom'

const TaskTile = (props) =>{
  let textColor = "white"



  let tileStyle
  if (props.data.status == 1)  {tileStyle = "to-do"}
  else if (props.data.status == 2) {tileStyle = "in-progress"}
  else {tileStyle = "completed"}

  let stopwatchTile
  if (props.data.status == "In Progress") { 
    // stopwatchTile = (<i class="fas fa-stopwatch fa-2x" onClick={handleStopwatchClick}></i>)
    stopwatchTile = (<i class="fas fa-stopwatch fa-2x"></i>)
  } else {
    stopwatchTile = (<br></br>)
  }

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
        Goal: 
        <Link to={`tasks/${props.data.id}`} className="normal-size">
          {props.data.title} <br></br>
        </Link>
        <div className="grid-x">
          <div className="cell medium-6">
            {/* {props.data.status} */}
            Elapsed: {diffDays} days ({diffHours} hrs)
          </div>
          <div className="cell medium-6">
            Effort: {props.data.time_worked} mins
          </div>
          <div className="cell">
            {stopwatchTile}
          </div>

          <div>
          
        </div>
        </div>
        <div className = "grid-x">
          <p className = "medium-4">
            {hashtagTiles}
          </p>
        </div>
        <Link to={`tasks/${props.data.id}/edit`}>
          <i class="far fa-edit fa-1x"></i>
        </Link>
        <Link to={`tasks/${props.data.id}/destroy`}>
          <i class="far fa-trash-alt fa-1x"></i>
        </Link>
      </div>
    </div>
  )
}


export default TaskTile