import React from 'react'
import { Link } from 'gatsby'
import styled, { ThemeContext } from 'styled-components'

const StyledLink = styled(Link)`
  padding: 0.5rem 0.5rem;
  padding-top: 0.8rem;
  margin: 0.2rem;
  text-decoration: none;
  line-height: 1rem;
  border-radius: 0.2rem;
  color: ${({ theme }) => theme.colors.primary};

  &.active,
  &.active:hover {
    filter: none;
    background-color: ${({ theme }) => theme.colors.primary.concat('DF')};
    transition: all 200ms;
    color: ${({ theme }) => theme.colors.background};
  }
  &:hover {
    filter: none;
    background-color: ${({ theme }) => theme.colors.primary.concat('DF')};
    transition: all 200ms;
    color: ${({ theme }) => theme.colors.background};
  }
`

const LinkButton = props => {
  const theme = React.useContext(ThemeContext)
  return <StyledLink theme={theme} {...props} />
}

export default LinkButton
