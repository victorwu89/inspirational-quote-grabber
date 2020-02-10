import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { GrabQuote } from '../pages'
//Make a new file specifically for routes
import '../style/index.css'

class App extends Component{

  render() {
    return (
      <div className="quote-container">
        <Router>
            <Switch>
                <Route path="/quote/list" exact component={GrabQuote} />
            </Switch>
        </Router>
      </div>
    )
  }
}

export default App
