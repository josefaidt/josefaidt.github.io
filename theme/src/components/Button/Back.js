import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled, { ThemeContext } from 'styled-components'
import LinkButton from './LinkButton'

const StyledLink = styled(LinkButton)`
  border: 2px solid ${props => props.theme.text.concat('df')};
  &:hover,
  &:active,
  &:focus {
    transition: all 0ms;
    border-color: ${props => props.theme.main.concat('DF')};
    background-color: ${props => props.theme.main.concat('DF')};
    color: white;
  }
`

const Button = ({ anchor, text }) => {
  const theme = React.useContext(ThemeContext)
  return (
    <StyledLink to={anchor} theme={theme}>
      <b id="button-text">{text.toUpperCase()}</b>
    </StyledLink>
  )
}

Button.defaultProps = {
  anchor: '#',
  text: 'Back',
}

Button.propTypes = {
  anchor: PropTypes.string.isRequired,
  text: PropTypes.string,
}

export default Button
