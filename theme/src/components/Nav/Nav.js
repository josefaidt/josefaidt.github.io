import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import StyledLink from '../Button/LinkButton'
import { useTheme } from '../../helpers/ThemeContext'
import { StyledNav } from './Nav.css'

const Nav = props => {
  const theme = useTheme()
  const {
    allNavJson: { edges: navItems },
  } = useStaticQuery(graphql`
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
        <StyledLink activeClassName="active" to={route} key={key} partiallyActive={route !== '/'}>
          {name.toUpperCase()}
        </StyledLink>
      ))}
    </StyledNav>
  )
}

export default Nav
