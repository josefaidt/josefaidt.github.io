import React from 'react'
import PropTypes from 'prop-types'
import { GlobalStyle } from '../styles/global.css'
import Container from '../styles/Container.css'
import Nav from '../Nav'
import Header from '../Header'
import Footer from '../Footer'
import StyledLayout from './Skeleton.css'

const Skeleton = ({ children }) => (
  <>
    <GlobalStyle />
    <StyledLayout>
      <div className="content">
        <Header siteTitle="josef.aidt">
          <Nav />
        </Header>
        <Container>{children}</Container>
      </div>
      <Footer />
    </StyledLayout>
  </>
)

Skeleton.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Skeleton
