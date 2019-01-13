import React, { Component } from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
`

const Footer = ({ children }) => (
  <StyledFooter>
    {children}© {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </StyledFooter>
)
export default Footer
