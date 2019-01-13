import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'

const StyledHeader = styled.div`
  margin-bottom: 1.45rem;
  display: flex;
  justify-content: space-between;
  div {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
  }
  div h1 {
    color: red;
    margin: 0;
    font-size: 2.5rem;
    font-family: 'Josefin Sans';
  }

  div h1 a {
    color: darkgrey;
    text-decoration: none;
  }

  .nav {
    align-self: right;
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
    <Nav />
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: `josefaidt|`
}

export default Header
