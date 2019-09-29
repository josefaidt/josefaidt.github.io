import React from 'react'
import { Link, useStaticQuery, graphql as gql } from 'gatsby'
import { ThemeContext } from 'styled-components'
import { StyledNav } from './Nav.css'

const Nav = props => {
  const theme = React.useContext(ThemeContext)
  const {
    allNavJson: { edges: navItems },
  } = useStaticQuery(gql`
    query NAV_PAGES {
      allNavJson {
        edges {
          node {
            name
            route
          }
        }
      }
    }
  `)
  return (
    <StyledNav className="nav" theme={theme}>
      {navItems.map(({ node: { name, route } }, key) => (
        <Link to={route} key={key}>
          {name.toUpperCase()}
        </Link>
      ))}
    </StyledNav>
  )
}

export default Nav
