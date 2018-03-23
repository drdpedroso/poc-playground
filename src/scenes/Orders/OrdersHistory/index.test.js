import React from 'react'
import {OrdersHistory} from './index'
import renderer from 'react-test-renderer'

describe('OrdersHistory', () => {
  it('should render correctly', () => {
    const component = renderer.create(<OrdersHistory />)
    expect(component).toMatchSnapshot()
  })
})
