import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

const UpdateTask = (props) => {
  let defaultFields = {
    title: "",
    body: "",
    task_starts_at: "",
    timer_starts_at: "",
    time_worked: "",
    status: "",
    hashtags: [],
    hashtag_work: "",
    hashtag_health: "", 
    hashtag_education: "", 
    hashtag_free_time: "",
  };

  const [updatedTask, setUpdatedTask] = useState(defaultFields)
  const [shouldRedirect, setShouldRedirect] = useState(false)
  let id = props.match.params.id

  useEffect(() => {
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
      setUpdatedTask(body.task)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, []);

  const onClickUpdate = event => {
    // event.preventDefault()
    let id = props.match.params.id
    fetch(`/api/v1/tasks/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updatedTask),
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
      if (!body.error) {
        setShouldRedirect(true)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  };

  const inputChangeHandler = (event) => {
    setUpdatedTask({
      ...updatedTask,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    onClickUpdate(onClickUpdate);
  }

  const handleStatusChange = event => {
    setUpdatedTask({
      ...updatedTask,
      status: event.currentTarget.value
    });
  }
  const handleCheckboxChange = event => {
    debugger
    setUpdatedTask({
      ...updatedTask,
      [event.currentTarget.name]: (event.currentTarget.value === "on")
    });
  }
  
  // convert time to format expected by html datetime-local
  let convertedTaskStartsAt
  debugger
  convertedTaskStartsAt = updatedTask.task_starts_at.slice(0,16)

  let page
  if (shouldRedirect) {
    page = <Redirect to='/tasks' />
  } else {
    page = (
      <form onSubmit={handleSubmit}>
        <h3>Update Task</h3>
        <div>
          <label>
            To Do:
            <input
              name="title"
              id="title"
              type="text"
              onChange={inputChangeHandler}
              value={updatedTask.title}
              required
            />
          </label>
          <label>
            Description:
            <textarea 
              name="body" 
              id="body"
              rows="3"
              onChange={inputChangeHandler}
              value={updatedTask.body}>
            </textarea>
          </label>
        </div>

        <div className="medium-4 text-center">
          <label>
            Status:
            <div className="radio">
              <label>
                <input 
                  type="radio" 
                  value="To Do"
                  checked={updatedTask.status === "To Do"} 
                  onChange={handleStatusChange}
                />
                To do
              </label>
            </div>
            <div className="radio">
              <label>
                <input 
                  type="radio" 
                  value="In Progress"
                  checked={updatedTask.status == "In Progress"} 
                  onChange={handleStatusChange}
                />
                In Progress
              </label>
            </div>
            <div className="radio">
              <label>
                <input 
                  type="radio" 
                  value="Completed"
                  checked={updatedTask.status == "Completed"}  
                  onChange={handleStatusChange}
                />
                Completed
              </label>
            </div>
          </label>
        </div>

        <div className="medium-4">
          <label>
            Starts At:
            <input type="datetime-local"    
              id="task_starts_at" 
              name="task_starts_at"
              onChange={inputChangeHandler}
              value={convertedTaskStartsAt}
              required
              />
          </label>
          <label>
            Hashtags:
            <br></br>
    
            <input
              type="checkbox"
              checked={updatedTask.hashtag_work}
              id="hashtag_work"
              onChange={handleCheckboxChange}
              name="hashtag_work"
            />
            <label htmlFor="hashtag_work">
              work
              </label>
            <br></br>

            <input
              type="checkbox"
              checked={updatedTask.hashtag_health}
              id="hashtag_health"
              onChange={handleCheckboxChange}
              name="hashtag_health" />
            <label htmlFor="hashtag_health">
              health
              </label>
            <br></br>

            <input
              type="checkbox"
              checked={updatedTask.hashtag_education}
              id="hashtag_education"
              onChange={handleCheckboxChange}
              name="hashtag_education" />
            <label htmlFor="hashtag_education">
              education
              </label>
            <br></br>

            <input
              type="checkbox"
              checked={updatedTask.hashtag_free_time}
              id="hashtag_free_time"
              onChange={handleCheckboxChange}
              name="hashtag_free_time" />
            <label htmlFor="hashtag_free_time">
              free time
              </label>
            <br></br>

          </label>
          <div className="grid-x grid-margin-x align-center">
           
            <input
              className="button cell shrink"
              type="submit"
              value="Save Task"
            />
           
            <button
              className="button cell shrink"
              type="button"
              onClick={props.onDiscardClickHandler}
            >
              Discard Changes
            </button>
          </div>
        </div>
      </form>
    );
  }

  return page
};

  

export default UpdateTask;
