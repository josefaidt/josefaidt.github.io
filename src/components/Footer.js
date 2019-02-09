import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { GithubIcon, LinkedinIcon, SpotifyIcon } from './icons'
import { StyledFooter } from './styles/Footer.css'

const Footer = ({ children }) => (
  <div>
    {children}
    <StyledFooter className="footer">
      <div className="footer-container">
        <div className="signature">
          &copy; {new Date().getFullYear()}, Built with
          {` `}
          <OutboundLink href="https://www.gatsbyjs.org" target="_blank">
            Gatsby
          </OutboundLink>
        </div>
        <div className="icons">
          <GithubIcon link="https://github.com/josefaidt" />
          <LinkedinIcon link="https://linkedin.com/in/josefaidt" />
          <SpotifyIcon link="https://open.spotify.com/user/1215285465?si=oxVZ8WelTQyZBdr97Tz4fQ" />
        </div>
      </div>
    </StyledFooter>
  </div>
)
export default Footer
