import React, { useEffect, useState } from 'react'
import { Redirect } from "react-router-dom"

const DestroyTask = (props) => {
  debugger
  const [currentTask, setCurrentTask] = useState({})
  const [shouldRedirect, setShouldRedirect] = useState(false)

  useEffect(() => {
    let id = props.match.params.id
    fetch(`/api/v1/tasks/${id}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Errror(errorMessage)
        throw error
      }
    })
    .then(body => {
      setCurrentTask(body.task)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, []);

    const onClickDelete = event => {
      event.preventDefault()
      let id = props.match.params.id
        fetch(`/api/v1/tasks/${id}`, {
        method: 'DELETE',
        body: JSON.stringify(),
        credentials: 'same-origin',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        if (body.errors) {
          // handle errors
        } else {
          setShouldRedirect(true)
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    };
    const onClickCancel = event => {
      event.preventDefault()
      setShouldRedirect(true)
    }

      if (shouldRedirect) {
        return <Redirect to='/Tasks' />
      }
    
      return (
        <div className='grid-container wrapper'>
          <h4>Are you sure you want to delete?  This CAN NOT be undone and you will lose the Task and all the data with it. {currentTask.name}</h4>
          <div className='button-group'>
              <input onClick={onClickDelete} className='button alert' type='submit' value='Delete Task' />
              <input onClick={onClickCancel} className='button' type='button' value='Cancel' />
            </div>
        </div>
      )
    }

export default DestroyTask
