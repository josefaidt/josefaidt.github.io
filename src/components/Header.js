import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { ShortLine } from './styles/Line'
import { StyledHeader } from './styles/Header.css'

const Header = ({ siteTitle, children }) => (
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

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: `josefaidt`
}

export default Header
