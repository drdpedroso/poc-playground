import React from 'react'
import graphql from 'react-apollo/graphql'
import { AllOrder } from './api'

class MyOrders extends React.PureComponent {
  render () {
    console.log(JSON.parse(mock))
    return (
      <div>Leke</div>
    )
  }
}

export default graphql(AllOrder, {
  options: ({filter, userToken}) => ({
    variables: {
      filter: {'status': null, 'deliveryType': 'AGENDAR'},
      userToken: ''
    }
  })
})(MyOrders)
