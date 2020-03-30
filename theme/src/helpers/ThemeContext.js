import React from 'react'
import theme from '../components/theme'
import { GlobalStyle } from '../components/styles/global.css'

const ThemeContext = React.createContext(null)
const ThemeDispatch = React.createContext(null)

const ThemeReducer = ({ state, action }) => {
  switch (action.type) {
    case 'toggle':
      console.log('MADE IT HERE')
      break
    default:
      throw new Error(`Invalid action provided: ${action.type}`)
  }
}

const ThemeProvider = ({ children }) => {
  console.log('BASE THEME IS', theme)
  const [state, dispatch] = React.useReducer(ThemeReducer, theme)
  return (
    <>
      <GlobalStyle theme={theme} />
      <ThemeContext.Provider value={state}>
        <ThemeDispatch.Provider value={dispatch}>{children}</ThemeDispatch.Provider>
      </ThemeContext.Provider>
    </>
  )
}

const useTheme = () => {
  const context = React.useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

const useThemeToggle = () => {
  const context = React.useContext(ThemeDispatch)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  const toggle = () => context({ type: 'toggle' })
  return toggle
}

export { ThemeProvider, useTheme, useThemeToggle }
