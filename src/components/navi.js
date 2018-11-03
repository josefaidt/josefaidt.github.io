import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import _ from 'lodash'

// const routes = {
//   Home: {
//     component: Home,
//     path: '/'
//   },
//   Signup: {
//     component: page2,
//     path: '/signup'
//   }
// }

const Item = styled('div')(props => ({
  background: props.active ? '#555' : '#333',
  borderBottom: props.active ? '5px solid green' : '5px solid red',
  color: 'white'
}))

const route = items =>
  _.map(items, (page, key) => {
    return (
      <Link to={`/${page}/`} key={key}>
        {page}
      </Link>
    )
  })

const Navi = ({ routes }) => {
  return <div>{route(routes)}</div>
}

export default Navi
