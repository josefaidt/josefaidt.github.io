import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import { GlobalStyle } from './styles/global.css'
import { Container, StyledLayout } from './styles/Layout.css'

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
