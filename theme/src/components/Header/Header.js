import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { ThemeContext } from 'styled-components'
import PropTypes from 'prop-types'
import { ShortLine } from '../styles/Line'
import { StyledHeader } from './Header.css'

const Header = ({ siteTitle, children }) => {
  const theme = React.useContext(ThemeContext)
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <StyledHeader theme={theme}>
      <div>
        <h1>
          <Link to="/">
            {site.siteMetadata.title}
            {/* <br />
          <span>Full-Stack JavaScript Developer</span> */}
          </Link>
        </h1>
      </div>
      {children}
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
