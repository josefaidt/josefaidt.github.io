import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../helpers/ThemeContext'

const StyledFooter = styled.footer`
  margin: 0.5rem auto;
  max-width: 600px;

  .footer-container {
    background: linear-gradient(whitesmoke);
    display: flex;
    justify-content: space-between;
  }

  .signature {
    font-size: 0.8rem;
  }

  @media only screen and (max-width: 760px) {
    background-color: whitesmoke;
    position: relative;
    padding: 1rem;
    bottom: 3.8rem;
  }
`

const StyledFooterWrapper = props => {
  const theme = useTheme()
  return <StyledFooter theme={theme} {...props} />
}

export default StyledFooterWrapper
