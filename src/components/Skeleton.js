import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import LogRocket from 'logrocket'
import Header from './Header'
import Footer from './Footer'
import { theme } from './Meta'
import Nav from './Nav'
import { GlobalStyle } from './global.css'

LogRocket.init('yf1oeo/josefaidtme')

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: space-between; */
  font-family: 'Open Sans';
  font-size: 1rem;

  .centered-image {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
  @media only screen and (max-width: 480px) {
    margin: 0 0.1rem;
  }
`

const StyledLayout = styled.div`
  background: white;
  color: ${theme.almostblack};
  font-family: 'Open Sans';
  font-size: 1rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  /* justify-content: 'space-between'; */
  .footer {
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
  }
  .content {
    flex: 1 0 auto;
    height: 100%;
  }
  @media only screen and (max-width: 760px) {
    .content {
      padding-bottom: 5rem;
    }
  }
  .col2 {
    background-color: red;
  }
`

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
  children: PropTypes.node.isRequired
}

export default Layout
