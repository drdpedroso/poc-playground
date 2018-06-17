import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'

ReactDOM.render(
  <Router>
    <Routes />
  </Router>
  , document.getElementById('app'),
)
