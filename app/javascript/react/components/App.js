import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import TaskIndexPage from './TaskIndexPage'
import TaskShow from './TaskShow'

export const App = (props) => {
  return (
    <div className="web-site-meat">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TaskIndexPage}/>
          <Route exact path="/tasks" component={TaskIndexPage}/>
          <Route exact path="/tasks/:id" component={TaskShow} />
        </Switch>
      </BrowserRouter>
    </div>
    )

}

export default App