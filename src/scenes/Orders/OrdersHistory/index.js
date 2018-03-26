import React from 'react'
import graphql from 'react-apollo/graphql'
import { AllOrder } from './api'
import TableExampleSortable from '../../../components/common/SortableTable'

export class OrdersHistory extends React.PureComponent {
  render () {
    return (
      <div >
        <TableExampleSortable />
      </div>
    )
  }
}

const OrdersHistoryHOC = graphql(AllOrder, {
  options: ({filter, userToken}) => ({
    variables: {
      filter: {'status': null, 'deliveryType': 'AGENDAR'},
      userToken: ''
    }
  })
})(OrdersHistory)

export default OrdersHistory
