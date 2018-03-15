import React, { Component } from 'react'
import { Header, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import styled from 'styled-components'

const SlideBarContent = styled.div`
  min-height: 100vh
`

class SideBarSlideAlong extends Component {
  render () {
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='slide along' width='thin' visible icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <Icon name='home'/>
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad'/>
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera'/>
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>Application Content</Header>
              <SlideBarContent>{this.props.children}</SlideBarContent>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SideBarSlideAlong