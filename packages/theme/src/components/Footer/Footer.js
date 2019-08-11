import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Footer as StyledFooter } from 'theme-ui'
import { Icon } from '@josef/components'
// import StyledIcons from '../Icon/Icon.css'
// import { StyledFooter } from './Footer.css'

const Footer = ({ children }) => (
  <>
    {children}
    <StyledFooter>
      <div className="footer-container">
        <div className="signature">
          &copy; {new Date().getFullYear()}, Built with
          {` `}
          <OutboundLink href="https://www.gatsbyjs.org" target="_blank">
            Gatsby
          </OutboundLink>
        </div>
        <div>
          <Icon icon="github" link="https://github.com/josefaidt" />
          <Icon icon="linkedin" link="https://linkedin.com/in/josefaidt" />
          <Icon
            icon="spotify"
            link="https://open.spotify.com/user/1215285465?si=oxVZ8WelTQyZBdr97Tz4fQ"
          />
        </div>
      </div>
    </StyledFooter>
  </>
)
export default Footer
