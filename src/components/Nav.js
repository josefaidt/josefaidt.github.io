import React, { Component } from 'react'
import { Link } from 'gatsby'
import posed from 'react-pose'
import { StyledNav } from './styles/Nav.css'

const AnimatedLink = posed(Link)({
  pressable: true,
  init: { scale: 1, opacity: 1 },
  press: { scale: 0.8, opacity: 1 },
})

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
        <AnimatedLink activeClassName="active" to="/">
          HOME
        </AnimatedLink>
        <AnimatedLink activeClassName="active" to="/about/">
          ABOUT
        </AnimatedLink>
        <AnimatedLink activeClassName="active" to="/resume/">
          RESUME
        </AnimatedLink>
        <AnimatedLink activeClassName="active" to="/blog/">
          BLOG
        </AnimatedLink>
      </StyledNav>
    )
  }
}
