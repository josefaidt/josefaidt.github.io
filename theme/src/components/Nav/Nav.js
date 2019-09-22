import React, { Component } from 'react'
import { Link, useStaticQuery, graphql as gql } from 'gatsby'
import { path } from 'xstate/lib/utils'
import { StyledNav } from './Nav.css'

const Nav = props => {
  const data = useStaticQuery(gql`
    query NAV_PAGES {
      allMdx {
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const [activeClass, setActiveClass] = React.useState('HOME')
  console.log(data.allMdx.edges)
  const navPages = data.allMdx.edges
    .filter(({ node: page }) => page.frontmatter.title !== '404')
    .reduce((acc, { node: page }) => {
      console.log(page)
    })
  // .map(({ node: page }) => {
  //   if (page.slug === '/') {
  //     return { name: page.frontmatter.title.toUpperCase(), path: page.slug }
  //   } else if (page.split('/') >= 4) {
  //     return { name: page.name, path: `/${page.name.toLowerCase()}/` }
  //   } else {
  //     return null
  //   }
  // })
  console.log('NAV PAGES', navPages)
  return (
    <StyledNav className="nav">
      {/* {navPages.map(({ name, path }, key) => (
        <Link to={path} key={key}>
          {name.toUpperCase()}
        </Link>
      ))} */}
    </StyledNav>
  )
}

export default Nav
