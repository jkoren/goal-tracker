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
  <div className="text-center"     
    style={{backgroundColor:backgroundColor}}>
    <div style={{color:color}}>  
              work</div>
  </div>
  the_work_div = (props.data.hashtag_work ? work_div : <></>)
  
  backgroundColor = "green"
  let the_health_div
  let health_div = 
  <div className="text-center"     
  style={{backgroundColor:backgroundColor}}>
      <div style={{color:color}}>  
        health
      </div>
    </div>
  the_health_div = (props.data.hashtag_health ? health_div : <></>)
  
  backgroundColor = "red"
  let the_education_div
  let education_div = 
  <div className="text-center"     
  style={{backgroundColor:backgroundColor}}>
    <div style={{color:color}}>  
              education</div>
  </div>
  the_education_div = (props.data.hashtag_education ? education_div : <></>)
  
    
  backgroundColor = "blue"
  let the_free_time_div
  let free_time_div = 
    <div className="text-center"     
      style={{backgroundColor:backgroundColor}}>
      <div style={{color:color}}>  
                free_time</div>
    </div>
    the_free_time_div = (props.data.hashtag_free_time ? free_time_div : <></>)

  let stopwatchTile
  if (props.data.status == "In Progress") { 
    // stopwatchTile = (<i class="fas fa-stopwatch fa-2x" onClick={handleStopwatchClick}></i>)
    stopwatchTile = (<i class="fas fa-stopwatch fa-2x"></i>)
  } else {
    stopwatchTile = (<br></br>)
  }

  // this is set up in case want to move hashtags to separate table in future.  this will allow users to create their own hashtags and choose the color.
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
  // take off final "z" - this is not UTC time - this time is local to the user
  let started = new Date(props.data.task_starts_at.slice(0, 23))
  let diffTime = now - started
  let diffHours = Math.ceil(diffTime / (1000 * 60 * 60))
  let diffDays = Math.floor(diffHours / 24)

  // format start date for tile
  var year = started.getFullYear();
  var month = started.getMonth() + 1;
  var day = started.getDate();
  var hours = started.getHours();
  var minutes = started.getMinutes();
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
  let formattedStart = month + '/' + day + '/' + year + "  " + hours + ":" + minutes

  let elapsedDiv
  if (diffTime < 0) {
    elapsedDiv = (<div> To be started: {formattedStart} </div>)
  } else {
    elapsedDiv = (<div> Elapsed: {diffDays} days ({diffHours} hrs) </div>)
  }

  return(
    <div className="cell callout box-shadow hover-zoom">
      <div className = "to-do">
        Goal: 
        <Link to={`tasks/${props.data.id}`} className="normal-size">
          {props.data.title} <br></br>
        </Link>
        <div className="grid-x">
          <div className="cell medium-6">
            {elapsedDiv}
          </div>
          <div className="cell medium-6">
            Effort: {props.data.time_worked} mins
          </div>
          <div className="cell">
            {stopwatchTile}
          </div>
        </div>
        <div className = "grid-x">
          <div className = "medium-4">
            {/* {hashtagTiles} */}
            {the_work_div}
            {the_health_div}
            {the_education_div}
            {the_free_time_div}
          </div>
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