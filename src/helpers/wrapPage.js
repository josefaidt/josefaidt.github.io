import React from 'react'
import Transition from 'components/transition'
import PropTypes from 'prop-types'

const theme = {
  red: '#D46A6A',
  red4: '#dc8787',
  rouge: '#c6797e',
  almostblack: '#5a535b',
  maxWidth: '1000px',
}

const ThemeContext = React.createContext(theme)

const wrapPageElement = ({ element, props }) => (
  <ThemeContext.Provider>
    <Transition {...props}>{element}</Transition>
  </ThemeContext.Provider>
)

wrapPageElement.propTypes = {
  element: PropTypes.any,
  props: PropTypes.any,
}

export default wrapPageElement
