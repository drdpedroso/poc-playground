import React from 'react'
import graphql from 'react-apollo/graphql'
import { AllOrdersQuery } from './api'
import ReactTable from 'react-table'
import Cookies from 'js-cookie'
import { TableWrapper } from './style'
import get from 'lodash/get'
import { parseUTCDate } from '../../../services/dates'

export class OrdersHistory extends React.PureComponent {
  constructor () {
    super()

    this.state = {
      tableData: []
    }

    this.setData = this.setData.bind(this)
  }

  hasData (orders = []) {
    return orders.length > 0 ? true : false
  }

  setData (tableData) {
    this.setState({tableData})
  }

  componentWillReceiveProps (nextProps) {
    const {hasData, setData} = this
    const {allOrder} = nextProps.allOrders
    return hasData(allOrder) ? setData(allOrder) : null
  }

  render () {
    const {tableData} = this.state
    console.log(tableData)
    const columns = [
      {
        Header: 'Numero',
        accessor: 'orderNumber',
        width: 80
      },
      {
        Header: 'Name',
        accessor: 'customerName'
      },
      {
        Header: 'Email',
        accessor: 'customerEmail'
      },
      {
        Header: 'Rating',
        accessor: 'orderRating',
        width: 90
      },
      {
        Header: 'Date',
        accessor: d => d.orderDate,
        id: 'orderDate',
        width: 100,
        filterable: false,
        Cell: d => (
          <div>
            <span>{parseUTCDate(get(d, 'value'), 'DD/MM/YYYY')}</span>
            <br />
            <span>{parseUTCDate(get(d, 'value'), 'HH:mm')}</span>
          </div>
        )
      },
      {
        Header: 'Tipo',
        accessor: 'deliveryType',
        width: 130
      },
      {
        Header: 'Valor',
        accessor: 'deliveryType',
        width: 130
      },
    ]

    return (
      <React.Fragment>
        <TableWrapper>
          <ReactTable
            data={tableData}
            columns={columns}
          />
        </TableWrapper>
      </React.Fragment>
    )
  }
}

const OrdersHistoryHOC = graphql(AllOrdersQuery, {
  options:
    ({search, skip, first}) => ({
      variables: {
        skip: skip || 0,
        first: first || 300,
        search: search || null,
        userToken: Cookies.get('access_token')
      }
    }),
  name: 'allOrders'
})(OrdersHistory)

export default OrdersHistoryHOC
