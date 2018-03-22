import React from 'react'
import graphql from 'react-apollo/graphql'
import { AllOrder } from './api'

export class MyOrders extends React.PureComponent {
  render () {
    return (
      <div>Leke2222</div>
    )
  }
}

const MyOrdersHOC = graphql(AllOrder, {
  options: ({filter, userToken}) => ({
    variables: {
      filter: {'status': null, 'deliveryType': 'AGENDAR'},
      userToken: ''
    }
  })
})(MyOrders)

export default MyOrdersHOC
