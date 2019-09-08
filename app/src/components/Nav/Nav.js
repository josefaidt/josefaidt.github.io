import React, { Component } from 'react'
import { Link, useStaticQuery, graphql as gql } from 'gatsby'
import { StyledNav } from './Nav.css'

const Nav = props => {
  const data = useStaticQuery(gql`
    query NAV_PAGES {
      allFile(filter: { sourceInstanceName: { eq: "pages" } }) {
        edges {
          node {
            name
          }
        }
      }
    }
  `)
  const [activeClass, setActiveClass] = React.useState('HOME')
  const navPages = data.allFile.edges
    .filter(({ node: page }) => page.name !== '404')
    .map(({ node: page }) => {
      if (page.name === 'index') {
        return { name: 'home', path: '/' }
      } else {
        return { name: page.name, path: `/${page.name.toLowerCase()}/` }
      }
    })
  console.log('NAV PAGES', navPages)
  return (
    <StyledNav className="nav">
      {navPages.map(({ name, path }, key) => (
        <Link to={path} key={key}>
          {name.toUpperCase()}
        </Link>
      ))}
    </StyledNav>
  )
}

export default Nav
