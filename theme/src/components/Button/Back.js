import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { ThemeContext } from 'styled-components'
import StyledButton from './Back.css'

const Button = ({ anchor, text }) => {
  const theme = React.useContext(ThemeContext)
  return (
    <Link to={anchor} aria-labelledby="button-text" style={{ textDecoration: 'none' }}>
      <StyledButton theme={theme}>
        <b id="button-text">{text}</b>
      </StyledButton>
    </Link>
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
