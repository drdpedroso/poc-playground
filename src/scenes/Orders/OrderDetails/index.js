import React from 'react'
import graphql from 'react-apollo/graphql'
import { AllOrder } from './api'

export class OrderDetails extends React.PureComponent {
  render () {
    return (
      <div>Leke2222</div>
    )
  }
}

const OrderDetailsHOC = graphql(AllOrder, {
  options: ({filter, userToken}) => ({
    variables: {
      filter: {'status': null, 'deliveryType': 'AGENDAR'},
      userToken: ''
    }
  })
})(OrderDetails)

export default OrderDetailsHOC
