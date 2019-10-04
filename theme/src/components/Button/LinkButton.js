import React from 'react'
import { Link } from 'gatsby'
import styled, { ThemeContext } from 'styled-components'

const StyledLink = styled(Link)`
  padding: 0.5rem 0.5rem;
  padding-top: 0.65rem;
  margin: 0.2rem;
  text-decoration: none;
  line-height: 1rem;
  border-radius: 0.2rem;

  &.active,
  &.active:hover {
    filter: none;
    background-color: ${props => props.theme.main.concat('DF')};
    transition: all 200ms;
    color: white;
  }
  &:hover {
    filter: none;
    background-color: ${props => props.theme.main.concat('DF')};
    transition: all 200ms;
    color: white;
  }
`

const LinkButton = props => {
  const theme = React.useContext(ThemeContext)
  return <StyledLink theme={theme} {...props} />
}

export default LinkButton
