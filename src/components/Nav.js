import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledNav = styled.div`
  font-family: 'Josefin Sans';
  font-size: 1.1rem;
  font-weight: 700;
  padding-bottom: 0;
  margin: auto;
  a {
    padding: 0 0.5rem;
  }
  a.active {
    filter: brightness(80%);
    padding-bottom: 1rem;
    border-bottom: 1px solid;
    transition: ease-in 0.3s;
    /* color: black; */
  }
  a:hover {
    filter: brightness(80%);
    padding-bottom: 1rem;
    border-bottom: 1px solid;
    transition: ease 300ms;
    /* color: black; */
  }
`

export default class Nav extends Component {
  render() {
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
        <a href="https://github.com/josefaidt" target="_blank">
          Github ⎆
        </a>
      </StyledNav>
    )
  }
}
