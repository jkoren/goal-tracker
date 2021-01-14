import React from 'react';

export default class UpdateTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',

    }
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    fetch(`/api/v1/tasks/${id}`).
      then((response) => response.json()).
      then((task) => this.setState({ ...task }));
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleStatusChange = event => {
    setNewTask({
      ...newTask,
      status: parseInt(event.currentTarget.value)
    });
  }

  updateTaskRequest = (event) => {
    fetch(`/api/v1/tasks/${this.state.id}`, {
      method: 'put',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      alert('Task updated successfully');
      location.href = '/';
    });
  }

  render() {
    const {title, body, } = this.state;
    return (
      <div>
        <h3>Edit Task</h3>
        <div>
         <label>
            To Do:
            <input
              name="title"
              id="title"
              type="text"
              onChange={this.handleChange}
              value={title}
              required
            />
          </label>
          <label>
            Description:
            <textarea 
              name="body" 
              id="body"
              rows="3"
              onChange={this.handleChange}
              value={body}>
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
                  value="1" 
                  checked={status === 1} 
                  onChange={this.handleStatusChange}
                />
                To do
              </label>
            </div>
            <div className="radio">
              <label>
                <input 
                  type="radio" 
                  value="2"
                  checked={status === 2} 
                  onChange={this.handleStatusChange}
                />
                In Progress
              </label>
            </div>
            <div className="radio">
              <label>
                <input 
                  type="radio" 
                  value="3"
                  checked={status === 3}  
                  onChange={this.handleStatusChange}
                />
                Completed
              </label>
            </div>
          </label>
        </div>

        <div className="medium-4">
          <label>
            Hashtags:
            <br></br>
            <input type="checkbox" id="hashtag1" name="hashtag1" value="work"/>
            <label for="hashtag1">work</label><br></br>
            <input type="checkbox" id="hashtag2" name="hashtag2" value="health"/>
            <label for="hashtag2">health</label><br></br>
            <input type="checkbox" id="hashtag3" name="hashtag3" value="education"/>
            <label for="hashtag3">education</label><br></br>
            <input type="checkbox" id="hashtag4" name="hashtag4" value="free time"/>
            <label for="hashtag4">free time</label><br></br>
          </label>
        </div>
        <button onClick={this.updateTaskRequest}>Update</button>
      </div>
    );
  }
}