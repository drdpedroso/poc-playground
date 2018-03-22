import React from 'react'
import {SideBarSlideAlong} from './index'
import renderer from 'react-test-renderer'

describe('SideBarSlideAlong', () => {
  it('should render correctly', () => {
    const component = renderer.create(<SideBarSlideAlong />)
    expect(component).toMatchSnapshot()
  })
})
