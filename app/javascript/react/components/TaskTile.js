import React from "react"
import { Link } from 'react-router-dom'

const TaskTile = (props) =>{
  let textColor = "white"
  // https://stackoverflow.com/questions/64256897/how-to-change-the-color-of-the-text-dynamically-in-react

  const hashtagTiles = props.data.hashtags.map((hashtag) => {
    return (
      <h6 className="text-center" style={{ backgroundColor: hashtag.color }}>
        <h6 style={{color:textColor}}>
        {hashtag.title}
        </h6>
      </h6>
    )
  })
  return(
    <div className="cell callout box-shadow hover-zoom ">
        <Link to={`tasks/${props.data.id}`} className="normal-size">
          {props.data.title} <br></br>
        </Link>
          {props.data.status}
          <div>{hashtagTiles}</div>
    </div>
  )
}


export default TaskTile