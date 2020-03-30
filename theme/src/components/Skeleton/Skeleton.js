import React from 'react'
import PropTypes from 'prop-types'
import { GlobalStyle } from '../styles/global.css'
import Container from '../styles/Container.css'
import Nav from '../Nav'
import Header from '../Header'
import Footer from '../Footer'
// import { NotificationContainer } from '../Notification'
import { useTheme } from '../../helpers/ThemeContext'
import StyledLayout from './Skeleton.css'

const Skeleton = ({ children }) => {
  const theme = useTheme()
  return (
    <>
      <StyledLayout theme={theme}>
        <div className="content">
          <Header>
            <Nav />
          </Header>
          <Container>{children}</Container>
        </div>
        <Footer />
        {/* <NotificationContainer /> */}
      </StyledLayout>
    </>
  )
}

Skeleton.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Skeleton
