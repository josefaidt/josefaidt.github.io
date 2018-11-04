import React from 'react'
import { Link } from 'gatsby'
import { Container } from './nav.css'

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/test">Test</Link>
      </li>
      <li>
        <a href="https://github.com/josefaidt/josefaidt.github.io">GitHub</a>
      </li>
    </ul>
  </Container>
)

export default Nav
