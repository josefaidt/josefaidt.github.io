import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Header from './Header'
import Footer from './Footer'
import './layout.css'

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  font-family: 'Open Sans';
  font-size: 1rem;
`

// Define what props.theme will look like
export const theme = {
  red: '#D46A6A',
  rouge: '#c6797e',
  black: 'black',
  maxWidth: '1000px'
}

const StyledLayout = styled.div`
  background: white;
  color: #5a535b;
`

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.2rem;
    line-height: 2;
    font-family: 'Open Sans';
  }
  a {
    text-decoration: none;
    color: ${theme.red};
  }
  button {  font-family: 'josefinsans'; }
`

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    <StyledLayout>
      <Header siteTitle="josef.aidt" />
      <Container>
        {children}
        <Footer />
      </Container>
    </StyledLayout>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
