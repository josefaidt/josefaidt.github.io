import React, { Component } from 'react'
import { Link } from 'gatsby'
import { StyledNav } from './styles/Nav.css'

export default class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = { addClass: false }
  }
  toggle() {
    this.setState({ addClass: !this.state.addClass })
  }
  render() {
    return (
      <StyledNav className="nav">
        <Link activeClassName="active" to="/">
          HOME
        </Link>
        <Link activeClassName="active" to="/about/">
          ABOUT
        </Link>
        <Link activeClassName="active" to="/resume/">
          RESUME
        </Link>
        <Link activeClassName="active" to="/blog/">
          BLOG
        </Link>
      </StyledNav>
    )
  }
}
