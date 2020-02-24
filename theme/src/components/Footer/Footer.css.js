import React from 'react'
import styled, { ThemeContext } from 'styled-components'

const StyledFooter = styled.footer`
  margin: 0.5rem auto;
  max-width: 600px;

  .footer-container {
    background: ${({ theme }) =>
      `linear-gradient(${theme.colors.background})` || 'linear-gradient(whitesmoke)'};
    display: flex;
    justify-content: space-between;
  }

  .signature {
    font-size: 0.8rem;
  }

  @media only screen and (max-width: 760px) {
    background-color: ${({ theme }) => theme.colors.background || 'whitesmoke'};
    position: relative;
    padding: 1rem;
    bottom: 3.8rem;
  }
`

const StyledFooterWrapper = props => {
  const theme = React.useContext(ThemeContext)
  return <StyledFooter theme={theme} {...props} />
}

export default StyledFooterWrapper
