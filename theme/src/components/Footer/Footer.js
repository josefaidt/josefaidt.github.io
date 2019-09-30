import React from 'react'
import StyledFooter from './Footer.css'
import FooterIcons from './Footer.icons'

const Footer = ({ children }) => (
  <>
    <StyledFooter className="footer">
      <div className="footer-container">
        <div className="signature">
          &copy; {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">
            Gatsby
          </a>
        </div>
        <FooterIcons />
      </div>
    </StyledFooter>
  </>
)

export default Footer
