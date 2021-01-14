import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import TaskIndexPage from './TaskIndexPage'
import TaskShow from './TaskShow'
import DestroyTask from './DestroyTask'
import UpdateTask from './UpdateTask'

export const App = (props) => {
  return (
    <div className="web-site-meat">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TaskIndexPage}/>
          <Route exact path="/tasks" component={TaskIndexPage}/>
          <Route exact path="/tasks/:id" component={TaskShow} />
          <Route exact path="/tasks/:id/destroy" component={DestroyTask} />
          <Route exact path="/tasks/:id/edit" component={UpdateTask} />
        </Switch>
      </BrowserRouter>
    </div>
    )

}

export default App