import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import TaskIndexPage from './TaskIndexPage'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={TaskIndexPage}/>
        {/* <Route exact path="/task" component={TaskIndexPage}/> */}
        <Route exact path="/tasks" component={TaskIndexPage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App