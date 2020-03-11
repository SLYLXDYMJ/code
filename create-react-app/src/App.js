import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from './store'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter basename={ process.env.PUBLIC_URL }>
        <Switch>
          <Route/>
          <Redirect/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default connect(App)