import React from "react"
import { Link } from 'react-router-dom'

const TaskTile = (props) =>{
  let textColor = "white"

// this needs to be fixed and put in one for each hashtag 
let color = "white"
let backgroundColor

backgroundColor = "purple"
let the_work_div
let work_div = 
  <h6 className="text-center"     
    style={{backgroundColor:backgroundColor}}>
    <h6 style={{color:color}}>  
              work</h6>
  </h6>
  the_work_div = (props.data.hashtag_work ? work_div : <></>)
  
  backgroundColor = "green"
  let the_health_div
  let health_div = 
  <h6 className="text-center"     
  style={{backgroundColor:backgroundColor}}>
      <h6 style={{color:color}}>  
        health
      </h6>
    </h6>
  the_health_div = (props.data.hashtag_health ? health_div : <></>)
  
  backgroundColor = "red"
  let the_education_div
  let education_div = 
  <h6 className="text-center"     
  style={{backgroundColor:backgroundColor}}>
    <h6 style={{color:color}}>  
              education</h6>
  </h6>
  the_education_div = (props.data.hashtag_education ? education_div : <></>)
  
    
  backgroundColor = "blue"
  let the_free_time_div
  let free_time_div = 
    <h6 className="text-center"     
      style={{backgroundColor:backgroundColor}}>
      <h6 style={{color:color}}>  
                free_time</h6>
    </h6>
    the_free_time_div = (props.data.hashtag_free_time ? free_time_div : <></>)

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
            Elapsed: {diffDays} days ({diffHours} hrs)
          </div>
          <div className="cell medium-6">
            Effort: {props.data.time_worked} mins
          </div>
          <div className="cell">
            {stopwatchTile}
          </div>
        </div>
        <div className = "grid-x">
          <p className = "medium-4">
            {/* {hashtagTiles} */}
            {the_work_div}
            {the_health_div}
            {the_education_div}
            {the_free_time_div}
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