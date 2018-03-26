import React from 'react'
import { SideBarSlideAlong } from './index'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

describe('SideBarSlideAlong', () => {
  it('should render correctly', () => {
    const component = renderer.create(<SideBarSlideAlong />)
    expect(component).toMatchSnapshot()
  })
  it('should change route', () => {
    const route = '/orders'
    const router = []
    const context = {
      router: {
        history: {
          push: route => router.push(route)
        }
      }
    }
    const component = shallow(<SideBarSlideAlong />, { context })
    component.instance().changeRoute(route)
    expect(router[0]).toEqual(route)
  })
})
