import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { theme } from './Meta'

const StyledNav = styled.div`
  font-family: 'Josefin Sans';
  font-size: 1.1rem;
  font-weight: 700;
  padding-bottom: 0;
  margin: auto;
  a {
    padding: 0 0.5rem;
  }
  @media (min-width: 760px) {
    a.active,
    a.active:hover {
      filter: brightness(70%);
      padding-bottom: 1rem;
      border-bottom: 0;
    }
    a:hover {
      /* filter: brightness(80%); */
      padding-bottom: 1rem;
      border-bottom: 1px solid;
      transition: ease 300ms;
    }
  }
  a:active {
    filter: brightness(120%);
    transition: ease 100ms;
    border-bottom: 1px solid;
  }
  .screen {
    margin: 0 auto;
    z-index: 1;
    box-shadow: 1px black;
  }

  @media only screen and (max-width: 760px) {
    padding: 1rem 0;
    display: flex;
    /* box-shadow: 0 0 40px 0 ${theme.almostblack}; */
    box-shadow: 0px 0px 40px -10px ${theme.almostblack};
    text-align: center;
    font-size: 1.2rem;
    min-height: 7vh;
    z-index: 10;
    background-color: white;
    width: 100%;
    position: fixed;
    bottom: 0;
    a {
      flex-grow: 1;
    }
  }
`

export default class Nav extends Component {
  constructor(props) {
    super(props)
    // this.watcher =
    this.state = { addClass: false }
  }
  toggle() {
    this.setState({ addClass: !this.state.addClass })
  }
  // isScreen = () => {
  //   const x = window.matchMedia('(max-width: 700px)')
  //   if (x.matches) {
  //     // If media query matches
  //     return true
  //   } else {
  //     return false
  //   }
  // }
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
        <a href="https://github.com/josefaidt" rel="noopener noreferrer" target="_blank">
          Github ⎆
        </a>
      </StyledNav>
    )
  }
}
