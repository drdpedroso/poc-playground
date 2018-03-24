import React from 'react'
import graphql from 'react-apollo/graphql'
import { AllOrder } from './api'

export class Inventory extends React.PureComponent {
  render () {
    return (
      <div>Leke2222</div>
    )
  }
}

const InventoryHOC = graphql(AllOrder, {
  options: ({filter, userToken}) => ({
    variables: {
      filter: {'status': null, 'deliveryType': 'AGENDAR'},
      userToken: ''
    }
  })
})(Inventory)

export default InventoryHOC
