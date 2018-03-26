import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import sortBy from 'lodash/sortBy'
import map from 'lodash/map'

const tableData = [
  {orderNumber: '37391804', name: 'Leonardo Cadastro', rating: 1.0, date: '20/10/2017', order: 'R$ 224.92'},
  {orderNumber: '32132122', name: 'Eduardo pedroso', rating: 2.0, date: '20/10/2017', order: 'R$ 229.92'},
  {orderNumber: '37391804', name: 'Leonardo Cadastro', rating: 3.0, date: '20/10/2017', order: 'R$ 224.92'},
  {orderNumber: '37391804', name: 'Leonardo Cadastro', rating: 4.0, date: '20/10/2017', order: 'R$ 224.92'}
]

const tableHeading = [
  'Order Number',
  'Name',
  'Rating',
  'Date',
  'Order'
]

export default class TableExampleSortable extends Component {
  constructor () {
    super()
    this.state = {
      column: null,
      data: tableData,
      direction: null
    }

    this.handleSort = this.handleSort.bind(this)
  }

  handleSort (clickedColumn) {
    const {column, data, direction} = this.state
    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: sortBy(data, [clickedColumn]),
        direction: 'ascending'
      })

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending'
    })
  }

  render () {
    const {column, data, direction} = this.state

    return (
      <Table sortable celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell sorted={column === 'orderNumber' ? direction : null} onClick={() => this.handleSort('orderNumber')}>
              Order Number
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === 'name' ? direction : null} onClick={() => this.handleSort('name')}>
              Name
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === 'rating' ? direction : null} onClick={() => this.handleSort('rating')}>
              Rating
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === 'date' ? direction : null} onClick={() => this.handleSort('date')}>
              Date
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === 'order' ? direction : null} onClick={() => this.handleSort('order')}>
              Order
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {map(data, ({orderNumber, name, rating, date, order}, key) => (
            <Table.Row key={key}>
              <Table.Cell>{orderNumber}</Table.Cell>
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>{rating}</Table.Cell>
              <Table.Cell>{date}</Table.Cell>
              <Table.Cell>{order}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )
  }
}
