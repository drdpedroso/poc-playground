import ReactDOM from 'react-dom'
import React from 'react'
import Routes from './Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import SideBarSlideAlong from './components/common/SideBarSlideAlong'

ReactDOM.render(
  <Router>
    <SideBarSlideAlong>
      <Routes/>
    </SideBarSlideAlong>
  </Router>
  , document.getElementById('app'))
