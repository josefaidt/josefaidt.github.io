import React from 'react'
import { ThemeContext } from 'styled-components'

const useTheme = () => {
  const context = React.useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used inside a ThemeProvider. Check wrapRootElement')
  }
  return context
}

export default useTheme
