import React, { Component } from 'react'
import styled from 'styled-components'
import { theme } from './Meta'
import { GithubIcon, LinkedinIcon, SpotifyIcon } from './icons'

const StyledFooter = styled.footer`
  margin: 0.5rem auto;
  max-width: 600px;
  display: flex;
  justify-content: space-between;

  .icons {
    display: flex;
  }
  .icon a {
    padding: 0 10px;
  }
  .icon svg {
    fill: ${theme.almostblack};
    height: 1.5rem;
  }
  .icon svg:hover {
    fill: ${theme.red};
    transition: ease 0.3s;
    /* stroke: ${theme.black}; */
    /* width: 2rem;
    height: 1.5rem; */
  }
`

const Footer = ({ children }) => (
  <StyledFooter className="footer">
    {children}
    <div className="signature">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
    <div className="icons">
      <GithubIcon link="https://github.com/josefaidt" />
      <LinkedinIcon link="https://linkedin.com/in/josefaidt" />
      <SpotifyIcon link="https://open.spotify.com/user/1215285465?si=oxVZ8WelTQyZBdr97Tz4fQ" />
    </div>
  </StyledFooter>
)
export default Footer
