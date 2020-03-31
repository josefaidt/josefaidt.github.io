import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { useTheme } from '../../helpers/ThemeContext'

const StyledMdAnchor = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  transition: filter 0.2s ease;
  &:hover {
    filter: brightness(70%) contrast(80%);
    transition: filter 0.2s ease;
  }
  &:active {
    filter: brightness(70%) contrast(80%);
  }
`
const StyledMdLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  transition: filter 0.2s ease;
  &:hover {
    filter: brightness(70%) contrast(80%);
    transition: filter 0.2s ease;
  }
  &:active {
    filter: brightness(70%) contrast(80%);
  }
`

const MdLink = props => {
  const theme = useTheme()
  if (props.href.startsWith('http')) {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <StyledMdAnchor {...props} theme={theme} />
  } else if (props.href.startsWith('#')) {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a {...props} />
  } else {
    return <StyledMdLink to={props.href} {...props} theme={theme} />
  }
}

export default MdLink
