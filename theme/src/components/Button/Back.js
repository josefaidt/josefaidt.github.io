import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import StyledButton from './Back.css'

const Button = ({ anchor, text }) => (
  <Link to={anchor} aria-labelledby="button-text" style={{ textDecoration: 'none' }}>
    <StyledButton>
      <b id="button-text">{text}</b>
    </StyledButton>
  </Link>
)

Button.defaultProps = {
  anchor: '#',
  text: 'Back',
}

Button.propTypes = {
  anchor: PropTypes.string.isRequired,
  text: PropTypes.string,
}

export default Button
