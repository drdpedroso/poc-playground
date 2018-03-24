import React from 'react'
import { OrderDetails } from './index'
import renderer from 'react-test-renderer'

describe('OrderDetails ', () => {
  it('should render correctly', () => {
    const component = renderer.create(<OrderDetails />)
    expect(component).toMatchSnapshot()
  })
})
