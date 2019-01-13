import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledNav = styled.div`
  font-family: 'Josefin Sans';
  font-size: 1.1rem;
  font-weight: 700;
  padding-bottom: 0;
  a {
    padding: 0 0.5rem;
  }
`

export default class Nav extends Component {
  render() {
    return (
      <StyledNav>
        <Link to="/home">HOME</Link>
        <Link to="/about/">ABOUT</Link>
        <Link to="/resume/">RESUME</Link>
        <a href="https://github.com/josefaidt" target="_blank">
          Github ⎆
        </a>
      </StyledNav>
    )
  }
}
