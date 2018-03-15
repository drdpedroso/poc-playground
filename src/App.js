import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

const App = (props) => {
  return (
    <div>
      {props.children}
      <Link to={'/leke'}>leke</Link>
    </div>
  )
}
export default App
