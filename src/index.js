import ReactDOM from 'react-dom'
import React from 'react'
import Routes from './Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import SideBarSlideAlong from './components/common/SideBarSlideAlong'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = new ApolloClient({
  link: new HttpLink({uri: 'https://api.zx-courier.com/graphql'}),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <SideBarSlideAlong>
        <Routes />
      </SideBarSlideAlong>
    </Router>
  </ApolloProvider>
  , document.getElementById('app'))
