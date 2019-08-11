import React from 'react'
import { Link } from 'gatsby'
import { StyledNav } from './Nav.css'

const Nav = props => {
  return (
    <StyledNav>
      <Link activeClassName="active" to="/">
        HOME
      </Link>
      <Link activeClassName="active" to="/about/">
        ABOUT
      </Link>
      <Link activeClassName="active" to="/resume/">
        RESUME
      </Link>
      <Link activeClassName="active" to="/blog/">
        BLOG
      </Link>
    </StyledNav>
  )
}

export default Nav
