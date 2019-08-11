import React from 'react'
import PropTypes from 'prop-types'
import { Nav } from '@josef/components'
// import { Header, Footer, Nav } from '@josef/components'
// import { GlobalStyle } from '../style.css'
// import { Container, StyledLayout } from './Skeleton.css'
import { Layout as StyledLayout, Header, Container, Main, Footer } from 'theme-ui'

const Layout = ({ children, pageContext }) => (
  <>
    {/* <GlobalStyle /> */}
    <StyledLayout>
      <Container>
        <Header>
          <p>Testing HEADER</p>
          {/* {typeof window !== 'undefined' && window.innerWidth >= 760 ? <Nav /> : ''} */}
          <Nav />
        </Header>
        <Main>{children}</Main>
      </Container>
      {/* {typeof window !== 'undefined' && window.innerWidth >= 760 ? (
        <Footer />
      ) : isBlog ? (
        <Footer noOffset />
      ) : (
        <Footer>
          <Nav />
        </Footer>
      )} */}
    </StyledLayout>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isBlog: PropTypes.bool,
}

export default Layout
