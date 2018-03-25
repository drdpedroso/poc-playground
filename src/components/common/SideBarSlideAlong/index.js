import React from 'react'
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { getMenuItems } from '../../../services/menus/menus'
import path from 'ramda/es/path'
import { withRouter } from 'react-router-dom'

const SlideBarContent = styled.div`
  min-height: 100vh
`

export class SideBarSlideAlong extends React.PureComponent {
  constructor (context) {
    super(context)

    this.state = {
      items: []
    }

    this.mountMenuItems = this.mountMenuItems.bind(this)
    this.changeRoute = this.changeRoute.bind(this)
  }

  changeRoute (route) {
    this.setState({items: getMenuItems(route)}, () => {
      console.log(this.state.items)
    })
    this.context.router.history.push(`${route}`)
  }

  mountMenuItems ({item, route, icon, active}, key) {
    return (
      <Menu.Item onClick={() => this.changeRoute(route)}
                 {...{active, key}}>
        {icon && <Icon name={icon} />}
        {item.toUpperCase() || null}
      </Menu.Item>
    )
  }

  componentDidMount () {
    const currentLocation = path(['props', 'location', 'pathname'], this)
    console.log(currentLocation)
    this.setState({items: getMenuItems(currentLocation)})
  }

  render () {
    const {items} = this.state
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='slide along' width='thin' visible icon='labeled' vertical inverted>
            {items && items.map(this.mountMenuItems)}
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <SlideBarContent>
                {this.props.children}
              </SlideBarContent>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

SideBarSlideAlong.propTypes = {
  items: PropTypes.array
}

SideBarSlideAlong.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired
  })
}

export default withRouter(SideBarSlideAlong)
