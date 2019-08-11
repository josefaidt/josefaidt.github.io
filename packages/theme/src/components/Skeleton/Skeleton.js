import React from 'react'
import PropTypes from 'prop-types'
import { Header, Footer, Nav } from '@josef/components'
import { GlobalStyle } from '../style.css'
import { Container, StyledLayout } from './Skeleton.css'

const Layout = ({ children, isBlog }) => (
  <div>
    <GlobalStyle />
    <StyledLayout>
      <div className="content">
        <Header siteTitle="josef.aidt">
          {typeof window !== 'undefined' && window.innerWidth >= 760 ? <Nav /> : ''}
        </Header>
        <Container>{children}</Container>
      </div>
      {typeof window !== 'undefined' && window.innerWidth >= 760 ? (
        <Footer />
      ) : isBlog ? (
        <Footer noOffset />
      ) : (
        <Footer>
          <Nav />
        </Footer>
      )}
    </StyledLayout>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isBlog: PropTypes.bool,
}

export default Layout
