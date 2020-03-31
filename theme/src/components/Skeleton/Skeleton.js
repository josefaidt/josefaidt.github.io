import React from 'react'
import { Light32, Asleep32 } from '@carbon/icons-react'
import PropTypes from 'prop-types'
import { GlobalStyle } from '../styles/global.css'
import Container from '../styles/Container.css'
import Nav from '../Nav'
import Header from '../Header'
import Footer from '../Footer'
// import { NotificationContainer } from '../Notification'
import { useTheme, useThemeToggle } from '../../helpers/ThemeContext'
import StyledLayout from './Skeleton.css'

const Skeleton = ({ children }) => {
  const theme = useTheme()
  const toggle = useThemeToggle()
  return (
    <>
      <StyledLayout theme={theme}>
        <div className="content">
          <Header>
            <Nav />
            <div onClick={() => toggle()}>
              {/* {theme.colors._current} */}
              {theme.colors._current === 'light' ? <Light32 /> : <Asleep32 />}
            </div>
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
