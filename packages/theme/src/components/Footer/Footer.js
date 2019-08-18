import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import StyledIcons from '../Icon/Icon.css'
import Icon from '../Icon'
import { StyledFooter } from './Footer.css'

const Footer = ({ children, noOffset }) => (
  <>
    {children}
    <StyledFooter className={`footer ${noOffset ? 'noOffset' : ''}`}>
      <div className="footer-container">
        <div className="signature">
          &copy; {new Date().getFullYear()}, Built with
          {` `}
          <OutboundLink href="https://www.gatsbyjs.org" target="_blank">
            Gatsby
          </OutboundLink>
        </div>
        <StyledIcons iHeight="1.3rem">
          <Icon icon="github" link="https://github.com/josefaidt" />
          <Icon icon="linkedin" link="https://linkedin.com/in/josefaidt" />
          <Icon
            icon="spotify"
            link="https://open.spotify.com/user/1215285465?si=oxVZ8WelTQyZBdr97Tz4fQ"
          />
        </StyledIcons>
      </div>
    </StyledFooter>
  </>
)
export default Footer
