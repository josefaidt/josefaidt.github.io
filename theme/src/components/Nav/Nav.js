import React from 'react'
import { Link, useStaticQuery, graphql as gql } from 'gatsby'
import { StyledNav } from './Nav.css'

const Nav = props => {
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
  console.log('NAV ITEMS', navItems)
  return (
    <StyledNav className="nav">
      {navItems.map(({ node: { name, route } }, key) => (
        <Link to={route} key={key}>
          {name.toUpperCase()}
        </Link>
      ))}
    </StyledNav>
  )
}

export default Nav
