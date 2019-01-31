import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import LogRocket from 'logrocket'
import Raven from 'raven-js'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import { GlobalStyle } from './styles/global.css'
import { Container, StyledLayout } from './styles/Layout.css'

if (process.env.NODE_ENV === 'production') {
  LogRocket.init('yf1oeo/josefaidtme')
  Raven.config('https://f7415391f2e94a179beb4083fb8cf296@sentry.io/1377206', {
    environment: 'production',
  }).install()
}

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    <StyledLayout>
      <div className="content">
        <Header siteTitle="josef.aidt">
          {typeof window !== 'undefined' && window.innerWidth >= 760 ? <Nav /> : ''}
        </Header>
        <Container>{children}</Container>
      </div>
      <Footer>{typeof window !== 'undefined' && window.innerWidth >= 760 ? '' : <Nav />}</Footer>
    </StyledLayout>
    {/* <Nav /> */}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
