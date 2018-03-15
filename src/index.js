import App from './App'
import ReactDOM from 'react-dom'
import React from 'react'
import Routes from './Routes'
import createBrowserHistory from 'history/createBrowserHistory'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
  } from 'react-router-dom'
import OrdersPage from './containers/OrdersPage'
import SideBarSlideAlong from './components/common/SideBarSlideAlong'

ReactDOM.render(
    <Router>
        <SideBarSlideAlong>
            <Routes />
        </SideBarSlideAlong>
    </Router>
, document.getElementById('app'))
