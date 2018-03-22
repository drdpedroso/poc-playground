import React from 'react'
import { MyOrders } from './index'
import renderer from 'react-test-renderer'

describe('MyOrders ', () => {
  it('should render correctly', () => {
    const component = renderer.create(<MyOrders />)
    expect(component).toMatchSnapshot()
  })
})
