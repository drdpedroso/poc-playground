import React from 'react'
import { Route } from 'react-router-dom'
import App from './App'
import * as Orders from './scenes/Orders'

const Routes = () => (
  <div>
    <Route exac path='/' component={App}/>
    <Route path='/leke/' component={Orders.MyOrders}/>
  </div>
)

export default Routes