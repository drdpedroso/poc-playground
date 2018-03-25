import React from 'react'
import { Route } from 'react-router-dom'
import App from './App'
import * as Orders from './scenes/Orders'

const Routes = () => (
  <div>
    <Route exac path='/' component={App} />
    <Route path='/orders/' component={Orders.MyOrders} />
    <Route path='/order/' component={Orders.OrderDetails} />
    <Route path='/order-history/' component={Orders.OrderHistory} />
  </div>
)

export default Routes
