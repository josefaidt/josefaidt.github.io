import React from 'react'
import { Link } from 'gatsby'
import { ThemeContext } from 'styled-components'
import PropTypes from 'prop-types'
import { ShortLine } from '../styles/Line'
import { StyledHeader } from './Header.css'

const Header = ({ siteTitle, children }) => {
  const theme = React.useContext(ThemeContext)
  return (
    <StyledHeader>
      <div>
        <h1>
          <Link to="/">
            {siteTitle}
            {/* <br />
          <span>Full-Stack JavaScript Developer</span> */}
          </Link>
        </h1>
      </div>
      {children}
      {typeof window !== 'undefined' && window.innerWidth >= 760 ? '' : <ShortLine />}
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

Header.defaultProps = {
  siteTitle: `josefaidt`,
}

export default Header
