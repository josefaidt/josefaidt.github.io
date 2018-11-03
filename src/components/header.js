import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

import Home from '../pages/index'
import page2 from '../pages/page-2'

import Navi from './navi'

const Container = styled('div')(props => ({
  background: '#333',
  marginBottom: '1.2rem'
}))

const routes = [Home, page2]

const Header = ({ siteTitle }) => (
  <Container>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}>
          {siteTitle}
        </Link>
      </h1>
      <div style={{ marginRight: 0 }}>
        <Navi routes={routes} />
      </div>
    </div>
  </Container>
)

export default Header
