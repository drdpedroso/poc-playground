import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
  } from 'react-router-dom'
  import App from './App'
  import OrdersPage from './containers/OrdersPage'

  const Routes = () => (
    <div>
      <Route exac path='/' component={App}/>
      <Route path='/leke/' component={OrdersPage}/>
    </div>
  )

  export default Routes