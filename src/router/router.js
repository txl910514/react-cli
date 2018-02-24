import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import Layout from '@/views/Layout'
import App from '@/views/Layout'

class RouteMap extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </Router>
    )
  }
}

export default RouteMap
