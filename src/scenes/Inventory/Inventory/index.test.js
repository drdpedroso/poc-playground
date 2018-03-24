import React from 'react'
import { Inventory } from './index'
import renderer from 'react-test-renderer'

describe('Inventory ', () => {
  it('should render correctly', () => {
    const component = renderer.create(<Inventory />)
    expect(component).toMatchSnapshot()
  })
})
